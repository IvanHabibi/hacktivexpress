<template lang="html">


  <el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3">
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
  </el-col>
</el-row>

</template>

<script>
export default {
  data() {
     return {
       labelPosition: 'right',
       formLabelAlign: {
         name: '',
         region: '',
         type: ''
       }
     };
   }
}
</script>

<style lang="css">
</style>
