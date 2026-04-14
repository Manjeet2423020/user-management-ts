type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="border p-1 cursor-pointer rounded-xl bg-gray-200 w-25 border-none "
      onClick={onClick}
    >
      {children}
    </button>
  );
};
