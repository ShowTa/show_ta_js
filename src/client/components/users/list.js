import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import axios from 'axios'

const REQUEST_URL = 'http://localhost:3000/';

export default class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData() {
        axios.get( REQUEST_URL + 'user').then( res => {
            this.setState({
                data: res.data
            })
        })
    }

    render(){
        return(
        <div>
            <h2>User</h2>
            <p>ここにユーザーのリストを書きます</p>
            {this.state.data.map((item) => {
                return(
                    <div className='user' key={item.id}>
                        <Link to={'/user/' + item.id}>
                            <li className='user_name'>{item.name}</li>
                        </Link>
                    </div>
                );
            })}
        </div>
        )
    }
}