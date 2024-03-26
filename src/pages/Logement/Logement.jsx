import { useParams } from "react-router-dom";
import logements from "../../data/logement.json";

const LogementID = (id) => {
    return logements.find((logement) => logement.id === id);
}

function Logement() {
    const { id } = useParams();
    const logement = LogementID(id);
    const pictures = logement.pictures;
    return (
        <div>
            <p> {logement.title} </p>
            <div className="pictures">
                {pictures.map((picture) => {
                    return (
                        <img src={picture} alt={logement.title} key={picture} />
                    )
                })}
            </div>
        </div>
    );
}

export default Logement;