import Head from "next/head";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  returnNFTsFromUser,
  returnNFTsFromCollection,
  returnNFTsCollectionWithinUser,
} from "../utils/fetchFunctions";
import NFTCard from "../components/NFTCard";
// 0x4cE21c543C0CFb33BFb750831F6177c97950c054 - random address
// --------
// -------- ORIGINAL
// --------
const Home = () => {
  const walletAddress = useRef("");
  const collectionAddress = useRef("");
  const [NFTs, setNFTs] = useState([]);

  /**
   * @dev (btn1)check if the walletAddress has a value,
   * run exeternal function,
   * update the NFTs state variable
   */
  //!DONE
  function handleAllNFTsFromUser() {
    const currentVal = walletAddress.current.value;
    if (currentVal) {
      // returns solved promise [{nftProps},{nftProps}]
      const nfts = returnNFTsFromUser(currentVal);
      console.log(currentVal);

      nfts
        .then((res) => {
          console.log("len ", res.length, "nfts: ", res);
          setNFTs(res);
        })
        .catch((err) => console.log(err));
    } else {
      window.alert("Please fill up the input whit a wallet addres");
    }
  }

  /**
   * @dev (btn2)check if the collectionAddress has a value,
   * run exeternal function,
   * update the NFTs state variable
   */
  // !DONE
  function handleAllNFTFromCollection() {
    const currentVal = collectionAddress.current.value;

    if (currentVal) {
      // returns solved promise [{nftProps},{nftProps}]
      const nfts = returnNFTsFromCollection(currentVal);

      nfts
        .then((res) => {
          console.log("len ", res.length, "nfts: ", res);
          setNFTs(res);
        })
        .catch((err) => console.log(err));
    } else {
      window.alert(
        "Please fill up the input whit a wallet addres && collection address"
      );
    }
  }

  /**
   * @dev (btn3)check if both inputs have a value,
   * run exeternal function,
   * update the NFTs state variable
   */
  function handleNFTsWithinWalletFromCollection() {
    const currentAdx = walletAddress.current.value;
    const currentColect = collectionAddress.current.value;

    if (currentAdx && currentColect) {
      const nfts = returnNFTsCollectionWithinUser(currentAdx, currentColect);
      console.log(nfts);

      nfts
        .then((res) => {
          console.log("len ", res.length, "nfts: ", res);
          setNFTs(res);
        })
        .catch((err) => console.log(err));
    } else {
      window.alert("Please fill up the input whit a wallet addres");
    }
  }

  //
  //
  //
  const btnStyles =
    "bg-red-500 py-2 px-4 m-2 rounded text-white hover:bg-red-700";
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

        <div className="flex justify-around flex-col md:flex-row">
          {/* btn to get all NFT's from account */}
          <button className={btnStyles} onClick={() => handleAllNFTsFromUser()}>
            Get all NFTs the user has
          </button>

          {/* btn to get all NFTs from given collection */}
          <button
            className={btnStyles}
            onClick={() => handleAllNFTFromCollection()}
          >
            Get all NFT from collection
          </button>

          {/* btn to get all NFTs from collection that user has */}
          <button
            className={btnStyles}
            onClick={() => handleNFTsWithinWalletFromCollection()}
          >
            Get all NFT from collection that the user has
          </button>
        </div>
      </div>
      {/* nft collection container */}
      <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
        {NFTs.map((NftObject, index) => (
          <NFTCard
            key={index}
            id={index}
            imgUrl={NftObject.imgUrl}
            adx={NftObject.contractAddress}
            title={NftObject.title}
            desc={NftObject.desc}
          />
        ))}
        {/* {moreTest} */}
      </div>
    </div>
  );
};

export default Home;
