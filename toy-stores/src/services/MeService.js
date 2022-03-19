import "../configs/installCompositionApi";
import { ref } from "@vue/composition-api";
import { db } from "../configs/firebase";

const error = ref(null);
const isPending = ref(false);

const MeService = {
  
  me: async (userId) => {
    isPending.value = true;
    error.value = null;
    try {
      const response = await db.collection("users").doc(userId).get();
      return response;
    } catch (err) {
      console.error("Error me" + err);
    } finally {
      isPending.value = false;
    }
  },

  display: async () => {
    isPending.value = true;
    error.value = null;
    try {
      const res = await db.collection("users").get();
      if (!res) throw new Error("Error get database");
      return res;
    } catch (err) {
      error.value = err.message;
      console.log("Error show category: " + error);
    }
    finally {
      isPending.value = false;
    }
  },
  update: async (user) => {
    isPending.value = true;
    error.value = null;

    try {
      await db.collection("users").doc(user.id).update({
        role: user.role,
        isActive: user.isActive,
        customField: user.customField,
      });
      return true;
    } catch (err) {
      console.log("Error update user: " + err);
    } finally {
      isPending.value = false;
    }
  },
};

export { MeService, error, isPending};
