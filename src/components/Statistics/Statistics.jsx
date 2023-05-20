import sty from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={sty.list}>
      <li className={sty.item}>Good: {good}</li>
      <li className={sty.item}>Neutral: {neutral}</li>
      <li className={sty.item}>Bad: {bad}</li>
      <li className={sty.item}>Total: {total}</li>
      <li className={sty.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;