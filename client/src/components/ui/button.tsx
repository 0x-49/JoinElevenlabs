import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  link?: string;
  fullWidth?: boolean;
}

const getButtonStyles = (
  variant: ButtonProps['variant'] = 'primary',
  size: ButtonProps['size'] = 'medium',
  fullWidth?: boolean
): string => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    ghost: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100'
  };

  const sizes = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3'
  };

  const width = fullWidth ? 'w-full' : '';

  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${width}`;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary',
    size = 'medium',
    className = '',
    link,
    fullWidth,
    children,
    ...props
  }, ref) => {
    if (link) {
      return (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${getButtonStyles(variant, size, fullWidth)} ${className}`}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={`${getButtonStyles(variant, size, fullWidth)} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
