const app = Vue.createApp({
  data() {
    return {
      listInput: "",
      tasks: [],
      listVisible: true
    };
  },

  methods: {
    addTask() {
      if (this.listInput.trim() !== "") {
        this.tasks.push(this.listInput);
        this.listInput = "";
      }
    },
    toggleList() {
        this.listVisible = !this.listVisible;
    }
  },
});

app.mount("#assignment");
