<template>
  <div class="Parameters">
    <h1>page Parameters</h1>



    <div class='Parameters-sidebar'>
        <div class='Parameters-sidebar-section-menu'>

        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHYyaiHKZxWkw/company-logo_200_200/0/1555486766503?e=1619049600&amp;v=beta&amp;t=bYggFxmZFNLHnMKqtP7Gto2w7dUQGyjbBIzzAxZ0U-U" loading="lazy" alt="Logo de COLAS DIGITAL SOLUTIONS" id="ember62" class="lazy-image ember-view org-top-card-primary-content__logo" title="" style="--darkreader-inline-outline:#ac2622;"/>

        <label>


          <router-link to="/about">HomePage</router-link><br/>
          <router-link to="/user">Utilisateur</router-link><br/>
          <router-link to="/Notifications">Notifications</router-link><br/>
          <router-link to="/Parameters">Paramètres</router-link>
          <router-view></router-view>
        </label>

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



.Parameters-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.Parameters-sidebar-section {
  padding: 2em;
}
.Parameters-sidebar-section-menu {
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
