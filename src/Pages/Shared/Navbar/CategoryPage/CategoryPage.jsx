import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../../../Utilities/useProducts';
import Items from '../../Items/Items';

const CategoryPage = () => {
  const { subcategory } = useParams();
  const [filteredItems, setFilteredItems] = useState([]);
  const [products] = useProducts(); 

  useEffect(() => {
    if (subcategory && products) {
      const filtered = products.filter(product => product.category.toLowerCase() === subcategory.toLowerCase());
      setFilteredItems(filtered);
    }
  }, [subcategory, products]);

  return (
    <div className="category-page">
      <h1 className="text-center text-3xl font-bold my-8">{subcategory.toUpperCase()} Products</h1>
      <div className="grid md:grid-cols-3 gap-12 mx-4">
        {filteredItems.length > 0 ? (
          filteredItems.map(product => (
            <Items key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
