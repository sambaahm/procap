import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials).then(response => {
            console.log(response)
        })

            //register(credentials) {
            //return Api()
            //.post('register')
            // .then(response => {
            //   console.log(response)
            //  })

            .catch(error => {
                console.log(error.response)
            })
    },
    login(credentials) {
        return Api().post('login', credentials).then(response => {
            console.log(response)
        })

            //register(credentials) {
            //return Api()
            //.post('register')
            // .then(response => {
            //   console.log(response)
            //  })

            .catch(error => {
                console.log(error.response)
            })
    }
}

//AuthenticationService.register({
//	email: 'test@gmail.com',
//	password: '123456'
//})