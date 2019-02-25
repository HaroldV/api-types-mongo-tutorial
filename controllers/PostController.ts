import Post from "../models/Posts"

// get all posts
export function getAllPosts(req, res, next) {
    Post.find((err, posts) => {
        if (err){
            res.status.json({err})
        }
        res.status(200).json({posts})
    })
}

// get post by id
export function getPostById(req, res, next) {
    const id = req.params.id

    Post.findById(id,(err, post) => {
        if (err) {
            res.status.json({err})
        }
        res.status(200).json({post})
    })
}

// create post
export function createPost(req, res, next) {
    const title = req.body.title
    const content = req.body.content

    if(!title) {
        res.status(422).json({err: "title is required"})
        return
    }

    if(!content) {
        res.status(422).json({err: "content is required"})
        return
    }

    const post = new Post({
        title,
        content
    })

    post.save((err, post) => {
        if (err) {
            res.status(500).json({err})
        }
        res.status(200).json({post})
    })
}

// update Post
export function updatePostById(req, res, next ){
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body, (err, post) => {
        if(err) {
            res.status.json({err})
        }
        res.status(200).json({post})
    })
}

// delete Post
export function deletePostById(req, res, next) {
    const id = req.params.id

    Post.findByIdAndDelete(id,(err,post) => {
        if(err) {
            res.status.json({err})
        }
        res.status(200).json({post})
    })
}