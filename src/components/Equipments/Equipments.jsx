import PropTypes from "prop-types";
import { useState, useCallback } from "react";

function Equipments({equipments}) {
    const [isOpen, setIsOpen] = useState(false);
    
    const updateIsOpen = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);
    
    const equipmentsIcon = `fas fa-chevron-${isOpen ? "down" : "up"}`;
    
    return (
        <section className={`equipments${isOpen ? " is-open" : " is-close"}`}>
        <h2 className="equipmentsTitle">
            <span>Equipments</span>
            <span className={equipmentsIcon} onClick={updateIsOpen}></span>
        </h2>
    
        <ul className={`equipmentsText ${isOpen ? "is-open" : "is-close"}`}>
            {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
        </section>
    );
}

Equipments.propTypes = {
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Equipments;