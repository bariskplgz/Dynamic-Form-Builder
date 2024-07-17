export class Field {
  id!: number;
  Required!:boolean;
  Name!: string;
  DataType!: string;
}

export class Form {
  id!: number;
  name!: string;
  description!: string;
  createdAt!: Date;
  createdBy!: number;
  fields!: Field[];
}
