import { useState } from "react";
import { v4 as id } from 'uuid';
import RegisterList from "./RegisterList";

const Register = (props) => {

    const [registerData, setRegisterData] = useState({
        id: "",
        name: "",
        surName: "",
        mail: "",
        password: "",
        passwordAgain: ""
    });
    const [passwordAddError, setPasswordAddError] = useState(null);
    const [passwordControlError, setPasswordControlError] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [surNameError, setSurNameError] = useState(null);
    const [mailError, setMailError] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [users, setUsers] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!registerData.name ||
            !registerData.surName ||
            !registerData.mail ||
            !registerData.password ||
            !registerData.passwordAgain) {

            setRegisterError("Formdaki tüm bilgileri eksiksiz giriniz")
            return;
        }

        const newUser = { ...registerData, id: id() };

        setUsers([...users, newUser]);

        setRegisterData({
            name:"",
            surName: "",
            mail: "",
            password: "",
            passwordAgain: ""
        })

    }


    const handleNameControl = (e) => {
        const value = e.target.value;
        //console.log(value);
        const regex = /^[a-zA-Z]*$/;

        setRegisterData({ ...registerData, name: value })
        if (!value.match(regex)) {
            setNameError("Sadece harf içermelidir...");
        } else {
            setNameError(null);
        }
    };
    const handleSurNameControl = (e) => {
        const value = e.target.value;
        //console.log(value);
        const regex = /^[a-zA-Z]*$/;
        setRegisterData({ ...registerData, surName: value })
        if (!value.match(regex)) {
            setSurNameError("Sadece harf içermelidir...");
        } else {
            setSurNameError(null);
        }
    };
    const handleMailControl = (e) => {
        const value = e.target.value;
        //console.log(value);
        const regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
        setRegisterData({ ...registerData, mail: value })
        if (!value.match(regex)) {
            setMailError("geçerli bir mail adresi giriniz");
        } else {
            setMailError(null);
        }
    };
    const handlePassword = (e) => {
        const value = e.target.value;
        setRegisterData({ ...registerData, password: value }); 
        if (value.length <= 6) {
            setPasswordAddError("Şifre en az 6 haneli olmalıdır");
        } else {
            setPasswordAddError(null);
        }
    };
    const handlePasswordControl = (e) => {
        const value = e.target.value;
        setRegisterData({ ...registerData, passwordAgain: value })
        if (value !== registerData.password) {
            setPasswordControlError("şifreler uyumsuz");
        } else {

            setPasswordControlError(null);
        }
    };


    return (
        <div className="container  modal-register d-flex align-items-center">
            <div className="register-info d-flex align-items-start  g-3">
                <form onSubmit={handleSubmit} className="my-4">
                    <h1 className="my-1 fs-3 text-center">Register</h1>
                    <label>Name</label>
                    <input type="text" value={registerData.name} className="form-control"
                        onChange={handleNameControl}
                    />
                    {nameError && (
                        <div className="alert alert-danger p-0">{nameError}</div>
                    )}

                    <label>Surname</label>
                    <input type="text" value={registerData.surName} name="surName" className="form-control"
                        onChange={handleSurNameControl}
                    />
                    {surNameError && (
                        <div className="alert alert-danger p-0">{surNameError}</div>
                    )}

                    <label>E-mail</label>
                    <input type="mail" name="mail"  value={registerData.mail}  className="form-control"
                        onChange={handleMailControl}
                    />
                    {mailError && (
                        <div className="alert alert-danger p-0">{mailError}</div>
                    )}

                    <label>Pasword</label>
                    <input type="password" name="password"  value={registerData.password}  className="form-control"
                        onChange={(e) => handlePassword(e)}
                    />
                    {passwordAddError && (
                        <div className="alert alert-danger p-0 mt-1">
                            {passwordAddError}
                        </div>
                    )}
                    <label>Pasword Again</label>
                    <input type="password" name="passwordAgain"   value={registerData.passwordAgain} className="form-control"
                        onChange={(e) => handlePasswordControl(e)}
                    />
                    {passwordControlError && (
                        <div className="alert alert-danger p-0 mt-1">
                            {passwordControlError}
                        </div>
                    )}

                    <br />
                    <button className="register-button btn btn-warning"
                    >Register</button>
                    {registerError && (
                        <div className="alert alert-danger p-0 mt-1">
                            {registerError}
                        </div>
                    )}
                </form>
            </div>
            <div className="list align-items-start ms-5 ">
                <h1>Register List
                    <span className="lead border bg-warning text-white rounded-5 ms-2 p-2">{users.length}</span>
                </h1>
                <div className="mt-2 border-top">
                    <RegisterList
                        users={users}
                        setUsers={setUsers}
                    />
                </div>

            </div>
        </div>
    );
}

export default Register;