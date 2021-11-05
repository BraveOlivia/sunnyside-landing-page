import React from 'react';
import services from './data';

interface Props {
    title: string;
    description: string;
    learnMore: boolean;
    img: string;
}

// React.FC === React functional component
const Service: React.FC<Props> = ({ title, description, learnMore, img }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={img} alt="img-bg" />
            {learnMore && <a>Learn More</a>}
        </>);
}

const Body = () => {
    return (services.map(service =>
        <Service title={service.title} description={service.content} learnMore={true} img={service.img} />
    ));
    // return <Service title="Body" description="123" learnMore={true} img="123" />

}

export default Body;