import { InputAdornment } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import classNames from "classnames";
import React from "react";
import "./styles.scss";

type TInputProps = TextFieldProps & {
  onKeyUp?: any;
  startInput?: any;
  className?: string;
  inputClass?: string;
  endInput?: any;
  value?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  label?: string;
  size?: "small" | 'medium';
  inputComponent?: any;
  containerStyle?: any;
  inputProps?: any;
  readOnly?: boolean;
  inputType?: string;
  handleChange?: any;
}

const useStyles = makeStyles({
  root: {},
});

const insertStrToStr = (str: string, ins_str: string, index: number) => {
  var temp: string = '';
  temp = temp.concat(str.slice(0, index)).concat(ins_str).concat(str.slice(index, str.length));
  return temp;
};

const getExpiryForm = (str: string) => {
  var temp: string;
  if(str.length <= 2) temp = str;
  else temp = insertStrToStr(str.replace('/',''), '/', 2);
  return temp;
};

const getCreditCardForm = (str: string) => {
  var result: string = '';
  str = str.replace(' ', '');
  str = str.replace(' ', '');
  var i;
  for(i = 0 ; i < str.length ; i ++) {
    if(i!=0 && i%4 == 0) result = result.concat(' ');
    result = result.concat(str[i]);
  }
  return result;
};

const validate = (inputType: String|undefined, e: any) => {
  if(inputType === 'card') {
    const inputStr: string = e.target.value.replace(' ', '');
    var resultStr: string = '';
    const re = /^[0-9\b' '\b]+$/;
    if((inputStr.replace(' ', '').length <= 17) && re.test(inputStr)) {
      resultStr = inputStr;
    } else {
      resultStr = inputStr.substr(0, inputStr.length-1);
    }
    e.target.value = getCreditCardForm(resultStr.replace(' ', ''));
  }
  if(inputType === 'expiry') {
    const inputStr: string = e.target.value;
    var resultStr: string = '';
    const re = /^[0-9\b/\b]+$/;
    if((inputStr.length <= 5) && re.test(inputStr)) {
      resultStr = inputStr;
    } else {
      resultStr = inputStr.substr(0, inputStr.length-1);
    }
    e.target.value = getExpiryForm(resultStr);
  }
  if(inputType === 'cvc') {
    const inputStr: string = e.target.value;
    var resultStr: string = '';
    const re = /^[0-9\b]+$/;
    if((inputStr.length <= 3) && re.test(inputStr)) {
      resultStr = inputStr;
    } else {
      resultStr = inputStr.substr(0, inputStr.length-1);
    }
    e.target.value = resultStr;
  }
  if(inputType === 'postcode') {
    const inputStr: string = e.target.value;
    var resultStr: string = '';
    const re = /^[0-9\b]+$/;
    if((inputStr.length <= 5) && re.test(inputStr)) {
      resultStr = inputStr;
    } else {
      resultStr = inputStr.substr(0, inputStr.length-1);
    }
    e.target.value = resultStr;
  }
};

export const Input: React.FC<TInputProps> = ({
  onKeyUp,
  startInput,
  className,
  inputClass,
  endInput,
  value,
  variant = "filled",
  label,
  size = "small",
  inputComponent,
  containerStyle,
  inputProps,
  readOnly = false,
  inputType,
  handleChange,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={classNames("input", className)} style={containerStyle}>
      <TextField
        {...rest}
        fullWidth
        label={label}
        value={value}
        size={size}
        variant={variant}
        className={classNames("item", inputClass, classes.root)}
        // onChange={(e) => validate(inputType, e)}
        onClick={handleChange}
        inputProps={inputProps}
        InputProps={{
          startAdornment: startInput && (
            <InputAdornment
              position="start"
              sx={{ marginRight: "16px", marginBottom: "4px" }}
            >
              {startInput}
            </InputAdornment>
          ),
          endAdornment: endInput && (
            <InputAdornment position="end">{endInput}</InputAdornment>
          ),
          inputComponent: inputComponent,
          readOnly,
        }}
      />
    </div>
  );
};
