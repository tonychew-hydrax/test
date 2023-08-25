import { ethers } from "ethers";
import { HDNodeWallet } from "ethers/wallet";

const hdwallet =  () => {
  let hdnode = ethers.utils.HDNode.fromExtendedKey(
    "xpub6EU9wCZtFWLvSuqz6Apd4xWjx2LWToJhAaswLRvb9XEKcRS9p4f63bGNhVboDqxDfERqGtA3gkxFj6CYynxXKmsrkV8HEjcVcGu4orqxmzQ",
    "m/44'/60'/0'/0"
  );
  let wallet = hdnode.derivePath("0");
  console.log(wallet.address);
};

hdwallet();
