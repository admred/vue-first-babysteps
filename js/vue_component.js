
Vue.component('testcomponent',{
    template:'<div><p>This is comming from component</p></div>'
})

const vm1=new Vue({
    el:"#component1"
})

const vm2=new Vue({
    el:"#component2"
})

const vm3=new Vue({
    el:"#component3",
    components:{
        'testcomponent':{
            template:'<div v-on:mouseover="changename()" v-on:mouseout="originalname()"><p>Custom Component created by <span id="name">{{ name }}</span></p></div>',
            data:function(){
                return {
                    name:"Ria"
                }
            },
            methods:{
                changename:function(){
                    this.name="Ben"
                },
                originalname:function(){
                    this.name="Ria"
                }
            }
        }
    }
})

const vm4=new Vue({
    el:"#databinding",
    data:{
        view:"component4"
    },
    components:{
        'component4':{
            template:'<div><span style="font-size:18px;color:red;">Dynamic Component</span></div>',
        }
    }
})
