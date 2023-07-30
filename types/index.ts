import { ChangeEventHandler, KeyboardEventHandler } from "react";

export interface InputFormProps {
  type: string;
  name?: string;
  placeholder?: string;
  labelText?: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  handleKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  value: string;
  styles?: string;
}
