import { NavLink } from "react-router-dom"

export default function () {
    return (
        <div className="border-t border-gray-200 py-6 px-0">
            <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 max-sm:text-wrap">
                Shipping and taxes calculated at checkout.
            </p>
            
            <PaymentButton />

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                    or&nbsp;&nbsp;
                    <ContinueShopping />
                </p>
            </div>
        </div>
    )
}

const PaymentButton = () => {
    return (
        <div className="mt-6">
            <NavLink
                to={'/pay'}
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-indigo-700"
            > Pay & Order </NavLink>
        </div>
    )
}

const ContinueShopping = () => {
    return (
        <NavLink to={'/'}>
            <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
            >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
            </button>
        </NavLink>
    )
}