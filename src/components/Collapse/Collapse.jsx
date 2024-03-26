import PropTypes from "prop-types";
import { useState, useCallback } from "react";

function Collapse({ title, textArray }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const updateIsOpen = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);
    
    const collapseIcon = `fas fa-chevron-${isOpen ? "up" : "down"}`;
    
    return (
        <section className={`collapse${isOpen ? " is-open" : " is-close"}`}>
        <h2 className="collapseTitle">
            <span>{title}</span>
            <span className={collapseIcon} onClick={updateIsOpen}></span>
        </h2>
    
        <ul className={`collapseText ${isOpen ? "is-open" : "is-close"}`}>
            {textArray.map((item, index) => (
            <li key={`item-${index}`}>{item}</li>
            ))}
        </ul>
        </section>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    textArray: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Collapse;