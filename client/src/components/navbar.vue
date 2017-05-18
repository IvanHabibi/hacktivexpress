<template lang="html">
  <v-toolbar class="green">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Toolbar</v-toolbar-title>
    <v-toolbar-items class="hidden-md-and-down">
      <v-toolbar-item ripple>Link</v-toolbar-item>
      <v-toolbar-item ripple>Link</v-toolbar-item>
      <v-toolbar-item ripple>Link</v-toolbar-item>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
   }
}
</script>

<style lang="css">
</style>
