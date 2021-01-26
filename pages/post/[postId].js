import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostObject from "../../public/postobject";

const baseURL = 'https://dummyapi.io/data/api'
const fakeapi = '600c381615a621f84f2ad3cd' 

const Post = () => {
    const router = useRouter()
    const { postId } = router.query
    const [post, setPost] = useState(null)
    const [comment, setComment] = useState([])

    useEffect(() => {
        if (!postId)
            return;
        Get()
    }, [postId])

    const Get = async () => {
        const getpost = await axios.get(`${baseURL}/post/${postId}`, { headers: { "app-id": fakeapi } })
        const getcomment = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { "app-id": fakeapi } })
        console.log(getpost);
        setPost(getpost.data)
        setComment(getcomment.data.data)
    }

    if (post) {
        return (
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href={`/portfolio`}>THEKHUNO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href={`/post`}>POST
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href={`/GPAcalculator`}>GPA calculator</a>
      </li>
      </ul>
  </div>
</nav>
                <div>
                    <PostObject {...post} />
                </div>

                <div className="to-comment">
                    <p className="badge badge-pill badge-info">COMMENT</p>
                    {comment.map((comments) => {
                        return (
                            <div key={comments.id}>
                                <p className="each-comment">{comments.owner.firstName} {comments.owner.lastName} : {comments.message}</p>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
    else {
        return(
            <>
            </>
        )
    }


}

export default Post