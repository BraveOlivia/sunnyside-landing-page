import React from 'react';
import { services } from './data';

interface Props {
    title: string;
    description: string;
    learnMore: boolean;
    img: string;
}

// React.FC === React functional component
export const Service: React.FC<Props> = ({ title, description, learnMore, img }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={img} alt="img-bg" />
            {learnMore && <p>Learn More</p>}
        </>);
}

const Body = () => {
    //return (services.map(service =>
    //     <Service title={service.title} description={service.description} learnMore={service.learnMore} img={service.img} />
    // ));
    return <Service title="Body" description="123" learnMore={true} img="123" />

}

export default Body;