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

export interface ObjectProps {
  key: any;
}

export interface Komik {
  data: Data;
}

export interface Data {
  chapters:  Array<Chapter[]>;
  listKomik: ListKomik;
}

export interface Chapter {
  link:    string;
  chapter: string;
}

export interface ListKomik {
  titles: string[];
  links:  string[];
}


