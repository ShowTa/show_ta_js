import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Delete extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Article Delete</h2>
                <p>記事を削除します</p>
            </div>
        );
    }
}