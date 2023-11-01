import { useAppDispatch, useAppSelector } from "shared/model";
import { setText } from "entities/transliterator/model/slice";
import Input from "shared/ui/Input";

type Props = {};

export function GetTextInput(props: Props) {
  const transliterator = useAppSelector((state) => state.transliterator);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    dispatch(setText(currentText));
  };

  return (
    <Input
      handleInputChange={handleInputChange}
      text={transliterator.text}
    ></Input>
  );
}
