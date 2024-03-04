import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { 
    selectAllProducts, 
    fetchProductsAsync, 
    getProductsStatus, 
    fetchProductsByFilterAsync 
} from "../productListSlice"
import ProductGrid from "./components/ProductGrid"
import MobileFilterPanel from "./Filters/MobileFilterPanel"
import DesktopFilters from "./Filters/DesktopFilters"
import SortFunctionality from "./components/SortFunctionality"
import Pagination from "./components/Pagination"
import ViewGrid from "./components/ViewGrid"
import FunnelFilteringButton from "./components/FunnelFilteringButton"

export default () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [filter, setFilter] = useState({})
    const dispatch = useDispatch()
    const [products] = useSelector(selectAllProducts)
    const status = useSelector(getProductsStatus)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductsAsync())
        }
    }, [dispatch, status])

    const handleFilter = (filterName, option) => {
        let newFilter = {...filter, [filterName.id]: option.value}
        setFilter(prev => ({...prev, ...newFilter}))
        dispatch(fetchProductsByFilterAsync(filter))
    }

    const handleSort = (option) => {
        let newFilter = {...filter, _sort: option.sort,}
        setFilter(newFilter)
        dispatch(fetchProductsByFilterAsync(filter))
    }

    return (
        <div className="bg-white mt-16">
            <div>
                <MobileFilterPanel
                    mobileFiltersOpen={mobileFiltersOpen}
                    setMobileFiltersOpen={setMobileFiltersOpen}
                />

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div 
                        className="flex items-baseline justify-between border-b border-gray-200 pb-6"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            All Products
                        </h1>
                        <div className="flex items-center">
                            <SortFunctionality handleSort={handleSort} />
                            <ViewGrid />
                            <FunnelFilteringButton setMobileFiltersOpen={setMobileFiltersOpen} />
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <DesktopFilters handleFilter={handleFilter} />
                            </form>

                            {/* Product grid */}
                            <ProductGrid
                                status={status}
                                products={products}
                            />
                        </div>
                    </section>
                </main>
            </div>
            <Pagination />
        </div>
    )
}