import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import logements from "../../data/logement.json";
import Carousel from "../../components/Carousel/Carousel";
import Stars from "../../components/Stars/Stars";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Description from "../../components/Description/Description";
import Location from "../../components/Location/Location";

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
        <div>
            <Carousel images={logement.pictures} />
            <h2>{logement.title}</h2>
            <Stars rating={logement.rating} />
            <Tags tags={logement.tags} />
            <Host host={logement.host} />
            <Description description={logement.description} />
            <Location location={logement.location} />
        </div>
    );
}

export default Logement;