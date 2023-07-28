import { useState } from "react";


const RegisterList = (props) => {

    const [showPopup, setShowPopup] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const handleDelete = (id) => {
        const filtred = props.users.filter((user) => user.id !== id);
        props.setUsers(filtred);
        setShowPopup(false);
    };
    const handlePopup = (id) => {
        setDeletingId(id);
        setShowPopup(true);
    };
    if (props.users.length === 0) return(
     <div className="bg-warning text-center rounded-2 mt-3"> 'Kayıtlı kullanıcı bulunmadı..</div>  
    ) 

    return (
        <table className="container ">
            <thead>
                <tr  className="">
                    <th>No</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user, i) => (
                    <tr key={user.id}>
                        <td>{i + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.surName}</td>
                        <td>{user.mail}</td>
                        <td>
                            <button className="btn btn-danger mt-2"
                                onClick={() => handlePopup(user.id)}
                            >Delete </button>
                        </td>
                    </tr>
                ))}

            </tbody>
            {showPopup && (
                <div className="popup">
                    <div className="info">
                        <h2>Kaydı silmek istiyor musunuz?</h2>
                        <div className="buttons">
                            <button
                                className="btn btn-info"
                                onClick={() => setShowPopup(false)}
                            >Hayır</button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(deletingId)}
                            >Evet</button>
                        </div>
                    </div>
                </div>
            )}
        </table>
    );
}

export default RegisterList;