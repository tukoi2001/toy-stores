<template>
  <div>
    <scroll-top-component>
        <a class="btn btn-light">
           <b-icon class="icon" icon="caret-up-fill"></b-icon>
        </a>
    </scroll-top-component>
  </div>
</template>

<script>
import ScrollTopComponent from './ScrollTopComponent.vue' 
export default {
  components: { ScrollTopComponent },
    name: 'ScrollTopArrow',
}
</script>

<style scoped>
.btn {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.8);  
    padding: 11px 12px;
    transition: all 0.3s ease-in-out;
}
.icon {
    width: 25px;
    height: 25px;
    color: #FFF;
    transition: all 0.3s ease-in-out;
}
.btn:hover .icon{
    color: #000;
}
.btn:hover {
    background-color: #00c4cc;
}
</style>