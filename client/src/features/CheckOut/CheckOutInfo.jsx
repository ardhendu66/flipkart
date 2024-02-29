import AddressPayment from './AddressPayment'
import CartComponent from './CartComponent'
import Email from './InformationForm/Email'
import FirstName from './InformationForm/FirstName'
import LastName from './InformationForm/LastName'
import Country from './InformationForm/Country'
import Street from './InformationForm/Street'
import City from './InformationForm/City'
import State from './InformationForm/State'
import Zipcode from './InformationForm/ZipCode'

export default function CheckOutInfo() {
    return (
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-2xl py-3 font-semibold leading-7 text-gray-900">
                        Personal Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Use a permanent address where you can receive mail
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <FirstName />

                        <LastName />

                        <Email />

                        <Country />

                        <Street />

                        <City />

                        <State />

                        <Zipcode />
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <CancelButton />
                    <SaveButton />
                </div>

                <div className='lg:hidden max-sm:-mx-14'>
                    <CartComponent />
                </div>

                <AddressPayment />
            </div>
        </form>
    )
}

const CancelButton = () => {
    return (
        <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
        >
            Cancel
        </button>
    )
}

const SaveButton = () => {
    return (
        <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Add New Address
        </button>
    )
}