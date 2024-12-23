export default function BlogsData() {
    return (
        <div>
            <div className="container mx-auto py-12">
                <div className="flex flex-wrap lg:flex-nowrap gap-8">
                    {/* Main Content */}
                    <div className="w-full lg:w-2/3 space-y-12 mx-5">
                        {/* Blog Post 1 */}
                        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                            <img src="/images/blog1.png" alt="Blog Image 1" className="w-full" />
                            <div className="p-6">
                                <div className="flex items-center text-xl text-gray-500 space-x-4 mb-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-user mr-1"></i> Admin
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-calendar-alt mr-1"></i> 14 Oct 2022
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-tags mr-1"></i> Wood
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-3">Going all-in with millennial design</h2>
                                <p className="text-gray-600 text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                                <a href="#" className="text-xl font-medium text-blue-600 mt-4 inline-block">Read more</a>
                            </div>
                        </div>
                        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                            <img src="/images/blog1.png" alt="Blog Image 1" className="w-full" />
                            <div className="p-6">
                                <div className="flex items-center text-xl text-gray-500 space-x-4 mb-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-user mr-1"></i> Admin
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-calendar-alt mr-1"></i> 14 Oct 2022
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-tags mr-1"></i> Wood
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-3">Going all-in with millennial design</h2>
                                <p className="text-gray-600 text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                                <a href="#" className="text-xl font-medium text-blue-600 mt-4 inline-block">Read more</a>
                            </div>
                        </div>
                        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                            <img src="/images/blog1.png" alt="Blog Image 1" className="w-full" />
                            <div className="p-6">
                                <div className="flex items-center text-xl text-gray-500 space-x-4 mb-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-user mr-1"></i> Admin
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-calendar-alt mr-1"></i> 14 Oct 2022
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-tags mr-1"></i> Wood
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-3">Going all-in with millennial design</h2>
                                <p className="text-gray-600 text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                                <a href="#" className="text-xl font-medium text-blue-600 mt-4 inline-block">Read more</a>
                            </div>
                        </div>
                        {/* Additional Blog Posts */}
                        {/* Repeat the blog post structure */}
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-12 space-y-8 mx-auto">
                            {/* Search Box */}
                            <div className="bg-white shadow-sm rounded-lg p-4">
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Search Something 🔎"
                                        className="w-full border border-gray-300 p-2 rounded-lg text-center focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                    />
                                    
                                </form>
                            </div>

                            {/* Categories */}
                            <div className="bg-white shadow-sm rounded-lg p-4 mx-8 ">
                                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                                <ul className="space-y-2">
                                    <li className="flex justify-between text-gray-600">
                                        <span>Crafts</span>
                                        <span>2</span>
                                    </li>
                                    <li className="flex justify-between text-gray-600">
                                        <span>Design</span>
                                        <span>8</span>
                                    </li>
                                    <li className="flex justify-between text-gray-600">
                                        <span>Handmade</span>
                                        <span>7</span>
                                    </li>
                                    <li className="flex justify-between text-gray-600">
                                        <span>Interior</span>
                                        <span>1</span>
                                    </li>
                                    <li className="flex justify-between text-gray-600">
                                        <span>Wood</span>
                                        <span>6</span>
                                    </li>
                                </ul>
                            </div>




                            {/* Recent Posts */}





                            <div className="bg-white shadow-sm rounded-lg p-4 mx-8">
                                <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
                                <ul className="space-y-3 text-2xl">
                                    <li className="flex items-center space-x-3">
                                        <img
                                            src="/images/post1.png"
                                            alt="Post Image"
                                            className="w-12 h-12 rounded-md"
                                        />
                                        <div>
                                            <p className="text-2xl font-medium">Going all-in with millennial design</p>
                                            <span className="text-xs text-gray-500">03 Aug 2022</span>
                                        </div >
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <img
                                            src="/images/post2.png"
                                            alt="Post Image"
                                            className="w-12 h-12 rounded-md"
                                        />
                                        <div>
                                            <p className="text-2xl font-medium">Exploring new ways of decorating</p>
                                            <span className="text-xs text-gray-500">03 Aug 2022</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <img
                                            src="/images/post3.png"
                                            alt="Post Image"
                                            className="w-12 h-12 rounded-md"
                                        />
                                        <div>
                                            <p className="text-2xl font-medium">Handmade pieces that took time to make</p>
                                            <span className="text-xs text-gray-500">03 Aug 2022</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <img
                                            src="/images/post4.png"
                                            alt="Post Image"
                                            className="w-12 h-12 rounded-md"
                                        />
                                        <div>
                                            <p className="text-2xl font-medium">Modern home in Milan</p>
                                            <span className="text-xs text-gray-500">03 Aug 2022</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <img
                                            src="/images/post5.png"
                                            alt="Post Image"
                                            className="w-12 h-12 rounded-md"
                                        />
                                        <div>
                                            <p className="text-2xl font-medium">Colrful office redesign</p>
                                            <span className="text-xs text-gray-500">03 Aug 2022</span>
                                        </div>
                                    </li>



                                    {/* Repeat recent post items */}



                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}