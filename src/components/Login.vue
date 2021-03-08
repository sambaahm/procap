<template>
    <div>

        <h3>Sign In</h3>

        <input type="email"
               name="email"
               v-model="email"
               placeholder="email" />
        <br />
        <input type="password"
               name="password"
               v-model="password"
               placeholder="password" />
        <br />
        <div class="error" v-html="error" />
        <br />
        <router-link to="/About">
            <button @click="login"> login</button>
            <!--<router-link to="/About">login</router-link>-->
        </router-link>
            <p class="forgot-password text-right">
                Already registered
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>

</div>
</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'
    export default {
        data() {
            return {
                email: '',
                password: '',
                error: null
            }
        },
        methods: {
            async login() {
                try {
                    await AuthenticationService.login({
                        email: this.email,
                        password: this.password
                    })
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        }
    }
</script>
<style scoped>
    .error {
        color: red;
    }
</style>