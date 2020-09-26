window.axios = require('axios');

new Vue({
    el: '#vue-app',

    

    mounted:function(){
        axios.get("https://disease.sh/v3/covid-19/countries").then(response => {this.posts = response.data,console.log(response)}  );

    },

    data: {
        posts: null,
        x : null,
    },

    

    methods:{

        
        
        images:function(index){
            return this.posts[index].countryInfo.flag;
        },



        infos:function(index){
            country = this.posts[index].country;
            cases = this.posts[index].cases;
            todayCases = this.posts[index].todayCases;
            deaths = this.posts[index].deaths;
            recovered = this.posts[index].recovered;
            return[country,cases,todayCases,deaths,recovered];
        },




    }


});