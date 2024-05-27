import { Link } from 'react-router-dom';
import './HomePageHeading.css';

function Heading() {
    return (
        <header>
            <article className="hm-heading">
                <section className="hm-heading-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="hm-heading-text2">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    <br></br>
                    <Link className="hm-heading-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hm-heading-image">
                    <img src={require('../../../assets/misc/ll-restaurant3.jpeg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
        </header>
    )
}

export default Heading;