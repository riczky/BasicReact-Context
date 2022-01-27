import React, {Component, useEffect} from 'react';
import { useState } from 'react';
import './Hooks.css'


// Class Component Menggunakan State
// LifeCycle
// class Hooks extends Component{
    
//     state = {
//         count:0
//     }

//     onUpdate = () => {
//         this.setState({
//             count:this.state.count + 1
//         })
//     }

//     componentDidMount(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentDidUpdate(){
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount(){
//         document.title = `ReactJS Hello World`;
//     }

//     render(){
//         return(
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini adalah: {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

// React Hooks
// count(state), setCount(Function)
// const Hooks = () => {
//     const [count, setCount] = useState(0);
//     return(
//         <div className='p-hooks'>
//                 <p>Nilai saya saat ini adalah: {count}</p>
//                 <button onClick={() => setCount(count + 1)}>Update Nilai</button>
//             </div>
//     )
// }


// React Hooks Side Effect(Lifecycle)

const Hooks = () => {
    const [count, setCount] = useState(0);

    // Lifecycle
    useEffect(() => {
        document.title = `Title Change: ${count}`        
        return () => {
            document.title = 'ReactJS HelloWorld'
        }
    })

    return(
        <div className='p-hooks'>
                <p>Nilai saya saat ini adalah: {count}</p>
                <button onClick={() => setCount(count + 1)}>Update Nilai</button>
            </div>
    )
}


export default Hooks;

