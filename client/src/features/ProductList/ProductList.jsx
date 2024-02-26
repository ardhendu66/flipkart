import { useState } from "react"
import { FunnelIcon, Squares2X2Icon } from "@heroicons/react/20/solid"
import ProductGrid from "./ProductGrid"
import MobileFilterPanel from "./MobileFilterPanel"
import Filters from "./Filters"
import SortFunctionality from "./SortFunctionality"
import Pagination from "./Pagination"

export default () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

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
                            <SortFunctionality/>
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
                                <Filters />
                            </form>

                            {/* Product grid */}
                            <ProductGrid />
                        </div>
                    </section>
                </main>
            </div>
            <Pagination />
        </div>
    )
}

function ViewGrid() {
    return (
        <button
            type="button"
            className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
        >
            <span className="sr-only">View grid</span>
            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
        </button>
    )
}

function FunnelFilteringButton({setMobileFiltersOpen}) {
    return (
        <button
            type="button"
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
        >
            <span className="sr-only">Filters</span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
        </button>
    )
}