import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { useHistory } from 'react-router-dom';
import { PostMaker } from '../../repository/PostMaker';
const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [peeon, setPeeOn] = useState('self');
    const { addUser } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        if (user && password) {
            const response = PostMaker(
                { 'Content-Type': 'application/json' },
                {
                    matrikel_number: user,
                    password: password
                },
                'auth/admin');
            response.then(res => {
                addUser(res);
                console.log(res);
                console.log("username", res.user_name);
                history.push({
                    pathname:  "/another",
                 });


            })
        }
    }

    return (
        <div className="bg-light p-5 rounded-lg m-3">
            <h1 className="display-4">Login</h1>
            <p>I pee on {peeon}</p>
            <hr className="my-4" />
            <form onSubmit={onSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3"
                            value={user} onChange={(e) => setUser(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1"
                                value={check} onChange={(e) => setCheck(e.currentTarget.checked)} />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Please Remember me by
        </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}

export default Login
