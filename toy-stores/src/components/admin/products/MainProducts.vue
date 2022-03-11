<template>
  <div class="content_categories">
    <v-card>
      <template>
        <v-toolbar flat>
          <v-toolbar-title class="h2">Products</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark class="mb-2 btn__add" v-bind="attrs" v-on="on">
                <v-icon> mdi-plus </v-icon>
                Add New Product
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
                      label="Product Name:"
                      v-model="dataEditItem.name"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Product Description:"
                      v-model="dataEditItem.description"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <p class="" style="font-size: 18px; text-align: left">
                      Product Description Detail
                    </p>
                    <vue-editor
                      class="mt-2"
                      v-model="dataEditItem.sub_description"
                    />
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <p class="" style="font-size: 18px; text-align: left">
                      Category Name:
                    </p>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="dataEditItem.category"
                    >
                      <option value="" selected>Choose the category name</option>
                      <option
                        v-for="(item, index) in listCategories"
                        :key="index"
                        :value="item.name"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Product Price:"
                      v-model="dataEditItem.price"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Quantity:"
                      v-model="dataEditItem.quantity"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      label="Product Sale Off:"
                      v-model="dataEditItem.sale_off"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <p class="" style="font-size: 18px; text-align: left">
                      Is New:
                    </p>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="dataEditItem.isNew"
                    >
                      <option value="True">True</option>
                      <option value="False">False</option>
                    </select>
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
                          multiple
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
        :items="products"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:item="{ item }">
          <tr class="tr-body-table text-start">
            <td>{{ item.index }}</td>
            <td class="td-image">
              <img :src="item.urlImage" alt="" class="rounded" width="50px" />
            </td>
            <td class="test1">{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.sale_off }}</td>
            <td>{{ item.createdAt }}</td>
            <td>{{ item.updatedAt }}</td>
            <td>
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              <span class="icon__info" @click="setProduct(item)">
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
import { ProductService, isPending } from "../../../services/ProductService";
import { DateHourFilter } from "../../../utils/DateFilter";
import { mapState, mapActions } from "vuex";
export default {
  name: "MainProducts",
  setup() {
    return { isPending };
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
        { text: "Price", value: "price" },
        { text: "Category", value: "category" },
        { text: "Quantity", value: "quantity" },
        { text: "Sale Off", value: "saleOff" },
        { text: "Created At", value: "createdAt" },
        { text: "Updated At", value: "updatedAt" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      products: [],
      editedIndex: -1,
      dataEditItem: {
        id: null,
        name: "",
        category: "",
        description: "",
        sub_description: "",
        price: 0,
        quantity: 0,
        sale_off: 0,
        updatedAt: null,
        file: [],
        createdAt: null,
        isNew: "False",
      },
      dataItem: {
        name: "",
        category: "",
        description: "",
        sub_description: "",
        price: 0,
        quantity: 0,
        sale_off: 0,
        file: [],
        isNew: "False",
      },
      fileImageName: "No image",
    };
  },
  mounted() {
    this.innitData();
    // console.log(this.listCategories);
  },
  methods: {
    ...mapActions("products", ["actionSetProductDetail", "actionSetDataProduct"]),
    onChangeUploadImage(event) {
      this.dataEditItem.file = [];
      const tmpFile = event.target.files;
      if (tmpFile) {
        for (let i = 0; i < tmpFile.length; i++) {
          const file = tmpFile[i];
          this.dataEditItem.file.push(file);
        }
        this.fileImageName = `${tmpFile.length} images`;
      } else {
        this.dataEditItem.file = [];
      }
    },
    async innitData() {
      const response = await ProductService.show();
      const newRes = response.docs.map((item, index) => {
        return {
          id: item.id,
          index,
          ...item.data(),
          createdAt: DateHourFilter(item.data().createdAt.toDate()),
          updatedAt: DateHourFilter(item.data().updatedAt.toDate()),
        };
      });
      this.products = newRes;
    },
    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.fileImageName = item.image;
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.dataEditItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      const id = this.dataEditItem.id;
      const res = await ProductService.delete(id);
      if (res) {
        this.innitData();
        this.actionSetDataProduct();
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
      if (this.editedIndex > -1) {
        const res = await ProductService.update(this.dataEditItem);
        if (res) {
          this.innitData();
        }
      } else {
        const res = await ProductService.add(this.dataEditItem);
        if (res) {
          this.innitData();
        }
      }
      this.actionSetDataProduct();
      this.close();
    },
    setProduct(data) {
      const slug = data.id;
      this.$router.push(`/dashboard/products/${slug}`);
      this.actionSetProductDetail(data);
    },
  },
  computed: {
    ...mapState("categories", ["listCategories"]),
    formTitle() {
      return this.editedIndex === -1 ? "Add New Product" : "Edit Product";
    },
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
