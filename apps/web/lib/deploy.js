export const rollups = [
  {
    type: "op",
    isActive: true,
    description:
      "Customized L2 stack built on Optimism, which offers fast and affordable computation and state updates by using optimistic rollup. Along with Optimism’s capabilities, this stack also includes a flexible transaction fee to enhance the user experience.",
    docsUrl: "",
    superScript: ["OP", "text-optimism-red"],
  },
  {
    type: "zk",
    isActive: false,
    description:
      "Cutting-edge virtual machine for L2, designed to work with ZKSNARKS. It supports a previously unseen L2 rollup architecture that reduces computational complexity without compromising security or privacy.",
    docsUrl: "",
    superScript: ["ZK+", "text-zeroknowledge-green"],
  },
];

export const environments = [
  {
    type: "op",
    description: "Choose an environment to create your own rollups. Thanos Sepolia testnet and mainnet are supported.",
    cards: [
      {
        type: "devnet",
        title: "Devnet",
        description: "Deploy on devnet where you can run it in your local environment. It can be used during development and allows you to experiment before deploying to testnet or mainnet.",
        isActive: true,
      },
      {
        type: "testnet",
        title: "Testnet",
        description: "The Thanos Testnet is a test-only network built with the same environment as the mainnet so that you can risk-free test your applications and smart contracts before deploying them to the mainnet environment.",
        isActive: false,
      },
      {
        type: "mainnet",
        title: "Mainnet",
        description: "Thanos Mainnet is an innovative L2 solution that inherits the security of Ethereum while enabling fast and secure blockchain services.",
        isActive: false,
      }
    ]
  },
  {
    type: "zk",
    description: "zk description",
    cards: [
      {
        title: "test1",
        description: "test1 des",
        isActive: true,
      },
      {
        title: "test2",
        description: "test2 des",
        isActive: true,
      },
      {
        title: "test3",
        description: "test3 des",
        isActive: false,
      },
    ]
  }
]

export const details = [
  {
    type: "op",
    description: "Enter the information required for your own rollup.\nIf you're looking for more information on each of these items, check out these",
    networks: [
      {
        type: "devnet",
      },
      {
        type: "testnet",
      },
      {
        type: "mainnet",
      }
    ]
  }
]
