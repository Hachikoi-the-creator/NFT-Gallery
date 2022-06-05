import Head from "next/head";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  returnNFTRequest,
  returnNFTsFromUser,
  returnNFTsFromCollection,
  returnNFTsCollectionWithinUser,
} from "../utils/functions";
// 0x4cE21c543C0CFb33BFb750831F6177c97950c054 - random address
// --------
// -------- ORIGINAL
// --------
const Home = () => {
  const walletAddress = useRef("");
  const collectionAddress = useRef("");
  const [NFTs, setNFTs] = useState([]);

  /**
   * @dev Copied func
   */

  //
  //
  //
  const btnStyles =
    "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5";
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        {/* Wallet Address */}
        <input
          ref={walletAddress}
          className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50"
          type="text"
          placeholder="Add your wallet address"
        ></input>

        {/* Collection Address */}
        <input
          ref={collectionAddress}
          className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50"
          type="text"
          placeholder="Add the collection address"
        ></input>

        {/* btns container */}
        <div className="flex justify-around md:flex-col">
          {/* btn to get all NFT's from account */}
          <button
            className={btnStyles}
            onClick={() => {
              returnNFTsFromUser(walletAddress);
            }}
          >
            Get all NFTs the user has
          </button>

          {/* btn to get all NFTs from given collection */}
          <button
            className={btnStyles}
            onClick={() => returnNFTsFromCollection(collectionAddress)}
          >
            Get all NFT from collection
          </button>

          {/* btn to get all NFTs from collection that user has */}
          <button
            className={btnStyles}
            onClick={() =>
              returnNFTsCollectionWithinUser(walletAddress, collectionAddress)
            }
          >
            Get all NFT from collection that the user has
          </button>
        </div>
      </div>
      {/* nft collection container */}
      <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
        {
          NFTs.length && true
          // NFTs.map((nft) => {
          //   return <NFTCard nft={nft}></NFTCard>;
          // })
        }
      </div>
    </div>
  );
};

export default Home;
