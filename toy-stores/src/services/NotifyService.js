import "../configs/installCompositionApi";
import { db, timestamp } from "../configs/firebase";


const NotifyService = {
  add: async (notify) => { 
    try {
      const database = await db.collection("notifies").add({
        title: notify.title,
        urlImageUser: notify.urlImageUser,
        user: notify.user,
        createdAt: timestamp
      });
      if (!database) throw new Error("Not create notify");
      return database;
    } catch (err) {
      console.log("Error adding notify: " + err);
    } 
  },
  show: async () => {
    try {
      const res = await db.collection("notifies").get();
      if (!res) throw new Error("Error get database");
      return res;
    } catch (err) {
      console.log("Error show notifies: " + err);
    }
  },
  delete: async (id) => {
    try {
      await db.collection("notifies").doc(id).delete();

      return true;
    } catch (err) {
      console.log("Error delete notify: " + err);
    }
  },
};

export { NotifyService };