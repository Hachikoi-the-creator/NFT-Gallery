import React from "react";

export async function returnNFTRequest(collectionAddress, walletAddress) {
  console.log("fetching nfts");
  let nfts; //store the response object
  let fetchURL; //store nft to make the request
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}/getNFTs/`;
  const requestOptions = {
    method: "GET",
  };

  if (!collectionAddress.length) {
    //? fetch all nft linked to Y address
    fetchURL = `${baseURL}?owner=${walletAddress}`;
  } else {
    //? fetching nfts of X collection owned by Y address
    console.log("else statement runing");
    fetchURL = `${baseURL}?owner=${walletAddress}&contractAddresses%5B%5D=${collectionAddress}`;
  }

  nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());

  return nfts;
}
//nfts from user -  fetchURL = `${baseURL}?owner=${walletAddress}`
//nfts from collection
// nft from collection && user - fetchURL = `${baseURL}?owner=${walletAddress}&contractAddresses%5B%5D=$

// btn1 handeler, //! return a list of objects
export function returnNFTsFromUser(resObject = {}) {
  console.log("function 1");
}

// btn2 handeler
export function returnNFTsFromCollection(resObject = {}) {
  console.log("function 2");
}

// btn3 handeler
export function returnNFTsCollectionWithinUser(resObject = {}) {
  console.log("function 3");
}
