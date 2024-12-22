export default function BlogsData() {
    return (
        <div>
            <div className="container mx-auto py-12">

                <div className="flex flex-wrap lg:flex-nowrap gap-8">

                    <div className="w-full lg:w-2/3 space-y-12">

                        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                            <img src="/images/blog1.png" alt="Blog Image 1" className="w-full" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
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
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                                <a href="#" className="text-sm font-medium text-blue-600 mt-4 inline-block">Read more</a>
                            </div>
                        </div>

                        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                            <img src="/images/blog2.png" alt="Blog Image 2" className="w-full" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-user mr-1"></i> Admin
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-calendar-alt mr-1"></i> 14 Oct 2022
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-tags mr-1"></i> Handmade
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-3">Exploring new ways of decorating</h2>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                </p>
                                <a href="#" className="text-sm font-medium text-blue-600 mt-4 inline-block">Read more</a>
                            </div>
                        </div>

                        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                            <img src="/images/blog3.png" alt="Blog Image 3" className="w-full" />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4" />
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
                            <h2 className="text-xl font-semibold mb-3">Handmade pieces that took time to make</h2>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                            </p>
                            <a href="#" className="text-sm font-medium text-blue-600 mt-4 inline-block">Read more</a>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-2">
                        <button className="w-8 h-8 bg-yellow-500 text-white rounded-full">1</button>
                        <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">2</button>
                        <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">3</button>
                        <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">Next</button>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 space-y-8">

                    <div className="bg-white shadow-sm rounded-lg p-4">
                        <form>
                            <input type="text" placeholder="Search" className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500" />
                        </form>
                    </div>
                    <div className="bg-white shadow-sm rounded-lg p-4">
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

                    <div className="bg-white shadow-sm rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <img src="https://via.placeholder.com/80" alt="Post Image" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-sm font-medium">Going all-in with millennial design</p>
                                    <span className="text-xs text-gray-500">03 Aug 2022</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src="https://via.placeholder.com/80" alt="Post Image" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-sm font-medium">Exploring new ways of decorating</p>
                                    <span className="text-xs text-gray-500">03 Aug 2022</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src="https://via.placeholder.com/80" alt="Post Image" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-sm font-medium">Handmade pieces that took time to make</p>
                                    <span className="text-xs text-gray-500">03 Aug 2022</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src="https://via.placeholder.com/80" alt="Post Image" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-sm font-medium">Modern home in Milan</p>
                                    <span className="text-xs text-gray-500">03 Aug 2022</span>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src="https://via.placeholder.com/80" alt="Post Image" className="w-12 h-12 rounded-md" />
                                <div>
                                    <p className="text-sm font-medium">Colorful office redesign</p>
                                    <span className="text-xs text-gray-500">03 Aug 2022</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}