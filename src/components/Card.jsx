import PropTypes from "prop-types";

const Card = ({logement}) => {
    return (
        logement.map((logement) => (
            <div key={logement.id} className="card">
                <img src={logement.cover} alt="logement"></img>
                <h3>{logement.title}</h3>
            </div>
        ))
    );
}

Card.propTypes = {
    logement: PropTypes.array.isRequired
}

export default Card;