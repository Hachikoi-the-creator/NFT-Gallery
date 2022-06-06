import NFTCard from "../components/NFTCard";

const BASE_URL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}/getNFTs/`;
const REQUEST_OPTIONS = { method: "GET" };

/**
 * @dev (btn1) returns a list of all NFT owned by user
 * @param {*} walletAdx
 * @returns list of objects (nfts from user)
 */
export async function returnNFTsFromUser(walletAdx) {
  const fetchURL = `${BASE_URL}?owner=${walletAdx}`;

  const nfts = await fetch(fetchURL, REQUEST_OPTIONS)
    .then((data) => data.json())
    .catch((e) => {
      console.error(e);
      return -1;
    });

  return NFTCardFormatedProps(nfts.ownedNfts);
}

/**
 * @dev (btn2) returns an array of NFT from a collection
 * @param {*} collectionAdx
 */
export async function returnNFTsFromCollection(collectionAdx) {
  const newBaseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}/getNFTsForCollection/`;
  const fetchURL = `${newBaseURL}?contractAddress=${collectionAdx}&withMetadata=true`;

  const nfts = await fetch(fetchURL, REQUEST_OPTIONS)
    .then((data) => data.json())
    .catch((e) => {
      console.log(e);
    });

  return NFTCardFormatedProps(nfts.nfts);
}

/**
 * @dev (btn3) formats API request and return a solved promise or -1 if failed
 * @param {*} walletAdx user address the user gave us
 * @param {*} collectionAdx NFT collection address the user gave us
 * @returns a solved promise from NFT fetch
 */
export async function returnNFTsCollectionWithinUser(walletAdx, collectionAdx) {
  const fetchURL = `${BASE_URL}?owner=${walletAdx}&contractAddresses%5B%5D=${collectionAdx}`;

  const nfts = await fetch(fetchURL, REQUEST_OPTIONS)
    .then((data) => data.json())
    .catch((e) => {
      console.error(e);
      return -1;
    });

  // console.log(nfts.lenght, nfts.ownedNfts);
  return NFTCardFormatedProps(nfts.ownedNfts);
}

//
// - format outputs func
//
/**
 * @dev something cool :D
 * @param NftsArray an array of objects containing all the data of the NFT
 * @returns an Array of <NFTCard />'s
 */
export function NFTCardFormatedProps(NftsArray = []) {
  const arrayOfProps = NftsArray.map((nftObject, index) => {
    //cast to make it more legible
    const descCast = nftObject.description;
    const idCast = nftObject.contract.address;

    // variables to return
    const imgUrl = nftObject.media[0].gateway;
    const title = nftObject.title;
    const contractAddress = nftObject.contract.address.toLowerCase();
    const desc = descCast
      ? `${descCast.substr(0, 150)}...`
      : "Theres no description";

    return { imgUrl, title, contractAddress, desc };
  });

  return arrayOfProps;
}
