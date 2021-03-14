import React from 'react';

import './index.css';

const PostStatusFilter = () => {
    return (
        <div className = "btn-group">
            <button className="btn btn-info" type="button">
                all
            </button>
            <button className="btn btn-outline-secondary" type="button">
                by likes
            </button>
        </div>
    )
}
export default PostStatusFilter;