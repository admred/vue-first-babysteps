const vm11=new Vue({
    el:"#conditional",
    data:{
        show:true,
        items:['pera','manzana','banana'],
        obj:{firstName:'Bruno',lastName:'Diaz',edad:36,pais:'Gotica City'}
    },
    methods:{
        toggleshow:function(){
            this.show=!this.show
        },
        addFruit(event){
            if(event.target.value === ""){
                this.items=[]
                return
            }
            this.items.push(event.target.value)
        }
    }
})
