import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as action from './goodslistAction'

import './goodslist.scss'
// import Header from '../header/headerComponent'
// import Footer from '../footer/footerComponent'
class GoodslistComponent extends Component{
    state = {
        text:'列表页'
    }
    componentWillMount(){
    }
    render(){
        return(
            <div className='goodslist_f'>
                <h1>列表页</h1>
                
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
   
    return {
        ajaxStatus:state.goodslist.status,
        ajaxResult:state.goodslist.result|| []
    }
}

export default connect (mapStateToProps,action)(GoodslistComponent)