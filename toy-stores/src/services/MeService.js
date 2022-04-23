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
      console.log("Error show user: " + error);
    }
    finally {
      isPending.value = false;
    }
  },

  showNumOfUsers: async () => {
    try {
      const res = await db.collection("users").get();
      if (!res) throw new Error("Error get database");
      return res.docs.length;
    } catch (err) {
      error.value = err.message;
      console.log("Error show user: " + error);
    }
  },

  update: async (user) => {
    isPending.value = true;
    error.value = null;

    try {
      await db.collection("users").doc(user.id).update({
        role: user.role,
        customField: user.customField
      });
      return true;
    } catch (err) {
      console.log("Error update user: " + err);
    } finally {
      isPending.value = false;
    }
  },

  updateActive: async (data) => {
    isPending.value = true;
    error.value = null;

    try {
      await db.collection("users").doc(data.id).update({
        isActive: data.isActive,
      });
      return true;
    } catch (err) {
      console.log("Error update user: " + err);
    } finally {
      isPending.value = false;
    }
  },

  updateAddress: async (data) => {
    isPending.value = true;
    error.value = null;
    try {
      await db.collection("users").doc(data.id).update({
        address: data.address
      });
      return true;
    } catch (err) {
      console.log("Error update user: " + err);
    } finally {
      isPending.value = false;
    }
  },

  updatePhoneNumber: async (data) => {
    isPending.value = true;
    error.value = null;
    try {
      await db.collection("users").doc(data.id).update({
        phoneNumber: data.phoneNumber
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
