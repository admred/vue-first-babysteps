const vm=new Vue({
    el:"#templates",
    data:{
        nombre:'Pedro',
        apellido:'Picapiedra',
        htmlcontent:'<p>Contenido en <u>html</u></p>',
        imgsrc:'images/budy.jpg'
    },
    methods:{
        nombre_completo:function(){
            return this.nombre+" "+this.apellido
        }
    }
})
