import { Transliterator } from "../../../entities/transliterator"; //should be a widget, actually
import { LayoutFooter } from "../../../widgets/LayoutFooter";

export function MainPage() {
  return (
    <>
      <Transliterator />
      <LayoutFooter />
    </>
  );
}
