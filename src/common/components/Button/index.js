import { PropTypes } from 'react';
import styles from './styles.less';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

import ProgressIcon from 'common/components/Icon/Progress';

const Button = (props) => (
  <button
    className={cx('button', props.className, props.type, {
      disabled: props.busy || props.disabled,
    })}
    disabled={props.busy || props.disabled}
    onClick={props.onClick}
  >
    {props.busy ? <ProgressIcon className={styles.progress} /> : props.children}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  type: 'neutral',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  busy: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.any,
  containerClassName: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
