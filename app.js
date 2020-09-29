window.axios = require('axios');




new Vue({
    el: '#vue-app',

    

    mounted:function(){
        axios.get("https://disease.sh/v3/covid-19/countries").then(response => {this.posts = response.data});

    },

    data: {
        posts: [],
        message : '',
        display : true,
        Item :{},
    },
    methods:{
        images:function(){
            if(this.display==false){
                for(image in this.Item.countryInfo){
                    return(this.Item.countryInfo["flag"]);
                }
            }
        },

        country_map:function(){
            return this.Item.country;
        }

        
        
    },

    computed:{
        filtered:function(){
             return this.posts.filter(x => {
                return x.country.toUpperCase().match(this.message.toUpperCase());
            });
        }

    }


});