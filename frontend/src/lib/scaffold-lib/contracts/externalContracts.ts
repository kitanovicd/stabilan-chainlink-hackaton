import { GenericContractsDeclaration } from "../utils/scaffold-eth/contract-types";

import {
  contractAddresses,
  contractAddressesByChain,
} from "app/config/Contract-Addresses";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *      address: "0x...",
 *      abi: [...],
 *    }
 * } as const;
 */
const externalContracts = {
  1442: {
    ERC20: {
      address: contractAddresses.ETH_ADDRESS,
      abi: [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [
            {
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              name: "_spender",
              type: "address",
            },
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              name: "_from",
              type: "address",
            },
            {
              name: "_to",
              type: "address",
            },
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [
            {
              name: "",
              type: "uint8",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "_owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              name: "balance",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [
            {
              name: "",
              type: "string",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address",
            },
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            {
              name: "_owner",
              type: "address",
            },
            {
              name: "_spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              name: "",
              type: "uint256",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          payable: true,
          stateMutability: "payable",
          type: "fallback",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
      ],
    },
    ETH: {
      address: contractAddresses.ETH_ADDRESS,
      abi: [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "guy", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "src", type: "address" },
            { name: "dst", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "wad", type: "uint256" }],
          name: "withdraw",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "dst", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "deposit",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        { payable: true, stateMutability: "payable", type: "fallback" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "src", type: "address" },
            { indexed: true, name: "guy", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "src", type: "address" },
            { indexed: true, name: "dst", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "dst", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Deposit",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "src", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Withdrawal",
          type: "event",
        },
      ],
    },
    CHI: {
      address: contractAddresses.CHI,
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "initialSupply",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_caller",
              type: "address",
            },
          ],
          name: "NotMinter",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAddress",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "_account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "_status",
              type: "bool",
            },
          ],
          name: "UpdateMinter",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "burnFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "isMinter",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          name: "updateMinter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    ReserveHolder: {
      address: contractAddresses.ReserveHolder,
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "EtherSendFailed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address",
            },
          ],
          name: "NotArbitrager",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address",
            },
          ],
          name: "NotClaimer",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_threshold",
              type: "uint256",
            },
          ],
          name: "ThresholdTooHigh",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "ClaimRewards",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Deposit",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "ethAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "stEthAmount",
              type: "uint256",
            },
          ],
          name: "Rebalance",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Receive",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Redeem",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "ethAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "stEthAmount",
              type: "uint256",
            },
          ],
          name: "RedeemSwap",
          type: "event",
        },
        {
          inputs: [],
          name: "BASE_PRICE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAX_PERCENTAGE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "WETH",
          outputs: [
            {
              internalType: "contract IWETH",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "claimRewards",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimer",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "ethThreshold",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getCumulativeRewards",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getCurrentRewards",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getReserveValue",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getWETH",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IPriceFeedAggregator",
              name: "_priceFeedAggregator",
              type: "address",
            },
            {
              internalType: "address",
              name: "_claimer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_ethThreshold",
              type: "uint256",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "isArbitrager",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "priceFeedAggregator",
          outputs: [
            {
              internalType: "contract IPriceFeedAggregator",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rebalance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "redeem",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "arbitrager",
              type: "address",
            },
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          name: "setArbitrager",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_claimer",
              type: "address",
            },
          ],
          name: "setClaimer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_ethThreshold",
              type: "uint256",
            },
          ],
          name: "setEthThreshold",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_swapEthTolerance",
              type: "uint256",
            },
          ],
          name: "setSwapEthTolerance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "stETH",
          outputs: [
            {
              internalType: "contract ISTETH",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "swapEthTolerance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalClaimed",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalStEthDeposited",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "uniswapPair",
          outputs: [
            {
              internalType: "contract IUniswapV2Pair",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "uniswapRouter",
          outputs: [
            {
              internalType: "contract IUniswapV2Router02",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    USC: {
      address: contractAddresses.USC,
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_caller",
              type: "address",
            },
          ],
          name: "NotMinter",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAddress",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "_account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "_status",
              type: "bool",
            },
          ],
          name: "UpdateMinter",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "burnFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "isMinter",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          name: "updateMinter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    Arbitrage: {
      address: contractAddresses.Arbitrage,
      abi: [
        {
          inputs: [
            {
              internalType: "contract IArbitrageERC20",
              name: "_USC",
              type: "address",
            },
            {
              internalType: "contract IArbitrageERC20",
              name: "_CHI",
              type: "address",
            },
            {
              internalType: "contract IRewardController",
              name: "_rewardController",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "_priceFeedAggregator",
              type: "address",
            },
            {
              internalType: "contract IReserveHolder",
              name: "_reserveHolder",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "deltaETH",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "receivedETH",
              type: "uint256",
            },
          ],
          name: "DeltaBiggerThanAmountReceivedETH",
          type: "error",
        },
        {
          inputs: [],
          name: "PriceSlippageTooBig",
          type: "error",
        },
        {
          inputs: [],
          name: "PricesAreNotCompatibile",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint16",
              name: "_tolerance",
              type: "uint16",
            },
          ],
          name: "ToleranceTooBig",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "arbNum",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "deltaUsd",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "reserveDiff",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "ethPrice",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "rewardValue",
              type: "uint256",
            },
          ],
          name: "ExecuteArbitrage",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "uscAmount",
              type: "uint256",
            },
          ],
          name: "Mint",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "BASE_PRICE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "CHI",
          outputs: [
            {
              internalType: "contract IArbitrageERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "EQ_PRICE_DELTA",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAX_FEE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAX_PRICE_TOLERANCE",
          outputs: [
            {
              internalType: "uint16",
              name: "",
              type: "uint16",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "POOL_FEE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "STETH",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "USC",
          outputs: [
            {
              internalType: "contract IArbitrageERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "USC_TARGET_PRICE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "WETH",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "reserveIn",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "priceIn",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveOut",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "priceOut",
              type: "uint256",
            },
          ],
          name: "_calculateDelta",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "ethPrice",
              type: "uint256",
            },
          ],
          name: "_calculateDeltaETH",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "ethPrice",
              type: "uint256",
            },
          ],
          name: "_calculateDeltaUSC",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "_getReservesData",
          outputs: [
            {
              internalType: "bool",
              name: "isExcessOfReserves",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "reserveDiff",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveValue",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "executeArbitrage",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getArbitrageData",
          outputs: [
            {
              internalType: "bool",
              name: "isPriceAboveTarget",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isExcessOfReserves",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "reserveDiff",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "discount",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "maxMintPriceDiff",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "stETHAmount",
              type: "uint256",
            },
          ],
          name: "mintWithStETH",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "wethAmount",
              type: "uint256",
            },
          ],
          name: "mintWithWETH",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "poolFactory",
          outputs: [
            {
              internalType: "contract IUniswapV2Factory",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "priceFeedAggregator",
          outputs: [
            {
              internalType: "contract IPriceFeedAggregator",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "priceTolerance",
          outputs: [
            {
              internalType: "uint16",
              name: "",
              type: "uint16",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "reserveHolder",
          outputs: [
            {
              internalType: "contract IReserveHolder",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rewardController",
          outputs: [
            {
              internalType: "contract IRewardController",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_maxMintPriceDiff",
              type: "uint256",
            },
          ],
          name: "setMaxMintPriceDiff",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint16",
              name: "_priceTolerance",
              type: "uint16",
            },
          ],
          name: "setPriceTolerance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "swapRouter",
          outputs: [
            {
              internalType: "contract IUniswapV2Router02",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "uscEthPool",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    PriceFeedAggregator: {
      address: contractAddresses.PriceFeedAggregator,
      abi: [
        {
          inputs: [],
          name: "ZeroAddress",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "base",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "feed",
              type: "address",
            },
          ],
          name: "SetPriceFeed",
          type: "event",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "base",
              type: "address",
            },
          ],
          name: "peek",
          outputs: [
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "asset",
              type: "address",
            },
          ],
          name: "priceFeeds",
          outputs: [
            {
              internalType: "contract IOracle",
              name: "oracle",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "base",
              type: "address",
            },
            {
              internalType: "address",
              name: "feed",
              type: "address",
            },
          ],
          name: "setPriceFeed",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    USCStaking: {
      address: contractAddresses.USCStaking,
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "stakedBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "AmountBelowStakedBalance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "duration",
              type: "uint256",
            },
          ],
          name: "InvalidDuration",
          type: "error",
        },
        {
          inputs: [],
          name: "NotClaimable",
          type: "error",
        },
        {
          inputs: [],
          name: "NotRewardController",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "ClaimStETH",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "ClaimUSCRewards",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "duration",
              type: "uint256",
            },
          ],
          name: "LockChi",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Stake",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Unstake",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "epoch",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "chiEmissions",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "uscRewards",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "stETHrewards",
              type: "uint256",
            },
          ],
          name: "UpdateEpoch",
          type: "event",
        },
        {
          inputs: [],
          name: "MAX_LOCK_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MIN_LOCK_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "enum IStakingWithEpochs.RewardToken",
              name: "token",
              type: "uint8",
            },
          ],
          name: "_getCurrentReward",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chi",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiAmountFromEmissions",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiLockingContract",
          outputs: [
            {
              internalType: "contract IChiLocking",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "claimStETH",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "claimUSCRewards",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "currentEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "epochs",
          outputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "epoch",
              type: "uint256",
            },
            {
              internalType: "enum IStakingWithEpochs.RewardToken",
              name: "token",
              type: "uint8",
            },
          ],
          name: "getCumulativeRewardsPerShare",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getStakedChi",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "enum IStakingWithEpochs.RewardToken",
              name: "token",
              type: "uint8",
            },
          ],
          name: "getUnclaimedRewards",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_usc",
              type: "address",
            },
            {
              internalType: "contract IERC20",
              name: "_chi",
              type: "address",
            },
            {
              internalType: "contract IChiLocking",
              name: "_chiLockingContract",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "duration",
              type: "uint256",
            },
          ],
          name: "lockChi",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "rewardController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_rewardController",
              type: "address",
            },
          ],
          name: "setRewardController",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "stake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "stakeToken",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "stakes",
          outputs: [
            {
              internalType: "uint256",
              name: "lastUpdatedEpoch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "addSharesNextEpoch",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "unclaimedStETHAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "unstake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chiEmissions",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "uscRewards",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "stETHrewards",
              type: "uint256",
            },
          ],
          name: "updateEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    ChiStaking: {
      address: contractAddresses.ChiStaking,
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "stakedBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "AmountBelowStakedBalance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "duration",
              type: "uint256",
            },
          ],
          name: "InvalidDuration",
          type: "error",
        },
        {
          inputs: [],
          name: "NotRewardController",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "ClaimStETH",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "duration",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "useStakedTokens",
              type: "bool",
            },
          ],
          name: "Lock",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Stake",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Unstake",
          type: "event",
        },
        {
          inputs: [],
          name: "MAX_LOCK_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MIN_LOCK_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "enum IStakingWithEpochs.RewardToken",
              name: "token",
              type: "uint8",
            },
          ],
          name: "_getCurrentReward",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiLocking",
          outputs: [
            {
              internalType: "contract IChiLocking",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "claimStETH",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "currentEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "epochs",
          outputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "epoch",
              type: "uint256",
            },
            {
              internalType: "enum IStakingWithEpochs.RewardToken",
              name: "token",
              type: "uint8",
            },
          ],
          name: "getCumulativeRewardsPerShare",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getStakedChi",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "enum IStakingWithEpochs.RewardToken",
              name: "token",
              type: "uint8",
            },
          ],
          name: "getUnclaimedRewards",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_chiAddress",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "duration",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "useStakedTokens",
              type: "bool",
            },
          ],
          name: "lock",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "rewardController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IChiLocking",
              name: "_chiLocking",
              type: "address",
            },
          ],
          name: "setChiLocking",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_rewardController",
              type: "address",
            },
          ],
          name: "setRewardController",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "stake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "stakeToken",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "stakes",
          outputs: [
            {
              internalType: "uint256",
              name: "lastUpdatedEpoch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "addSharesNextEpoch",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "unclaimedStETHAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "unstake",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "stETHrewards",
              type: "uint256",
            },
          ],
          name: "updateEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    RewardController: {
      address: contractAddresses.RewardController,
      abi: [
        {
          inputs: [],
          name: "EpochNotFinished",
          type: "error",
        },
        {
          inputs: [],
          name: "NotArbitrager",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "ClaimStEth",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "RewardUSC",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "arbitrager",
              type: "address",
            },
          ],
          name: "SetArbitrager",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chiIncentivesPerEpoch",
              type: "uint256",
            },
          ],
          name: "SetChiIncentivesPerEpoch",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "epoch",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "totalStEthReward",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "totalChiIncentives",
              type: "uint256",
            },
          ],
          name: "UpdateEpoch",
          type: "event",
        },
        {
          inputs: [],
          name: "EPOCH_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "arbitrager",
          outputs: [
            {
              internalType: "contract IArbitrage",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chi",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiEthLPStaking",
          outputs: [
            {
              internalType: "contract ILPStaking",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiIncentivesForChiEthLPStaking",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiIncentivesForUscEthLPStaking",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiIncentivesPerEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiLocking",
          outputs: [
            {
              internalType: "contract IChiLocking",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiStaking",
          outputs: [
            {
              internalType: "contract IChiStaking",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiVesting",
          outputs: [
            {
              internalType: "contract IChiVesting",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claimStEth",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "currentEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "epochs",
          outputs: [
            {
              internalType: "uint256",
              name: "totalUscReward",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveHolderTotalRewards",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "firstEpochTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_chi",
              type: "address",
            },
            {
              internalType: "contract IERC20",
              name: "_usc",
              type: "address",
            },
            {
              internalType: "contract IReserveHolder",
              name: "_reserveHolder",
              type: "address",
            },
            {
              internalType: "contract IUSCStaking",
              name: "_uscStaking",
              type: "address",
            },
            {
              internalType: "contract IChiStaking",
              name: "_chiStaking",
              type: "address",
            },
            {
              internalType: "contract IChiLocking",
              name: "_chiLocking",
              type: "address",
            },
            {
              internalType: "contract IChiVesting",
              name: "_chiVesting",
              type: "address",
            },
            {
              internalType: "contract ILPStaking",
              name: "_uscEthLPStaking",
              type: "address",
            },
            {
              internalType: "contract ILPStaking",
              name: "_chiEthLPStaking",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_firstEpochTimestamp",
              type: "uint256",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "reserveHolder",
          outputs: [
            {
              internalType: "contract IReserveHolder",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "rewardUSC",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IArbitrage",
              name: "_arbitrager",
              type: "address",
            },
          ],
          name: "setArbitrager",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_chiIncentivesForChiEthLPStaking",
              type: "uint256",
            },
          ],
          name: "setChiIncentivesForChiEthLPStaking",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_chiIncentivesForUscEthLPStaking",
              type: "uint256",
            },
          ],
          name: "setChiIncentivesForUscEthLPStaking",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_chiIncentivesPerEpoch",
              type: "uint256",
            },
          ],
          name: "setChiIncentivesPerEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "unclaimedStETHAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "updateEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "usc",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "uscEthLPStaking",
          outputs: [
            {
              internalType: "contract ILPStaking",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "uscStaking",
          outputs: [
            {
              internalType: "contract IUSCStaking",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    veCHI: {
      address: contractAddresses.veCHI,
      abi: [
        {
          inputs: [
            {
              internalType: "contract IChiLocking",
              name: "_chiLocking",
              type: "address",
            },
            {
              internalType: "contract IChiVesting",
              name: "_chiVesting",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "NonTransferable",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiLocking",
          outputs: [
            {
              internalType: "contract IChiLocking",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiVesting",
          outputs: [
            {
              internalType: "contract IChiVesting",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    TimeWeightedBonding: {
      address: contractAddresses.TimeWeightedBonding,
      abi: [
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_chi",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "_priceFeedAggregator",
              type: "address",
            },
            {
              internalType: "contract IChiVesting",
              name: "_chiVesting",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_cliffTimestampEnd",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_treasury",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "EtherSendFailed",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "ethCost",
              type: "uint256",
            },
          ],
          name: "Buy",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "RecoverChi",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Vest",
          type: "event",
        },
        {
          inputs: [],
          name: "BASE_PRICE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "EPOCH_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAX_LOCK_PERIOD",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "WETH",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "buy",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "chi",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiVesting",
          outputs: [
            {
              internalType: "contract IChiVesting",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "cliffTimestampEnd",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "priceFeedAggregator",
          outputs: [
            {
              internalType: "contract IPriceFeedAggregator",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "recoverChi",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_cliffTimestampEnd",
              type: "uint256",
            },
          ],
          name: "setCliffTimestampEnd",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "treasury",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "vest",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    ChiVesting: {
      address: contractAddresses.ChiVesting,
      abi: [
        {
          inputs: [],
          name: "CliffPassed",
          type: "error",
        },
        {
          inputs: [],
          name: "NotChiVester",
          type: "error",
        },
        {
          inputs: [],
          name: "NotRewardController",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "UnavailableWithdrawAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
          ],
          name: "AddVesting",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "ClaimStETH",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "epoch",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "stETHrewards",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "totalLockedChi",
              type: "uint256",
            },
          ],
          name: "UpdateEpoch",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "WithdrawChi",
          type: "event",
        },
        {
          inputs: [],
          name: "MAX_LOCK_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "chiAmount",
              type: "uint256",
            },
          ],
          name: "addVesting",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "availableChiWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chi",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "chiVesters",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "claimStETH",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "cliffDuration",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "currentEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "epochs",
          outputs: [
            {
              internalType: "uint256",
              name: "cumulativeStETHRewardPerShare",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "cumulativeUnlockedPerShare",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getLockedChi",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTotalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "getVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_chi",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_cliffDuration",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_vestingDuration",
              type: "uint256",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "rewardController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "bool",
              name: "toSet",
              type: "bool",
            },
          ],
          name: "setChiVester",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_rewardController",
              type: "address",
            },
          ],
          name: "setRewardController",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalLockedChi",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalUnlockedChi",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "unclaimedStETHAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chiEmissions",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "stETHrewards",
              type: "uint256",
            },
          ],
          name: "updateEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "vestingData",
          outputs: [
            {
              internalType: "uint256",
              name: "startAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "unlockedChi",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lastWithdrawnEpoch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "unclaimedStETH",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lastClaimedEpoch",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "vestingDuration",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "withdrawChi",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    ChiLocking: {
      address: contractAddresses.ChiLocking,
      abi: [
        {
          inputs: [],
          name: "NotChiLocker",
          type: "error",
        },
        {
          inputs: [],
          name: "NotRewardController",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "UnavailableWithdrawAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "ClaimStETH",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "startEpoch",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "endEpoch",
              type: "uint256",
            },
          ],
          name: "LockChi",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "epoch",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "totalLockedChi",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "chiEmissions",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "stETHrewards",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "stEthPerLockedShare",
              type: "uint256",
            },
          ],
          name: "UpdateEpoch",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "WithdrawChiFromAccount",
          type: "event",
        },
        {
          inputs: [],
          name: "MAX_LOCK_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "addVotingPowerInEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "addedAmountInEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "availableChiWithdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "availableTotal",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chi",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "chiLockers",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "claimStETH",
          outputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "currentEpoch",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "epochs",
          outputs: [
            {
              internalType: "uint256",
              name: "lockedSharesInEpoch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalLockedChiInEpoch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sharesToUnlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "cumulativeStETHPerLockedShare",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "cumulativeStETHPerUnlocked",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "numberOfEndingPositions",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getLockedChi",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "pos",
              type: "uint256",
            },
          ],
          name: "getLockedPosition",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "startEpoch",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "duration",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "shares",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "withdrawnChiAmount",
                  type: "uint256",
                },
              ],
              internalType: "struct IChiLocking.LockedPosition",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getStakedChi",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTotalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "getVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_chi",
              type: "address",
            },
            {
              internalType: "address",
              name: "_chiStaking",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "duration",
              type: "uint256",
            },
          ],
          name: "lockChi",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "locks",
          outputs: [
            {
              internalType: "uint256",
              name: "lastUpdatedEpoch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "unclaimedStETH",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "numberOfLockedPositions",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "rewardController",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "bool",
              name: "toSet",
              type: "bool",
            },
          ],
          name: "setChiLocker",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_rewardController",
              type: "address",
            },
          ],
          name: "setRewardController",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_uscStaking",
              type: "address",
            },
          ],
          name: "setUscStaking",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "stETH",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "sumOfLockedDurations",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "sumShareDurationProduct",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalLockedChi",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalLockedShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalUnlockedChi",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "unclaimedStETHAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "totalAmount",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chiEmissions",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "stETHrewards",
              type: "uint256",
            },
          ],
          name: "updateEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "withdrawChiFromAccount",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    UNISWAP_V2_ROUTER: {
      address: contractAddresses.Uniswapv2Router,
      abi: [
        {
          inputs: [],
          name: "WETH",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenA",
              type: "address",
            },
            {
              internalType: "address",
              name: "tokenB",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amountADesired",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountBDesired",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountAMin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountBMin",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "addLiquidity",
          outputs: [
            {
              internalType: "uint256",
              name: "amountA",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountB",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "liquidity",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amountTokenDesired",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountTokenMin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountETHMin",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "addLiquidityETH",
          outputs: [
            {
              internalType: "uint256",
              name: "amountToken",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountETH",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "liquidity",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "factory",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountOut",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveIn",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveOut",
              type: "uint256",
            },
          ],
          name: "getAmountIn",
          outputs: [
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveIn",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveOut",
              type: "uint256",
            },
          ],
          name: "getAmountOut",
          outputs: [
            {
              internalType: "uint256",
              name: "amountOut",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountOut",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
          ],
          name: "getAmountsIn",
          outputs: [
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
          ],
          name: "getAmountsOut",
          outputs: [
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountA",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveA",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveB",
              type: "uint256",
            },
          ],
          name: "quote",
          outputs: [
            {
              internalType: "uint256",
              name: "amountB",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenA",
              type: "address",
            },
            {
              internalType: "address",
              name: "tokenB",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "liquidity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountAMin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountBMin",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "removeLiquidity",
          outputs: [
            {
              internalType: "uint256",
              name: "amountA",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountB",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "liquidity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountTokenMin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountETHMin",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "removeLiquidityETH",
          outputs: [
            {
              internalType: "uint256",
              name: "amountToken",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountETH",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "liquidity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountTokenMin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountETHMin",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "removeLiquidityETHSupportingFeeOnTransferTokens",
          outputs: [
            {
              internalType: "uint256",
              name: "amountETH",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "liquidity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountTokenMin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountETHMin",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "approveMax",
              type: "bool",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "removeLiquidityETHWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "amountToken",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountETH",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "liquidity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountTokenMin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountETHMin",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "approveMax",
              type: "bool",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
          outputs: [
            {
              internalType: "uint256",
              name: "amountETH",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenA",
              type: "address",
            },
            {
              internalType: "address",
              name: "tokenB",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "liquidity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountAMin",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountBMin",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "approveMax",
              type: "bool",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "removeLiquidityWithPermit",
          outputs: [
            {
              internalType: "uint256",
              name: "amountA",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountB",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountOut",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "swapETHForExactTokens",
          outputs: [
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountOutMin",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "swapExactETHForTokens",
          outputs: [
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountOutMin",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountOutMin",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "swapExactTokensForETH",
          outputs: [
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountOutMin",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountOutMin",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "swapExactTokensForTokens",
          outputs: [
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountOutMin",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountOut",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountInMax",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "swapTokensForExactETH",
          outputs: [
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amountOut",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountInMax",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "path",
              type: "address[]",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "swapTokensForExactTokens",
          outputs: [
            {
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    WETH: {
      address: contractAddresses.WETH,
      abi: [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "guy", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "src", type: "address" },
            { name: "dst", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "wad", type: "uint256" }],
          name: "withdraw",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "dst", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "deposit",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        { payable: true, stateMutability: "payable", type: "fallback" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "src", type: "address" },
            { indexed: true, name: "guy", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "src", type: "address" },
            { indexed: true, name: "dst", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "dst", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Deposit",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "src", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Withdrawal",
          type: "event",
        },
      ],
    },
    stETH: {
      address: contractAddresses.stETH,
      abi: [
        {
          constant: false,
          inputs: [],
          name: "resume",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "stop",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "hasInitialized",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "STAKING_CONTROL_ROLE",
          outputs: [{ name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "_ethAmount", type: "uint256" }],
          name: "getSharesByPooledEth",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "isStakingPaused",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_sender", type: "address" },
            { name: "_recipient", type: "address" },
            { name: "_amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "_script", type: "bytes" }],
          name: "getEVMScriptExecutor",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_maxStakeLimit", type: "uint256" },
            { name: "_stakeLimitIncreasePerBlock", type: "uint256" },
          ],
          name: "setStakingLimit",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "RESUME_ROLE",
          outputs: [{ name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_lidoLocator", type: "address" },
            { name: "_eip712StETH", type: "address" },
          ],
          name: "finalizeUpgrade_v2",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getRecoveryVault",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getTotalPooledEther",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "_newDepositedValidators", type: "uint256" }],
          name: "unsafeChangeDepositedValidators",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "PAUSE_ROLE",
          outputs: [{ name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getTreasury",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "isStopped",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getBufferedEther",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_lidoLocator", type: "address" },
            { name: "_eip712StETH", type: "address" },
          ],
          name: "initialize",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "receiveELRewards",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getWithdrawalCredentials",
          outputs: [{ name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getCurrentStakeLimit",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getStakeLimitFullInfo",
          outputs: [
            { name: "isStakingPaused", type: "bool" },
            { name: "isStakingLimitSet", type: "bool" },
            { name: "currentStakeLimit", type: "uint256" },
            { name: "maxStakeLimit", type: "uint256" },
            { name: "maxStakeLimitGrowthBlocks", type: "uint256" },
            { name: "prevStakeLimit", type: "uint256" },
            { name: "prevStakeBlockNumber", type: "uint256" },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_sender", type: "address" },
            { name: "_recipient", type: "address" },
            { name: "_sharesAmount", type: "uint256" },
          ],
          name: "transferSharesFrom",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "_account", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "resumeStaking",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getFeeDistribution",
          outputs: [
            { name: "treasuryFeeBasisPoints", type: "uint16" },
            { name: "insuranceFeeBasisPoints", type: "uint16" },
            { name: "operatorsFeeBasisPoints", type: "uint16" },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "receiveWithdrawals",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "_sharesAmount", type: "uint256" }],
          name: "getPooledEthByShares",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "token", type: "address" }],
          name: "allowRecoverability",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "owner", type: "address" }],
          name: "nonces",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "appId",
          outputs: [{ name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getOracle",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getContractVersion",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getInitializationBlock",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_recipient", type: "address" },
            { name: "_sharesAmount", type: "uint256" },
          ],
          name: "transferShares",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "pure",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getEIP712StETH",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "", type: "address" }],
          name: "transferToVault",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { name: "_sender", type: "address" },
            { name: "_role", type: "bytes32" },
            { name: "_params", type: "uint256[]" },
          ],
          name: "canPerform",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "_referral", type: "address" }],
          name: "submit",
          outputs: [{ name: "", type: "uint256" }],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_subtractedValue", type: "uint256" },
          ],
          name: "decreaseAllowance",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getEVMScriptRegistry",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_recipient", type: "address" },
            { name: "_amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_maxDepositsCount", type: "uint256" },
            { name: "_stakingModuleId", type: "uint256" },
            { name: "_depositCalldata", type: "bytes" },
          ],
          name: "deposit",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE",
          outputs: [{ name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getBeaconStat",
          outputs: [
            { name: "depositedValidators", type: "uint256" },
            { name: "beaconValidators", type: "uint256" },
            { name: "beaconBalance", type: "uint256" },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "removeStakingLimit",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_reportTimestamp", type: "uint256" },
            { name: "_timeElapsed", type: "uint256" },
            { name: "_clValidators", type: "uint256" },
            { name: "_clBalance", type: "uint256" },
            { name: "_withdrawalVaultBalance", type: "uint256" },
            { name: "_elRewardsVaultBalance", type: "uint256" },
            { name: "_sharesRequestedToBurn", type: "uint256" },
            { name: "_withdrawalFinalizationBatches", type: "uint256[]" },
            { name: "_simulatedShareRate", type: "uint256" },
          ],
          name: "handleOracleReport",
          outputs: [{ name: "postRebaseAmounts", type: "uint256[4]" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getFee",
          outputs: [{ name: "totalFee", type: "uint16" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "kernel",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getTotalShares",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_owner", type: "address" },
            { name: "_spender", type: "address" },
            { name: "_value", type: "uint256" },
            { name: "_deadline", type: "uint256" },
            { name: "_v", type: "uint8" },
            { name: "_r", type: "bytes32" },
            { name: "_s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { name: "_owner", type: "address" },
            { name: "_spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "isPetrified",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getLidoLocator",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "canDeposit",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "STAKING_PAUSE_ROLE",
          outputs: [{ name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getDepositableEther",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "_account", type: "address" }],
          name: "sharesOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "pauseStaking",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getTotalELRewardsCollected",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        { payable: true, stateMutability: "payable", type: "fallback" },
        {
          anonymous: false,
          inputs: [],
          name: "StakingPaused",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [],
          name: "StakingResumed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, name: "maxStakeLimit", type: "uint256" },
            {
              indexed: false,
              name: "stakeLimitIncreasePerBlock",
              type: "uint256",
            },
          ],
          name: "StakingLimitSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [],
          name: "StakingLimitRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "reportTimestamp", type: "uint256" },
            { indexed: false, name: "preCLValidators", type: "uint256" },
            { indexed: false, name: "postCLValidators", type: "uint256" },
          ],
          name: "CLValidatorsUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: "depositedValidators",
              type: "uint256",
            },
          ],
          name: "DepositedValidatorsChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "reportTimestamp", type: "uint256" },
            { indexed: false, name: "preCLBalance", type: "uint256" },
            { indexed: false, name: "postCLBalance", type: "uint256" },
            {
              indexed: false,
              name: "withdrawalsWithdrawn",
              type: "uint256",
            },
            {
              indexed: false,
              name: "executionLayerRewardsWithdrawn",
              type: "uint256",
            },
            { indexed: false, name: "postBufferedEther", type: "uint256" },
          ],
          name: "ETHDistributed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "reportTimestamp", type: "uint256" },
            { indexed: false, name: "timeElapsed", type: "uint256" },
            { indexed: false, name: "preTotalShares", type: "uint256" },
            { indexed: false, name: "preTotalEther", type: "uint256" },
            { indexed: false, name: "postTotalShares", type: "uint256" },
            { indexed: false, name: "postTotalEther", type: "uint256" },
            { indexed: false, name: "sharesMintedAsFees", type: "uint256" },
          ],
          name: "TokenRebased",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "lidoLocator", type: "address" }],
          name: "LidoLocatorSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "amount", type: "uint256" }],
          name: "ELRewardsReceived",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "amount", type: "uint256" }],
          name: "WithdrawalsReceived",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "sender", type: "address" },
            { indexed: false, name: "amount", type: "uint256" },
            { indexed: false, name: "referral", type: "address" },
          ],
          name: "Submitted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "amount", type: "uint256" }],
          name: "Unbuffered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "executor", type: "address" },
            { indexed: false, name: "script", type: "bytes" },
            { indexed: false, name: "input", type: "bytes" },
            { indexed: false, name: "returnData", type: "bytes" },
          ],
          name: "ScriptResult",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "vault", type: "address" },
            { indexed: true, name: "token", type: "address" },
            { indexed: false, name: "amount", type: "uint256" },
          ],
          name: "RecoverToVault",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "eip712StETH", type: "address" }],
          name: "EIP712StETHInitialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "to", type: "address" },
            { indexed: false, name: "sharesValue", type: "uint256" },
          ],
          name: "TransferShares",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "account", type: "address" },
            {
              indexed: false,
              name: "preRebaseTokenAmount",
              type: "uint256",
            },
            {
              indexed: false,
              name: "postRebaseTokenAmount",
              type: "uint256",
            },
            { indexed: false, name: "sharesAmount", type: "uint256" },
          ],
          name: "SharesBurnt",
          type: "event",
        },
        { anonymous: false, inputs: [], name: "Stopped", type: "event" },
        { anonymous: false, inputs: [], name: "Resumed", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "to", type: "address" },
            { indexed: false, name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "owner", type: "address" },
            { indexed: true, name: "spender", type: "address" },
            { indexed: false, name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "version", type: "uint256" }],
          name: "ContractVersionSet",
          type: "event",
        },
      ],
    },
    DataProvider: {
      address: contractAddresses.DataProvider,
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dso",
              type: "address",
            },
            {
              internalType: "contract IUniswapV2Pair",
              name: "uniPair",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "priceFeed",
              type: "address",
            },
          ],
          name: "POLdata",
          outputs: [
            {
              internalType: "uint256",
              name: "polUsdValue",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "polPercent",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "chi",
              type: "address",
            },
            {
              internalType: "contract IUniswapV2Pair",
              name: "chiEthPair",
              type: "address",
            },
            {
              internalType: "contract LPStaking",
              name: "chiEthLPStaking",
              type: "address",
            },
            {
              internalType: "contract RewardController",
              name: "rewardController",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "priceFeedAggregator",
              type: "address",
            },
          ],
          name: "chiEthLPAPR",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "chi",
              type: "address",
            },
            {
              internalType: "contract ChiLocking",
              name: "chiLocking",
              type: "address",
            },
            {
              internalType: "contract RewardController",
              name: "rewardController",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "priceFeedAggregator",
              type: "address",
            },
          ],
          name: "chiLockingAPR",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "chi",
              type: "address",
            },
            {
              internalType: "contract ChiStaking",
              name: "chiStaking",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "priceFeedAggregator",
              type: "address",
            },
          ],
          name: "chiStakingAPR",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "chi",
              type: "address",
            },
            {
              internalType: "contract OCHI",
              name: "ochi",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "priceFeedAggregator",
              type: "address",
            },
          ],
          name: "dsoAPR",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IUniswapV2Pair",
              name: "pair",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "priceFeedAggregator",
              type: "address",
            },
          ],
          name: "getLPTokenPrice",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "chi",
              type: "address",
            },
            {
              internalType: "contract IUniswapV2Pair",
              name: "uscEthPair",
              type: "address",
            },
            {
              internalType: "contract LPStaking",
              name: "uscEthLPStaking",
              type: "address",
            },
            {
              internalType: "contract RewardController",
              name: "rewardController",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "priceFeedAggregator",
              type: "address",
            },
          ],
          name: "uscEthLPAPR",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "chi",
              type: "address",
            },
            {
              internalType: "contract RewardController",
              name: "rewardController",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "priceFeedAggregator",
              type: "address",
            },
            {
              internalType: "contract IERC20",
              name: "uscStaking",
              type: "address",
            },
          ],
          name: "uscStakingAPR",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    OCHI: {
      address: contractAddresses.OCHI,
      abi: [
        {
          inputs: [],
          name: "EpochNotFinished",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "lockPeriod",
              type: "uint256",
            },
          ],
          name: "InvalidLockPeriod",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "NotAllowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "OptionExpired",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "OptionLocked",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "OptionPriceAboveMarket",
          type: "error",
        },
        {
          inputs: [],
          name: "PolTargetRatioExceeded",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "chiAmount",
              type: "uint256",
            },
          ],
          name: "Burn",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ClaimRewardsOCHI",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "chiAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "uscEthPairAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "chiEthPairAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "lockPeriodInEpochs",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "strikePrice",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "oChiAmount",
              type: "uint256",
            },
          ],
          name: "Mint",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [],
          name: "RecoverLPTokens",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint64",
              name: "epoch",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "UpdateEpoch",
          type: "event",
        },
        {
          inputs: [],
          name: "BASE_PRICE",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DENOMINATOR",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "EPOCH_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAX_LOCK_PERIOD_EPOCHS",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MULTIPLIER",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "TARGET_RATIO",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "WETH",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chiAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "uscEthPairAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "chiEthPairAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lockPeriodInEpochs",
              type: "uint256",
            },
          ],
          name: "calculateOptionData",
          outputs: [
            {
              internalType: "uint256",
              name: "strikePrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "oChiAmount",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chi",
          outputs: [
            {
              internalType: "contract IMintableBurnable",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiEthPair",
          outputs: [
            {
              internalType: "contract IUniswapV2Pair",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claimAllRewards",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "claimRewards",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "currentEpoch",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "firstEpochTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "uscEthPairAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "chiEthPairAmount",
              type: "uint256",
            },
          ],
          name: "getAndValidatePositionsData",
          outputs: [
            {
              internalType: "uint256",
              name: "multiplier",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getLastEpochTotalReward",
          outputs: [
            {
              internalType: "int256",
              name: "totalReward",
              type: "int256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getUnclaimedRewardsValue",
          outputs: [
            {
              internalType: "int256",
              name: "",
              type: "int256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_usc",
              type: "address",
            },
            {
              internalType: "contract IMintableBurnable",
              name: "_chi",
              type: "address",
            },
            {
              internalType: "contract IPriceFeedAggregator",
              name: "_priceFeedAggregator",
              type: "address",
            },
            {
              internalType: "contract IUniswapV2Pair",
              name: "_uscEthPair",
              type: "address",
            },
            {
              internalType: "contract IUniswapV2Pair",
              name: "_chiEthPair",
              type: "address",
            },
            {
              internalType: "contract ILPRewards",
              name: "_uscEthPairRewards",
              type: "address",
            },
            {
              internalType: "contract ILPRewards",
              name: "_chiEthPairRewards",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_firstEpochTimestamp",
              type: "uint256",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IUniswapV2Pair",
              name: "",
              type: "address",
            },
          ],
          name: "lpRewards",
          outputs: [
            {
              internalType: "contract ILPRewards",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chiAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "uscEthPairAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "chiEthPairAmount",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "lockPeriodInEpochs",
              type: "uint64",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "mintedOCHI",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "options",
          outputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "strikePrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "uscEthPairAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "chiEthPairAmount",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "lockedUntil",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "validUntil",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "priceFeedAggregator",
          outputs: [
            {
              internalType: "contract IPriceFeedAggregator",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "recoverLPTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "tokenByIndex",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalOCHIlocked",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "updateEpoch",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "usc",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "uscEthPair",
          outputs: [
            {
              internalType: "contract IUniswapV2Pair",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    UniswapV2TwapOracle: {
      address: contractAddresses.UniswapV2TwapOracle,
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_factory",
              type: "address",
            },
            {
              internalType: "address",
              name: "_baseToken",
              type: "address",
            },
            {
              internalType: "address",
              name: "_quoteToken",
              type: "address",
            },
            {
              internalType: "uint32",
              name: "_updatePeriod",
              type: "uint32",
            },
            {
              internalType: "uint32",
              name: "_minPeriodFromLastSnapshot",
              type: "uint32",
            },
            {
              internalType: "contract AggregatorV3Interface",
              name: "_quoteTokenChainlinkFeed",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidToken",
          type: "error",
        },
        {
          inputs: [],
          name: "NoReserves",
          type: "error",
        },
        {
          inputs: [],
          name: "PeriodNotPassed",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [],
          name: "UpdateCumulativePricesSnapshot",
          type: "event",
        },
        {
          inputs: [],
          name: "baseAmount",
          outputs: [
            {
              internalType: "uint128",
              name: "",
              type: "uint128",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "baseToken",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amountIn",
              type: "uint256",
            },
          ],
          name: "getTwapQuote",
          outputs: [
            {
              internalType: "uint256",
              name: "amountOut",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lastSnapshot",
          outputs: [
            {
              internalType: "uint256",
              name: "price0",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "price1",
              type: "uint256",
            },
            {
              internalType: "uint32",
              name: "blockTimestamp",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minPeriodFromLastSnapshot",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pair",
          outputs: [
            {
              internalType: "contract IUniswapV2Pair",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "peek",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "previousSnapshot",
          outputs: [
            {
              internalType: "uint256",
              name: "price0",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "price1",
              type: "uint256",
            },
            {
              internalType: "uint32",
              name: "blockTimestamp",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "quoteTokenChainlinkFeed",
          outputs: [
            {
              internalType: "contract AggregatorV3Interface",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "token0",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "token1",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "updateCumulativePricesSnapshot",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "updatePeriod",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    TestpageHelper: {
      address: contractAddresses.TestpageHelper,
      abi: [
        {
          inputs: [],
          name: "EthValueIsZero",
          type: "error",
        },
        {
          inputs: [],
          name: "WETH",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "reserveHolder",
              type: "address",
            },
          ],
          name: "addStETHRewards",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenIn",
              type: "address",
            },
            {
              internalType: "address",
              name: "tokenOut",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "exchange",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "token0",
              type: "address",
            },
            {
              internalType: "address",
              name: "token1",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "startAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "times",
              type: "uint256",
            },
          ],
          name: "exchangeManyTimes",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "stETH",
          outputs: [
            {
              internalType: "contract ISTETH",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "swapRouter",
          outputs: [
            {
              internalType: "contract IUniswapV2Router02",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    IDO: {
      address: contractAddresses.IDO,
      abi: [
        {
          inputs: [
            {
              internalType: "contract ICHI",
              name: "_chi",
              type: "address",
            },
            {
              internalType: "contract IChiVesting",
              name: "_chiVesting",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_startTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_minValue",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maxValue",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_softCap",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_hardCap",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_price",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_treasury",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AlreadyClaimed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "ethAmount",
              type: "uint256",
            },
          ],
          name: "AmountLargerThenBought",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "EtherSendFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "IDOAlreadyStarted",
          type: "error",
        },
        {
          inputs: [],
          name: "IDONotFinished",
          type: "error",
        },
        {
          inputs: [],
          name: "IDONotRunning",
          type: "error",
        },
        {
          inputs: [],
          name: "MaxValueReached",
          type: "error",
        },
        {
          inputs: [],
          name: "MinValueNotReached",
          type: "error",
        },
        {
          inputs: [],
          name: "SoftCapNotReached",
          type: "error",
        },
        {
          inputs: [],
          name: "SoftCapReached",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "totalEthAmount",
              type: "uint256",
            },
          ],
          name: "Buy",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "ethAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "chiAmount",
              type: "uint256",
            },
          ],
          name: "Claim",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "ethAmountLeft",
              type: "uint256",
            },
          ],
          name: "Withdraw",
          type: "event",
        },
        {
          inputs: [],
          name: "buy",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_price",
              type: "uint256",
            },
          ],
          name: "changePrice",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_startTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endTimestamp",
              type: "uint256",
            },
          ],
          name: "changeTime",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_minValue",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maxValue",
              type: "uint256",
            },
          ],
          name: "changeValueRange",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "chi",
          outputs: [
            {
              internalType: "contract ICHI",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chiVesting",
          outputs: [
            {
              internalType: "contract IChiVesting",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "claimableChiAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "claimed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "endTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "ethAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "hardCap",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "maxValue",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minValue",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "price",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "rescueTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "softCap",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "startTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSale",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "treasury",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawSale",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
  // 1442: {
  //   WETH: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.WETH,
  //     abi: [
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "name",
  //         outputs: [{ name: "", type: "string" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           { name: "guy", type: "address" },
  //           { name: "wad", type: "uint256" },
  //         ],
  //         name: "approve",
  //         outputs: [{ name: "", type: "bool" }],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "totalSupply",
  //         outputs: [{ name: "", type: "uint256" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           { name: "src", type: "address" },
  //           { name: "dst", type: "address" },
  //           { name: "wad", type: "uint256" },
  //         ],
  //         name: "transferFrom",
  //         outputs: [{ name: "", type: "bool" }],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [{ name: "wad", type: "uint256" }],
  //         name: "withdraw",
  //         outputs: [],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "decimals",
  //         outputs: [{ name: "", type: "uint8" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [{ name: "", type: "address" }],
  //         name: "balanceOf",
  //         outputs: [{ name: "", type: "uint256" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "symbol",
  //         outputs: [{ name: "", type: "string" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           { name: "dst", type: "address" },
  //           { name: "wad", type: "uint256" },
  //         ],
  //         name: "transfer",
  //         outputs: [{ name: "", type: "bool" }],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [],
  //         name: "deposit",
  //         outputs: [],
  //         payable: true,
  //         stateMutability: "payable",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [
  //           { name: "", type: "address" },
  //           { name: "", type: "address" },
  //         ],
  //         name: "allowance",
  //         outputs: [{ name: "", type: "uint256" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       { payable: true, stateMutability: "payable", type: "fallback" },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           { indexed: true, name: "src", type: "address" },
  //           { indexed: true, name: "guy", type: "address" },
  //           { indexed: false, name: "wad", type: "uint256" },
  //         ],
  //         name: "Approval",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           { indexed: true, name: "src", type: "address" },
  //           { indexed: true, name: "dst", type: "address" },
  //           { indexed: false, name: "wad", type: "uint256" },
  //         ],
  //         name: "Transfer",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           { indexed: true, name: "dst", type: "address" },
  //           { indexed: false, name: "wad", type: "uint256" },
  //         ],
  //         name: "Deposit",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           { indexed: true, name: "src", type: "address" },
  //           { indexed: false, name: "wad", type: "uint256" },
  //         ],
  //         name: "Withdrawal",
  //         type: "event",
  //       },
  //     ],
  //   },
  //   StabilanCore: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.StabilanCore,
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: "contract ITokenFactory",
  //             name: "_tokenFactory",
  //             type: "address",
  //           },
  //           {
  //             internalType: "contract IPriceFeedAggregator",
  //             name: "_priceFeedAggregator",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "_owner",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "constructor",
  //       },
  //       {
  //         inputs: [],
  //         name: "CannotExecute",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "MathOverflowedMulDiv",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "inEpochId",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "insuringAssetValue",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "totalAvailableCollateralUSD",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "NotEnoughBacking",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "msgValue",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "optionsPrice",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "NotEnoughETHSent",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //         ],
  //         name: "OwnableInvalidOwner",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "OwnableUnauthorizedAccount",
  //         type: "error",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "previousOwner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "newOwner",
  //             type: "address",
  //           },
  //         ],
  //         name: "OwnershipTransferred",
  //         type: "event",
  //       },
  //       {
  //         inputs: [],
  //         name: "MAX_EPOCH_DURATION",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "allBackingTokens",
  //         outputs: [
  //           {
  //             internalType: "contract IBackingToken",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "allOptionTokens",
  //         outputs: [
  //           {
  //             internalType: "contract IOptionToken",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "allStabilanTokens",
  //         outputs: [
  //           {
  //             internalType: "contract IOptionToken[]",
  //             name: "",
  //             type: "address[]",
  //           },
  //           {
  //             internalType: "contract IBackingToken[]",
  //             name: "",
  //             type: "address[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         name: "assetsConfig",
  //         outputs: [
  //           {
  //             internalType: "address",
  //             name: "collateralAsset",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "collateralRatio",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "strikePricePercent",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "expectedApy",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "assetsData",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "strikePrice",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "collateralAmount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "reservedAmount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "activeUntilTimestamp",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "totalPremium",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "contract IOptionToken",
  //             name: "optionToken",
  //             type: "address",
  //           },
  //           {
  //             internalType: "contract IBackingToken",
  //             name: "backingToken",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "durationEpochs",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "backing",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "durationEpochs",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "buyOptions",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "backingToken",
  //             type: "address",
  //           },
  //         ],
  //         name: "claimBackingRewards",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "currentEpoch",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "contract IOptionToken",
  //             name: "option",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "executeOptions",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //         ],
  //         name: "getAssetAPY",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "durationEpochs",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "getMaxOptionAmount",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "durationEpochs",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "address",
  //             name: "payingToken",
  //             type: "address",
  //           },
  //         ],
  //         name: "getOptionsPrice",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "totalCost",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256[]",
  //             name: "epochCosts",
  //             type: "uint256[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "owner",
  //         outputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "priceFeedAggregator",
  //         outputs: [
  //           {
  //             internalType: "contract IPriceFeedAggregator",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "renounceOwnership",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "collateralRatio",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "strikePricePercent",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "expectedApy",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "address",
  //             name: "collateralAddress",
  //             type: "address",
  //           },
  //         ],
  //         name: "setupAsset",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "supportedAssets",
  //         outputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "tokenFactory",
  //         outputs: [
  //           {
  //             internalType: "contract ITokenFactory",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "newOwner",
  //             type: "address",
  //           },
  //         ],
  //         name: "transferOwnership",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "collateralRatio",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "strikePricePercent",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "expectedApy",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "updateAssetConfig",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "updateEpoch",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //   },
  //   DataProvider: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.DataProvider,
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: "contract IStabilanCore",
  //             name: "core",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "getUserTokens",
  //         outputs: [
  //           {
  //             components: [
  //               {
  //                 internalType: "enum DataProvider.TokenType",
  //                 name: "tokenType",
  //                 type: "uint8",
  //               },
  //               {
  //                 internalType: "address",
  //                 name: "stabilanTokenAddress",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "address",
  //                 name: "undelyingAssetAddress",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "address",
  //                 name: "backedAsset",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "uint256",
  //                 name: "endEpoch",
  //                 type: "uint256",
  //               },
  //               {
  //                 internalType: "uint256",
  //                 name: "balance",
  //                 type: "uint256",
  //               },
  //             ],
  //             internalType: "struct DataProvider.UserToken[]",
  //             name: "",
  //             type: "tuple[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //     ],
  //   },
  //   INSRD: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.INSRD,
  //     abi: [
  //       {
  //         inputs: [],
  //         stateMutability: "nonpayable",
  //         type: "constructor",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "allowance",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "needed",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "ERC20InsufficientAllowance",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "sender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "balance",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "needed",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "ERC20InsufficientBalance",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "approver",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidApprover",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "receiver",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidReceiver",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "sender",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidSender",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidSpender",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "IndexOutOfBounds",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "InvalidPluginAddress",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "InvalidTokenInPlugin",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "OutputArrayTooSmall",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "PluginAlreadyAdded",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "PluginNotFound",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "PluginsLimitReachedForAccount",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "PopFromEmptyArray",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "ReentrantCall",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "ZeroPluginsLimit",
  //         type: "error",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Approval",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: false,
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "PluginAdded",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: false,
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "PluginRemoved",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Transfer",
  //         type: "event",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "addPlugin",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //         ],
  //         name: "allowance",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "approve",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "balanceOf",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "burn",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "decimals",
  //         outputs: [
  //           {
  //             internalType: "uint8",
  //             name: "",
  //             type: "uint8",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "hasPlugin",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "maxPluginsPerAccount",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "mint",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "name",
  //         outputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "index",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "pluginAt",
  //         outputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "pluginBalanceOf",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "pluginCallGasLimit",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "plugins",
  //         outputs: [
  //           {
  //             internalType: "address[]",
  //             name: "",
  //             type: "address[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "pluginsCount",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "removeAllPlugins",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "removePlugin",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "symbol",
  //         outputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "totalSupply",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transfer",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transferFrom",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //   },
  //   MockERC20: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.WETH,
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: "string",
  //             name: "name",
  //             type: "string",
  //           },
  //           {
  //             internalType: "string",
  //             name: "symbol",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "constructor",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "allowance",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "needed",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "ERC20InsufficientAllowance",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "sender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "balance",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "needed",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "ERC20InsufficientBalance",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "approver",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidApprover",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "receiver",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidReceiver",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "sender",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidSender",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidSpender",
  //         type: "error",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Approval",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Transfer",
  //         type: "event",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //         ],
  //         name: "allowance",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "approve",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "balanceOf",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "burn",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "decimals",
  //         outputs: [
  //           {
  //             internalType: "uint8",
  //             name: "",
  //             type: "uint8",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "mint",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "name",
  //         outputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "symbol",
  //         outputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "totalSupply",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transfer",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transferFrom",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //   },
  //   MockPriceFeedAggregator: {
  //     //address review: wetH?
  //     address: contractAddressesByChain.polygonZkevmTestnet.WETH,
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "asset",
  //             type: "address",
  //           },
  //         ],
  //         name: "getLatestPrice",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         name: "prices",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "asset",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "price",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "setPrice",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //   },
  // },
  // 84531: {
  //   WETH: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.WETH,
  //     abi: [
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "name",
  //         outputs: [{ name: "", type: "string" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           { name: "guy", type: "address" },
  //           { name: "wad", type: "uint256" },
  //         ],
  //         name: "approve",
  //         outputs: [{ name: "", type: "bool" }],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "totalSupply",
  //         outputs: [{ name: "", type: "uint256" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           { name: "src", type: "address" },
  //           { name: "dst", type: "address" },
  //           { name: "wad", type: "uint256" },
  //         ],
  //         name: "transferFrom",
  //         outputs: [{ name: "", type: "bool" }],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [{ name: "wad", type: "uint256" }],
  //         name: "withdraw",
  //         outputs: [],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "decimals",
  //         outputs: [{ name: "", type: "uint8" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [{ name: "", type: "address" }],
  //         name: "balanceOf",
  //         outputs: [{ name: "", type: "uint256" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [],
  //         name: "symbol",
  //         outputs: [{ name: "", type: "string" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [
  //           { name: "dst", type: "address" },
  //           { name: "wad", type: "uint256" },
  //         ],
  //         name: "transfer",
  //         outputs: [{ name: "", type: "bool" }],
  //         payable: false,
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         constant: false,
  //         inputs: [],
  //         name: "deposit",
  //         outputs: [],
  //         payable: true,
  //         stateMutability: "payable",
  //         type: "function",
  //       },
  //       {
  //         constant: true,
  //         inputs: [
  //           { name: "", type: "address" },
  //           { name: "", type: "address" },
  //         ],
  //         name: "allowance",
  //         outputs: [{ name: "", type: "uint256" }],
  //         payable: false,
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       { payable: true, stateMutability: "payable", type: "fallback" },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           { indexed: true, name: "src", type: "address" },
  //           { indexed: true, name: "guy", type: "address" },
  //           { indexed: false, name: "wad", type: "uint256" },
  //         ],
  //         name: "Approval",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           { indexed: true, name: "src", type: "address" },
  //           { indexed: true, name: "dst", type: "address" },
  //           { indexed: false, name: "wad", type: "uint256" },
  //         ],
  //         name: "Transfer",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           { indexed: true, name: "dst", type: "address" },
  //           { indexed: false, name: "wad", type: "uint256" },
  //         ],
  //         name: "Deposit",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           { indexed: true, name: "src", type: "address" },
  //           { indexed: false, name: "wad", type: "uint256" },
  //         ],
  //         name: "Withdrawal",
  //         type: "event",
  //       },
  //     ],
  //   },
  //   StabilanCore: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.StabilanCore,
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: "contract ITokenFactory",
  //             name: "_tokenFactory",
  //             type: "address",
  //           },
  //           {
  //             internalType: "contract IPriceFeedAggregator",
  //             name: "_priceFeedAggregator",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "_owner",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "constructor",
  //       },
  //       {
  //         inputs: [],
  //         name: "CannotExecute",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "MathOverflowedMulDiv",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "inEpochId",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "insuringAssetValue",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "totalAvailableCollateralUSD",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "NotEnoughBacking",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "msgValue",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "optionsPrice",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "NotEnoughETHSent",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //         ],
  //         name: "OwnableInvalidOwner",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "OwnableUnauthorizedAccount",
  //         type: "error",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "previousOwner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "newOwner",
  //             type: "address",
  //           },
  //         ],
  //         name: "OwnershipTransferred",
  //         type: "event",
  //       },
  //       {
  //         inputs: [],
  //         name: "MAX_EPOCH_DURATION",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "allBackingTokens",
  //         outputs: [
  //           {
  //             internalType: "contract IBackingToken",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "allOptionTokens",
  //         outputs: [
  //           {
  //             internalType: "contract IOptionToken",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "allStabilanTokens",
  //         outputs: [
  //           {
  //             internalType: "contract IOptionToken[]",
  //             name: "",
  //             type: "address[]",
  //           },
  //           {
  //             internalType: "contract IBackingToken[]",
  //             name: "",
  //             type: "address[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         name: "assetsConfig",
  //         outputs: [
  //           {
  //             internalType: "address",
  //             name: "collateralAsset",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "collateralRatio",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "strikePricePercent",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "expectedApy",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "assetsData",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "strikePrice",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "collateralAmount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "reservedAmount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "activeUntilTimestamp",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "totalPremium",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "contract IOptionToken",
  //             name: "optionToken",
  //             type: "address",
  //           },
  //           {
  //             internalType: "contract IBackingToken",
  //             name: "backingToken",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "durationEpochs",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "backing",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "durationEpochs",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "buyOptions",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "backingToken",
  //             type: "address",
  //           },
  //         ],
  //         name: "claimBackingRewards",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "currentEpoch",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "contract IOptionToken",
  //             name: "option",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "executeOptions",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //         ],
  //         name: "getAssetAPY",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "durationEpochs",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "getMaxOptionAmount",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "durationEpochs",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "address",
  //             name: "payingToken",
  //             type: "address",
  //           },
  //         ],
  //         name: "getOptionsPrice",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "totalCost",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256[]",
  //             name: "epochCosts",
  //             type: "uint256[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "owner",
  //         outputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "priceFeedAggregator",
  //         outputs: [
  //           {
  //             internalType: "contract IPriceFeedAggregator",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "renounceOwnership",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "collateralRatio",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "strikePricePercent",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "expectedApy",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "address",
  //             name: "collateralAddress",
  //             type: "address",
  //           },
  //         ],
  //         name: "setupAsset",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "supportedAssets",
  //         outputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "tokenFactory",
  //         outputs: [
  //           {
  //             internalType: "contract ITokenFactory",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "newOwner",
  //             type: "address",
  //           },
  //         ],
  //         name: "transferOwnership",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "assetAddress",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "collateralRatio",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "strikePricePercent",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "expectedApy",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "updateAssetConfig",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "updateEpoch",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //   },
  //   DataProvider: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.DataProvider,
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: "contract IStabilanCore",
  //             name: "core",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "getUserTokens",
  //         outputs: [
  //           {
  //             components: [
  //               {
  //                 internalType: "enum DataProvider.TokenType",
  //                 name: "tokenType",
  //                 type: "uint8",
  //               },
  //               {
  //                 internalType: "address",
  //                 name: "stabilanTokenAddress",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "address",
  //                 name: "undelyingAssetAddress",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "address",
  //                 name: "backedAsset",
  //                 type: "address",
  //               },
  //               {
  //                 internalType: "uint256",
  //                 name: "endEpoch",
  //                 type: "uint256",
  //               },
  //               {
  //                 internalType: "uint256",
  //                 name: "balance",
  //                 type: "uint256",
  //               },
  //             ],
  //             internalType: "struct DataProvider.UserToken[]",
  //             name: "",
  //             type: "tuple[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //     ],
  //   },
  //   INSRD: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.INSRD,
  //     abi: [
  //       {
  //         inputs: [],
  //         stateMutability: "nonpayable",
  //         type: "constructor",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "allowance",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "needed",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "ERC20InsufficientAllowance",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "sender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "balance",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "needed",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "ERC20InsufficientBalance",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "approver",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidApprover",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "receiver",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidReceiver",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "sender",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidSender",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidSpender",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "IndexOutOfBounds",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "InvalidPluginAddress",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "InvalidTokenInPlugin",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "OutputArrayTooSmall",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "PluginAlreadyAdded",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "PluginNotFound",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "PluginsLimitReachedForAccount",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "PopFromEmptyArray",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "ReentrantCall",
  //         type: "error",
  //       },
  //       {
  //         inputs: [],
  //         name: "ZeroPluginsLimit",
  //         type: "error",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Approval",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: false,
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "PluginAdded",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: false,
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "PluginRemoved",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Transfer",
  //         type: "event",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "addPlugin",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //         ],
  //         name: "allowance",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "approve",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "balanceOf",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "burn",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "decimals",
  //         outputs: [
  //           {
  //             internalType: "uint8",
  //             name: "",
  //             type: "uint8",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "hasPlugin",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "maxPluginsPerAccount",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "mint",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "name",
  //         outputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "index",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "pluginAt",
  //         outputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "pluginBalanceOf",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "pluginCallGasLimit",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "plugins",
  //         outputs: [
  //           {
  //             internalType: "address[]",
  //             name: "",
  //             type: "address[]",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "pluginsCount",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "removeAllPlugins",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "plugin",
  //             type: "address",
  //           },
  //         ],
  //         name: "removePlugin",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "symbol",
  //         outputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "totalSupply",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transfer",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transferFrom",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //   },
  //   MockERC20: {
  //     address: contractAddressesByChain.polygonZkevmTestnet.WETH,
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: "string",
  //             name: "name",
  //             type: "string",
  //           },
  //           {
  //             internalType: "string",
  //             name: "symbol",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "constructor",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "allowance",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "needed",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "ERC20InsufficientAllowance",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "sender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "balance",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "needed",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "ERC20InsufficientBalance",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "approver",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidApprover",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "receiver",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidReceiver",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "sender",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidSender",
  //         type: "error",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //         ],
  //         name: "ERC20InvalidSpender",
  //         type: "error",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Approval",
  //         type: "event",
  //       },
  //       {
  //         anonymous: false,
  //         inputs: [
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             indexed: true,
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             indexed: false,
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "Transfer",
  //         type: "event",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "owner",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //         ],
  //         name: "allowance",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "spender",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "approve",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //         ],
  //         name: "balanceOf",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "burn",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "decimals",
  //         outputs: [
  //           {
  //             internalType: "uint8",
  //             name: "",
  //             type: "uint8",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "account",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "amount",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "mint",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "name",
  //         outputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "symbol",
  //         outputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "totalSupply",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transfer",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "from",
  //             type: "address",
  //           },
  //           {
  //             internalType: "address",
  //             name: "to",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "value",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "transferFrom",
  //         outputs: [
  //           {
  //             internalType: "bool",
  //             name: "",
  //             type: "bool",
  //           },
  //         ],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //   },
  //   MockPriceFeedAggregator: {
  //     //address review: wetH?
  //     address: contractAddressesByChain.polygonZkevmTestnet.WETH,
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "asset",
  //             type: "address",
  //           },
  //         ],
  //         name: "getLatestPrice",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "",
  //             type: "address",
  //           },
  //         ],
  //         name: "prices",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "address",
  //             name: "asset",
  //             type: "address",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "price",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "setPrice",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ],
  //   },
  // },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
