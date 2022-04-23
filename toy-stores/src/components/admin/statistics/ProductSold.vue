<template>
  <div class="profit_box">
    <h2 class="profit_title">Products Sold statistics of Toyqo toy store!</h2>

    <loading-admin v-if="isSpending" />
    <div class="profit-report" v-if="isShow">
      <h2 class="report-title">Report Products Sold Of Toyqo Toy Store</h2>
      <div class="row">
        <div class="col-md-12">
          <div class="report-total">
            <h3 class="report-total-title">Total sales of Toyqo Toy Store</h3>
            <ul class="report-total-list">
              <li class="report-total-item">Number of Products Sold:</li>
              <li class="report-total-item">{{ numOfProducts }} Products</li>
            </ul>
          </div>
          <p class="report-content-title">List Orders of System</p>
          <table class="table table-striped report-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quantity Sold</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in productsFill" :key="index">
                <th>{{ item.id }}</th>
                <td>{{ item.name }}</td>
                <td>{{ formatPrice(item.price) }}</td>
                <td>{{ item.quantity }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <button v-else class="profit_btn" @click="productSoldReport">
      Generate Report
    </button>
  </div>
</template>

<script>
import { CartService } from "../../../services/CartService";
import LoadingAdmin from "./LoadingAdmin.vue";
export default {
  components: { LoadingAdmin },
  name: "ProductSold",
  data() {
    return {
      isSpending: false,
      isShow: false,
      listProducts: [],
      products: [],
      productsFill: [],
      numOfProducts: 0,
    };
  },
  methods: {
    productSoldReport() {
      this.isSpending = true;
      setTimeout(() => {
        this.calculateProducts();
      }, 5000);
    },
    async calculateProducts() {
      const response = await CartService.show();
      if (response) {
        const newRes = response.docs.map((item, index) => {
          return {
            index: index,
            ...item.data(),
          };
        });
        const data = newRes.map((item) => {
          return {
            items: item.items
          };
        });
        data.forEach((item) => {
            this.listProducts.push(item.items)
        })
        this.listProducts.map(item => {
          item.map(it => {
            this.products.push(it);
          })
        })
        this.fillData();
        this.isSpending = false;
        this.isShow = true;
      }
    },
    fillData() {
      const result = this.products.map(item => {
        return {
          name: item.name,
          quantity: parseInt(item.qty),
          id: item.id,
          price: item.price,
        }
      })
      let arr = [];
      for(let i = 0; i < result.length; i++) {
        if (i == 0) {
          arr.push(result[0]);
        } else {
          const findIndex = arr.findIndex((item) => item.name == result[i].name);
          if (findIndex == -1) {
            arr.push(result[i]);
          } else {
            arr[findIndex].quantity += result[i].quantity;
          }
        }
      }
      this.productsFill = arr;
      this.numOfProducts = arr.length;
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap");
.profit_title {
  font-family: "Lobster Two", cursive;
  font-size: 3rem;
  margin-bottom: 15px;
  color: #62ab00;
  line-height: 1.25;
  margin-top: 15px;
}
.profit_btn {
  border: 1px solid #62ab00;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #62ab00;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
}
.profit_btn:hover {
  background-color: #333;
  border-color: #333;
}
.report-content-title {
  font-size: 1.3rem;
  font-weight: 500;
}
.report-title {
  margin-top: 15px;
  font-family: "san-serif";
  font-weight: 600;
  font-size: 2rem;
  color: #000;
}
.profit-report {
  background-color: #fff;
  height: calc(100vh - 390px);
  overflow-y: scroll;
  overflow-x: hidden;
}
.report-table {
  margin: 0 15px;
  width: calc(100% - 30px);
  box-shadow: 1px 2px 4px rgb(0 0 0 / 40%);
}
.report-total-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 10px 0;
  color: #000;
}
.report-total-item {
  border: 2px solid #62ab00;
  padding: 10px 15px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #62ab00;
  color: #fff;
}
.report-total-item:first-child {
  margin-right: 20px;
}
.report-total-list {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
