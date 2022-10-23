import './rightbar.css';
import { Users } from "../../dummyData";
import Online from '../online/Online';





export default function Rightbar({ profile }) {


    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className='birthdayImg' />
                    <span className='bithdaytext'>
                        <b>sima noorali</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className='rightbarAd' />
                <h4 className='rightbartitle'>Online Friends</h4>

                <ul className='rightbarfriendList'>
                    {Users.map(u => (
                        <Online user={u} key={u.id} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarinfoItem">
                        <span className="rightbarinfokey">City :</span>
                        <span className="rightbarinfoValue">Tehran</span>
                    </div>
                    <div className="rightbarinfoItem">
                        <span className="rightbarinfokey">From :</span>
                        <span className="rightbarinfoValue">Ahwaz</span>
                    </div>
                    <div className="rightbarinfoItem">
                        <span className="rightbarinfokey">Relationship :</span>
                        <span className="rightbarinfoValue">Single</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User Friends</h4>
                <div className="rightbarfollowings">
                    <div className="rightbarfollowing">
                        <img src="assets/person/1.jpeg" alt="" className='rightbarfollowingImg' />
                        <span className='rightbarfollowingName'>John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/2.jpeg" alt="" className='rightbarfollowingImg' />
                        <span className='rightbarfollowingName'>John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/3.jpeg" alt="" className='rightbarfollowingImg' />
                        <span className='rightbarfollowingName'>John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/4.jpeg" alt="" className='rightbarfollowingImg' />
                        <span className='rightbarfollowingName'>John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/5.jpeg" alt="" className='rightbarfollowingImg' />
                        <span className='rightbarfollowingName'>John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/6.jpeg" alt="" className='rightbarfollowingImg' />
                        <span className='rightbarfollowingName'>John Carter</span>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className='rightbar'>
            <div className="rightbarwrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
