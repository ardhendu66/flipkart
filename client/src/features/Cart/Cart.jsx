import { useState } from "react"
import ProductsInCart from "./ProductsInCart"
import TotalAmountInCart from "./TotalAmountInCart"

export default function Example() {

    return (
        <div className="pb-12">
            <div 
                className="mx-auto max-w-5xl px-4 pt-3 pb-6 sm:px-16 shadow-lg rounded-md bg-white mt-12"
            >
                <h2 className="text-center text-3xl tracking-wide mt-4 font-semibold">Cart</h2>
                <div className="mt-8">
                    <div className="flow-root">
                        <ul
                            role="list"
                            className="-mt-6 divide-y divide-gray-200"
                        >
                            <ProductsInCart />
                        </ul>
                    </div>
                </div>

                <TotalAmountInCart />
            </div>
        </div>
    )
}