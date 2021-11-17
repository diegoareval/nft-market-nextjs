import useAssets from "../../hooks/useAssets.js"
const myAssets = ()=> {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isWorking, nfts} = useAssets()

    if (isWorking && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets owned</h1>);

    return (
        <div className="flex justify-center">
            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                    {
                        nfts.map((nft, i) => (
                            <div key={i} className="border shadow rounded-xl overflow-hidden">
                                <img src={nft.image} className="rounded" />
                                <div className="p-4 bg-black">
                                    <p className="text-2xl font-bold text-white">Price - {nft.price} Matic</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>)

}

export default myAssets;

