import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ImageGrid from './ImageGrid/ImageGrid';
import NavigationItems from './NavigationItems/NavigationItems';
import ProductInfo from './ProductInfo/ProductInfo';
import Interests from './Interests/Interests';

const ProductArea = props => {
    return (
        <section>
            <ImageGrid />
            <NavigationItems />
            <Route path={`${props.match.url}/partners`} exact component={Interests} />
            <Route path={props.match.url} exact component={ProductInfo} />
            <Route path={`${props.match.url}/properties`} exact component={Interests} />
        </section>
    );
};

export default withRouter(ProductArea);
