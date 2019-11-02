import React, { Component } from 'react';

import ImageGrid from './ImageGrid/ImageGrid';
import NavigationItems from './NavigationItems/NavigationItems';
import ProductInfo from './ProductInfo/ProductInfo';
import Interests from './ProductInfo/Interests/Interests';

class ProductArea extends Component {
    state = {
        display: false
    };

    displayButtonClicked = () => {
        this.setState(prevState => ({
            display: !prevState.display
        }));
    };

    render() {
        return (
            <section>
                <ImageGrid />
                <NavigationItems display={this.displayButtonClicked} show={this.state.display} />
                <ProductInfo show={this.state.display} />
                <Interests show={this.state.display} />
            </section>
        );
    }
}

export default ProductArea;
