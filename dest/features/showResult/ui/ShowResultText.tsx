import { useAppSelector } from "shared/model";
import { transliterate } from "features/showResult/model/actions";
import Text from "shared/ui/Text";

export function ShowResultText() {
  const transliterator = useAppSelector((state) => state.transliterator);
  const transliteratedText = transliterate(transliterator.text);
  return <Text>{transliteratedText}</Text>;
}
