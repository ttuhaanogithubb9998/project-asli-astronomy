import React from 'react';
import FormCommentN from '../Footer/FormComment'
function FormComment(props) {
    const showForm = (e) => {
        let f = e.target.parentElement.parentElement
        let message = f.children[1].value

        f.children[3].children[1].children[4].children[0].value = message;
        f.children[3].children[0].style.display = 'block'
        f.children[3].children[1].style.height = 'auto'
        f.children[3].children[1].style.padding = '20px'
    }
    const closeForm = (e)=>{
        let f = e.target.parentElement.parentElement

        f.children[3].children[0].style.display = 'none'
        f.children[3].children[1].style.height = '0'
        f.children[3].children[1].style.padding = '0'
    }
    
    return (
        <div className="form-comments">
            <p>Comment</p>
            <textarea ></textarea>
            <div className="form-comments-btn">
                <button className="btn btn-primary"
                    onClick={(e) => showForm(e)}
                >Send</button>
            </div>
            <div className="form-comments-modal">
                <div className="form-comments-modal-bg" onClick={e=>closeForm(e)}></div>
                <FormCommentN />
            </div>
        </div>
    );
}

export default React.memo(FormComment);