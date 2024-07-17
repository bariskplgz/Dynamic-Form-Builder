import { Field } from "./form";

export class FormDto {
  Name!: string;
  Description!: string;
  fields!: Field[];
}
