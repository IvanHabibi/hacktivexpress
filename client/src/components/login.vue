<template lang="html">
  <v-card class="grey lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-row row>
          <v-col xs4>
          </v-col>
          <v-col xs8>
            <v-text-field
              name="input-1"
              label="username"
            ></v-text-field>
          </v-col>
          <v-col xs4>
          </v-col>
          <v-col xs8>
            <v-text-field
              name="input-1"
              label="password"
            ></v-text-field>
          </v-col>
          <v-col xs4>
          </v-col>
          <div>
            <v-btn light default>Submit</v-btn>
          </div>
        </v-row>



      </v-container>
    </v-card-text>
  </v-card>

</template>

<script>
export default {
  data() {
     return {
       labelPosition: 'right',
       formLabelAlign: {
         username: '',
         password: ''
       }
     };
   }
}
</script>

<style lang="css">
</style>
