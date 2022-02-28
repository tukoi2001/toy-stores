import { auth } from "@/configs/firebase";

const SignOutAccount = {
  signOut: async () => {
    try {
      await auth.signOut();
      return true;
    } catch (err) {
      console.log("Error signOut" + err);
    }
  },
};

export { SignOutAccount };
