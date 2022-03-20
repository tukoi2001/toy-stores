<template>
  <div class="content_categories">
    <v-card :class="{'active-admin': getRole === 'admin'}">
      <template>
        <v-toolbar flat>
        <v-toolbar-title class="h2 text-start">User</v-toolbar-title>
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
          <v-toolbar-title class="h2">Users</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <!-- dialog update -->
          <v-dialog v-model="dialog" max-width="500px">
            <v-card class="card-toglle" :loading="isPending">
              <v-card-title class="card-title">
                <span class="text-h5 font-weight-medium">Update Users</span>
              </v-card-title>
              <v-card-text class="card-content">
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <template>
                      <v-select
                        :items="['admin', 'supplier', 'user']"
                        label="Role"
                        v-model="dataEditItem.role"
                      ></v-select>
                    </template>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <template>
                      <v-select
                        :items="['true', 'false']"
                        label="Is Active"
                        v-model="dataEditItem.isActive"
                      ></v-select>
                    </template>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Notifications:"
                      placeholder="Note"
                      v-model="dataEditItem.customField"
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
                >Không thể xóa danh sách người dùng!</v-card-title
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
        :items="users"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:item="{ item }">
          <tr class="tr-body-table text-start orders">
            <td style="display: flex; align-items: center">{{ item.index }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.role }}</td>
            <td>{{ item.isActive }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.updated_at }}</td>
            <td class="text-start">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { MeService, error, isPending } from "../../../services/MeService";
import { DateHourFilter } from "../../../utils/DateFilter";
export default {
  name: "MainUsers",
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
        { text: "Role", value: "role" },
        { text: "Status", value: "isActive" },
        { text: "Created At", value: "createdAt" },
        { text: "Updated At", value: "updatedAt" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      users: [],
      editedIndex: -1,
      dataEditItem: {
        role: "",
        isActive: "",
        customField: "",
      },
      dataItem: {
        role: "",
        isActive: "",
        customField: "",
      },
    };
  },
  mounted() {
    this.innitData();
  },
  computed: {
    getRole() {
      return this.$store.state.role;
    }
  },
  methods: {
    async innitData() {
      const response = await MeService.display();
      const newRes = response.docs.map((item, index) => {
        const createdDate = new Date(
          item.data().created_at.seconds * 1000 +
            item.data().created_at.nanoseconds / 1000000
        );
        const updatedDate = new Date(
          item.data().updated_at.seconds * 1000 +
            item.data().updated_at.nanoseconds / 1000000
        );
        return {
          id: item.id,
          index,
          ...item.data(),
          created_at: DateHourFilter(createdDate),
          updated_at: DateHourFilter(updatedDate),
        };
      });
      this.users = newRes;
      console.log(newRes)
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
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
        const res = await MeService.update(this.dataEditItem);
        if (res) {
          this.innitData();
        }
      }
      this.close();
    },
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
