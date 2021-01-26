import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const fakeapi = '600c381615a621f84f2ad3cd'

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`${baseURL}/post`, { headers: { "app-id": fakeapi } })
            .then((res) => {
                console.log(res);
                setPosts(res.data.data)
            })
    }, [])

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href={`./portfolio`}>THEKHUNO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href={`./post`}>POST
        <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href={`./GPAcalculator`}>GPA calculator</a>
      </li>
      </ul>
  </div>
</nav>
            <div className="header">
            <h1 className="header-txt">📃 POSTS 📃</h1>
            </div>
            <div className="feed">
                {posts.map((post) => {
                    return (
                        <div className="aligh-post" key={post.id}>
                        
                            <p className="post"><span class="badge badge-pill badge-primary">POST</span> {post.text}</p>
                            <img className="img" src={post.image}></img>
                            <p className="like">👍 {post.likes}</p>
                            

                            <Link href={'./post/' + post.id}>
                                <button type="button" class="btn btn-primary">Go to this post</button>
                            </Link>

                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Posts