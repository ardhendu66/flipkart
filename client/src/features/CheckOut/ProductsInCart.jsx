import { products } from "./cartData"

export default function () {
    return (
        <>
            {products.map((product) => (
                <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div 
                                className="flex justify-between text-base font-medium text-gray-900"
                            >
                                <h3>
                                    <a href={product.href}>
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="ml-4">{product.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                                {product.color}
                            </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex justify-between text-gray-500">
                                <label
                                    htmlFor="quantity"
                                    className="inline text-sm font-medium leading-6 text-gray-600 mr-1"
                                > Qty </label>
                                <select 
                                    className="border text-black focus:outline-none rounded-sm"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

                            <div className="flex">
                                <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </>
    )
}