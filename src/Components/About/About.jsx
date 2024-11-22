import React from "react";
import "./About.css";
import { Link } from "react-router-dom";




let About = () => {

    return (
        <>
        
            <div className="main-div">
                <div className="card" >
                    <img src="./Image/img-1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card" >
                    <img src="./Image/img-2.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card" >
                    <img src="./Image/img-3.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="card" >
                    <img src="./Image/img-1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                {/* <div className="card" >
                    <img src="./Image/img-1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}

            </div>
            <div className="btn">
                <button type="button" class="btn btn-primary">
                    <Link to={`/viewmore/1`}>View More</Link>
                </button>
            </div>

    
        </>
    )
}

export default About;