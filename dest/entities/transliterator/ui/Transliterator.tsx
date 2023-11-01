import { GetTextInput as GetText } from "../../../features/getText/";
import { ShowResultText as ShowResult } from "../../../features/showResult/";

export function Transliterator() {
  return (
    <>
      <GetText />
      <ShowResult />
    </>
  );
}
