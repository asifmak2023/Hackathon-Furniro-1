export default function ThirdSection() {
    return (
<div className="container  w-full h-full ">

        <div className="container mx-auto flex ">
            <div className="text-center mb-8 bg-amber-100">
                <h1 className="text-4xl font-bold mb-2 mt-40 text-neutral-600">50+ Beautiful rooms inspiration</h1>
                <p className="text-lg">Our designer already made a lot of beautiful prototypes of rooms that inspire you</p>
                <button className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 mt-4">Explore More</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img src="images/inner-peace.png" alt="Bedroom" className="w-full"></img>
                    <div className="p-4">
                        <p className="text-gray-700">01 -- Bedroom</p>
                        <h2 className="text-xl font-semibold mb-2">Inner Peace</h2>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img src="images/thd-1.png" alt="Living Room" className="w-full"></img>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Cozy Corner</h2>
                        <p className="text-gray-700">Living Room</p>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <img src="images/thd-2.png" alt="Kitchen" className="w-full"></img>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Modern Kitchen</h2>
                        <p className="text-gray-700">Kitchen</p>
                    </div>
                </div>
            </div>
        </div>

        </div>

    );
}