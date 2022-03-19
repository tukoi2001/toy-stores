import { db, auth, timestamp } from "@/configs/firebase";
import { ref } from "@vue/composition-api";

const error = ref(null);
const isPending = ref(false);
const message = ref(null);

const AuthService = {
  register: async (user) => {
    isPending.value = true;
    error.value = null;
    try {
      const res = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );

      if (!res) throw new Error("Could not create user!");
      await res.user.sendEmailVerification({
        url: "http://localhost:8080/login",
      });
      await res.user.updateProfile({
        displayName: user.fullName,
      });

      const dataBase = db.collection("users").doc(res.user.uid);
      await dataBase.set({
        name: user.fullName,
        email: user.email,
        role: "user",
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

  login: async (user) => {
    isPending.value = true;
    error.value = null;
    try {
      const res = await auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      if (!res) throw new Error("Could not login");

      return true;
    } catch (err) {
      console.log(err);
      error.value = "Email or password is incorrect. Please check again!!!!";
    } finally {
      isPending.value = false;
    }
  },

  signOut: async () => {
    try {
      await auth.signOut();
      return true;
    } catch (err) {
      console.log("Error signOut" + err);
    }
  },

  reset_password: async (email) => {
    isPending.value = true;
    error.value = null;
    message.value = null;
    try {
      await auth.sendPasswordResetEmail(email);

      message.value = "Check your email to create a new password!";

      return true;
    } catch (err) {
      console.log("Error reset password:" + err);
      error.value = "Error reset password. Please try again!!!";
    } finally {
      isPending.value = false;
    }
  },
  loginWithGoogle: async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
      const userCred = await auth.signInWithPopup(provider);
      console.log(userCred);
      return {
        user: userCred
      }
    }
    catch (err){ 
      return {
        error: err.message
      }
    }
  }
};

export { AuthService, error, isPending, message }