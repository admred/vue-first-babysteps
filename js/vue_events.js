const vm10=new Vue({
    el:"#events",
    data:{
        num1:100,
        num2:200,
        total:"",
        styleobj:{
            width:"100px",
            height:"100px",
            backgroundColor:'red'
        },
        clicknum:0,
        clicknum1:0,
        name:""
    },
    methods:{
        displaynumbers(event){
            console.log(event)
            return this.total=this.num1+this.num2
        },
        changebgcolor(){
            this.styleobj.backgroundColor="green"
        },
        originalcolor(){
            this.styleobj.backgroundColor="red"
        },
        buttonclicked(){
            this.clicknum++
        },
        buttonclickedonce(){
            this.clicknum1++
        },
        clickme(){
            alert("Anchor target is clicked")
        },
        showinputvalue:function(event){
            console.log(event)
            this.name=event.target.value
        }
    }

})
