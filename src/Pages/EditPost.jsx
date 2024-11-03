import React, { useState, useEffect } from 'react'
import { Container, PostFrom } from '../components'
import appwriteSrvice from "../appwrite/configs"
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [post, setPosts] = useState(null);
    const navigate = useNavigate();
    const { slug } = useParams()
    useEffect(() => {
        if (slug) {
            appwriteSrvice.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                } else {
                    navigate("/")
                }
            })
        }
    }, [navigate, slug])

    return post ? (
        <div className="py-8">
            <Container>
                <PostFrom post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost