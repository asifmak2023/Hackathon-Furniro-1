import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export default function CartData() {
    return (
        <div className=" flex h-full mt-12 mx-6 rounded">
            <table className="w-full text-sm text-left bg-[#F9F1E7] ">
                <thead className="font-bold text-left">
                    <tr>
                        <td> - </td>
                        <td> Product</td>
                        <td> Price</td>
                        <td> Quantity</td>
                        <td> Subtotal</td>
                        <td> - </td>
                    </tr>
                </thead>
                <tbody className="bg-white text-gray-500">
                    <tr className="h-14">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr >
                    <tr>

                        <td><img src="/images/cart-item1.png" alt="" className="bg-[#F9F1E7] rounded-xl" /></td>
                        <td>Asgard Sofa</td>
                        <td>Rs. 250,000.00</td>
                        <td><div>1</div></td>
                        <td>Rs. 250,000.00</td>
                        <td className="text-[#B88E2F] hover:text-amber-800">
                            <button>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </td >
                    </tr>
                </tbody>
            </table>
            <div className="bg-[#F9F1E7] mx-5 w-1/3 ">
                <h2 className="font-bold text-4xl text-center mt-5">Cart Totals</h2>
                <br />
                <br />
                <p className="">Total        </p><span className="text-right">250,000.00</span>
                <p className="">Subtotal     </p><span className="text-right">250,000.00</span>
                <button className="bg-transparent border-2 border-black border-solid hover:border-dotted p-3">Check Out</button>
            </div>

        </div >
    );
}