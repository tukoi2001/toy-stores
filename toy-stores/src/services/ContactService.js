import "../configs/installCompositionApi";
import { ref } from "@vue/composition-api";
import { db, timestamp } from "../configs/firebase";

const error = ref(null);
const isPending = ref(false);
const isSuccess = ref(false);

const ContactService = {
  sendEmail: async (data) => {
    isPending.value = true;
    error.value = null;
    try {
      const res = await db.collection("contacts").add({
        email: data.email,
        fullName: data.fullName,
        message: data.message,
        createdAt: timestamp,
        updatedAt: timestamp,
        deletedAt: null,
        deleted: false,
      });

      if (!res) throw new Error("Not create contact");
      isSuccess.value = true;
      return res;
    } catch (e) {
      console.error("Erorr sending email contact" + e);
    } finally {
      isPending.value = false;
    }
  },
  sendEmailInFo: async (email) => {
    isPending.value = true;
    error.value = null;
    try {
      const res = await db.collection("contacts").add({
        email: email,
        message: 'Tôi muốn nhận thông tin khi có chương trình khuyến mãi hoặc có sản phẩm mới!',
        createdAt: timestamp,
        updatedAt: timestamp,
        deletedAt: null,
        deleted: false,
      });

      if (!res) throw new Error("Not create contact");
      isSuccess.value = true;
      return res;
    } catch (e) {
      console.error("Erorr sending email contact" + e);
    } finally {
      isPending.value = false;
    }
  },
  show: async () => {
    try {
      const response = await db.collection.apply("contacts").get();
      if (!response) throw new Error("Error get database");
      return response;
    } catch (err) {
      error.value = err.message;
      console.log(err);
    }
  },
};

export { ContactService, error, isPending, isSuccess };
