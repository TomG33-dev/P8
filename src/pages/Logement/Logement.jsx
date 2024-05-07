import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import logements from "../../data/logement.json";
import Carousel from "../../components/Carousel/Carousel";
import Stars from "../../components/Stars/Stars";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Description from "../../components/Description/Description";
import Location from "../../components/Location/Location";
import Equipments from "../../components/Equipments/Equipments";

const LogementID = (id) => {
    return logements.find((logement) => logement.id === id.toString());
}

function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = LogementID(id);

    useEffect(() => {
        if (!logement) {
            navigate("/error");
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

    return (
        <div className="logement">
            <Carousel images={logement.pictures} />
            <div className="logement-info">
                <div className="logement-details">
                    <h2>{logement.title}</h2>
                    <Location location={logement.location} />
                    <Tags tags={logement.tags} />
                </div>
                <div className="host-stars">
                    <Host host={logement.host} />
                    <Stars rating={logement.rating} />
                </div>
            </div>
            <div className="description-equipments">
            <Description description={logement.description} />
            <Equipments equipments={logement.equipments} />
            </div>
        </div>
    );
}

export default Logement;