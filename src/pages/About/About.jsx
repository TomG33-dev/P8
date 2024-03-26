import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

import Paysage from "../../assets/images/paysageabout.png";

import AboutContents from "../../data/aboutcontents.json";

function About() {
    return (
        <div className="about">
            <Banner>
                <img src={Paysage} alt="Paysage" />
            </Banner>
            <div className="collapses-box">
                {AboutContents.map(({ title, text }) => (
                    <Collapse key={`about-${title}`} title={title} textArray={[text]} />
                ))}
            </div>
        </div>
    );
}

export default About;