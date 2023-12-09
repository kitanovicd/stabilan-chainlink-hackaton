export type Address0x = `0x${string}`;

interface ContractAddresses {
  USC: Address0x;
  CHI: Address0x;
  USC_ETH_LP: Address0x;
  CHI_ETH_LP: Address0x;
  ETH_USD_oracle: Address0x;
  stETH_USD_oracle: Address0x;
  USC_USD_oracle: Address0x;
  CHI_USD_oracle: Address0x;
  PriceFeedAggregator: Address0x;
  ChiStaking: Address0x;
  ChiLocking: Address0x;
  ChiVesting: Address0x;
  USCStaking: Address0x;
  ReserveHolder: Address0x;
  RewardController: Address0x;
  TimeWeightedBonding: Address0x;
  Arbitrage: Address0x;
  veCHI: Address0x;
  WETH: Address0x;
  ETH_ADDRESS: Address0x;
  stETH: Address0x;
  Uniswapv2Router: Address0x;
  DataProvider: Address0x;
  OCHI: Address0x;
  USC_ETH_LP_rewards: Address0x;
  CHI_ETH_LP_rewards: Address0x;
  USC_ETH_LP_Staking: Address0x;
  CHI_ETH_LP_Staking: Address0x;
  UniswapV2TwapOracle: Address0x;
  IDO: Address0x;
  TestpageHelper: Address0x;
  // lpRewards: Address0x;
}

export const contractAddresses: ContractAddresses = {
  USC: "0x816D97bCa4EAdeE507436599be19c3f9D94f3112",
  CHI: "0x8A1e2Ee1456D17C68f36C802D4864609155F95c0",
  USC_ETH_LP: "0xbb0A8C387b150E3152CA6aF5fB8EeC9782fDAbaF",
  CHI_ETH_LP: "0x49b1Bc3Aa3fCCFB2C75d15F3b1b8CFCC269c2550",
  ETH_USD_oracle: "0x828B33261E72e8582600bD3ed58F5FB64024BBec",
  stETH_USD_oracle: "0x4586F01442572585481e7ff30d0842681f605CFD",
  USC_USD_oracle: "0x9dbac3DDBC8851E6508B6860144584DFC69416fE",
  CHI_USD_oracle: "0x5846648007513E88300cD8AEba0Ad6a9E597C9B6",
  PriceFeedAggregator: "0x7428e2d3675DC00D41b6615aF5A911723831A38C",
  ChiStaking: "0xa742D5a1Fa1Fd18c8C947b07256B75488F8513F6",
  ChiLocking: "0x10fD1cC7C8E4c87a44AD3D9CF77f98AAecD3d3DB",
  USC_ETH_LP_Staking: "0xAB358b430CA018CaBD1f48637544d455E44e0a67",
  CHI_ETH_LP_Staking: "0x4b5Feb5A1AaAfc7Aa3ba0b1960f80e7c70baf784",
  ChiVesting: "0xE5837610bFcAFdFe153Ae20b709044c33189ae39",
  USCStaking: "0x5E04AA83D821C4830EB9B170C4720CD47DeAA967",
  ReserveHolder: "0xAA7581642Daf2f19d4c35eF96583522ddf5aAC22",
  RewardController: "0x24bb23d3333bb3220aCEE4bc2FC486003ca512a1",
  USC_ETH_LP_rewards: "0x9099B0C6f35c8Fc1BaF4635A594D89FEfc843CBE",
  CHI_ETH_LP_rewards: "0xeFD08D9508092Bf1C5e801Dc22E51FDE43d886F0",
  OCHI: "0x541D29B3e0A4A64389aB66d2c807Dcb5e2CB873E",
  TimeWeightedBonding: "0x28D661531B26C364E45c9fbc67607cccD58733e7",
  IDO: "0xAd1f60ac66B1914863FCfdb4ACC1275f6a1F2a18",
  Arbitrage: "0x174243d312492d813B3d2A72416Ad375Cb3Ff3E5",
  veCHI: "0x7E75c12E621F60DeF2d317322668d5B6C5378da5",
  DataProvider: "0x23D6318a3835e4Dc3122A9b12A2Ce59F83B85E7E",
  TestpageHelper: "0x878442E3Ae49C73aE0BE2C319Da9194Ee03fc2c7",
  // common
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  ETH_ADDRESS: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  stETH: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
  Uniswapv2Router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  UniswapV2TwapOracle: "0xedAeDD22e653c504ff6806bf61664292848eB26e",
};

export type AvailableChains = "sepolia" | "base" | "polygonZkevmTestnet";

// export type AddressByChain = {
//   [K in AvailableChains]: typeof contractAddresses;
// };

