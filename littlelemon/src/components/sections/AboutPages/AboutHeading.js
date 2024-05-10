import './AboutHeading.css';

function AboutHeading() {
  return (
    <article className="main">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <section className="image">
                <img src={require('../../../assets/italian_male.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
            </section>
        </article>
  )
}

export default AboutHeading