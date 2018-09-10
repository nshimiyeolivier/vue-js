new Vue({
  el: '#exercise',
  data: {
    name : 'NSHIMIYUMUKIZA Olivier',
    age: '30',
    Image: '<img src="https://cdn-images-1.medium.com/max/2000/1*wFL3csJ96lQpY0IVT9SE3w.jpeg" style="width:100px;height:100px">',
    image : 'https://cdn-images-1.medium.com/max/2000/1*wFL3csJ96lQpY0IVT9SE3w.jpeg'
  },
  methods: {
    agesTimesThree: function(){
    multiAge = this.age * 3;
    return multiAge;
    },

    random: function(){
      return Math.random();
    }
  }
});
