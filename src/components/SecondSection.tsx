export default function SecondSection() {

    return (
        <div className="px-10 py-16 text-center container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            <h1 className="text font-bold text-3xl">Browse The Range</h1>
            <p className="text font-regular text-xl mb-10 text-gray-600">We have all types of variety availible.</p>

            <div className="flex flex-row">
                <div className="max-w-sm bg-white rounded-lg room-card pr-10">
                    <a href="#">
                        <img className="rounded-t-lg" src="/images/dining.png" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dining</h5>
                        </a>

                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg room-card pr-10">
                    <a href="#">
                        <img className="rounded-t-lg" src="/images/living.png" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Living</h5>
                        </a>


                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg room-card pr-10">
                    <a href="#">
                        <img className="rounded-t-lg" src="/images/bedroom.png" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bedroom</h5>
                        </a>

                    </div>
                </div>

            </div>





        </div>
    );
}