new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          alertMe: function(event){
            alert('alert!');
          },
          storeData: function(event){
            this.value = event.target.value;
          }
        }
    });
