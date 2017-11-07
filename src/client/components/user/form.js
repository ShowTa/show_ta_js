import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

export default class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    submitHandler(event) {
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let profile = document.getElementById('profile').value
        let icon = document.getElementById('icon').value
        axios.post(REQUEST_URL + 'user/create', {
            name: name,
            email: email,
            password: password,
            profile: profile,
            icon: icon
          })
          .then(function (response) {
            console.log(response);
        });
    }
    render() {
        return (
            <div>
                <p>ユーザー名</p>
                <input id="name" type="text"/>
                <p>メールアドレス</p>
                <input id="email" type="text"/>
                <p>パスワード</p>
                <input id="password" type="text"/>
                <p>自己紹介</p>
                <input id="profile" type="text"/>
                <p>アイコン</p>
                <input id="icon" type="file"/>
                <button type="button" onClick={this.submitHandler}>登録する</button>
            </div>
        );
    }
}