export default function ContactData() {
    return (
        <div className="mx-40 font-poppins">
            <div className="text-center my-40 ">

                <h1 className="text font-bold text-3xl font-extrabold ">Get In Touch With Us</h1>
                <p className="text font-regular text-lg mb-10 text-gray-600">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="space-y-4 text-gray-700">
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl text-yellow-500">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <h3 className="font-bold">Address</h3>
                            </div>
                            <p className="pl-7">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl text-yellow-500">
                                    <i className="fas fa-phone"></i>
                                </span>
                                <h3 className="font-bold">Phone</h3>
                            </div>
                            <p className="pl-7">Mobile: +(84) 546-6789</p>
                            <p className="pl-7">Hotline: +(84) 456-6789</p>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl text-yellow-500">
                                    <i className="fas fa-clock"></i>
                                </span>
                                <h3 className="font-bold">Working Time</h3>
                            </div>
                            <p className="pl-7">Monday-Friday: 9:00 - 22:00</p>
                            <p className="pl-7">Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                    <form className="space-y-4 bg-white p-6 ">
                        <div>
                            <label className="block text-gray-600 font-bold">Your Name</label>
                            <input id="name" type="text" placeholder="Abc" className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500" />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-bold">Email Address</label>
                            <input id="email" type="email" placeholder="Abc@def.com" className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500" />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-bold">Subject</label>
                            <input id="subject" type="text" placeholder="This is an optional" className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500" />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-bold">Message</label>
                            <textarea id="message" placeholder="Hi! I'd like to ask about" className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500"></textarea>
                        </div>
                        <button type="submit" className="w-50 pr-8 pl-8 pt-5 pb-5 text-white bg-amber-600 rounded-md hover:bg-amber-700">Submit</button >
                    </form>
                </div>
            </div>

        </div>
    );
}