import React from 'react';

function Button({ children, variant = 'primary', ...props }) {
    const baseStyles =
        'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
    const primaryStyles = 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600';
    const secondaryStyles = 'text-sm/6 font-semibold text-gray-900';

    const buttonStyles = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}`

    return (
        <a {...props} className={buttonStyles}>
            {children}
        </a>
    );
}

export default Button;