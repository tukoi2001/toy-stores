<template>
  <div class="content_categories">
    <v-card
      :class="{
        'active-admin': getRole === 'admin' || getRole === 'super admin',
      }"
    >
      <template>
        <v-toolbar flat>
          <v-toolbar-title class="h2 text-start">User</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
        <p class="fw-bold text-start p-3 text-danger" style="font-size: 2rem">
          Bạn không có quyền truy cập vào đây! Vui lòng thử lại! Cảm ơn!
        </p>
      </template>
    </v-card>
    <v-card :class="{ 'active-admin': getRole === 'supplier' }">
      <template>
        <v-toolbar flat>
          <v-toolbar-title class="h2">Users</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <!-- dialog update -->
          <v-dialog v-model="dialog" max-width="500px">
            <v-card class="card-toglle" :loading="isPending">
              <v-card-title class="card-title">
                <span class="text-h5 font-weight-medium">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text class="card-content">
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <template>
                      <v-select
                        :items="['super admin', 'admin', 'supplier', 'user']"
                        label="Role"
                        v-model="dataEditItem.role"
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

          <!-- dialog lock -->
          <v-dialog v-model="dialogDelete" max-width="520px">
            <v-card class="r" :loading="isPending">
              <v-card-title
                class="text-h5 justify-content-center text-danger fw-bold"
                >Bạn có muốn khóa người dùng này không?</v-card-title
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
                  @click="handleActive"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- dialog lock -->

          <!-- dialog unlock -->
          <v-dialog v-model="dialogUnlock" max-width="500px">
            <v-card class="r" :loading="isPending">
              <v-card-title
                class="text-h5 justify-content-center text-danger fw-bold"
                >Mở khóa cho người dùng này?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="dark darken-1"
                  class="cancel__btn mb-3"
                  text
                  @click="closeUnLock"
                  >Cancel</v-btn
                >
                <v-btn
                  color="while darken-1"
                  class="save__btn mb-3"
                  text
                  @click="handleUnlock"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- dialog unlock -->
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
          <tr
            class="tr-body-table text-start orders"
            style="font-size: 1rem"
            :class="{
              'active-user': item.isActive == 'false' || item.isActive == false,
            }"
          >
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
              <template v-if="getRole === 'super admin'" d-inline-block>
                <v-icon
                  small
                  class="mr-2"
                  @click="deleteItem(item)"
                  v-if="item.isActive == true || item.isActive == 'true'"
                >
                  mdi-lock
                </v-icon>
                <v-icon small class="mr-2" @click="unLock(item)" v-else>
                  mdi-key
                </v-icon>
              </template>
              <v-icon small @click="getUserDetail(item)">
                mdi-account-details
              </v-icon>
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
import { mapMutations } from "vuex";
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
      dialogUnlock: false,
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
        id: "",
        fullName: "",
        email: "",
        password: "",
        role: "",
        isActive: "",
        customField: "",
      },
      dataItem: {
        role: "",
        isActive: "",
        customField: "",
      },
      show: false,
    };
  },
  mounted() {
    this.innitData();
  },
  computed: {
    getRole() {
      return this.$store.state.role;
    },
    formTitle() {
      return this.editedIndex === -1 ? "Add New User" : "Edit User";
    },
  },
  methods: {
    ...mapMutations('users', ['getUserDetails']),
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
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.dialogDelete = true;
      this.editedIndex = this.users.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
    },
    unLock(item) {
      this.dialogUnlock = true;
      this.editedIndex = this.users.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
    },
    async handleActive() {
      const data = {
        id: this.dataEditItem.id,
        isActive: false,
      };
      const response = await MeService.updateActive(data);
      if (response) {
        this.innitData();
        this.closeDelete();
      }
    },
    async handleUnlock() {
      const data = {
        id: this.dataEditItem.id,
        isActive: true,
      };
      const response = await MeService.updateActive(data);
      if (response) {
        this.innitData();
        this.closeUnLock();
      }
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
    closeUnLock() {
      this.dialogUnlock = false;
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
    getUserDetail(user) {
      const id = user.id;
      this.getUserDetails(user);
      this.$router.push(`/dashboard/users/${id}`);
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
