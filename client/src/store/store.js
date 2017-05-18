import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    listArticle:[],
    isLogin:false,
    token:'',
    username:'',
    id:''
  },
  getters:{
    getUsername(state){
      return state.username
    }
    fetchArticle(state){
      return state.listArticle
    },
    sessionStatus(state){
      let text = ''
      if(state.isLogin==true){
        text = 'logout'
      }else{
        text='login'
      }
      return text
    }
  },
  mutations:{
    checkLogin(state){
      let token = window.localStorage.getItem('token')
      if(token!==null && token!==undefined && token!==''){
        state.token = window.localStorage.getItem('token')
        state.username = window.localStorage.getItem('username')
        state.id = window.localStorage.getItem('id')
        state.isLogin=true
      }
    },
    logOut(state){
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('id')
      state.token = ''
      state.username = ''
      state.id = ''
      state.isLogin=false
    },
    changeStatusIn(state,data){
      window.localStorage.setItem('token',data.token)
      window.localStorage.setItem('username',data.username)
      window.localStorage.setItem('id',data._id)
      state.token = data.token
      state.username = data.username
      state.id = data.id
      state.isLogin=true
    },
    pushArticle(state,data){

      state.listArticle.push(data)
    },
    initData(state,data){
      state.listArticle = data
    },
    hapusdata(state,index){
      state.listArticle.splice(index,1)
    }
  },
  actions:{
    login(context,data){
      Vue.axios.post('http://localhost:3000/users/signin',{
        username: data.username,
        password: data.password
      }).then(function(response){
        context.commit('changeStatusIn',response.data)
      })
    },
    addarticle(context,data){
      let self=this
      Vue.axios.post('http://localhost:3000/articles',{

        title: data.title,
        content: data.content,
        category: data.category,
        author: data.author

      }).then(function(response){
        context.commit('pushArticle',response.data)
      })
    },
    seedArticle(context){
        Vue.axios.get('http://localhost:3000/articles',{
        }).then(function(response){
          context.commit('initData',response.data)
        })
    },
    deleteArticle(context,index){

      let id = context.state.listArticle[index]._id

      Vue.axios.delete(`http://localhost:3000/articles/+${id}`,{

      }).then(function(response){
        console.log(response);
        context.commit('hapusdata',index)
      })
    }
  },


})
