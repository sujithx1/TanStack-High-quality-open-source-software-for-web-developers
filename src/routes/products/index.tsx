import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import "./product.css"
import type { Product } from '../../types/types'
export const Route = createFileRoute('/products/')({
  
   

  component:ProductList

})



    function ProductList(){
      

      const {data:products,isLoading,error}=useQuery({
        queryKey:['products'],
        queryFn:()=>fetch('https://dummyjson.com/products').then(res=>res.json())
      })
      
      console.log(products);
      
      if(isLoading) return <p>isLoading...</p>
      if(error)return <p>Error </p>
      
      
      return(

     <div>Hello "/products/"!





  
    <section className="product">
        {products.products.map((product:Product) => (

          
          <Link to='/products/$productId' key={product.id} params={{productId:String(product.id)}}>
          
          <div className="relative flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://placehold.co/400x300/e2e8f0/64748b?text=Image+Not+Found`;
        }}
      />
      {/* Product Details */}
      <div className="w-full text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{product.title}</h2>
        <p className="text-sm text-gray-500 mb-2 truncate">{product.description}</p>
        <div className="flex items-center justify-center space-x-2 text-lg font-semibold text-gray-900 mb-2">
          <span className="text-red-500 line-through">${product.price.toFixed(2)}</span>
          <span className="text-green-600">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
        </div>
        <p className="text-sm font-medium text-gray-700">
          Rating: {product.rating.toFixed(2)} ★ | Stock: {product.stock}
        </p>
      </div>
      {/* Discount Badge */}
      <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
        -{product.discountPercentage.toFixed(0)}%
      </span>
    </div>
        </Link>
        ))}
      </section>
  </div>
)

}
