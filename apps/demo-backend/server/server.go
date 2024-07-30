package server

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/gin-gonic/gin"
	"github.com/tokamak-network/tokamak-thanos/op-chain-ops/genesis"
)

type DevnetBody struct {
	RollupName      string `json:"rollupName"`
	ChainId         uint64 `json:"chainId"`
	AdminAddress    string `json:"adminAddress"`
	SequecerAddress string `json:"sequencerAddress"`
	BatcherAddress  string `json:"batcherAddress"`
	ProposerAddress string `json:"proposerAddress"`
}

type RequestDeployConfig struct {
	RollupName string `json:"rollupName"`
}

func StartServer() {
	r := gin.Default()
	r.POST("/deploy-config", func(c *gin.Context) {
		var body DevnetBody

		if err := c.BindJSON(&body); err != nil {
			log.Print("error deploy-config")
		}

		deployConfig, err := MakeDeployConfig(body)
		if err != nil {
			log.Print("error make deployConfig ")
		}

		c.IndentedJSON(http.StatusCreated, deployConfig)
	})

	r.GET("/deploy-config/:rollupName", func(c *gin.Context) {
		rollupName := c.Param("rollupName")

		deployConfig, err := GetDeployConfig(rollupName)
		if err != nil {
			log.Print("error get deployConfig ")
		}

		c.IndentedJSON(http.StatusOK, deployConfig)
	})

	http.ListenAndServe(":3030", r)
}

func MakeDeployConfig(body DevnetBody) (*genesis.DeployConfig, error) {
	data, err := os.ReadFile("deploy-config/devnet-template.json")
	if err != nil {
		return nil, err
	}

	fmt.Println(body)

	var template genesis.DeployConfig

	err = json.Unmarshal(data, &template)
	if err != nil {
		return nil, err
	}

	template.L2ChainID = body.ChainId

	template.FinalSystemOwner = common.HexToAddress(body.AdminAddress)
	template.SuperchainConfigGuardian = common.HexToAddress(body.AdminAddress)
	template.L2OutputOracleChallenger = common.HexToAddress(body.AdminAddress)
	template.ProxyAdminOwner = common.HexToAddress(body.AdminAddress)
	template.BaseFeeVaultRecipient = common.HexToAddress(body.AdminAddress)
	template.L1FeeVaultRecipient = common.HexToAddress(body.AdminAddress)
	template.SequencerFeeVaultRecipient = common.HexToAddress(body.AdminAddress)
	template.GovernanceTokenOwner = common.HexToAddress(body.AdminAddress)

	template.P2PSequencerAddress = common.HexToAddress(body.SequecerAddress)

	template.BatchSenderAddress = common.HexToAddress(body.BatcherAddress)

	template.L2OutputOracleProposer = common.HexToAddress(body.ProposerAddress)

	template.L1GenesisBlockTimestamp = hexutil.Uint64(time.Now().Unix())

	deployConfig, _ := json.Marshal(template)
	os.WriteFile(fmt.Sprintf("temp-db/%s.json", body.RollupName), deployConfig, 0644)

	return &template, nil
}

func GetDeployConfig(rollupName string) (*genesis.DeployConfig, error) {
	data, _ := os.ReadFile(fmt.Sprintf("temp-db/%s.json", rollupName))

	var deployConfig genesis.DeployConfig

	err := json.Unmarshal(data, &deployConfig)
	if err != nil {
		return nil, err
	}

	return &deployConfig, nil
}
