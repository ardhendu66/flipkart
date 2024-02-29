import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import CheckOutInfo from './CheckOutInfo'
import CartComponent from './CartComponent'

export default function () {

    return (
        <div 
            className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-8 lg:pr-10 lg:py-16 lg:pl-12'
        >
            <div className='max-lg:px-24 max-lg:py-24 lg:col-span-5 md:col-span-1'>
                <CheckOutInfo />
            </div>
            <div 
                className='max-lg:px-10 max-lg:py-16 max-lg:-mt-24 lg:col-span-3 md:col-span-1 max-lg:hidden'
            >
                <CartComponent />
            </div>
        </div>
    )
}
