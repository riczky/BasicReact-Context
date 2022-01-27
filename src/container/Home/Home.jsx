// libraries
import React, {Component, Fragment, createContext} from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';

// pages
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import GlobalProvider from "../../context/context";
import Hooks from "../pages/Hooks/Hooks";
// style
import './Home.css'


class Home extends Component {
    render(){
        return (
          <BrowserRouter>
                   
                   
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">BlogPost</Link> |{" "}
                            <Link to="/product">Product</Link> |{" "}
                            <Link to="/lifecycle">Lifecycle</Link> |{" "}
                            <Link to="/youtube-component">Youtube-Component</Link> |{" "}
                            <Link to="/hooks">Hooks</Link>
                        </div>    
                        <Route path="/" exact component={BlogPost}></Route>
                        <Route path="/detail-post/:id" component={DetailPost}></Route>
                        <Route path="/product" component={Product}></Route>
                        <Route path="/lifecycle" component={LifeCycleComp}></Route> 
                        <Route path="/youtube-component" component={YoutubeCompPage}></Route> 
                        <Route path="/hooks" component={Hooks}></Route> 

                    </Fragment>

                
          </BrowserRouter>
           

        )
    }

}

export default GlobalProvider(Home);