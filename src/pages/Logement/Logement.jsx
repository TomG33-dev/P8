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
            <h1>Logement ID : ${id}</h1>
            <p> {logement.title} </p>
                {pictures.map((picture) => {
                    return (
                        <img src={picture} alt={logement.title} key={picture} />
                    )
                })
            }
        </div>
    );
}

export default Logement;