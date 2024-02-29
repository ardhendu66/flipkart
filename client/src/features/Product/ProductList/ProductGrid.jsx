import { NavLink } from "react-router-dom"
import { products } from "./productData"
import { StarIcon } from "@heroicons/react/20/solid"

export default function() {
    return (
        <div className="lg:col-span-3">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8">
                    <div 
                        className="sm:-mt-16 max-sm:mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
                    >
                        {products.map(product => (
                            <NavLink to={'/product'} key={product.id}>
                                <div 
                                    key={product.id} 
                                    className="group relative shadow-xl p-2 rounded-md border-solid border border-gray-400"
                                >
                                    <div 
                                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-300 lg:aspect-none group-hover:opacity-75 lg:h-80"
                                    >
                                        <img
                                            src={product.thumbnail}
                                            alt={product.altImage}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-700">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                />
                                                {product.title}

                                                {/* <NavLink 
                                                    to={'/product'}
                                                    // href={product.href}
                                                > </NavLink> */}
                                            </h3>
                                            <p 
                                                className="mt-1 text-sm text-gray-500 flex justify-start items-center"
                                            >
                                                <StarIcon 
                                                    className='w-4 h-4 mr-1 text-yellow-500'
                                                />
                                                {product.rating}
                                            </p>
                                        </div>
                                        <div 
                                            className="flex flex-col text-sm font-medium text-gray-900"
                                        >
                                            <span className="line-through text-gray-500">
                                                ₹{product.price}
                                            </span>
                                            <span>
                                                ₹{
                                                    Math.floor(
                                                    product.price*(1-product.discountPercentage/100)
                                                    ) + 1
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}