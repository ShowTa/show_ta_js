import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Article from './articles/articles'
import Detail from './articles/detail'
import Delete from './articles/delete'

import User from './users/list'

export default class Main extends Component
{
    render() {
        return (
          <Router>
            <div>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/articles'>Articles</Link></li>
                <li><Link to='/user'>user</Link></li>
              </ul>

              <hr />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/articles' component={Article} />
                <Route exact path='/articles/:id' component={Detail} />
                <Route exact path='/articles/:id/delete' component={Delete} />
                <Route exact path='/user' component={User} />
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
