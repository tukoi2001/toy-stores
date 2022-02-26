import { db, auth, timestamp } from "@/configs/firebase";
import { ref } from "@vue/composition-api";


const error = ref(null);
const isPending = ref(false);
// let message = null;

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
  
        await res.user.updateProfile({
          displayName: user.fullName,
        });
        
        const dataBase = db.collection("users").doc(res.user.uid);
        await dataBase.set({
          name: user.fullName,
          email: user.email,
          role: "user",
          created_at: timestamp
        });
  
        return true;
      } catch (err) {
        console.log("Error register:" + err);
        error.value = "Error register. Please try again!!!";
      } finally {
        isPending.value = false;
      }
    },
}

export { AuthService, error, isPending };