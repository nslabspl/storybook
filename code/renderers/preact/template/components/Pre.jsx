/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const Pre = ({ style, object, text }) => (
  <pre style={style} data-testid="pre">
    {object ? JSON.stringify(object, null, 2) : text}
  </pre>
);

Pre.propTypes = {
  style: PropTypes.shape({}),
  object: PropTypes.shape({}),
  text: PropTypes.string,
};

Pre.defaultProps = {
  style: {},
  object: null,
  text: '',
};
