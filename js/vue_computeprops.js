const vm5=new Vue({
    el:"#compute_props",
    data:{
        firstname:"",
        lastname:"",
        birthyear:""
    },
    computed:{
        getfullname:function(){
            return this.firstname+" "+this.lastname
        }
    }
})


