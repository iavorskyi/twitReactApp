import React from 'react';

import './index.css';

const PostAddForm = () => {
    return (
        <form className="button-panel d-flex">
            <input
            className="form-control new-post-label"
            type="text"
            placeholder="What are you think about?"
            />
            <button className="btn btn-outline-secondary">
                Add
            </button>
        </form>
    )
}
export default PostAddForm;