import { people } from "./cartData"

export default function () {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {people.map((person) => (
                <li 
                    key={person.id} 
                    className="flex justify-between gap-x-6 py-4 px-4 bg-slate-300 my-3 shadow-lg rounded-sm max-sm:flex-wrap"
                >
                    <div className="flex min-w-0 gap-x-4">
                        <input
                            id="card-payment"
                            name="payments"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 relative top-[50%]"
                        />
                        <div className="min-w-0 flex-auto">
                            <div className="text-md font-bold leading-6 text-gray-900">
                                {person.name}
                            </div>
                            <div className="mt-1 text-wrap truncate text-xs leading-5 text-gray-500">
                                <label htmlFor="street" className="font-semibold text-sm text-black">
                                    Street - 
                                </label>&nbsp;
                                {person.street}
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                                <label htmlFor="city" className="font-semibold text-sm text-black">
                                    City - 
                                </label>&nbsp;
                                {person.city}
                            </div>
                            <div className="mt-1 truncate text-xs leading-5 text-gray-500">
                                <label htmlFor="state" className="font-semibold text-sm text-black">
                                    State - 
                                </label>&nbsp;
                                {person.state}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end max-sm:relative max-sm:ml-7  max-sm:flex-wrap max-sm:justify-start">
                        <label htmlFor="phone" className="font-semibold text-sm text-nowrap">
                            Phone -
                        </label>&nbsp;
                        <div className="text-sm text-gray-500">
                            {person.phoneNo}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}