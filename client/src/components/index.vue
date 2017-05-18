<template lang="html">
  <v-container fluid="fluid">
  <v-row>


    <v-col xs2 >
    </v-col>
    <v-col xs8 >
      <table>
        <thead>
          <tr>
          <th>Article Title</th>
          <th>Category</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for='(article,index) in articleList'>
            <td>{{article.title}}</td>
            <td>{{article.category}}</td>
              <td>{{article.author}}</td>
              <td><v-btn round primary dark @click.native='details(index)'>read</v-btn></td>
          </tr>
        </tbody>
      </table>
    </v-col>



  </v-row>
</v-container>

</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    articleList() {
      return this.$store.getters.fetchArticle;
      // return this.$store.state.listArticle;
    }
  },
  methods:{
    fetchdata(){
      this.$store.dispatch('seedArticle')
    },
    details(index){
      let self = this
      self.$router.push({path: '/articleDetail',query: {index: index}})
    }
  },
  created(){
    let self = this
    self.fetchdata()
  }
}
</script>

<style lang="css">
</style>
