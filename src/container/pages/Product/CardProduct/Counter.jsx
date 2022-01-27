import react from "react";
import { Component } from "react/cjs/react.production.min";
import {connect} from 'react-redux';
import actionType from "../../../../redux/reducer/globalActionType";
// import {RootContext} from '../../../Home/Home';
import {GlobalConsumer} from '../../../../context/context';


class Counter extends Component{
    state = {
        order: 4,
        name: 'riczky' 
    }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     // alert('plus button');
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })

    // }

    // handleMinus = () => {
    //     // alert('minus buton');
    //     if(this.state.order > 0){
    //         this.setState({
    //             order: this.state.order - 1
    //         },() => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }
    // }

    render(){
        console.log(this);
        return(
                <div className="counter">
                    <button className="minus" onClick={() => this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                    <input type="text" value={this.props.state.totalOrder} />
                    <button className="plus" onClick={() => this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
                </div>
            )   
        }
    }

    // Mengambil State Global 
    // const mapStateToProps = (state) => {
    //     return{
    //         order: state.totalOrder
    //     }
    // }

    // // Mengambil Dispatch pada Reduce
    // const mapDispatchToProps = (dispatch) =>{
    //     return{
    //         plusOrder: () => dispatch({type:actionType.PLUS_ORDER}),
    //         minusOrder: () => dispatch({type:actionType.MINUS_ORDER})
    //     }
    // }  

// Redux
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default GlobalConsumer(Counter);
