type Props = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

const Input = ({ handleInputChange, text }: Props) => {
  return <input type="text" value={text} onChange={handleInputChange} />;
};

export default Input;
