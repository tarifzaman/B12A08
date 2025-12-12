import { useState, useEffect } from 'react';

// ডেটা লোড করার জন্য কাস্টম হুক
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      // 1. লোডিং স্টেট শুরু
      setLoading(true);
      setError(null);
      
      try {
        // 2. public/products.json থেকে ডেটা ফেচ করা
        const response = await fetch('/products.json');
        
        // HTTP এরর হ্যান্ডেল করা (যেমন 404, 500)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // 3. ডেটা লোড সফল
        setProducts(data);
        
      } catch (err) {
        // 4. এরর হ্যান্ডেল করা
        console.error("Failed to fetch products:", err);
        setError("Failed to load application data.");
        
      } finally {
        // 5. লোডিং শেষ (সফল বা ব্যর্থ, যাই হোক)
        setLoading(false);
      }
    };

    fetchProducts();
    // এই ইফেক্টটি শুধু একবারই রান করবে (কম্পোনেন্ট মাউন্ট হওয়ার সময়)
  }, []); 

  // প্রোডাক্টস, লোডিং স্টেট, এবং এরর স্টেট রিটার্ন করা
  return { products, loading, error };
};

export default useProducts;