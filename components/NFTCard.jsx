export const NFTCard = ({ title, imgUrl, adx, desc, id }) => {
  return (
    <div className="w-1/4 flex flex-col ">
      <div className="rounded-md">
        <img
          loading="lazy"
          className="object-cover h-128 w-full rounded-t-md"
          src={imgUrl ? imgUrl : "/notFound.png"}
        ></img>
      </div>
      <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
        <div className="">
          <h2 className="text-xl text-gray-800">{title}</h2>
          <p className="text-gray-600">Id: {id}</p>
          <p className="text-gray-600">
            {`${adx.slice(0, 7)}...${adx.slice(adx.length - 4)}`}
          </p>
        </div>

        <div className="flex-grow mt-2">
          <p className="text-gray-600">{desc}</p>
        </div>
        <div className="flex justify-center mb-1">
          <a
            target="_blank"
            href={`https://etherscan.io/token/${adx}`}
            className="py-2 px-4 bg-blue-500 w-1/2 text-center rounded-m text-white cursor-pointer"
          >
            View on etherscan
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
