<template>
  <div class="content_categories">
    <v-card :class="{'active-admin': getRole === 'admin' || getRole === 'super admin'}">
      <template>
        <v-toolbar flat>
        <v-toolbar-title class="h2 text-start">Orders</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        </v-toolbar>
        <p class="fw-bold text-start p-3 text-danger" style="font-size: 2rem;">
          Bạn không có quyền truy cập vào đây! Vui lòng thử lại! Cảm ơn!
        </p>
      </template>
    </v-card>

    <v-card :class="{'active-admin': getRole === 'supplier'}">
      <template>
        <v-toolbar flat>
          <v-toolbar-title class="h2">Orders</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <!-- dialog update -->
          <v-dialog v-model="dialog" max-width="500px">
            <v-card class="card-toglle" :loading="isPending">
              <v-card-title class="card-title">
                <span class="text-h5 font-weight-medium">Update Order</span>
              </v-card-title>
              <v-card-text class="card-content">
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <template>
                      <v-select
                        :items="['Đang xác nhận đơn hàng', 'Đơn hàng đã được xác nhận', 'Đơn hàng đã được giao cho bên vận chuyển', 'Giao hàng thành công', 'Đơn hàng bị hủy', 'Khách hàng trả hàng']"
                        label="Order Status"
                        v-model="dataEditItem.status"
                      ></v-select>
                    </template>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <template>
                      <v-select
                        :items="['Chưa thanh toán', 'Đã thanh toán']"
                        label="Payment Status"
                        v-model="dataEditItem.paymentStatus"
                      ></v-select>
                    </template>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Notifications:"
                      placeholder="Notifications"
                      v-model="dataEditItem.notifications"
                      clearable
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="dark darken-1"
                  class="cancel__btn"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="white darken-1"
                  text
                  class="save__btn"
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- dialog update -->

          <!-- dialog delete -->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card class="r" :loading="isPending">
              <v-card-title
                class="text-h5 justify-content-center text-danger fw-bold"
                >Are you sure to remove it?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="dark darken-1"
                  class="cancel__btn mb-3"
                  text
                  @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn
                  color="while darken-1"
                  class="save__btn mb-3"
                  text
                  @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- dialog delete -->
        </v-toolbar>
      </template>

      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="orders"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:item="{ item }">
          <tr class="tr-body-table text-start orders">
            <td style="display: flex; align-items: center">{{ item.index }}</td>
            <td>{{ item.fullName }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phoneNumber }}</td>
            <td>{{ formatPrice(item.totalPrice) }}</td>
            <td>{{ item.paymentStatus }}</td>
            <td>{{ item.status }}</td>
            <td>
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              <span class="icon__info" @click="detailOrders(item)">
                <b-icon icon="info-circle"></b-icon>
              </span>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { error, isPending, CartService } from "../../../services/CartService";
import { mapMutations } from "vuex";
export default {
  name: "MainOrders",
  setup() {
    return { error, isPending };
  },
  data() {
    return {
      search: "",
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: "#", align: "start", sortable: false, value: "id" },
        { text: "Full Name", value: "fullName", sortable: false },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phoneNumber" },
        { text: "Total Price", value: "totalPrice" },
        { text: "Payment Status", value: "paymentStatus" },
        { text: "Order Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      orders: [],
      editedIndex: -1,
      dataEditItem: {
        status: "",
        paymentStatus: "",
        notifications: "",
      },
      dataItem: {
        status: "",
        paymentStatus: "",
        notifications: "",
      },
    };
  },
  mounted() {
    this.innitData(); 
  },
  methods: {
    ...mapMutations("cart", ["setOrder"]),
    async innitData() {
      const response = await CartService.show();
      const newRes = response.docs.map((item, index) => {
        const createdDate = new Date(
          item.data().createdAt.seconds * 1000 +
            item.data().createdAt.nanoseconds / 1000000
        );
        const updatedDate = new Date(
          item.data().updatedAt.seconds * 1000 +
            item.data().updatedAt.nanoseconds / 1000000
        );
        return {
          id: item.id,
          index,
          ...item.data(),
          createdAt: createdDate,
          updatedAt: updatedDate,
        };
      });
      this.orders = newRes;
    },
    editItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      const id = this.dataEditItem.id;
      const res = await CartService.delete(id);
      if (res) {
        this.innitData();
      }
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.dataEditItem = Object.assign({}, this.dataItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.dataEditItem = Object.assign({}, this.dataItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      if (this.editedIndex > -1) {
        const res = await CartService.update(this.dataEditItem);
        if (res) {
          this.innitData();
        }
      }
      this.close();
    },
    detailOrders(data) {
      const id = data.id;
      this.$router.push(`/dashboard/orders/${id}`);
      this.setOrder(data)
    },
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
  computed: {
    getRole() {
      return this.$store.state.role;
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
};
</script>

<style
  scope
  src="@/assets/css/components/admin/categories/Categories.css"
></style>
