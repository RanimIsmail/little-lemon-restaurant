import React from "react";

export default function Main(){
    return(
    <>
        <section className="highlights">
            <div className="first-row">
                <h2 className="title">This weeks specials!</h2>
                <button className="main-btn">Online Menu</button>
            </div>

            <div className="menu-cards">
                <div className="card">
                    <img src="./images/Lemon Dessert.png" alt="food photo"></img>
                    <div className="title">
                        <h6>Lemon Dessert</h6>
                        <h6 className="red-text">7,50€</h6>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </p>
                    <button className="secondary-btn">Order a delivery</button>
                </div>
                <div className="card">
                    <img src="./images/Greek Salad.png" alt="food photo"></img>
                    <div className="title">
                        <h6>Greek Salad</h6>
                        <h6 className="red-text">9,50€</h6>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </p>
                    <button className="secondary-btn">Order a delivery</button>
                </div>
                <div className="card">
                    <img src="./images/Bruchetta.png" alt="food photo"></img>
                    <div className="title">
                    <h6>Bruchetta</h6>
                    <h6 className="red-text">7,50€</h6>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. </p>
                    <button className="secondary-btn">Order a delivery</button>
                </div>

            </div>
        </section>
        <section className="testimonials">
            <h3 className="title">Testimonials</h3>

            <div class="user-test">
                    <div class="review-col">
                        <img src="./images/user.jpg" alt="user photo" />
                        <div>
                            <h5>Ute Schumann</h5>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div class="review-col">
                        <img src="./images/user.jpg" alt="user photo"/>
                        <div>
                            <h5>Ute Schumann</h5>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div class="review-col">
                        <img src="./images/user.jpg" alt="user photo" />
                        <div>
                        <h5>Ute Schumann</h5>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div class="review-col">
                        <img src="./images/user.jpg" alt="user photo"/>
                        <div>
                        <h5>Ute Schumann</h5>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
            </div>
        </section>
        <section className="about">
                <div className="first-col">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div className="second-col">
                    <img src="./images/Group 12.png" alt="Mario and Adrian" className="About-photo1"></img>
                    <img src="./images/Group 13.png" alt="Mario and Adrian" className="About-photo2"></img>
                </div>
        </section>
        </>

    )
}