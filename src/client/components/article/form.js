import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'

import axios from 'axios'

const REQUEST_URL = 'http://localhost:3000/';

export default class ArticleForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            text: 's'
        };
    this.textInput = this.textInput.bind(this);
    }
    submitHandler(event) {
        let title = document.getElementById('title').value
        let content = document.getElementById('textarea').value
        axios.post(REQUEST_URL + 'article/create', {
            title: title,
            content: content
          })
          .then(function (response) {
            console.log(response);
        });
        console.log(title, content)
    }
    converter() {
        var convText = marked(this.state.text, {
            sanitize: true
        });
        return {
            __html: convText
        };
    }
    textInput() {
        this.setState({
          text: document.getElementById('textarea').value
        })
    }
    render() {
        return(
            <div>
                <p>記事名</p>
                <input id="title" type="text"/>
                <p>記事の内容</p>
                <div className="row">
                    <div className="col-sm-6">
                        <textarea id="textarea" className="text-field" onChange={this.textInput}>{this.state.text}</textarea>
                    </div>
                    <div className="col-sm-6">
                        <span dangerouslySetInnerHTML={this.converter()} />
                    </div> 
                </div>
                <button type="button" onClick={this.submitHandler}>登録する</button>
            </div>
        )
    }
} 
