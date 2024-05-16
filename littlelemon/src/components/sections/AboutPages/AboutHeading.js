import './AboutHeading.css';

function AboutHeading() {
  return (
    <div className='main-about'>
      <article className="about-page">
        <section className="hero-text-page">
          <h1>Little Lemon</h1>
          <h2>Legacy</h2>
            <p className="about-subtext-page">Little Lemon opened in 1995 by two Italian brothers,<strong> Adrian and Mario. </strong>  
              Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
              and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
              continue to oversee the Little Lemon restaurant, nearly thirty years later.<br></br><br></br> 
              Since its inception in 1995 by two Italian brothers, Adrian and Mario, Little Lemon has been a cornerstone of Chicago's culinary scene. Recognizing a gap in Mediterranean cuisine offerings despite the city's rich diversity, 
              the brothers embarked on a mission to introduce the vibrant flavors of their hometown in Italy to the palates of Chicagoans. Their vision was simple yet ambitious: to create a dining experience that transported guests to 
              the sun-drenched shores of the Mediterranean with each bite.<br></br><br></br>
              Over the past nearly thirty years, Little Lemon has flourished into a beloved institution, cherished by locals and visitors alike for its authentic Mediterranean dishes and warm, welcoming atmosphere. Adrian and Mario's 
              dedication to quality ingredients, traditional recipes, and exceptional hospitality has earned the restaurant a reputation for excellence in the Chicago dining scene.</p>
        </section>
        <section className="image-page">
            <img src={require('../../../assets/misc/italian-man2.jpg')} alt="Adrian and Mario"></img>
        </section>
      </article>
      <article className='about-page2'>
        <section className="image-page2">
            <img src={require('../../../assets/misc/italian-man3.jpg')} alt="Adrian and Mario 2"></img>
        </section>
          <section className='about-subtext-page2'>From classic pasta dishes bursting with flavors of ripe tomatoes, fragrant basil, and rich olive oil to 
          succulent seafood grilled to perfection and served with a squeeze of lemon, 
          each dish at Little Lemon tells a story of passion and craftsmanship. 
          The restaurant's commitment to using fresh, locally-sourced ingredients whenever possible ensures that every meal is a celebration of the vibrant 
          flavors and culinary traditions of the Mediterranean region. <br></br><br></br> 
          But beyond its delectable cuisine, Little Lemon is a place where memories are made and friendships are forged. Whether it's a romantic dinner for 
          two, a lively gathering with friends and family, or a special celebration, 
          the restaurant's inviting ambiance and attentive service create an unforgettable dining experience for all who walk through its doors.<br></br><br></br>
          As Adrian and Mario continue to oversee the day-to-day operations of Little Lemon with the same enthusiasm and dedication as they did on the day it opened, 
          the restaurant remains a shining beacon of Mediterranean hospitality in the heart of Chicago, inviting guests to savor the simple joys of good food, good company, and good times.
          </section>
      </article>
      
    </div>
  )
}

export default AboutHeading