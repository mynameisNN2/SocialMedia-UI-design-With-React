import './register.css';



export default function Register() {
    return (
        <div className='login'>
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="logologin">N.Social</h3>
                    <span className='logindesc'>Connect with friends and the world around you on N.Social</span>

                </div>
                <div className="loginright">
                    <div className="loginbox">
                        <input type="text" placeholder='Username' className="logininput" />

                        <input type="email" placeholder='Email' className="logininput" />

                        <input type="passowrd" placeholder='Password' className="logininput" />

                        <input type="passowrd" placeholder='Password Again' className="logininput" />
                        <button className='loginbtn'>Sign Up</button>
                        <button className='loginregister'>Log Into Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
