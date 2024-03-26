import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Thumb ({logement}) {
    return (
        logement.map((logement) => (
            <Link to={`/logement/${logement.id}`} className="thumb" key={logement.id}>
                <img src={logement.cover} alt={logement.title} />
                <h3>{logement.title}</h3>
            </Link>
        ))
    )
}

Thumb.propTypes = {
    logement: PropTypes.array.isRequired
}

export default Thumb