import Paysage from "../../assets/images/paysage.png"
import Card from "../Card"
import logement from "../../data/logement.json"

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src={Paysage} alt="Paysage"></img>
                <div className="overlay-text">Chez vous, partout et ailleurs</div>
            </div>
            <div className="gallery">
                <div className="gallery-card">
                    <Card logement={logement} />
                </div>
            </div>
        </div>
            
    )
}

export default Home