import { createFileRoute } from '@tanstack/react-router'
import "./product.css"
// import { useState } from 'react'c
import { useQuery } from '@tanstack/react-query'
export const Route = createFileRoute('/products/$productId')({
  component: ProductDetails,
})

function ProductDetails() {

  const {productId}=Route.useParams()
  const {data:product,isLoading,error } = useQuery({
    queryKey:['product'],
    queryFn:()=>fetch(`https://dummyjson.com/products/${productId}`).then(res=>res.json())
  })
  // const [mainImage, setMainImage] = useState(product.images[0]);
  if(!product)return <div>Product not Found</div>
  if(isLoading)return <p>loading..</p>
  if(error)return <p>error</p>
  console.log(product);
  

  return  <div className="detail-container">
           

            {product&&(
               <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
   

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery Section */}
       

        {/* Product Details Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            {product.title}
          </h1>
          <p className="text-xl text-gray-500 mb-4">{product.brand} - {product.category}</p>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-4xl font-bold text-green-600">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
            <span className="text-lg text-red-500 line-through">${product.price.toFixed(2)}</span>
            <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              -{product.discountPercentage.toFixed(0)}%
            </span>
          </div>

          <div className="text-sm font-medium text-gray-700 mb-6">
            <p className="mb-1">Rating: <span className="text-purple-600 font-bold">{product.rating.toFixed(2)} ★</span></p>
            <p>In Stock: <span className="text-purple-600 font-bold">{product.stock}</span></p>
          </div>
           <div className="flex space-x-2 overflow-x-auto image">
            {product.images && product.images.length > 0 ? (
        <img style={{width:'250px'}} src={product.images[0]} alt={product.name} />
      ) : (
        <p>No images available</p>
      )}
          </div>

          <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
            )}
          </div>
}
