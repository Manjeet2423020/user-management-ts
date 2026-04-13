type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="border p-1 cursor-pointer rounded-xl bg-gray-400 w-25 border-none "
      onClick={onClick}
    >
      {children}
    </button>
  );
};
