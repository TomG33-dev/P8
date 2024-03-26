import Banner from "../../components/Banner/Banner";
import CardsLayout from "../../components/Cards/CardsLayout";

import Paysage from "../../assets/images/paysage.png";

import logement from "../../data/logement.json";

function Home () {
    return (
        <div className="home">
            <Banner>
                <img src={Paysage} alt="Paysage" />
                <div className="overlay-text">Chez vous, partout et ailleurs</div>
            </Banner>
            <div className="gallery">
                <div className="gallery-card">
                    <CardsLayout logement={logement} />
                </div>
            </div>
        </div>
    )
}

export default Home;
