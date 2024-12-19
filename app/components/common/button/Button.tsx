import classNames from 'classnames';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        'text-sm hover:scale-110 font-black bg-white px-4 py-2 rounded-full border-white border shadow-lg cursor-pointer hover:bg-transparent hover:text-white transition-all delay-150',
      )}
    >
      {children}
    </button>
  );
};

export default Button;
