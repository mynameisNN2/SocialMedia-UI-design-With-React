import Topbar from "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css';

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profilerighttop">
                        <div className="profilecover">
                            <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileinfoName">Nima Noorali</h4>
                            <span className="profileinfodesc">Hello My Friends</span>
                        </div>
                    </div>
                    <div className="profilerightbottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>

                </div>
            </div>
        </>
    );
}
