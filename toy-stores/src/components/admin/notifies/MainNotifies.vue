<template>
  <div class="container notify">
      <div class="row m--40">
          <div class="col-12" v-for="(item, index) in notifies" :key="index">
              <div class="box-notify">
                  <div class="img-user">
                      <img :src="item.urlImageUser" alt="">
                  </div>
                  <div class="content-notify">
                     <div>
                          <h4 class="content-title"> {{ item.user }}  {{ item.title }}</h4>
                            <p class="content-date">{{ item.created_At }}</p>
                      </div>
                      <div class="content-close">
                          <button class="btn" @click="deleteNotify(item)">Xóa</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { NotifyService } from "../../../services/NotifyService"
export default {
    name: 'MainNotifies',
    computed: {
        ...mapState('notify', ['notifies'])
    },
    methods: {
        ...mapActions('notify', ['actionSetNotifications']),
        async deleteNotify(item) {
            const id = item.id;
            const response = await NotifyService.delete(id);
            if(response) {
                this.actionSetNotifications()
            }
        }
    },
    mounted() {
         setInterval(() => {
            this.actionSetNotifications();
        }, 3000)
    }
}
</script>

<style scoped>
.notify {
    height: 71.5vh;
    overflow-y: scroll;
}
.box-notify {
    display: flex;
    align-items: center;
    padding: 15px 30px; 
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    margin-bottom: 5px;
}
.img-user {
    width: 80px;
    flex-shrink: 0;
    height: 80px;
}
.img-user img {
    width: 100%;
    height: 100%;
    border: 3px solid #fff;
}
.content-notify {
    margin-left: 30px;
    text-align: left;
    position: relative;
    flex-grow: 2;
}
.content-date {
    margin: 0;
    font-size: 14px;
    color: #999;
}
.content-title {
    font-size: 20px;
    color: #000;
    font-weight: 600;
}
.content-close {
    position:  absolute;
    top: 50%;
    bottom: auto;
    left: auto;
    right: 30px;
    transform: translateY(-50%);
}
button.btn {
    background: #62ab00;
    color: #FFF;
    padding: 5px 20px;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
}
button.btn:focus {
    box-shadow: none;
}
button.btn:hover {
    background: #333;
}
.m--40 {
    margin: 40px;
}
</style>