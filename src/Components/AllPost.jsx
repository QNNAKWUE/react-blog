import React, {useState} from 'react';
import CreatePost from './CreatePost';
import Post from './Post';

function AllPost() {
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[allPost, setAllPost] = useState("");
    const[isCreated, setIsCreated] = useState("");

        // function save post title
        const savePostTitle = event =>{
            setTitle(event.target.value) 
                console.log(title)
        }

        // function save story
        const saveContent = event =>{
            setContent(event.target.value) 
                console.log(content)
        }
        // function save All Post
        const savePost = event =>{
            event.preventDefault() //this will stop our browser from refreshing
            const id =Date.now()
            setAllPost([...allPost,{title,content, id}])
            setTitle('')
            setContent('')
            toggleButton()
            //console.log(allPost)
        }

        // toogle button
        const toggleButton = () =>{
        setIsCreated(!isCreated)
}

    if(!isCreated) {
        return(
            <>
            <CreatePost 
            savePostTitle={savePostTitle}
            saveContent={saveContent}
            savePost={savePost}
            
            />
            </>
        )
    }
   return(
       <>
       <h1>All Post</h1>
       {allPost.map(post =>{
           return(
               <Post 
               id={post.id}
               key={post.id}
               title={post.title}
               content={post.content}
               />
           )
       })} 
       <button onClick={toggleButton}>Create Post</button>
       </>
   )
   

};


export default AllPost;