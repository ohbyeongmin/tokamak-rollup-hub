package main

import (
	"log"
	"os"

	"github.com/ohbyeongmin/tokamak-rollup-hub/apps/demo-backend/server"
	"github.com/urfave/cli/v2"
)

func main() {
	app := &cli.App{
		Commands: []*cli.Command{
			{
				Name:  "start",
				Usage: "start demo",
				Flags: []cli.Flag{
					&cli.UintFlag{
						Name:  "demo-version",
						Value: 1,
						Usage: "switch version",
					},
				},
				Action: func(ctx *cli.Context) error {
					server.StartServer()
					return nil
				},
			},
		},
	}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
