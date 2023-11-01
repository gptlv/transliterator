import React from "react";

type Props = { children: React.ReactNode };

const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default Text;
