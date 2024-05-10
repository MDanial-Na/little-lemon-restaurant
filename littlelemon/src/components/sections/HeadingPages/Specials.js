import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.jpg';
import Bruschetta from '../../../assets/food/bruschetta.jpg';
import LemonDessert from '../../../assets/food/lemon-dessert.jpg';
import Bakedchicken from '../../../assets/food/baked-chicken.jpg';
import Chickensoup from '../../../assets/food/chicken-soup.jpg';
import SpecialCard from './CardInfo/SpecialCard';
import './Specials.css';
import { Link } from 'react-router-dom';

function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <Link className="action-button" to="/menu">Click here for Full Menu</Link>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$10.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$10.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$5.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."/>
                <SpecialCard image={Bakedchicken} name="Baked-chicken" price="$12.99" description="Like a perfect beer can chicken, baked chicken drumsticks turn out with savory, crispy skin and are extra-juicy. Every bite is packed with flavor."/>
                <SpecialCard image={Chickensoup} name="Chicken-Soup" price="$6.50" description="Chicken soup is a soup made from chicken, simmered in water, usually with various other ingredients. The classic chicken soup consists of a clear chicken broth, often with pieces of chicken or vegetables; common additions are pasta, noodles, dumplings, or carrots, and grains such as rice and barley."/>
                 
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}

export default Specials;