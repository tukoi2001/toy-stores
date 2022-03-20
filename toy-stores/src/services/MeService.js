import "../configs/installCompositionApi";
import { ref } from "@vue/composition-api";
import { db, auth, timestamp } from "../configs/firebase";

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
  
  register: async (user) => {
    isPending.value = true;
    error.value = null;
    console.log(user)
    try {
      const res = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );

      if (!res) throw new Error("Could not create user!");
  
      await res.user.updateProfile({
        displayName: user.fullName,
      });

      const dataBase = db.collection("users").doc(res.user.uid);
      await dataBase.set({
        name: user.fullName,
        email: user.email,
        role: user.role,
        created_at: timestamp,
        updated_at: timestamp,
        isActive: true,
        customField: ''
      });

      return true;
    } catch (err) {
      console.log("Error register:" + err);
      error.value = "Error register. Please try again!!!";
    } finally {
      isPending.value = false;
    }
  },

  // delete: async (id) => {
  //   isPending.value = true;
  //   error.value = null;
  //   try {

  //     await db.collection("users").doc(id).delete();
  //     return true;
  //   } catch (err) {
  //     console.log("Error delete user: " + err);
  //   }
  //   finally {
  //     isPending.value = false;
  //   }
  // }

};

export { MeService, error, isPending};
