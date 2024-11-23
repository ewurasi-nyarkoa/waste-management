import { useEffect, useState } from 'react'
import { apiGetProducts } from '../../services/product';
import ApiGet from './CustomerApiGet';

const CustomerPage = () => {
    const [products, setProducts] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await apiGetProducts();
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error.message);
            setError('Failed to load products. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg">Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
                <div className="mb-6 sm:mb-8 lg:mb-10">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold 
                                 text-gray-800 dark:text-white">
                        Recycled Products
                    </h1>
                </div>
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                                      xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 
                                      lg:mb-16">
                        {products.map((product) => (
                            <ApiGet
                                key={product.id}
                                id={product.id}
                                description={product.description}
                                image={product.image}
                                inventory={product.inventory}
                                price={product.price}
                                title={product.title}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No products available
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomerPage
