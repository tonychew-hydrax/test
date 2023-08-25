import { ethers } from "ethers";
import { HDNodeWallet } from "ethers/wallet";

const HDNode = ethers.HDNodeWallet.fromExtendedKey("xpub6EbwKPGa5EfVak6zHDTT4K83mgXPkz5WFDNGzZDuq1XdfsnteuRfAx27s5mdtJWHDAa538nWUozbYnRd5cVUhCZfDe6adQMBB7rfj6eyERo")
console.log("HDNode",HDNode)

const address0 = HDNode.derivePath("0");
const address1 = HDNode.derivePath("1");
const address2 = HDNode.derivePath("2");
const address3 = HDNode.derivePath("3");
const address4 = HDNode.derivePath("4");
const address5 = HDNode.derivePath("5");

console.log("address0 ", address0)
console.log("address1 ", address1)
console.log("address2 ", address2)
console.log("address3 ", address3)
console.log("address4 ", address4)
console.log("address5 ", address5)