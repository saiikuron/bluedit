import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea: boolean;
};

// isInvalid={!!error}> '' => false, 'error message' => true        !! converts error into a boolean

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  textarea,
  ...props
}) => {

  let InputOrTextArea = Input;
  if (textarea){
    InputOrTextArea = Textarea;
  }
  
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextArea {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

