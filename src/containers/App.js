import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Landing from './Landing/Landing';
import Property from './Property/Property';

const App = () => (
    <Router>
        <Layout>
            <Route path='/property' component={Property} />
            <Route path='/' exact component={Landing} />
        </Layout>
    </Router>
);

export default App;
