type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};
export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`border p-1 cursor-pointer rounded-xl bg-gray-100  border-none ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
