import React from "react";
import './YoutubeComp.css';
import etanee from '../../img/etanee3.jpg';


const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                {/* <img src="http://i3.ytimg.com/vi/CZKcmzNs5Jw/hqdefault.jpg" />
                 */}
                 <img src={etanee} alt="logo" className="logo"/>    
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )

}

YoutubeComp.defaultProps = { 
    time:'00.00'
}

export default YoutubeComp;