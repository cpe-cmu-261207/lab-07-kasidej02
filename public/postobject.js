import Link from 'next/link'

const PostObject = (props) => {
    return(
        <div className="post">
        <div className="header">
        <p className="header-txt">{props.text}</p>
        <p className="badge badge-pill badge-light">tag : {props.tags} </p>
        </div>
        <img className="img-post" src={props.image}></img>
        <span className="badge badge-pill badge-info">Post by {props.owner.firstName} {props.owner.lastName}</span>
        <span >👍 {props.likes}</span>
        <br/><br/><Link href={'./'}>
            <button type="button" class="btn btn-primary">BACK</button>
        </Link>
    </div>
    )
}
export default PostObject