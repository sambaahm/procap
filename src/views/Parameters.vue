<template>
    <div class="Parameters">
      



        <div class='Parameters-sidebar'>
            <div class='Parameters-sidebar-section-menu'>


                <label>


                    <router-link to="/about">HomePage</router-link><br />
                    <router-link to="/user">Utilisateur</router-link><br />
                    <router-link to="/Notifications">Notifications</router-link><br />
                    <router-link to="/Parameters">Paramètres</router-link>
                    <router-view></router-view>
                </label>

            </div>
        </div>
        <!-- Wrapper -->
        <div id="wrapper">

            <!-- Main -->
            <div id="main">
                <div class="inner">

                    <!-- Header -->


                    <!-- Page Heading -->
                    <div class="page-heading">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1>Parameters Page</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Forms -->
                    <section class="forms">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-heading">
                                        <h2>Size & Color</h2>
                                    </div>
                                    <form id="contact" action="" method="post">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <select name="category" id="category">
                                                    <option value="categories" selected>Select front style</option>
                                                    <option value="Featured">Default</option>
                                                    <option value="Newest">Classique</option>
                                                    <option value="Low Price">Moderne</option>
                                                    <option value="High Price">Programmer</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <div class="radio-item">
                                                    <input name="demo-small" type="checkbox" id="demo-priority-small" value="small" checked>
                                                    <label for="demo-priority-small">Small</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <div class="radio-item">
                                                    <input name="demo-medium" type="checkbox" id="demo-priority-medium" value="medium">
                                                    <label for="demo-priority-medium">Medium</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <div class="radio-item">
                                                    <input name="demo-large" type="checkbox" id="demo-priority-large" value="large">
                                                    <label for="demo-priority-large">Large</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <div class="circle-item">
                                                    <input name="demo-priority" type="radio" id="demo-small" value="16-20" checked>
                                                    <label for="demo-small">White</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <div class="circle-item">
                                                    <input name="demo-priority" type="radio" id="demo-medium" value="21-30">
                                                    <label for="demo-medium">Grey</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <div class="circle-item">
                                                    <input name="demo-priority" type="radio" id="demo-old" value="30+">
                                                    <label for="demo-old">Dark</label>
                                                </div>
                                            </div>
                                            <div class="filled-icon-button">
                                                <a href="#"><i class="fa fa-check"></i>Save</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>


                    <!-- Tables -->
                    <section class="buttons">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-heading">
                                        <h2>Buttons</h2>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="filled-rectangle-button">
                                                <a href="#">Filled Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="border-rectangle-button">
                                                <a href="#">Border Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="filled-radius-button">
                                                <a href="#">Filled Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="border-radius-button">
                                                <a href="#">Border Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="filled-rounded-button">
                                                <a href="#">Filled Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="border-rounded-button">
                                                <a href="#">Border Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="filled-icon-button">
                                                <a href="#"><i class="fa fa-check"></i>Filled Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="border-icon-button">
                                                <a href="#"><i class="fa fa-check"></i>Border Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="filled-rectangle-button">
                                                <a href="#">Filled Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="border-rectangle-button">
                                                <a href="#">Border Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="filled-rounded-button">
                                                <a href="#">Filled Button</a>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="border-rounded-button">
                                                <a href="#">Border Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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
