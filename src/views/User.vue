<template>
    <div class="user">
        <h1>Profile</h1>
        <div class="profile-page">
            <div class='user-sidebar'>
                <div class='user-sidebar-section-menu'>

                    <label>


                        <router-link to="/About">HomePage</router-link><br />
                        <router-link to="/user">Utilisateur</router-link><br />
                        <router-link to="/Notifications">Notifications</router-link><br />
                        <router-link to="/Parameters">Paramètres</router-link>
                        <router-view></router-view>
                    </label>

                </div>
            </div>
            <div class="user-info">
                <div class="container">
                    <div class="row">
                        <div>

                            <h5>Email : ................</h5>
                            <h5>password : ........</h5>


                        </div>
                    </div>
                </div>


            </div>
            <div class="work-info">
                <div class="container">
                    
                        <div>
                            <h4>Revue de la semaine</h4>
                            <h5>Temps travailler : "....." heures par semaine </h5>
                            <h5>Duree moyenne des pauses prises: "...." minutes par jour </h5>


                        </div>
                    
                </div>


            </div>

        </div>


    </div>
</template>

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



.user-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.user-sidebar-section {
  padding: 2em;
}
.user-sidebar-section-menu {
  background-color: #eaf9ff;
  border: black;
  color: black;
  padding: 2em;
  text-align: center;
 
  font-size: 16px;

  cursor: pointer;
}
.testapp-main {
  flex-grow: 1;
  padding: 3em;
}
    .user-info {
        position: center;
        background-color: white;
        
        display: inline-block;
    }
    .work-info {
        padding-top: 50px;
        position: center;
        background-color: white;
        border: black;
        
    }


</style>
