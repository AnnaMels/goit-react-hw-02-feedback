import PropTypes from "prop-types";
import { Title } from './Statistics.styled';
import { StatisticsList } from './Statistics.styled';
import { StatisticsItem } from './Statistics.styled';
import { ItemText } from './Statistics.styled';
const shortid = require('shortid');

export default function Statistics({ feedbackType, total, positivePersantage }) {
    return (
        <div>
        <Title>Statistics</Title>
            <StatisticsList>
                {Object.entries(feedbackType).map(([name, value]) => (
                    <StatisticsItem key={shortid.generate()}>
                        < ItemText>{name}</ ItemText>
                        <span>{value}</span>
                    </StatisticsItem>
                ))}
            </StatisticsList>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePersantage}%</p>
        </div>
    )
}

Statistics.propTypes = {
    feedbackType: PropTypes.exact({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }),
    total: PropTypes.number,
    positivePersantage: PropTypes.number,
}