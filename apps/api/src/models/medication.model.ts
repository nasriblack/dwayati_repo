export interface IMedication {
  id: string;
  description: string | null;
  expirationDate: Date | string;
  tag: string | null;
  name: string;
  prescription: {
    doctorName: string;
    description: string;
    createdAt: Date;
  }[];
}
