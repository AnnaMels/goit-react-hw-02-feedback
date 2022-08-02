import PropTypes from "prop-types";
import { FeedbackButtonsList } from './Feedback.styled';
import { ButtonItem } from './Feedback.styled';
import { Button } from './Feedback.styled';

const shortid = require('shortid');


export default function Feedback({ options, onLeaveFeedback }) {
    return (
        <div>
            <FeedbackButtonsList>
                {options.map(option => (
                    <ButtonItem key={shortid.generate()}><Button onClick={() => { onLeaveFeedback(option) }}>{option}</Button></ButtonItem>
                ))}
            </FeedbackButtonsList> 
        </div>
        
    )
};

Feedback.propTypes = {
    options: PropTypes.array
}

