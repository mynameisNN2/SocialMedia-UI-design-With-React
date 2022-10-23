import './login.css';
export default function Login() {
    return (
        <div className='login'>
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="logologin">N.Social</h3>
                    <span className='logindesc'>Connect with friends and the world around you on N.Social</span>

                </div>
                <div className="loginright">
                    <div className="loginbox">
                        <input type="email" placeholder='Email' className="logininput" />
                        <input type="passowrd" placeholder='Password' className="logininput" />
                        <button className='loginbtn'>Log In</button>
                        <span className='loginforget'>Forgot Password?</span>
                        <button className='loginregister'>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
