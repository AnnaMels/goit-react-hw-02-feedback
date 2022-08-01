import PropTypes from "prop-types";
import { Section } from './Section.styled';


export default function FeedbackSection({ title, children }) {
    return <Section>
        <h1>{title}</h1>
        {children}
  </Section>
}

FeedbackSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array,
}