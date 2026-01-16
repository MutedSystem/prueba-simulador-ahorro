export class Lead {
  id: string;
  name: string;
  email: string;
  documentType: string;
  documentNumber: number;
  createdAt: Date;

  constructor(
    name: string,
    email: string,
    documentType: string,
    documentNumber: number,
  ) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.createdAt = new Date();
  }
}
