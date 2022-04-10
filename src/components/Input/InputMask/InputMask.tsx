import React from "react";
import { IMaskInput } from "react-imask";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  mask?: string;
  definitions?: any;
  name: string;
}

export const InputMask = React.forwardRef<HTMLElement, CustomProps>(
  function InputMask(props, ref: any) {
    const {
      onChange,
      mask = "#00 0000 0000",
      definitions = { "#": /[1-9]/ },
      ...other
    } = props;
    return (
      <IMaskInput
        {...other}
        mask={mask}
        definitions={definitions}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value: value as string } })}
        overwrite
      />
    );
  }
);
