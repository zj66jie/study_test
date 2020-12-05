let app = new Vue({
  el: '#app',  //先定义抓取id
  data: {
    books:
      [
        {
          id: 1,
          name: "《算法导论》",
          date: "2006-9",
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: "《代码大全》",
          date: "2006-8",
          price: 85.00,
          count: 1
        },
        {
          id: 3,
          name: "《数据导论》",
          date: "2007-9",
          price: 65.00,
          count: 1
        },
        {
          id: 4,
          name: "《操作系统》",
          date: "2009-9",
          price: 45.00,
          count: 45
        },
      ]
  },
  computed: {
    finallPrice() {
      let fprice = 0;
      for (let i in this.books) {
        fprice += this.books[i].price * this.books[i].count
      }
      return fprice;


    }

  },

  methods: {
    decrement(index) {
      this.books[index].count--;

    },
    increment(index) {
      this.books[index].count++;

    },
    remove(index) {
      //splice(index,1)移除自身
      this.books.splice(index, 1);
    }

  },

  filters: {
    shouPrice(price) {
      return "￥" + price.toFixed(2);
    }
  

  }
})
