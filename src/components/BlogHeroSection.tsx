export default function BlogHeroSection() {

    return (
        <div>
            <section className="relative h-50 bg-gradient-to-r from-yellow-50 to-yellow-100">
                <img src="/images/shop-top.jpeg" alt="Product Image"
                    className="absolute inset-0 object-cover w-full h-full opacity-50" />
                <div className="container mx-auto flex items-center justify-center h-full">
                    <div className="rounded-sm shadow-md px-5 py-10 z-10 min-h-10  mt-10 mb-10">

                        <h1 className="text-4xl font-regular mb-8 text-Black-600">Blog</h1>
                        <p><span className="font-bold underline">  <a href="/">Home</a></span> &gt; Blog</p>
                    </div>
                </div>
            </section>
        </div>
    );

}