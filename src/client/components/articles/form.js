import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

const REQUEST_URL = 'http://localhost:3000/';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    submitHandler(event) {
        let title = document.getElementById('title').value
        let content = document.getElementById('content').value
        axios.post(REQUEST_URL + 'article/create', {
            title: title,
            content: content
          })
          .then(function (response) {
            console.log(response);
        });
    }

    render() {
        return(
            <div>
                <p>記事名</p>
                <input id="title" type="text"/>
                <p>記事の内容</p>
                <input id="content" type="text"/>
                <button type="button" onClick={this.submitHandler}>登録する</button>
            </div>
        )
    }
} 
