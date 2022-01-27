import React from "react";
import { Component, Fragment } from "react/cjs/react.production.min";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";


class YoutubeCompPage extends Component{
    render() {
        return (
            <Fragment>
                <div>
                <p>Youtube Componenet</p>
                <hr />
                <YoutubeComp time="21.00" title="Tutorial React JS - Bagian 1" desc="Belum ditonton"/>
                <YoutubeComp time="30.00" title="Tutorial React JS - Bagian 2" desc="Belum ditonton"/>
                <YoutubeComp time="10.00" title="Tutorial React JS - Bagian 3" desc="Belum ditonton"/>
                <YoutubeComp time="12.00" title="Tutorial React JS - Bagian 4" desc="Belum ditonton"/>
                <YoutubeComp title="ReactJS" desc="Belum ditonton"/></div>
            </Fragment>
            
        )
    }
}

export default YoutubeCompPage;