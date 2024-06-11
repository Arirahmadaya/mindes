import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { variant = 'primary', children, onClick } = this.props;
    const buttonClasses = `
      py-2 px-4 rounded-lg font-medium text-white 
      ${variant === 'primary' ? 'bg-primary-30 hover:bg-primary-50' : ''}
      ${variant === 'secondary' ? 'bg-gray-400 hover:bg-gray-500' : ''}
      ${variant === 'outline' ? 'border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-white' : ''}
    `;

    return (
      <button className={buttonClasses} onClick={onClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
