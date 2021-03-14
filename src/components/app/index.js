import React from 'react';
import AppHeader from '../appHeader';
import SearchPanel from "../searchPanel"
import PostStatusFilter from "../postStatusFilter"
import PostList from '../postList'
import PostAddForm from '../postAddForm';

import './index.css';

const data  = [
    { label: "Going to learn React", important: false, id: "qwer"},
    { label: "That is so good", important: true, id: "gsaad"},
    { label: "I'm so tired...", important: false, id: "sfgsdf"},
    { label: "I'm so tired...", important: false, id: "rttgs"},
]

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    ) 
}

export default App;