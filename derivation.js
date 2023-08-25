import { ethers } from "ethers";
import { HDNodeWallet } from "ethers/wallet";

const hdwallet1 =  () => {
  console.log("hdwallet")

  const HDNode = ethers.HDNodeWallet.fromExtendedKey("xpub661MyMwAqRbcGXSTUwJkaLaZFy6xdVk8XuRuSEFThgCPFEjrh9WAyREtMhuHA7XMMDXXTm41GfjKDCsLJ2fGfVp1ACyuDKwsShNcGWenHET");


  console.log("HDNode ", HDNode)
  console.log("HDNode ", HDNode.address)
  console.log("HDNode ", HDNode.index)
  console.log("HDNode ", HDNode.extendedKey)
  console.log("HDNode ", HDNode.derivePath(`m/44'/60'/0'/0/1`))

  const address0 = HDNode.derivePath(`m/44'/60'/0'/0/1`);
  //const address1 = HDNode.derivePath("1").address;

  console.log("address0 ", address0)
  //console.log("address0 ", address1)
};

const hdwallet2 =  () => {
  const wallet = ethers.Wallet.createRandom()
  console.log("wallet ", wallet)
  const words = wallet.mnemonic.phrase
  console.log("words ", words)

  //let node = ethers.HDNodeWallet.fromMnemonic(words )
  //let account1 = node.derivePath("m/44'/60'/0'/0/0") 
  //let account2 = node.derivePath("m/44'/60'/0'/0/1")
}

const hdwallet3 =  () => {
 const words = ethers.HDNode.entropyToMnemonic(ethers.utils.randomBytes(32))

 console.log("words ", words )
}

hdwallet1();
