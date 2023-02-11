import { IMaskMixin } from "react-imask";
import { ReactMaskProps } from "react-imask/dist/mixin";

import BaseInput, { BaseInputPropType } from "../base-input";

const MaskInput = IMaskMixin((props: ReactMaskProps & BaseInputPropType) => {
  const { inputRef } = props;
  return <BaseInput ref={inputRef} {...(props as any)} />;
});
export default MaskInput;
