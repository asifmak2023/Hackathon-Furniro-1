export default function HeroSection() {
    return (
      <section className="relative h-screen bg-gradient-to-r from-yellow-50 to-yellow-100">
        <img src="/images/hero.jpg" alt="Product Image" className="absolute inset-0 object-cover w-full h-full " />
        <div className="container mx-auto flex items-center justify-end h-full">
          <div className="bg-yellow-100 rounded-sm shadow-md px-5 py-10 z-10 w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">New Arrival</h2>
            <h1 className="text-4xl font-bold mb-8 text-yellow-600">Discover Our New Collection</h1>
            <p className="mb-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-yellow-600 text-white font-bold py-4 px-6">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    );
  } 