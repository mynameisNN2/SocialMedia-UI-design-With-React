import "./online.css";

export default function Online({ user }) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileimgContainer">
                <img src={user.profilePicture} alt="" className='rightbarProfileimg' />
                <span className='rightbarOnline'></span>
            </div>
            <span className='rightbaruserName'>{user.username}</span>
        </li>
    );
}
