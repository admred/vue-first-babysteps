const vm7=new Vue({
    el:"#classbinding",
    data:{
        title:"CLASS DATA BINDING",
        hreflink:"https://www.example.com",
        isActive:false,
        hasError:false
    },
    components:{
        'new_component':{
            template:'<div class="info">Class binding for component</div>'
        }
    }
})

const vm8=new Vue({
    el:"#stylebinding",
    data:{
        title:"STYLE DATA BINDING",
        activeColor:'magenta',
        fontSize:20
    }
})

const vm9=new Vue({
    el:"#formubinding",
    data:{
        name:"",
        textmessage:"",
        checked:false,
        picked:'White',
        languages:'Java',
        age:0,
        msg:"",
        message:""
    }
})
