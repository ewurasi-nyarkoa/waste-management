import { useEffect, useState } from 'react'
import { apiGetProducts } from '../../services/product';
import ApiGet from './CustomerApiGet';


const CustomerPage = () => {
    const [products, setProducts] = useState ([]);

    useEffect (() =>{
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            let response;
            response = await apiGetProducts();
            setProducts(response.data);
            console.log("search answer here", response)

        } catch (error) {
        console.error ("error fetching products:", error.message)
        }
        
    }
  return (
    <div>
         <div className="container mx-auto p-10 dark:bg-gray-900">
        <h1 className="text-2xl font-bold mb-10">Recycled Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-44">
          {products.length > 0 ? (
            products.map((product) => (
            //   <Link key={product.id} to={`/single/${advert.id}`}> 
              <ApiGet
                title={product.title}
                inventory={product.inventory}
                createdAt={product.createdAt}
                image={product.image}
                updatedAt={product.updatedAt}
              />
            // </Link>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default CustomerPage
