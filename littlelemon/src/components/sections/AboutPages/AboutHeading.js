import './AboutHeading.css';

function AboutHeading() {
  return (
    <article className="about-page">
            <section className="hero-text-page">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext-page">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.<br></br><br></br> 
                Since its inception in 1995 by two Italian brothers, Adrian and Mario, Little Lemon has been a cornerstone of Chicago's culinary scene. Recognizing a gap in Mediterranean cuisine offerings despite the city's rich diversity, the brothers embarked on a mission to introduce the vibrant flavors of their hometown in Italy to the palates of Chicagoans. Their vision was simple yet ambitious: to create a dining experience that transported guests to the sun-drenched shores of the Mediterranean with each bite.</p>
            </section>

            <section className="image-page">
                <img src={require('../../../assets/italian-man2.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
            </section>
            <iframe
  title="Map of Restaurant Location"
  width="600"
  height="450"
  frameBorder="0"
  style={{ border: 0 }}
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7064.257789423569!2d-87.67488676588565!3d41.88953372979904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slittle%20lemon%20Chicago!5e0!3m2!1sen!2smy!4v1715611673840!5m2!1sen!2smy"
  allowFullScreen
></iframe>
        </article>
  )
}

export default AboutHeading