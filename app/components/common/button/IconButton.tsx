interface IconButtonProps {
  children: React.ReactNode;
}

const IconButton = ({ children }: IconButtonProps) => {
  return (
    <button className="text-white/80 hover:text-white hover:scale-120 transition-all delay-150 cursor-pointer">
      {children}
    </button>
  );
};

export default IconButton;
