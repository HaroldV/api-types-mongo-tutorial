import * as express from "express"

import {
    getAllPosts,
    getPostById,
    createPost,
    updatePostById,
    deletePostById
} from "../controllers/PostController"

export default (app) => {

    const apiRoutes = express.Router()
    const postRoutes = express.Router()

    /**
     * POST ROUTES
     */
    apiRoutes.use("/posts", postRoutes)

    // All Posts Route
    postRoutes.get("/", getAllPosts)

    // By Id Post Route
    postRoutes.get("/:id", getPostById)

    // create Post Route
    postRoutes.post("/", createPost)

    // Update Post Route
    postRoutes.put("/:id", updatePostById)

    // Delete Post Route
    postRoutes.delete("/:id", deletePostById)

    /**
     * APPEND ROUTES
     */
    app.use("/api", apiRoutes)
}