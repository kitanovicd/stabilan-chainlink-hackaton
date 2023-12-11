# Stabilan

Stabilan is a Decentralized Trustless Insurance Protocol developed during the Constellation: A Chainlink Hackathon.<br/>
<br/>
We present a use case where users can protect their assets from price crashes or stablecoins from depegging.<br/>

**DEMO**: https://stabilan-chainlink-hackaton.vercel.app/

**VIDEO:** https://vimeo.com/893190221

# What is the Stabilan Protocol?

The protocol acts as a matchmaking pool between Asset Backers (risk takers) and users who are purchasing insurance.<br/>
<br/>
Insurance is represented as a put option with a predetermined strike price and duration chosen by the insuree.<br/>
<br/>
The Stabilan Protocol ensures that all insurances are always fully collateralized and solvent.<br/>
<br/>
Insurees are guaranteed to always be able to sell their options for the strike price and receive that value in the collateral asset.<br/>

# How It Works
Backers choose an asset to back, the amount of collateral to provide, and the duration (in months) for how long they will back the asset.<br/><br/>
Insurees select an asset for which they want to be insured, the asset amount, and the duration (in months) of the insurance.<br/><br/>
Insurees pay a premium, which is calculated based on the current utilization of the pool (similar to variable rates in Lending protocols). The entire premium is split between Backers as a reward and automatically staked as new collateral.<br/><br/>
<br/>
Insurees receive option tokens in their wallet, which are liquid and transferable. Backers also receive backing tokens in their wallet, which are transferable, giving them the option to sell their position while keeping a portion of the premiums earned up to that point.<br/>
<br/>
Insurees can exercise their options at any time before the expiration date. They burn the option token, send the desired amount of the asset to the protocol, and receive back the collateral valued at the predetermined strike price of the token.<br/>
<br/>
When the backing period expires, backers can collect all earned premiums during their backing duration, as well as assets obtained when options are executed.<br/>
<br/>
The price of the collateral asset is obtained from the Chainlink oracles.<br/>
<br/>
Backers gets DAO tokens on each backing of an asset, which they can use to vote on protocol changes, such as new asset listing and asset parameters (strike price and expected APY which defines the cost function of the insurance premiums).

# Main Features
- **Trustless and Decentralized**
  - All smart contracts are open-sourced and verified on the blockchain. There are no owners of the protocol, and no one takes fees, besides Backers who provide liquidity.
- **Full Solvency, No Commission, No Jury**
  - Insurees are always able to execute their options at the strike price. There is no condition other than the expiration date.
- **Fair Insurance Price**
  - The price is calculated based on the current utilization of the collateral. If utilization is low, the insurance price is low, encouraging users to buy it and giving the opportunity to resell for a higher price. If utilization is high, indicating high demand, there is an opportunity for Backers to provide more collateral, earning more rewards.
- **Maximal Collateral Usage**
  - The premium paid by users is given in the collateral token and automatically staked to cover new insurances.
- **Asset Agnostic**
  - The protocol works with any ERC20 token. It will be up to the DAO to determine the risk of an asset, which will determine the striking price.
- **DAO Governance**
  - Protocol is fully owned by the DAO, utilizing the STB_DAO tokens which can be obtained by backing assets. There are no other protocol owners, and DAO has the power to change asset parameters or to add new assets.

## Technical Details

### Smart Contracts

Smart Contracts are deployed on the Polygon zkEVM testnet, Avalanche Fuji testnet and Base Goerli testnet.<br/>





