<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/user/22">User 22</router-link> |
    <router-link to="/qwqw">No existe</router-link>
    <br />
    <router-link to="/test">Tests</router-link>
    <br />
    <router-link to="/form">Form</router-link>  |
    <router-link to="/category">Categ</router-link>
    <!--
    <router-link to="/about">About</router-link>-->
  </div>
  <hr />
  <router-view/>
</template>

<style>

div > label {
  margin-right: 8px;
}

table{
  border-collapse: collapse;
}
table, th, td {
  border: 1px solid green;
  margin: auto;
  padding: 6px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
