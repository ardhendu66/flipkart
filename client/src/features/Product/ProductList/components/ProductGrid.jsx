import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { StarIcon } from "@heroicons/react/20/solid"
import { selectAllProducts, fetchProductsAsync, getProductsStatus } from "../../productListSlice"

export default function () {
    const dispatch = useDispatch()
    const [products] = useSelector(selectAllProducts)
    const status = useSelector(getProductsStatus)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductsAsync())
        }
    }, [dispatch, status])


    return (
        <>
            {
                status === 'loading' ? <h3>loading...</h3> :
                status === 'failed' ? <h3>Error...</h3> :
                <div className="lg:col-span-3">
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8">
                            <div
                                className="sm:-mt-16 max-sm:mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
                            >
                                {/* {products && products.map(e => {})} */}
                                {products?.map(product => (
                                    <NavLink to={'/product'} key={product.id}>
                                        <div
                                            key={product.id}
                                            className="group relative shadow-xl p-2 rounded-md border-solid border border-gray-300"
                                        >
                                            <div
                                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-300 lg:aspect-none group-hover:opacity-75 lg:h-52 sm:h-60 max-sm:h-80"
                                            >
                                                <img
                                                    src={product.thumbnail}
                                                    alt={product.altImage}
                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                />
                                            </div>
                                            <hr className="mt-2 border-t-[1.6px]" />
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm font-semibold text-gray-700">
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        />
                                                        {product.title}

                                                        {/*
                                                            <NavLink to={'/product'}
                                                                // href={product.href}>
                                                            </NavLink>
                                                        */}

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
                                                                product.price * (
                                                                    1 - 0.01 * product.discountPercentage
                                                                )
                                                            )
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
            }
        </>
    )
}