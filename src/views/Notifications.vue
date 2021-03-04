<template>
  <div class="notif">
    <h1>page notifications</h1>
    

    <div class='notif-sidebar'>
        <div class='notif-sidebar-section-menu'>

            
            <label>


                <router-link to="/about">HomePage</router-link><br />
                <router-link to="/user">Utilisateur</router-link><br />
                <router-link to="/Notifications">Notifications</router-link><br />
                <router-link to="/Parameters">Paramètres</router-link>
                <router-view></router-view>

            </label>
            <div>
                <button @click="makeToast()">notif</button><br />
                <button @click="makeToast(true)">notif (appended)</button>
            </div>
        </div>

    </div>
   </div>
  
</template>
<script>
    export default {
        data() {
            return {
                toastCount: 0
            }
        },
        methods: {
            makeToast(append = false) {
                this.toastCount++
                this.$bvToast.toast(`notification num ${this.toastCount}`, {
                    title: 'notif',
                   
                    appendToast: append
                })
            }
        }
    }
</script>
<style lang='css'>

h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}



.notif-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.notif-sidebar-section {
  padding: 2em;
}
.notif-sidebar-section-menu {
  background-color: #eaf9ff;
  border: black;
  color: black;
  padding: 2em;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.testapp-main {
  flex-grow: 1;
  padding: 3em;
}

.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

</style>
