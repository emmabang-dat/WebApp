const baseUrl = "https://weatherrestservice.azurewebsites.net/api/Wind";

Vue.createApp({
    data() {
        return {
          posts: [],
          dataWind: {}
        }
    },
    methods: {
        async helperGetPosts() {
            try {
                const response = await axios.get(baseUrl)
                this.posts = await response.data
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },
        async addData(){
            console.table(this.dataWind)
            try{
                response = await axios.post(baseUrl, this.dataWind)
                this.addMessage = "response" + response.status + "" + response.statusText
            } catch(ex) {
                alert(ex.message)
            }
          },
  
    }
  }).mount("#app")
