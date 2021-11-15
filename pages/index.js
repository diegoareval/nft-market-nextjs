import {ethers} from 'ethers';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';
import {nftAddress, nftMarketAddress} from '../config';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>
  )
}
