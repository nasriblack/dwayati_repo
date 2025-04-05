export const endPoint = {
  prescriptionEndPoint: {
    ALL_PRESCRIPTION: "/all-prescription",
    DELETE_PRESCRIPTION: "/prescription/:id",
    CREATE_PRESCRIPTION: "/prescription",
  },
  medicationEndPoint: {
    ALL_MEDICATIONS: "/all-medications",
    CREATE_MEDICATION: "/medication",
    UPDATE_MEDICATION: "/medication/:id",
    SEARCH_MEDICATION: "/medications/:medicationName",
  },
  otherEndPoint: {
    CHECK_STATUS_TEST: "/status",
  },
};

export const apiVersion = "/api/v1";
