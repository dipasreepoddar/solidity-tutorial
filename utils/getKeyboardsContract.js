import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x02832814d507BB4f1dB9AD233D984586CDbD88DF';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
