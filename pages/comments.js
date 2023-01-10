 import { useEffect, useState } from "react";
 function Comments(){
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        // here is where you make API call(s) or any side effects
        fetchComments()
      }, [] ) /** passing empty brackets is necessary */

    const fetchComments = async () => {
       setLoading(true)
       const response = await fetch(`api/comments`);
       const data = await response.json();
       setLoading(false)
       setComments(data);
       
    }

    const addComment = async () => {
       const response = await fetch(`api/comments`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({comment})
       });
       const data = await response.json();
       console.log(data);
       fetchComments();
    }
    
    return (
        
        <>
    
          <input value={comment} onChange={(e) => setComment(e.target.value)}></input>
          <button onClick={addComment}>Save</button>
          <button onClick={fetchComments} >Fetch Comments</button>
          <div className={ !loading ? `blink`: ''  }>
          {
            comments.map(comment => {
                return(<div key={comment.id}>
                    <p>{comment.id} | {comment.title}</p>
                </div>)
            })
          }
          </div>
        </>
    )

    
 }

 export default Comments;