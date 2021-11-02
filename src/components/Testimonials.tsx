import React from 'react';
import testimonial from "./data";

const Testimonial = () => {
    return (
        <>
            <div>Client testimonials</div>
            {testimonial.map(user => {
                return (
                    <div>
                        {/* {key=user.id} */}
                        <img src={user.img} alt={user.name + "bio"} />
                        <p>{user.name} </p>
                        <p>{user.content} </p>
                        <p>{user.title}</p>
                    </div>
                )
            })
            }
        </>)
}

export default Testimonial;