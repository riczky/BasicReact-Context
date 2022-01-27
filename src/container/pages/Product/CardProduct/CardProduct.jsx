import React, {Component} from "react";
import Counter from "./Counter";
// import './Product.css';
// import etanee from '../../img/etanee3.jpg';
// import troley from '../../img/troley.png';


class CardProduct extends Component{

    render(){
        return(
            
            <div className="card">
                <div className="img-thumb-product">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"  />
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original Plus Tepung Crispy [1 Carton - 10 Pack]</p>
                <p className="product-price">Rp. 410.000</p>
                <Counter />                
            </div>
            
        );
    }
}

export default CardProduct;