import React from "react";
import { Component } from "react/cjs/react.production.min";
import axios from "axios";
import './DetailPost.css'

class DetailPost extends Component{
    state = {
        post:{
            title:'',
            body:''
        }
    }
    componentDidMount(){
        // console.log(this.props.match.params.id)
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            // console.log('result: ', res );
            let post = res.data
            this.setState({
                post: {
                    title: post.title,
                    body:post.body
                }
            })
        } )
    }
    render(){
        return(
            <div className="p-detail-post">
                <p className="detail-title">{this.state.post.title}</p>   
                <p className="detail-body">{this.state.post.body}</p>
            </div>
            
        )
    }
}

export default DetailPost;