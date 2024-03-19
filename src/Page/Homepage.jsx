 
import DealsAndOffers from '../Componentes/DealsAndOffers';
import Featured from '../Componentes/Featured';
import HeroSection from '../Componentes/HeroSection';
import NavBar from '../Componentes/NavBar';

const Homepage = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <Featured/>
            <DealsAndOffers/>
        </div>
    );
};

export default Homepage;