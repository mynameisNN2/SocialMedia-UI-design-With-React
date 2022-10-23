import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useState } from 'react';




export default function Post({ post }) {

    const [like, setLike] = useState(post.like);
    const [isliked, setIsLiked] = useState(false);


    const likeHandler = () => [
        setLike(isliked ? like - 1 : like + 1),
        setIsLiked(!isliked)
    ];

    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="postTopleft">
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} className='postProfileimg' alt="" />
                        <span className='postUsername'>
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className="postTopright">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postcenter">
                    <span className='posttext'>{post?.desc}</span>
                    <img src={post.photo} alt="" className='postImg' />
                </div>
                <div className="postbottom">
                    <div className="postbottomLeft">
                        <img src="assets/like.png" onClick={likeHandler} alt="" className='likeIcon' />
                        <img src="assets/heart.png" onClick={likeHandler} alt="" className='likeIcon' />
                        <span className="postlikecounter">{like} people like it</span>
                    </div>
                    <div className="postbottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
