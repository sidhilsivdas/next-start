 import { useState } from "react";
 function Comments(){
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
       const response = await fetch(`api/comments`);
       const data = await response.json();
       setComments(data);
    }
    return (
        <>
          <button onClick={fetchComments}>Fetch Comments</button>
          {
            comments.map(comment => {
                return(<div key={comment.id}>
                    <p>{comment.title}</p>
                </div>)
            })
          }
        </>
    )
 }

 export default Comments;