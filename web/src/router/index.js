import React from 'react'
import {Route} from 'react-router'


import GoodslistComponent from '../components/goodslist/goodslistComponent'

const routes = (
    <Route>
        <Route path = 'goodslist' component={GoodslistComponent}/>
    </Route>

)
export default routes;
// <Route path = '/HomeSearch' component={HomeSearchComponent}/>
//  <Route path = '/' component={HomeComponent}/>