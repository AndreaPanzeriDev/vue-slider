
var app = new Vue({
    el: "#app",
    data: {
        image: [
            {landscape: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {landscape: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
            {landscape: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
        ],
        position : 0,
    },
    methods: {
        goOn: function(){
            if(this.position == 2){
                this.position = 0;
            }else{
                this.position++;
            }   
        },
        goBack: function(){
            
        }
    },
});