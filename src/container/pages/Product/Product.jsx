import React, {Component, Fragment} from "react";
import './Product.css';
import etanee from '../../../img/etanee3.jpg';
import troley from '../../../img/troley.png';
import CardProduct from "./CardProduct/CardProduct";
import {connect} from 'react-redux';
import {GlobalConsumer} from '../../../context/context';
// import {RootContext} from '../../Home/Home';



class Product extends Component{
    state = {
        order: 4,
        name: 'riczky' 
    }


    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
                        <Fragment>
                            <p>Halaman Product</p>
                            <hr />  
                            <div className="header">
                                <div className="logo">
                                    <img src={etanee} alt="logo" width="120px"  />
                                </div>
                                <div className="troley">
                                    <img src={troley} alt="troley" />
                                    {/*Lokal Order  */}
                                    {/* <div className="count">{this.state.order}</div>    */}
                                    {/* Global Order */}
                                    {/* <div className="count">{value.state.totalOrder}</div>    */}
                                    {/* Context */}
                                    <div className="count">{this.props.state.totalOrder}</div>   

                                </div>    
                            </div>    
                            <CardProduct />
                            </Fragment>        
        )
    }
}

// const mapStateToProps = state =>{
//     return{
//         order: state.totalOrder
//     }
// }

// Redux
// export default connect(mapStateToProps)(Product);

export default GlobalConsumer(Product);












