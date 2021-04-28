import React from 'react';
import '/Danilo/react-forms/src/pages/components/store/store.style.css'
import ProductsPage from '../products/products.comp';

function StorePage() {
  return (
    <div className="storepage">
      <b><u>Store list</u></b>
      <ProductsPage/>
    </div>
  );
}


export default StorePage;