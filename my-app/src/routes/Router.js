import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import App from '../App';
import Navigation from '../components/Navigation'
import NewP_E from '../container/NewP_E';
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/new' component={NewP_E} />
                </Switch>
            </BrowserRouter>            
        </div>
    )
}

export default Router
