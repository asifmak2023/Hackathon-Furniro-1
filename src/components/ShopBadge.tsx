export default function ShopBadge() {
    return (

        <div className="bg-[#F9F1E7] h-full mb-0">

            <div className=" flex first-badge text-black py-12 px-5 justify-around ">
                
                <div className="">
                    <img src="/images/trophie.png" alt="" className="h-20 float-left" />
                    <h2 className="text-2xl subpixel-antialiased font-bold float-right mt-2 ml-2">High Quality <br /><span className="text-lg subpixel-antialiased text-gray-400">Crafted from top materials</span ></h2>
                </div >
                <div>

                    <img src="/images/verified.png" alt="" className="h-20 float-left " />
                    <h2 className="text-2xl subpixel-antialiased font-bold float-right mt-2 ml-2">Warranty Protection <br /><span className="text-lg subpixel-antialiased text-gray-400">Over 2 years</span></h2>
                </div>
                <div>

                    <img src="/images/shipping.png" alt="" className="h-20 float-left " />
                    <h2 className="text-2xl subpixel-antialiased font-bold float-right mt-2 ml-2">Free Shipping <br /><span className="text-lg subpixel-antialiased text-gray-400">Order Over 150 $s</span></h2>
                </div>
                <div>

                    <img src="/images/support.png" alt="" className="h-20 float-left " />
                    <h2 className="text-2xl subpixel-antialiased font-bold float-right mt-2 ml-2">24/7 Support <br /><span className="text-lg subpixel-antialiased text-gray-400">Dedicated support</span></h2>
                </div>
            </div>
        </div>

    );
}