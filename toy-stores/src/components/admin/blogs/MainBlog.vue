<template>
  <div class="content_categories">
    <v-card>
      <template>
        <v-toolbar flat>
          <v-toolbar-title class="h2">Blogs</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark class="mb-2 btn__add" v-bind="attrs" v-on="on">
                <v-icon> mdi-plus </v-icon>
                Add New Blog
              </v-btn>
            </template>

            <!-- loading -->
            <v-card class="card-toglle" :loading="isPending">
              <v-card-title class="card-title">
                <span class="text-h5 font-weight-medium">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text class="card-content">
                <!-- <v-container> -->
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Title of Blog:"
                      v-model="dataEditItem.name"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Sub Description off Blog:"
                      v-model="dataEditItem.sub_description"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <p class="" style="font-size: 18px; text-align: left">
                      Blog Description:
                    </p>
                    <vue-editor
                      class="mt-2"
                      v-model="dataEditItem.description"
                    />
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <div
                      class="d-flex align-items-center flex-wrap box_upload_image justify-content-between"
                    >
                      <label for="image-file" class="custom-button">
                        <input
                          id="image-file"
                          type="file"
                          class="absolute overflow-hidden"
                          accept=".jpg, .jpeg, .png"
                          @change="onChangeUploadImage"
                        />
                        <v-icon small class="mr-2 icon__upload">
                          mdi-camera
                        </v-icon>
                        <p class="upload_des">Upload image</p>
                      </label>
                      <p class="text_name_image">
                        {{ fileImageName }}
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="dark darken-1" class="cancel__btn" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="white darken-1" text class="save__btn" @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- dialog delete -->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card class="r" :loading="isPending">
              <v-card-title class="text-h5 justify-content-center text-danger fw-bold"
                >Are you sure to remove it?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="dark darken-1" class="cancel__btn mb-3" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="while darken-1" class="save__btn mb-3" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
        :items="blogs"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:item="{ item }">
          <tr class="tr-body-table text-start">
            <td>{{ item.index }}</td>
            <td class="td-image">
              <img :src="item.urlImage" alt="" class="rounded" width="70px" />
            </td>
            <td class="test1" style="word-break: break-all;">{{ item.name }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.createdAt }}</td>
            <td>
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              <span class="icon__info" @click="detailBlogs(item)">
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
import { error, isPending, BlogService } from "../../../services/BlogService";
import { DateHourFilter } from "../../../utils/DateFilter";
import { mapState, mapActions } from 'vuex'
export default {
  name: "MainBlog",
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
        { text: "Image", value: "image", sortable: false },
        { text: "Name", value: "name" },
        { text: "Author", value: "author" },
        { text: "Created At", value: "createdAt" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      blogs: [],
      editedIndex: -1,
      dataEditItem: {
        id: null,
        name: "",
        description: "",
        sub_description: "",
        author: '',
        file: null,
      },
      dataItem: {
        id: null,
        name: "",
        description: "",
        sub_description: "",
        author: '',
        file: null,
      },
      fileImageName: "No image",
    };
  },
  validations: {},
  mounted() {
    this.innitData();
  },
  methods: {
    ...mapActions('blogs', ['actionSetBlogDetail']),
    onChangeUploadImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.dataEditItem.file = file;
        this.fileImageName = file.name;
      } else {
        this.dataEditItem.file = null;
      }
    },
    async innitData() {
      const response = await BlogService.show();
      const newRes = response.docs.map((item, index) => {
        return {
          id: item.id,
          index,
          ...item.data(),
          createdAt: DateHourFilter(item.data().createdAt.toDate()),
          updatedAt: DateHourFilter(item.data().updatedAt.toDate()),
        };
      });
      this.blogs = newRes;
    },
    editItem(item) {
      this.editedIndex = this.blogs.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.fileImageName = item.image;
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.blogs.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      const id = this.dataEditItem.id;
      const res = await BlogService.delete(id);
      if (res) {
        this.innitData();
      }
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.fileImageName = "";
      this.$nextTick(() => {
        this.dataEditItem = Object.assign({}, this.dataItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.fileImageName = "";
      this.$nextTick(() => {
        this.dataEditItem = Object.assign({}, this.dataItem);
        this.editedIndex = -1;
      });
    },
    async save() {
      this.dataEditItem.author = this.userInformation.multiFactor.user.displayName;
      if (this.editedIndex > -1) {
        const res = await BlogService.update(this.dataEditItem);
        if (res) {
          this.innitData();
        }
      } else {
        const res = await BlogService.add(this.dataEditItem);
        if (res) {
          this.innitData();
        }
      }
      this.close();
    },
    detailBlogs(blog) {
      const id = blog.id;
      this.$router.push(`/dashboard/blogs/${id}`);
      this.actionSetBlogDetail(blog);
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add New Blog" : "Edit Blog";
    },
    ...mapState('users', ['userInformation'])
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    fileImageName(val) {
      if (val == "") {
        this.fileImageName = "No image";
      }
    },
  },
};
</script>

<style
  scope
  src="@/assets/css/components/admin/categories/Categories.css"
></style>
