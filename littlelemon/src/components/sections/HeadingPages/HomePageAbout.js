import { Link } from 'react-router-dom';

function HomePageAbout() {
    return (
        <>
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <section className="images">
                <img className="about-1" src={require('../../../assets/food/food8.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food7.jpg')} alt="Little Lemon restaurant cuisine 2"></img>
                <img className="about-3" src={require('../../../assets/food/bruschetta.jpg')} alt="Little Lemon restaurant cuisine 3"></img>
                <img className="about-4" src={require('../../../assets/food/chicken-soup.jpg')} alt="Little Lemon restaurant cuisine 4"></img>
            </section>
        </article>
        <div>
        <Link className="about-action-button" to="/about">About Page</Link>
        </div>
        </>
    );

}

export default HomePageAbout;