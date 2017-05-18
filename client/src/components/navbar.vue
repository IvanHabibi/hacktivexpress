<template lang="html">
  <v-toolbar class="green">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Toolbar</v-toolbar-title>
    <v-toolbar-items class="hidden-md-and-down">
    <router-link to='/login' @click.native='log'><v-toolbar-item ripple>{{status}}</v-toolbar-item></router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  computed:{
    status(){
      return this.$store.getters.sessionStatus;
    }
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     },
     log(){
       let self = this
         this.$store.commit('logOut')

     }
   }
}
</script>

<style lang="css">
</style>
