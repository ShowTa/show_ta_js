import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Article from './article/articles'
import Detail from './article/detail'
import ArticleForm from './article/form'

import User from './user/list'
import UserForm from './user/form'

export default class Main extends Component {
    render() {
        return (
          <Router>
            <div>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/articles'>Articles</Link></li>
                <li><Link to='/articles/form'>ArticleForm</Link></li>
                <li><Link to='/user'>User</Link></li>
                <li><Link to='/user/form'>UserForm</Link></li>
              </ul>

              <hr />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/articles' component={Article} />
                <Route exact path='/articles/form' component={ArticleForm} />
                <Route exact path='/articles/:id' component={Detail} />
                <Route exact path='/user' component={User} />
                <Route  exact path='/user/form' component={UserForm} />
              </Switch>
            </div>
          </Router>
        );
    }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
