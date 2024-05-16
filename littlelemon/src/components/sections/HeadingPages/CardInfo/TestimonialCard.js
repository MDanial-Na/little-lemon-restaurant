import avatar1 from '../../../../assets/misc/avatar1.jpg';
function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img src={avatar1} alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default TestimonialCard;