import { render } from '@testing-library/react';
import React, { Component } from 'react';

import './index.css';

export default class PostAddForm extends Component{
    render(){
        return (
            <div className="button-panel d-flex">
                <input
                    className="form-control new-post-label"
                    type="text"
                    placeholder="What are you think about?"
                />
                <button 
                    className="btn btn-outline-secondary"
                    type="submit"
                    onClick={() => this.props.onAdd('Hello')}>
                    Add
                </button>
            </div>
        )
    }
}