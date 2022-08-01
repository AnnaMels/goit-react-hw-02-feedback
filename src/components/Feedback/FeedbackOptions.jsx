import PropTypes from "prop-types";
import { FeedbackButtonsList } from './Feedback.styled';
import { ButtonItem } from './Feedback.styled';
import { Button } from './Feedback.styled';

const shortid = require('shortid');


export default function Feedback({ options, onLeaveFeedback }) {
    return (
        <div>
            <FeedbackButtonsList>
                {Object.entries(options).map(([type]) => (
                <ButtonItem key={shortid.generate()}><Button onClick={onLeaveFeedback}>{type}</Button></ButtonItem>
                ))}
            </FeedbackButtonsList> 
        </div>
        
    )
};

Feedback.propTypes = {
    options: PropTypes.exact({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    })
}

