import {
    WalletContractV5R1
} from "@ton/ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToPrivateKey } from "@ton/crypto";
import { TonClient, fromNano } from "@ton/ton"

const mnemonics = "burden coin west material reject net calm ostrich treat ridge rifle vendor analyst enlist sail patrol imitate desert put mandate act exhaust abuse tip"

let keyPair = await mnemonicToPrivateKey(mnemonics.split(" "));

let wallet = WalletContractV5R1.create({ workChain: 0, publicKey: keyPair.publicKey })
console.log("WalletContractV5:   ", wallet.address.toString({ bounceable: false }))

const endpoint = await getHttpEndpoint({ network: "testnet" });
const client = new TonClient({ endpoint });

const balance = await client.getBalance(wallet.address)

console.log("balance: ", fromNano(balance)) // balance/10^9