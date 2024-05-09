import PropTypes from "prop-types";
import { useState, useCallback } from "react";

function Description({description}) {
    const [isOpen, setIsOpen] = useState(false);
    
    const updateIsOpen = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);
    
    const descriptionIcon = `fas fa-chevron-${isOpen ? "down" : "up"}`;
    
    return (
        <section className={`description${isOpen ? " is-open" : " is-close"}`}>
        <h2 className="descriptionTitle">
            <span>Description</span>
            <span className={descriptionIcon} onClick={updateIsOpen}></span>
        </h2>
    
        <p className={`descriptionText ${isOpen ? "is-open" : "is-close"}`}>
            {description}
        </p>
        </section>
    );
}

Description.propTypes = {
    description: PropTypes.string.isRequired
};

export default Description;