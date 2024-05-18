import Vegetarianpizza from '../../../assets/food/vegetarian-pizza.jpg';
import Bruschetta from '../../../assets/food/bruschetta.jpg';
import Lemondessert from '../../../assets/food/lemon-dessert.jpg';
import Bakedchicken from '../../../assets/food/baked-chicken.jpg';
import Chickensoup from '../../../assets/food/chicken-soup.jpg';
import Chocolatelavacake from '../../../assets/food/chocolate-lava-cakes.jpg';
import Fettuccinealfredo from '../../../assets/food/fettuccine-alfredo.jpg';
import Gnocchi from '../../../assets/food/gnocchi.jpg';
import Lasagna from '../../../assets/food/lasagna.jpg';
import Steak from '../../../assets/food/steak.jpg';
import Greeksalad from '../../../assets/food/greek-salad.jpg';
import Margherittapizza from '../../../assets/food/margherita-pizza.jpg';
import Prosciutto from '../../../assets/food/prosciutto.jpeg';
import Risotto from '../../../assets/food/risotto.jpg';
import Spaghetticarbonara from '../../../assets/food/spaghetti-carbonara.jpg';
import MenuCard from './MenuCard';
import './MenuHeading.css';

function MenuHeading() {
    return (
        <section className="specials">
            <article className="specials-topbar">
            </article>

            <section className="specials-cards">
                <MenuCard image={Bakedchicken} name="Baked Chicken" price="$10.99" description="Tender, herb-marinated chicken baked to golden perfection, served with roasted vegetables and creamy mashed potatoes. A savory delight!."/>
                <MenuCard image={Bruschetta} name="Bruschetta" price="$5.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <MenuCard image={Chickensoup} name="Chicken Soup" price="$5.50" description="Warm, flavorful broth with tender chicken, fresh vegetables, and aromatic herbs. Comfort in a bowl!"/>
                <MenuCard image={Chocolatelavacake} name="Chocolate Lava Cake" price="$7.99" description="Warm, rich chocolate cake with a gooey molten center. Decadent and irresistible!"/>
                <MenuCard image={Fettuccinealfredo} name="Fettuccine Alfredo" price="$16.50" description="Creamy Alfredo sauce with Parmesan over tender fettuccine. Rich and comforting!"/>
                <MenuCard image={Gnocchi} name="Gnocchi" price="$15.99" description="Soft, pillowy potato dumplings in a rich, savory sauce. Delightfully comforting!"/>
                <MenuCard image={Greeksalad} name="Greek Salad" price="$10.99" description="Crisp cucumbers, juicy tomatoes, olives, and feta cheese. Fresh and vibrant!"/>
                <MenuCard image={Lasagna} name="Lasagna" price="$15.50" description="Layers of rich meat sauce, creamy béchamel, and melted cheese. Hearty and satisfying!"/>
                <MenuCard image={Lemondessert} name="Lemon Dessert" price="$12.99" description="Zesty lemon filling with a buttery crust. Refreshingly tangy and sweet!"/>
                <MenuCard image={Margherittapizza} name="Margheritta Pizza" price="$20.50" description="Classic pizza with fresh tomatoes, mozzarella, and basil. Simple and delicious"/>
                <MenuCard image={Prosciutto} name="Prosciutto" price="$10.99" description="Thinly sliced, dry-cured Italian ham. Delicate, salty, and savory!"/>
                <MenuCard image={Risotto} name="Risotto" price="$10.99" description="Creamy Arborio rice cooked with broth, Parmesan, and a touch of white wine. Rich and comforting!"/>
                <MenuCard image={Spaghetticarbonara} name="Spaghetti Carbonara" price="$15.50" description="Classic pasta with crispy pancetta, creamy egg sauce, and Parmesan. Rich and flavorful!"/>
                <MenuCard image={Steak} name="Steak" price="$25.99" description="Juicy, perfectly grilled steak with a savory crust. Tender and flavorful!"/>
                <MenuCard image={Vegetarianpizza} name="Vegetarian Pizza" price="$16.50" description="Fresh vegetables, mozzarella, and tangy tomato sauce on a crispy crust. Flavorful and satisfying!"/>
            </section>

        </section>
    );
}

export default MenuHeading;