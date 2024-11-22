import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";




let Home = () => {
    return (
        <>
            <div className="parent-div">
                <div className="bg">
                    <p><span>C</span>ustomized <span>P</span>rinted <span>T</span>ees</p>

                    <div className="hm-p">
                        <p>Nam at congue diam etiam erat <br /> lectus, finibus eget commodo quis,<br /> congue diam etiam erat lectus.</p>

                    </div>
                    <div className="hm-btn hover">
                        <button>Explore More</button>
                        <i class="fa-solid fa-greater-than"></i>
                        {/* <i class="fa-solid fa-greater-than"></i> */}
                    </div>
                    <div className="hm-pp">
                        <p>Get Printed T-shirt @ $25!</p>
                    </div>
                </div>

                {/* <div className="card-div">
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
                </div> */}
                {/* <div className="btn">
                    <button type="button" class="btn btn-primary">
                        <Link to={`/viewmore/1`}>View More</Link>
                    </button>
                </div> */}
            </div>


        </>
    )
}

export default Home;