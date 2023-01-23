import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

import Home from './views/home/home'
import AskMeAnything from './views/askmeanything/askmeanything'
import Links from './views/links/links'

const Routes = () => (
    <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/ama" element={<AskMeAnything />} />
        <Route path="/links" element={<Links />} />
    </Switch>
)


export default Routes