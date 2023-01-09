import { comments } from "../../data/posts";
export default function handler(req, res){
    return res.status(200).json(comments)
}