const app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      newWish: {
        text: '',
        image: ''
      },
      wishList: [
        { text: 'ひまわり畑', image: 'https://i.pinimg.com/originals/7a/8f/30/7a8f303ac83e280c7946018bca7e9256.jpg', checked: false },
        { text: 'かき氷', image: 'https://i.pinimg.com/originals/86/ca/24/86ca24130196ec9dd931d225c821db76.jpg', checked: false },
        { text: '花火', image: 'https://i.pinimg.com/originals/5e/27/a8/5e27a886f55a2b3be0ca6e61f29b1a47.jpg', checked: false },
        { text: '流しそうめん', image: 'https://i.pinimg.com/originals/09/07/33/090733b29331ba94362ff9a8dbd29a4d.jpg', checked: false },
      ],
    };
  },
  methods: {
    addWish() {
      if (this.newWish.text !== '' && this.newWish.image !== '') {
        this.wishList.push({
          text: this.newWish.text,
          image: this.newWish.image,
          checked: false,
        });
        this.newWish.text = '';
        this.newWish.image = '';
      }
    },
  },
});