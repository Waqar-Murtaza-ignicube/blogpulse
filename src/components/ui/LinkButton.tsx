import { FC } from 'react';
import { Link } from 'react-router-dom';

type LinkButtonProps = {
  to: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'dark' | 'light';
};

const variantClassMap = {
  dark: 'bg-black text-white border-black hover:bg-white hover:border-black hover:text-black',
  light: 'bg-white text-black border-black hover:bg-black hover:text-white',
};

const LinkButton: FC<LinkButtonProps> = ({
  to,
  className = '',
  children,
  variant = 'dark',
}) => {
  const baseStyles = 'flex font-semibold px-4 py-2 border text-sm uppercase transition-colors duration-200';
  const variantStyles = variantClassMap[variant];

  return (
    <Link to={to} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
