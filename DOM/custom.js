new Vue({
  el: '#app',
  data: {
    buttonscontent: 'click me',
    counter : 0,
    x: 0,
    y: 0
  },
  methods: {
            increase: function(inshuro, event){
                this.counter += inshuro;
              },
            coordonate: function(event){
              this.x = event.clientX;
              this.y = event.clientY;
            },
            dummy: function(event){
              event.stopPropagation();
            },
            alertMe: function(event){
              alert('Alert!');
            }
    }
});
