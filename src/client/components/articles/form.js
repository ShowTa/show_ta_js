import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    submitHandler(event) {
        let name = document.getElementById('name').value
        let content = document.getElementById('content').value
        
    }

    render() {
        return(
            <div>
                <p>記事名</p>
                <input id="name" type="text"/>
                <p>記事の内容</p>
                <input id="content" type="text"/>
                <button type="button" onClick={this.submitHandler}>登録する</button>
            </div>
        )
    }
} 