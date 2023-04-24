import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Home from './Home/Home'

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);

            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])


    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>

                        <h1>Hi {logindata[0].name}<span className='text-warning'>Welcome My Web Side</span></h1>
                        <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-2'>
                            <Button onClick={userlogout} className="border border-warning">LogOut</Button>
                            </div>
                        </div>
                        </div>
                        

                       

                    </>
            }
            <Home />
        </>
    )
}

export default Details






















