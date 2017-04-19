new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          showAlert: function() {
            alert("I'M AN ALERT");
          },
          storeValue: function(event) {
            this.value = event.target.value;
          }
        }
    });
