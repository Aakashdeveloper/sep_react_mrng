import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import PostDetails from './PostDetails';
import LifeCycle from './LifeCycle';

const Routing = () => {
    return(
        <BrowserRouter>
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/post" component={Post}/>
            <Route path="/post/:id" component={PostDetails}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/lifeCycle" component={LifeCycle}/>
            <Footer/>
        </div>
    </BrowserRouter>
    )
}

export default Routing