export const contractAddressesByChain = {
  sepolia: {
    ...contractAddresses,
    PriceFeedAggregator:
      "0x48AC85A71Cb5E1384A365fFf3D5f717B4eD411d0" as Address0x,
    USDC: "0xA43D0B09A636DffB998d824b62117b83523289e6" as Address0x,
    USDCPriceFeed: "0x343b8557F7dd059b668cbC5726Aa9257D5494CbC" as Address0x,
    USDT: "0x9A0d06D999EED048700a9D2d7A39B47868905461" as Address0x,
    USDTPriceFeed: "0x89369f1B135b13b625EdD4882f41A8a66892c958" as Address0x,
    DAI: "0xD7e2b15E06C571155093257D08636b96bB8B1222" as Address0x,
    DaiPriceFeed: "0x7117e2E8fb018D96C74Fa6D50dE717F6814A6A5E" as Address0x,
    TokenFactory: "0x7E7D664e738412f5005D5e217D1318a60Ac442b6" as Address0x,
    StabilanCore: "0xfdf2bF3688F0AF7B0Baef04afde43FBC72530b7f" as Address0x,
  },
  base: {
    ...contractAddresses,
    TokenFactory: "0x48AC85A71Cb5E1384A365fFf3D5f717B4eD411d0" as Address0x,
    PriceFeedAggregator:
      "0xA43D0B09A636DffB998d824b62117b83523289e6" as Address0x,
    StabilanCore: "0xd91403135D10F770A60147Ab32BcE845F08caeBf" as Address0x,
    DataProvider: "0x343b8557F7dd059b668cbC5726Aa9257D5494CbC" as Address0x,
    INSRD: "0xa61c1F4f1d550D1A25107F4241714bc0823Bf05c" as Address0x,
    INSRDPriceFeed: "0x03CdF0973CE7A62d097651F16F4a27764f1491fc" as Address0x,
    InsurancePlugin: "0xf66423533d8bA9ce2ACDf2F5F07F4fb9106e9AFb" as Address0x,
    USDC: "0xD7e2b15E06C571155093257D08636b96bB8B1222" as Address0x,
    USDCPriceFeed: "0x7117e2E8fb018D96C74Fa6D50dE717F6814A6A5E" as Address0x,
    USDT: "0xc055C513c798951053B1a0c218601ee08AB01034" as Address0x,
    USDTPriceFeed: "0xe16C522d5282A911ae2491c725700A5f42FE7EEF" as Address0x,
    WETH: "0x7E7D664e738412f5005D5e217D1318a60Ac442b6" as Address0x,
    WETHPriceFeed: "0xB7b006e8bDe998206C72a9aB456495b1998D42E0" as Address0x,
    WBTC: "0x6A4aCb742600FE0Be6c5aC1Bb640548525396042" as Address0x,
    WBTCPriceFeed: "0x4dA8F880623973392D337c88460992b33FDA22C8" as Address0x,
    GHO: "0xe862D0574355bD492cf2A4c6C9E6c66dC28d4D8f" as Address0x, // unchanged
    GHOPriceFeed: "0x33D572F7Dc6FA6dEe50C69E94821501481803560" as Address0x, // unchanged
  },
  polygonZkevmTestnet: {
    ...contractAddresses,
    PriceFeedAggregator:
      "0x33a6C9d81E5324544A3d6c41CBedB65091ba0665" as Address0x,
    USDC: "0x55eF0864304a361D33c7c0a0083D153b2D26a7A9" as Address0x,
    USDCPriceFeed: "0x419102Ee2543edf30B07705CAEF7af0889926cfD" as Address0x,
    USDT: "0x49EF20e300925210def18fADaeb48635590Bc1Ee" as Address0x,
    USDTPriceFeed: "0x1C2721DCF3288A90dF78B33D25Fb7cE2D4527E6c" as Address0x,
    DAI: "0xc3f6c94aCE6e75677aDDe13c8B41660BC4701A0B" as Address0x, // unchanged
    DAIPriceFeed: "0x363053a56beFDA5c2fe15D8C27A887d3cCfB00c3" as Address0x, // unchanged
    WETH: "0x54A76081217A3FCD8E98bf405B38134Ba6353C2A" as Address0x,
    WETHPriceFeed: "0x45aC55F407c73a4CCB852a900ccfceCA2a7e5353" as Address0x,
    wBTC: "0x05C81b196AE4a8777C7eC101DfCCB156C17De6Fd" as Address0x,
    wBTCPriceFeed: "0x14f3C97C35CFad5E4a0a584842414030dcF3C9c0" as Address0x,
    TokenFactory: "0x683B20dFB3FBA67E3c80fbF4EE7BaCe26F45d719" as Address0x,
    StabilanCore: "0xc7253058832346174170609fF60a25787Db20087" as Address0x,
    DataProvider: "0x701bb47110870e256e8cF227Ecd16B91a4865547" as Address0x,
    INSRD: "0x24026186C7Cc7741982543764a54cA3bBbDD9C0e" as Address0x,
    INSRDPriceFeed: "0x5F8bC1976DcC59c44BBd8Afd8FC260b6A32131B1" as Address0x,
    InsurancePlugin: "0x6c302554Ef2A882d982b740d985Dc5EdF8635eC9" as Address0x,
    GHO: "0xe862D0574355bD492cf2A4c6C9E6c66dC28d4D8f" as Address0x, // unchanged
    GHOPriceFeed: "0x33D572F7Dc6FA6dEe50C69E94821501481803560" as Address0x, // unchanged
  },
};
