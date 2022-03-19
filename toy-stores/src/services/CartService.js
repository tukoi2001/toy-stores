import "../configs/installCompositionApi";
import { ref } from "@vue/composition-api";
import { db, timestamp } from "../configs/firebase";


const error = ref(null);
const isPending = ref(false);

const CartService = {
    add: async (cart) => {
      isPending.value = true;
      error.value = null;
      try {
        const database = await db.collection("orders").add({
            uid: cart.uid,
            fullName: cart.fullName,
            email: cart.email,
            phoneNumber: cart.phoneNumber,
            address: cart.address,
            addressSpecific: cart.addressSpecific,
            pay_method: cart.pay_method,
            items: cart.items,
            note: cart.note,
            totalPrice: cart.total,
            paymentStatus: cart.paymentStatus,
            status: cart.status,
            createdAt: timestamp,
            updatedAt: timestamp,
            notifications: '',
            deletedAt: null,
            deleted: false,
        });
        if (!database) throw new Error("Not create order");
        return database;
      } catch (err) {
        console.log("Error adding orders: " + err);
        error.value = err.message;
      } finally {
        isPending.value = false;
      }
    },

    show: async () => {
      try {
        const res = await db.collection("orders").get();
        if (!res) throw new Error("Error get database");
        return res;
      } catch (err) {
        console.log("Error show orders: " + err);
      }
    },

    update: async (cart) => {
      isPending.value = true;
      error.value = null;
  
      try {
        await db.collection("orders").doc(cart.id).update({
            status: cart.status,
            paymentStatus: cart.paymentStatus,
            updatedAt: timestamp,
            notifications: cart.notifications
        });
  
        return true;
      } catch (err) {
        console.log("Error update orders: " + err);
      } finally {
        isPending.value = false;
      }
    },
    delete: async (id) => {
      isPending.value = true;
      error.value = null;
      try {
        await db.collection("orders").doc(id).delete();
        return true;
      } catch (err) {
        console.log("Error delete orders: " + err);
      } finally {
        isPending.value = false;
      }
    },
  };
  
  export { CartService, error, isPending };