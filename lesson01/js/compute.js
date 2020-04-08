let app = new Vue({
  el: "#app",
  data: {
    email: "info@example.com"
  },
  computed: {
    localEmail: function() {
      return this.email.split("@")[0].toLowerCase()
    }
  }
});