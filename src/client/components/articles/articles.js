import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class Article extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        return (
            <div>
                <h2>Articles</h2>
                <p>記事の一覧ページ</p>
                <ul>
                    <li><Link to='/articles/1'>Article</Link></li>
                </ul>
            </div>
        );
    }
}