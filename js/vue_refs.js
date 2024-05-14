const vm6=new Vue({
    el:"#refs_dom",
    methods:{
        addText(){
            const text=vm6.$refs.text.value
            const textField = vm6.$refs.textField
            textField.innerHTML=textField.innerHTML+'<br/>'+text
        },
        deleteText(){
            const textField=vm6.$refs.textField
            textField.innerHTML=""
        }
    }
})
