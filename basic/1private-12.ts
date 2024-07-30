import {
    WalletContractV4,
    WalletContractV5R1,
    WalletContractV1R1,
    WalletContractV1R2,
    WalletContractV1R3,
    WalletContractV2R1,
    WalletContractV2R2,
    WalletContractV3R1,
    WalletContractV3R2
} from "@ton/ton";
import { mnemonicToPrivateKey } from "@ton/crypto";



// UQCLWCj49QbBWcRUiP88LtJCzNMrWhiCodrU72EKpH7ylEQM (trust wallet)
// const mnemonics = "profit weapon amused wood fiber season finish addict year coconut pepper trouble"

// UQCRYhRs3jJPVhJx57WeT3n8VrXzVU1bHYi-T0cb_uKG5BGc (okx wallet)
const mnemonics = "purchase leave limit field gentle treat trap chalk tool language cram license"

let keyPair = await mnemonicToPrivateKey(mnemonics.split(" "));

console.log(keyPair.publicKey.toString('hex'))

// 因为 ton 有工作链的概念.. 有符号的32位的整型.. 目前 工作链只有两个
// 主链: -1   ()
// 基本链: 0  (用于日常交易，因为它相对便宜)

// Create wallet contract
let workchain = 0; // Usually you need a workchain 0

console.log("WalletContractV5:   ", WalletContractV5R1.create({ workChain: workchain, publicKey: keyPair.publicKey }).address)
console.log("WalletContractV5R1:   ", WalletContractV5R1.create({ workChain: workchain, publicKey: keyPair.publicKey }).address.toString({ bounceable: false, urlSafe: true }))
console.log()
console.log("WalletContractV4:   ", WalletContractV4.create({ workchain, publicKey: keyPair.publicKey }).address)
console.log("WalletContractV4:   ", WalletContractV4.create({ workchain, publicKey: keyPair.publicKey }).address.toString({ bounceable: false, urlSafe: true }))
console.log()
console.log("WalletContractV1R1: ", WalletContractV1R1.create({ workchain, publicKey: keyPair.publicKey }).address)
console.log("WalletContractV1R1: ", WalletContractV1R1.create({ workchain, publicKey: keyPair.publicKey }).address.toString({ bounceable: false, urlSafe: true }))
console.log("WalletContractV1R2: ", WalletContractV1R2.create({ workchain, publicKey: keyPair.publicKey }).address)
console.log("WalletContractV1R2: ", WalletContractV1R2.create({ workchain, publicKey: keyPair.publicKey }).address.toString({ bounceable: false, urlSafe: true }))
console.log("WalletContractV1R3: ", WalletContractV1R3.create({ workchain, publicKey: keyPair.publicKey }).address)
console.log("WalletContractV1R3: ", WalletContractV1R3.create({ workchain, publicKey: keyPair.publicKey }).address.toString({ bounceable: false, urlSafe: true }))
console.log()
console.log("WalletContractV2R1: ", WalletContractV2R1.create({ workchain, publicKey: keyPair.publicKey }).address)
console.log("WalletContractV2R1: ", WalletContractV2R1.create({ workchain, publicKey: keyPair.publicKey }).address.toString({ bounceable: false, urlSafe: true }))
console.log("WalletContractV2R2: ", WalletContractV2R2.create({ workchain, publicKey: keyPair.publicKey }).address)
console.log("WalletContractV2R2: ", WalletContractV2R2.create({ workchain, publicKey: keyPair.publicKey }).address.toString({ bounceable: false, urlSafe: true }))
console.log()
console.log("WalletContractV3R1: ", WalletContractV3R1.create({ workchain, publicKey: keyPair.publicKey }).address)
console.log("WalletContractV3R1: ", WalletContractV3R1.create({ workchain, publicKey: keyPair.publicKey }).address.toString({ bounceable: false, urlSafe: true }))
console.log("WalletContractV3R2: ", WalletContractV3R2.create({ workchain, publicKey: keyPair.publicKey }).address)
console.log("WalletContractV3R2: ", WalletContractV3R2.create({ workchain, publicKey: keyPair.publicKey }).address.toString({ bounceable: false, urlSafe: true })) 
