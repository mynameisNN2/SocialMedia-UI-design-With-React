import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


export default function Share() {
    return (
        <div className='share'>
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="assets/person/1.jpeg" className='shareProfileimg' alt="" />
                    <input placeholder="what's in your mind ?" className='shareInput' />
                </div>
                <hr className='sharehr' />

                <div className="sharebottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon className='shareIcon' htmlColor='tomato' />
                            <span className='shareoptiontext'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon className='shareIcon' htmlColor='blue' />
                            <span className='shareoptiontext'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon className='shareIcon' htmlColor='green' />
                            <span className='shareoptiontext'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon className='shareIcon' htmlColor='goldenrod' />
                            <span className='shareoptiontext'>Feelings</span>
                        </div>
                    </div>
                    <button className='sharebutton'>Share</button>
                </div>
            </div>
        </div>
    );
}
