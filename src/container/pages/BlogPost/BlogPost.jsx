// libraries
import React, {Component} from "react";
import { Fragment } from "react/cjs/react.production.min";
import axios from "axios";
// pages
import Post from "../../../component/Post/Post";
import './BlogPost.css';
import API from "../../../services";


class BlogPost extends Component{
    state = {
        post:[],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
            
        },
        isUpdate: false,
        comments: []
    }

    // Menampilkan data dari API
    getPostAPI = () => {
        // Global
        API.getNewsBlog().then(result => {
            this.setState({
                post:result
            })
        })

        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })    
    }

    // Menambah data db.json menggunakan API (axios)
    postDataToAPI = () => {
        // Global
        API.postNewsBlog(this.state.formBlogPost).then((res) => {
            this.getPostAPI();
            this.setState({
                        formBlogPost: {
                            id: 1,
                            title: '',
                            body: '',
                            userId: 1
                        },
                    })
              }) 
         }

    // Menghapus data db.json menggunakan API (axios)
    handleRemove = (data) => {
        API.deleteNewsBlog(data).then((res) =>{
            this.getPostAPI();
        })
    }

    // Mengubah data db.json menggunakan API (axios)
    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((res) => {
            this.getPostAPI();
            this.setState({
                isUpdate:false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        })
    }
    
    handleUpdate = (data) => {
        // console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate:true
        })
        
        
    }

    // Menangkap Value Tambah Data
    handleFormChange = (event) => {
        // console.log('form change', event.target)
        let formBlogPostNew = {...this.state.formBlogPost}
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost);
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else{
            this.postDataToAPI();
            this.getPostAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
  
    }

    componentDidMount(){
        // Mengambil data API GET menggunakan FETCH
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
       

        // Mengambil data API GET menggunakan Axios
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then((res) => {
        //     // console.log(res.data);
        //     this.setState({
        //         post: res.data
        //     })
        // })

        // Mengambil data API GET(Axios) dengan JSON Server
        // axios.get('http://localhost:3004/posts')
        // .then((res) => {
        //     // console.log(res.data);
        //     this.setState({
        //         post: res.data
        //     })
        // })
        this.getPostAPI();
    }
    render(){
        return (
        
        <Fragment>
            <p>Halaman Blog Post</p>
            <hr />
        <p className="section-title">Blog Post</p>    
        <div className="form-add-post">
            <label htmlFor="title">Title</label>
            <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add Title" onChange={this.handleFormChange} />
            <label htmlFor="body">Blog Content</label>
            <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add blog-content" onChange={this.handleFormChange}></textarea>
            <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
        </div>
        {/* Menangkap Value dari JSON menggunakan map() */}
            {/* {
                this.state.comments.map(comment => {
                    return <p>{comment.name} - {comment.email}</p>
                })
            } */}

        
        {
            this.state.post.map(post => {
                return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />            
            })
        }
        </Fragment>

        )
    }
}

export default BlogPost;
