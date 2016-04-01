import React from 'react'
import ReactDOM from 'react-dom'
import Index from 'Components/pages/Index'
import Speakers from 'Components/pages/Speakers'
import Sponsors from 'Components/pages/Sponsors'
import Coc from 'Components/pages/Coc'
import { Router, Route, hashHistory } from 'react-router'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Index}/>
    <Route path='/speakers' component={Speakers}/>
    <Route path='/sponsors' component={Sponsors}/>
    <Route path='/coc' component={Coc}/>
  </Router>
)


ReactDOM.render(routes, document.querySelector('#app'))
