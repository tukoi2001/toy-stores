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
          <v-toolbar-title class="h2">Contacts</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          
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
          <tr class="tr-body-table text-start orders" style="font-size: 1rem">
            <td>{{ item.index }}</td>
            <td>{{ item.fullName }}</td>
            <td><a class="send_mail" :href="`mailto:${item.email}`">{{ item.email }}</a></td>
            <td>{{ item.createdAt }}</td>
            <td style="width: 45%;">{{ item.message }}</td>
            <td>            
              <v-icon class="ms-5 d-block" small @click="deleteItem(item)"> mdi-delete </v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { error, isPending, ContactService } from "../../../services/ContactService";
import { mapMutations } from "vuex";
import { DateHourFilter } from "../../../utils/DateFilter";
export default {
  name: "MainContact",
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
        { text: "Created At", value: "createdAt" },
        { text: "Message", value: "message" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      orders: [],
      editedIndex: -1,
      dataEditItem: {
        id: '',
      },
      dataItem: {
          id: ''
      },
    };
  },
  mounted() {
    this.innitData(); 
  },
  methods: {
    ...mapMutations("cart", ["setOrder"]),
    async innitData() {
      const response = await ContactService.show();
      const newRes = response.docs.map((item, index) => {
        const createdDate = new Date(
          item.data().createdAt.seconds * 1000 +
            item.data().createdAt.nanoseconds / 1000000
        );
        return {
          id: item.id,
          index,
          ...item.data(),
          createdAt: DateHourFilter(createdDate),
        };
      });
      this.orders = newRes;
    },
    deleteItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      const id = this.dataEditItem.id;
      const res = await ContactService.delete(id);
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
