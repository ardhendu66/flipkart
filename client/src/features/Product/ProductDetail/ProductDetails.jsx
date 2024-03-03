import { product } from "./productData"
import { reviews } from "./productData"
import BreadCrumb from './components/BreadCrumb'
import ImageGallery from './components/ImageGallery'
import Reviews from './Info/Reviews'
import Colors from './Info/Colors'
import Sizes from './Info/Sizes'
import ProductDescription from './Details/ProductDescription'
import ProductHighlights from './Details/ProductHighlights'
import ProductDetail from './Details/ProductDetail'
import Button from './Info/Button'

export default function() {


    return (
        <div className="bg-white">
            <div className="pt-6">
                <BreadCrumb product={product} />

                {/* Image gallery */}
                <ImageGallery product={product} />

                {/* Product info */}
                <div 
                    className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
                >
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 
                            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                        >
                            {product.name}
                        </h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

                        {/* Reviews */}
                        <Reviews reviews={reviews} />

                        <form className="mt-10">
                            {/* Colors */}
                            <Colors product={product} />

                            {/* Sizes */}
                            <Sizes product={product} />

                            <Button />                            
                        </form>
                    </div>

                    <div 
                        className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
                    >
                        {/* Description and details */}
                        <ProductDescription description={product.description} />

                        <ProductHighlights highlights={product.highlights} />

                        <ProductDetail details={product.details} />
                    </div>
                </div>
            </div>
        </div>
    )
}