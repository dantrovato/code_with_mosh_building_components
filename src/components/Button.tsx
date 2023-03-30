interface Props {
  children: string;
  color?: "primary" | "danger" | "success" | "info";
  handleClick: () => void;
}

const Button = ({ children, handleClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
