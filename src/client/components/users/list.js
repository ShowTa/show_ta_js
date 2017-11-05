import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import axios from 'axios'

const REQUEST_URL = 'http://localhost:3000/#/';

export default class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
          };
    }
    componentDidMount() {
        this.fetchData();
        console.log(this.state)
    }
    
    fetchData() {
        axios.get( REQUEST_URL + 'user').then( response => {
            console.log(response.data) 
            console.log(response.status) 
          })
    }
    render(){
        return(
        <div>
            <h2>User</h2>
            <p>ここにユーザーのリストを書きます</p>
        </div>
        )
    }
}