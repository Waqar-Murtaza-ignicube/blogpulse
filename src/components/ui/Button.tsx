import { FC } from 'react'
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Button: FC<ButtonProps> = ({
  onClick,
  className = '',
  children
}) => {
  return (
    <button onClick={onClick} className={`flex gap-2 font-semibold ${className}`}>
      {children} <ArrowRight />
    </button>
  );
};

export default Button;
