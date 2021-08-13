import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SuggestionsInput.module.scss';

const SuggestionsInput = ({
  className,
  value,
  suggestions,
  placeholder,
  onChange,
  onSuggestionClick,
}) => {
  return (
    <div className={classNames(styles.SuggestionInputContainer, className)}>
      <input
        className={styles.Input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className={styles.Suggestions}>
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.value}
            className={styles.Suggestion}
            onClick={() => onSuggestionClick(suggestion.value)}
          >
            {suggestion.value}
          </div>
        ))}
      </div>
    </div>
  );
};

SuggestionsInput.propTypes = {
  value: PropTypes.string,
  suggestions: PropTypes.array,
  onChange: PropTypes.func,
};

SuggestionsInput.defaultProps = {
  value: '',
  suggestions: [],
  onChange: () => {},
};

export default React.memo(SuggestionsInput);
