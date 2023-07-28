const Login = (props) => {

    return ( 
        <div className="login container">
            <h1>Login</h1>
            <div className="login-main">
                <div className="login-info d-flex align-items-center justify-content-center">
                    <form type="submit" className="w-50">
                        <label>E-mail</label>
                        <input type="e-mail" className="form-control px-5"/>
                        <br />
                        <label>Pasword</label>
                        <input type="paswword" className="form-control"/>
                        <br />
                    </form>                   
                </div>
                <div className="login-button">
                    <button className="btn btn-primary"
                    onClick={() => props.setShowLogin(false)}
                    >Giriş Yap</button>
                </div>
            </div>
        </div>
     );
}
 
export default Login;