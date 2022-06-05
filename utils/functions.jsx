import React from "react";

const BASE_URL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}/getNFTs/`;
const REQUEST_OPTIONS = { method: "GET" };

/**
 * @dev (btn1) returns a list of all NFT owned by user
 * @param {*} walletAdx
 * @returns list of objects (nfts from user)
 */
export async function returnNFTsFromUser(walletAdx) {
  walletAdx = walletAdx.current.value;

  const fetchURL = `${BASE_URL}?owner=${walletAdx}`;

  const nfts = await fetch(fetchURL, REQUEST_OPTIONS)
    .then((data) => data.json())
    .catch((e) => {
      console.error(e);
      return -1;
    });

  console.log(nfts);
}

/**
 * @dev (btn2) returns an array of NFT from a collection
 * @param {*} collectionAdx
 */
export async function returnNFTsFromCollection(collectionAdx) {
  collectionAdx = collectionAdx.current.value;

  const newBaseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}/getNFTsForCollection/`;
  const fetchURL = `${newBaseURL}?contractAddress=${collectionAdx}&withMetadata=true`;

  const nfts = await fetch(fetchURL, REQUEST_OPTIONS)
    .then((data) => data.json())
    .catch((e) => {
      console.log(e);
    });

  console.log(nfts);
}

/**
 * @dev (btn3) formats API request and return a solved promise or -1 if failed
 * @param {*} walletAdx user address the user gave us
 * @param {*} collectionAdx NFT collection address the user gave us
 * @returns a solved promise from NFT fetch
 */
export async function returnNFTsCollectionWithinUser(walletAdx, collectionAdx) {
  walletAdx = walletAdx.current.value;
  collectionAdx = collectionAdx.current.value;

  const fetchURL = `${BASE_URL}?owner=${walletAdx}&contractAddresses%5B%5D=${collectionAdx}`;

  const nfts = await fetch(fetchURL, REQUEST_OPTIONS)
    .then((data) => data.json())
    .catch((e) => {
      console.error(e);
      return -1;
    });

  console.log(nfts);
}
