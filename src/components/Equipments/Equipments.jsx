import PropTypes from "prop-types";
import { useState, useCallback } from "react";

function Equipments({equipments}) {
    const [isOpen, setIsOpen] = useState(false);
    
    const updateIsOpen = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);
    
    const equipmentsIcon = `fas fa-chevron-${isOpen ? "up" : "down"}`;
    
    return (
        <section className={`equipments${isOpen ? " is-open" : " is-close"}`}>
        <h2 className="equipmentsTitle">
            <span>Equipments</span>
            <span className={equipmentsIcon} onClick={updateIsOpen}></span>
        </h2>
    
        {isOpen && (
            <p className={`equipmentsText ${isOpen ? "is-open" : "is-close"}`}>
                {equipments}
            </p>
        )}
        </section>
    );
}

Equipments.propTypes = {
    equipments: PropTypes.array.isRequired,
};

export default Equipments;