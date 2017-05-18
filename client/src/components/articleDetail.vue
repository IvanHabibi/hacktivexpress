<template lang="html">
  <v-container fluid="fluid">
  <v-row>


    <v-col xs2 >
    </v-col>
    <v-col xs8 >
      <div>
        <v-card>
          <v-card-text>
            <div><h2>{{article.title}}</h2></div>
            <div class="text-xs-right">by {{article.author}}

            </div>
          </v-card-text>
        </v-card>

        <v-card >
          <v-card-text>
            <div class="text-xs-left">{{article.content}}</div>
          </v-card-text>
        </v-card>
      <div v-if='status==logout && article.author == sessionUsername'>
        <v-card >
          <v-card-text>
            <v-btn round primary dark @click.native='delete(index)'>read</v-btn>
          </v-card-text>
        </v-card>
      </div>


      </div>
    </v-col>
  </v-row>
</v-container>



</template>

<script>
export default {
  computed:{
    status(){
      return this.$store.getters.sessionStatus;
    },
    sessionUsername(){
      return this.$store.getters.getUsername;
    },
  },
  data(){
    return{
      article:  [],

    }
  },
  methods:{
    fethArticleData(){
      let self = this
      let data = self.$router.currentRoute
      let index = data.query.index
      self.article = self.$store.state.listArticle[index]
      console.log(self.article);
    }
  },
  created(){
    let self = this
    self.fethArticleData()

  }
}
</script>

<style lang="css">
</style>
