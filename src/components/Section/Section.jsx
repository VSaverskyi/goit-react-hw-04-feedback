import PropTypes from "prop-types";
import { SectionName, SectionWrapper } from "./Section.styled";

const Section = ({title, children}) => {
    return (
        <SectionWrapper>
            <SectionName>{title}</SectionName>
            {children}
        </SectionWrapper>
        )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}