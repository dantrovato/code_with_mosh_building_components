import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  handleDismiss: () => void;
}

const Alert = ({ children, handleDismiss }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleDismiss}
      ></button>
    </div>
  );
};

export default Alert;
