import "../configs/installCompositionApi";
import { ref } from "@vue/composition-api";
import { db, storage, timestamp } from "../configs/firebase";
import { SlugFromTitle } from "../utils/SlugFromTitle";

const error = ref(null);
const isPending = ref(false);

const CategoryService = {
  add: async (cate) => {
    isPending.value = true;
    error.value = null;

    const filePath = `categories/${cate.file.name}`;
    const fileRef = storage.ref(filePath);

    try {
      const response = await fileRef.put(cate.file);
      const url = await response.ref.getDownloadURL();

      const database = await db.collection("categories").add({
        name: cate.name,
        description: cate.description,
        urlImage: url,
        slug: SlugFromTitle(cate.name),
        createdAt: timestamp,
        updatedAt: timestamp,
        deletedAt: null,
        deleted: false,
      });
      if (!database) throw new Error("Not create category");
      return database;
    } catch (err) {
      console.log("Error adding category: " + err);
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  },
  show: async () => {
    try {
      const res = await db.collection("categories").get();
      if (!res) throw new Error("Error get database");
      return res;
    } catch (err) {
      console.log("Error show category: " + err);
    }
  },
  update: async (data) => {
    isPending.value = true;
    error.value = null;

    try {
      let dataNewUp = null;

      if (data.file == null) {
        dataNewUp = {
          name: data.name,
          description: data.description,
          slug: SlugFromTitle(data.name),
          updatedAt: timestamp,
        };
      } else {
        const filePath = `categories/${data.file.name}`;
        const fileRef = storage.ref(filePath);
        const response = await fileRef.put(data.file);
        const url = await response.ref.getDownloadURL();
        dataNewUp = {
          name: data.name,
          description: data.description,
          slug: SlugFromTitle(data.name),
          updatedAt: timestamp,
          urlImage: url,
        };
      }

      await db.collection("categories").doc(data.id).update(dataNewUp);

      return true;
    } catch (err) {
      console.log("Error update category: " + err);
    } finally {
      isPending.value = false;
    }
  },
  delete: async (id) => {
    isPending.value = true;
    error.value = null;
    try {
      await db.collection("categories").doc(id).delete();

      return true;
    } catch (err) {
      console.log("Error delete category: " + err);
    } finally {
      isPending.value = false;
    }
  },
};

export { CategoryService, error, isPending };