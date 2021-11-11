import React from 'react';
import testimonial from "./data";
import "./Testimonials.css";

const Testimonial = () => {
    return (
        <>
            <h2 className="test-title">Client testimonials</h2>
            <div className="test-container">
                {testimonial.map(user => {
                    return (
                        <div className="testimonial-item">
                            {/* {key=user.id} */}
                            <img className="avatar" src={user.img} alt={user.name + "bio"} />
                            <p>{user.content} </p>
                            <h5 className="username">{user.name} </h5>
                            <p>{user.title}</p>
                        </div>
                    )
                })
                }
            </div>
        </>)
}

export default Testimonial;