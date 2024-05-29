<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SignUp/>
  <SignIn/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'

export default {
  name: 'App',
  components: {
    SignUp,
    SignIn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
