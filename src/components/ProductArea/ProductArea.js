import React from 'react';

import ImageGrid from './ImageGrid/ImageGrid';
import NavigationItems from './NavigationItems/NavigationItems';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductArea = () => (
    <section>
        <ImageGrid />
        <NavigationItems />
        <ProductInfo />
    </section>
);

export default ProductArea;
