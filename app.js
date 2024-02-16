const app = Vue.createApp({
//   template: "<h2>I am a testing Template</h2>",

  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Senderson",
      age: 45,
      
          books: [  
            {title: "Some Book", author: "Some guy"},
            {title: "Some Book", author: "Some guy"},
            {title: "Some Book", author: "Some guy"}
          ]
    }
  },

  methods: {
    changeTitle () {
        this.title = "Wakanda Forever"
    },
    changeAuthor () {
        this.author = "Wakanda Forever"
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },

    handleEvent(e) {
      console.log(e);
    },
  }
});

app.mount("#app");
