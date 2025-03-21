export interface IMedication {
  id: string;
  description: string | null;
  expirationDate: Date;
  tag: string | null;
  prescription: {
    doctorName: string;
    description: string;
    createdAt: Date;
  }[];
}