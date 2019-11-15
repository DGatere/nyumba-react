import React, { useState } from 'react';

import ImageGrid from './ImageGrid/ImageGrid';
import NavigationItems from './NavigationItems/NavigationItems';
import ProductInfo from './ProductInfo/ProductInfo';
import Interests from './Interests/Interests';

const ProductArea = () => {
    const [display, setDisplay] = useState(false);

    const displayButtonClicked = () => {
        setDisplay(!display);
    };

    return (
        <section>
            <ImageGrid />
            <NavigationItems display={displayButtonClicked} show={display} />
            <ProductInfo show={display} />
            <Interests show={display} />
        </section>
    );
};

export default ProductArea;
