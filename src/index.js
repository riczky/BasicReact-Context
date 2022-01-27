import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './redux/reducer/globalReducer';

// Import File Sendiri
// import HelloComponent from './component/HelloComponent';
// import StateFullComponent from './container/StateFullComponent';
// import YoutubeComponent from './component/YoutubeComp/YoutubeComp';
import Home from './container/Home/Home';


// store
// const storeRedux = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
{/* Menggunakan Redux */}
    {/* <Provider store={storeRedux}><Home/></Provider> */}
    {/* <Provider store={storeRedux}><Home/></Provider> */}
{/* Menggunakan Context */}
        <Home/>

    {/* <YoutubeComponent /> */}
    {/* <HelloComponent />
    <StateFullComponent />
    <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Dokumentasi
// 1. npx create-react-app my-app
// cd my-app
// npm start
// 2. Statefull Component (Class Component)/ Stateless Component (Functional Component)
      // digunakan untuk teknik penulisan component
      //Youtube Comp
      //Counter Comp 
// 3. Props digunakan untuk data yang dinamis
  // Dinamic component menggunakan props pada functional component
  //  Update Parent Child Component menggunakan props pada class component
// 4. Lifecycle Component
    // LifeCycle Component digunakan untuk pembatasan pada saat melakukan update
// 5. Pemanggilan API GET menggunakan Fetch dan Axios
    // https://jsonplaceholder.typicode.com/posts
    // https://placeimg.com/
  //6. API DELETE menggunakan axios
  // 7. API POST (Tambah Data) menggunakan axios
  // 8. API PUT (Update Data) menggunakan axios
  // 9.react-router Versi @4.3.1
  //  react-router-dom versi @4.3.1
  // 10. react-redux
  // State Management Redux
  // npm install react-redux
  // npm install redux@4.0.1
  // Reducer(Function)
  // Store(Penyimpanan)
  // Dispatching Action(Proses Function)
  // Subscription(Proses penggunaan Store yang dimiliki)
    // Provider, Connect digunakan untuk menghubungkan project react dengan redux
    // Pemisahan Reducer
    // 11. Context
    // State Management Context