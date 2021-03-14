import React, {Component} from 'react';

import './index.css';

export default class PostListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        };
    

        this.onImportantHandler = this.onImportantHandler.bind(this);
        this.onLikeHandler = this.onLikeHandler.bind(this);
    }

    onImportantHandler() {
        this.setState(({important})=>({
            important: !important
        }))
    }

    onLikeHandler() {
        this.setState(({like})=>({
            like: !like
        }))
    }
    
    render () {
        const {important, like} = this.state;
        const {label, onDelete} = this.props;
        let classNames = "app-list-item d-flex justify-content-between";
        
        if (important){
            classNames += " important";
        }

        if(like){
            classNames += " like"
        }

        return(
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={this.onLikeHandler}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        className="btn-star btn-sm"
                        type="button"
                        onClick={this.onImportantHandler}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button 
                        className="btn-trash btn-sm"
                        type="button"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}