const app = Vue.createApp({
    // template: '<h1>Testing and hello {{firstName}}</h1>',
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            gender:'male',
            picture: 'https://randomuser.me/api/portraits/men/88.jpg',
        }
    },
    methods: {
        async getUser(){
          
            const getUserApi = await fetch("https://randomuser.me/api/")
            const {results} = await getUserApi.json()


            // // console.log(result);

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    },
})

app.mount('#app')