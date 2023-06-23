const app = Vue.createApp({
  data() {
    return {
      firstName: 'Oswaldo',
      lastName: 'Gomez',
      email: 'oswaldo@email.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      const result = results[0]
      this.firstName = result.name.first
      this.lastName = result.name.last
      this.email = result.email
      this.gender = result.gender
      this.picture = result.picture.large
    }
  }
})

app.mount('#app')
