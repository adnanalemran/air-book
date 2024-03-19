 
import DealsAndOffers from '../Componentes/DealsAndOffers';
import Featured from '../Componentes/Featured';
import HeroSection from '../Componentes/HeroSection';
import NavBar from '../Componentes/NavBar';
import PopularAirlines from '../Componentes/PopularAirlines';
import Testimonials from '../Componentes/Testimonials';

const Homepage = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <Featured/>
            <DealsAndOffers/>
            <PopularAirlines/>
            <Testimonials/>
        </div>
    );
};

export default Homepage;