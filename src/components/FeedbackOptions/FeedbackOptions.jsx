import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <>
      <button
        className={css.optionButton}
        key="good"
        type="button"
        onClick={() => onLeaveGoodFeedback()}
      >
        Good
      </button>
      <button
        className={css.optionButton}
        key="neutral"
        type="button"
        onClick={() => onLeaveNeutralFeedback()}
      >
        Neutral
      </button>
      <button
        className={css.optionButton}
        key="bad"
        type="button"
        onClick={() => onLeaveBadFeedback()}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  // options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveGoodFeedback: PropTypes.func.isRequired,
  onLeaveNeutralFeedback: PropTypes.func.isRequired,
  onLeaveBadFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
