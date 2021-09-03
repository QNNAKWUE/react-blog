import React from 'react';
import '../styles/CreatePost.css';

function CreatePost({savePostTitle, saveContent, savePost}) {
    
    

    return (
        <div className='create__post'>
            <form onSubmit={savePost}
               className='createpost__form'>
               <h1>Write a Story</h1>
               <input 
               type="text"
               onChange={savePostTitle} 
               placeholder="Enter Title" 
               required
                />
            <br />
            <br />
               <textarea 
               type="text"
               onChange={saveContent}
               placeholder="Write a Story" 
               required></textarea>
            <br />
            <br />
               <button 
                
               >Save Post</button>
           </form>
        </div>
    )
}

export default CreatePost;

