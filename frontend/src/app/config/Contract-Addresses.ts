export type Address0x = `0x${string}`;

export type AvailableChains =
  | "avalancheFuji"
  | "baseGoerli"
  | "polygonZkevmTestnet";

// export type AddressByChain = {
//   [K in AvailableChains]: typeof contractAddresses;
// };

export const contractAddressesByChain = {
  baseGoerli: {
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
  //todo
  avalancheFuji: {
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
