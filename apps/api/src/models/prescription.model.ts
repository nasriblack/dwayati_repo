export interface TListPrescription {
    id: string;
    doctorName: string;
    description: string;
    createdAt: Date;
    medications: {
        id: string;
        description: string | null;
        expirationDate: Date;
        tag: string | null;
    }[];
}[]