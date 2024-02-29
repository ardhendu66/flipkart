import ProductsInCart from './ProductsInCart'
import TotalAmountInCart from './TotalAmountInCart'

export default function() {
    return (
        <div
            className="mx-auto max-w-3xl px-8 pt-3 pb-6 sm:px-16 lg:px-10 shadow-lg rounded-md bg-white mt-12 w-full"
        >
            <h2 className="text-center text-3xl tracking-wide mt-4 font-semibold">
                Cart
            </h2>
            <div className="mt-8">
                <div className="flow-root">
                    <ul role="list"
                        className="-mt-6 divide-y divide-gray-200"
                    >
                        <ProductsInCart />
                    </ul>
                </div>
            </div>
            <TotalAmountInCart />
        </div>
    )
}