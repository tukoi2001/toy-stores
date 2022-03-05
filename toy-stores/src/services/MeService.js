import { db } from "../configs/firebase";
const MeService = {
  me: async (userId) => {
    try {
      const response = await db.collection("users").doc(userId).get();
      return response;
    } catch (err) {
      console.error("Error me" + err);
    }
  },
};

export { MeService };
