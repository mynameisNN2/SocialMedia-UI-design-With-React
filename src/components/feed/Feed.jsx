import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import { Posts } from "../../dummyData";




export default function Feed() {
    return (
        <div className='feed'>
            <div className="feedwrapper">
                <Share />
                {Posts.map(p => (
                    <Post post={p} key={p.id} />
                ))}
            </div>
        </div>
    );
}
