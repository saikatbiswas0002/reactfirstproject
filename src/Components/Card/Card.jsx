import React from "react";
import { useParams } from "react-router-dom";
import "./Card.css"
export default function CardDetails() {
    const param = useParams();
    console.log(param, "params");
    return (
        
        <>
            
            {
                param.id == 1 ? (
                    <div className="main-div">
                        <div className="card" >
                            <img src="../Image/img-1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        <div className="card" >
                            <img src="../Image/img-1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="../Image/img-1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="../Image/img-1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                ) : null
            }

        </>
    )
}