import CheckOutAddresses from "./CheckOutAddresses"

export default function() {
    return (
        <>
            <div>
                <label htmlFor="address" className='font-bold text-2xl leading-loose'>
                    Address
                </label>
                <p className='leading-6'>
                    Choose from existing addresses
                </p>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
            
                <CheckOutAddresses />

                <div className="mt-10 space-y-10">
                    <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                            Payment Methods
                        </legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Choose One
                        </p>
                        <div className="mt-6 space-y-6">
                            <CashPayment />
                            <CardPayment />
                            <UPIPayment />
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    )
}

function CashPayment() {
    return (
        <div className="flex items-center gap-x-3">
            <input
                id="cash-on-delivery"
                name="payments"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
                htmlFor="cash-on-delivery"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Cash on delivery
            </label>
        </div>
    )
}

function CardPayment() {
    return (
        <div className="flex items-center gap-x-3">
            <input
                id="card-payment"
                name="payments"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
                htmlFor="card-payment"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Credit / Debit / ATM Card
            </label>
        </div>
    )
}

function UPIPayment() {
    return (
        <div className="flex items-center gap-x-3">
            <input
                id="upi"
                name="payments"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
                htmlFor="upi"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                UPI
            </label>
        </div>
    )
}