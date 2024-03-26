import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/Thumb/Thumb";


import Paysage from "../../assets/images/paysage.png";

import logement from "../../data/logement.json"

function Home () {
    return (
        <div className="home">
            <Banner>
                <img src={Paysage} alt="Paysage" />
                <div className="overlay-text">Chez vous, partout et ailleurs</div>
            </Banner>
            <div className="gallery">
                <Thumb logement={logement} />
            </div>
        </div>
    )
}

export default Home;
