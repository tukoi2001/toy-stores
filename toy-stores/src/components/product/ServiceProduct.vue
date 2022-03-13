<template>
  <div class="row">
      <div class="col-md-3" v-for="(item, index) in listService" :key="index">
        <div class="service__box d-flex align-items-center">
            <div class="service__icon">
                <b-icon :icon="item.icon"></b-icon>
            </div>
            <div class="service__content">
                <h4>
                    {{ item.title }}
                    <span>{{ item.des }}</span>
                </h4>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ServiceProduct',
    data() {
        return {
            listService: [
                { 
                    icon: 'truck',
                    title: 'Giao hàng miễn phí',
                    des: 'Miễn phí mọi đơn hàng'
                },
                { 
                    icon: 'wallet',
                    title: 'Hoàn tiền 100%',
                    des: 'Hoàn tiền các đơn hàng'
                },
                { 
                    icon: 'cash-stack',
                    title: 'Thanh toán mọi lúc',
                    des: 'Thanh toán thật dễ dàng'
                },
                { 
                    icon: 'question-circle',
                    title: 'Hỗ trợ khách hàng 24/7',
                    des: 'Phone number: 0333399999'
                },
            ]
        }
    }
}
</script>

<style scoped>
.row {
    margin-top: 3rem;
}
.service__box {
    border: 1px solid #00c4cc;
    padding: 15px;
    border-radius: 10px;
}
.service__icon {
    font-size: 2.2rem;
    margin-right: 15px;
    color: #00c4cc;
}
.service__content h4 {
    font-size: 1.3rem;
    font-weight: bold;
}
.service__content h4 span {
    display: block;
    font-size: 1rem;
    font-weight: normal;
    margin-top: 5px;
}
</style>