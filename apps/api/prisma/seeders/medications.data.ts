export const getMedicationData = () => {
    return [
      {
        description: "Paracetamol 500mg",
        expirationDate: new Date("2025-12-31"),
        tag: "Pain Relief",
      },
      {
        description: "Ibuprofen 200mg",
        expirationDate: new Date("2024-10-15"),
        tag: "Anti-inflammatory",
      },
    ];
}