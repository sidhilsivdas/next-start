import { comments } from "../../data/posts";
export default function handler(req, res){
    if(req.method == "GET"){
        return res.status(200).json(comments)
    }else if(req.method == "POST"){
        const comment = req.body.comment;
        const data = {id: Date.now(), "title": comment, "details":"details - 1"}
        comments.push(data);
        return res.status(201).json(data)

    }
    
}