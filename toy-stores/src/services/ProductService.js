
import { db, storage, timestamp } from "../configs/firebase";
import { SlugFromTitle } from "../utils/SlugFromTitle";


const ProductService = {
  add: async (product) => {

    try {
      const arrUrl = [];
      for (let i = 0; i < product.file.length; i++) {
        const filePath = `products/${product.file[i].name}`;
        const fileRef = storage.ref(filePath);
        const response = await fileRef.put(product.file[i]);
        const url = await response.ref.getDownloadURL();
        console.log(url);
        arrUrl.push(url);
      }

      const database = await db.collection("products").add({
        name: product.name,
        urlImage: arrUrl,
        category: product.category,
        description: product.description,
        sub_description: product.sub_description,
        price: product.price,
        quantity: product.quantity,
        slug: SlugFromTitle(product.name),
        sale_off: product.sale_off,
        createdAt: timestamp,
        updatedAt: timestamp,
        deletedAt: null,
        deleted: false,
        isNew: product.isNew,
      });

      if (!database) throw new Error("Not create product");
      return database;
    } catch (err) {
      console.log("Error add product: " + err);
    }
  },
  show: async () => {
    try {
      const res = await db.collection("products").get();
      if (!res) throw new Error("Error get products");
      return res;
    } catch (error) {
      console.log("Error show products: " + error);
    }
  },

  update: async (product) => {
    try {
      let dataNewUp = null;

      if (product.file == null) {
        dataNewUp = {
            name: product.name,
            category: product.category,
            description: product.description,
            sub_description: product.sub_description,
            price: product.price,
            quantity: product.quantity,
            slug: SlugFromTitle(product.name),
            sale_off: product.sale_off,
            updatedAt: timestamp,
            isNew: product.isNew,
        };
      } else {
        const arrUrl = [];
        for (let i = 0; i < product.file.length; i++) {
          const filePath = `products/${product.file[i].name}`;
          const fileRef = storage.ref(filePath);
          const response = await fileRef.put(product.file[i]);
          const url = await response.ref.getDownloadURL();
          arrUrl.push(url);
        }
        dataNewUp = {
            name: product.name,
            urlImage: arrUrl,
            category: product.category,
            description: product.description,
            sub_description: product.sub_description,
            price: product.price,
            quantity: product.quantity,
            slug: SlugFromTitle(product.name),
            sale_off: product.sale_off,
            updatedAt: timestamp,
            isNew: product.isNew,
        };
      }
      await db.collection("products").doc(product.id).update(dataNewUp);
      return true;
    } catch (err) {
      console.log("Error update category: " + err);
    }
  },
  delete: async (id) => {
    try {
      await db.collection("products").doc(id).delete();
      return true;
    } catch (err) {
      console.log("Error delete category: " + err);
    }
  },
};

export { ProductService };