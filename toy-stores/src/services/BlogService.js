import "../configs/installCompositionApi";
import { ref } from "@vue/composition-api";
import { db, storage, timestamp } from "../configs/firebase";
import { SlugFromTitle } from "../utils/SlugFromTitle";

const error = ref(null);
const isPending = ref(false);

const BlogService = {
  add: async (blog) => {
    isPending.value = true;
    error.value = null;

    const filePath = `blogs/${blog.file.name}`;
    const fileRef = storage.ref(filePath);

    try {
      const response = await fileRef.put(blog.file);
      const url = await response.ref.getDownloadURL();

      const database = await db.collection("blogs").add({
        name: blog.name,
        description: blog.description,
        sub_description: blog.sub_description,
        urlImage: url,
        slug: SlugFromTitle(blog.name),
        author: blog.author,
        comment: [],
        createdAt: timestamp,
        updatedAt: timestamp,
      });
      if (!database) throw new Error("Not create blog");
      return database;
    } catch (err) {
      console.log("Error adding blog: " + err);
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  },
  show: async () => {
    try {
      const res = await db.collection("blogs").get();
      if (!res) throw new Error("Error get database");
      return res;
    } catch (err) {
      console.log("Error show blogs: " + err);
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
          sub_description: data.sub_description,
          slug: SlugFromTitle(data.name),
          updatedAt: timestamp,
        };
      } else {
        const filePath = `blogs/${data.file.name}`;
        const fileRef = storage.ref(filePath);
        const response = await fileRef.put(data.file);
        const url = await response.ref.getDownloadURL();
        dataNewUp = {
          name: data.name,
          description: data.description,
          sub_description: data.sub_description,
          slug: SlugFromTitle(data.name),
          updatedAt: timestamp,
          urlImage: url,
        };
      }

      await db.collection("blogs").doc(data.id).update(dataNewUp);

      return true;
    } catch (err) {
      console.log("Error update blogs: " + err);
    } finally {
      isPending.value = false;
    }
  },
  comment: async (blog) => {
    isPending.value = true;
    error.value = null;
    try {
      await db.collection("blogs").doc(blog[0].id).update({
       comment: [...blog]
      });
      return true;
    } catch (err) {
      console.log("Error update comment: " + err);
    } finally {
      isPending.value = false;
    }
  },
  delete: async (id) => {
    isPending.value = true;
    error.value = null;
    try {
      await db.collection("blogs").doc(id).delete();

      return true;
    } catch (err) {
      console.log("Error delete blogs: " + err);
    } finally {
      isPending.value = false;
    }
  },
};

export { BlogService, error, isPending };