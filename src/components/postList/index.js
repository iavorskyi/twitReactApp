import React from 'react';
import PostListItem from '../postListItem';

import './index.css';

const PostList = ({posts}) => {

    const elements = posts.map((elem) => {
        const {id, ...elemProps} = elem;
        return (
            <li key={id} classNme = 'list-group-item'>
                <PostListItem 
                label={elemProps.label} 
                important={elemProps.important}/>
            </li>
        )
    })

    return (
        <ul className="app-list list group">
            {elements}
        </ul>
    )
}

export default PostList;