import React, { Component } from 'react';
import AppHeader from '../appHeader';
import SearchPanel from "../searchPanel"
import PostStatusFilter from "../postStatusFilter"
import PostList from '../postList'
import PostAddForm from '../postAddForm';

import './index.css';

export default class App extends Component{
    constructor(props) {
        super (props);
        this.state = {
            data: [
                { label: "Going to learn React", important: false, id: "qwer"},
                { label: "That is so good", important: true, id: "gsaad"},
                { label: "I'm so tired...", important: false, id: "sfgsdf"},
                { label: "I'm so tired...", important: false, id: "rttgs"},
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }
    deleteItem(id) {
        this.setState(({data}) => {
                const index = data.findIndex((elem) => elem.id === id);

                const before = data.slice(0, index);
                const after = data.slice(index+1);

                const newArr = [...before, ...after]

                return {
                    data : newArr
                }
            });
    }

    addItem (body) {
        const newItem = {
            label: body,
            important:true,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        }); 
    }

    render() {
            return (
                <div className="app">
                    <AppHeader/>
                    <div className="search-panel d-flex">
                        <SearchPanel/>
                        <PostStatusFilter/>
                    </div>
                    <PostList 
                        posts={this.state.data}
                        onDelete={this.deleteItem}/>
                    <PostAddForm
                        onAdd={this.addItem}/>
                </div>
            ) 
        }
}