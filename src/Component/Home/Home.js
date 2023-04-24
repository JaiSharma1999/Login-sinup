import React from 'react'

import RDS from "../../img/RDS-1-02-212.webp"
const Home = () => {
  return (
    <>
      
        <div className="container mt-5">
            <div className="row">
                <div class="col-sm-6">
                <p className="display-3  fw-bold ps-5">Creative
                    Design Agency
                </p>
                <p className="ps-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, nemo.
                    Lorem ipsum dolor sit amet.
                </p>
                <button  type="button" className="btn btn-warning rounded-pill ms-5 mb-3">LEARN MORE</button>
                </div>
                <div className="col-sm-6">
                  <img src={RDS} alt="" class="img-fluid"/>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Home
