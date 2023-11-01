import { ReactNode } from "react";

type Props = { children: ReactNode; action: () => void };

const Button = ({ children, action }: Props) => {
  return (
    <button type="button" onClick={action}>
      {children}
    </button>
  );
};

export default Button;
