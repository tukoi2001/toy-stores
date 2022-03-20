import { db, auth } from "../configs/firebase";

const RoleMiddleware = {
  admin: async (to, from, next) => {
    try {
      const userId = auth.currentUser;
      if (userId) {
        const response = await db.collection("users").doc(userId.uid).get();
        if (response.data().role === "admin" || response.data().role === "supplier" || response.data().role === "super admin" ) {
          next();
        } else {
            alert('Bạn không có quyền truy cập vào trang quản trị!')
            next({ path: "/" });
        }
      } else {
        alert('Vui lòng đăng nhập để sử dụng các chức năng này!')
        next({ path: "/login" });
      }
    } catch (err) {
      console.error("Error role admin" + err);
    }
  },
};

export { RoleMiddleware };