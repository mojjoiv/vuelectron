<template>
      <img class="logo" src="../assets/kula.png">
    <h1>
        Sign Up
    </h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="email" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button type="button" v-on:click="signUp">Sign Up</button>


    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password:'',
    }
  },
  methods:{
    async signUp(){
        let result = await axios.post('http://localhost:3000/users',{
            email:this.email,
            password:this.password,
            name:this.name
        }); 
        
        console.table(result);
        if(result.status==201)
        {
            alert ("success");
            localStorage.setItem("user-info", JSON.stringify(result.data))
            this.$router.push({name:'HomePage'})
        }
    }
 },
 mounted(){
    let user = localStorage.getItem('user-info');
    if(user){
        this.$router.push({name:'HomePage'})
    }
 }
}
</script>

<style scoped>
.logo {
    width: 100px;
}
input[type="text"],
        input[type="email"],
        input[type="password"]{
    width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
            
}
input[type="button"]{
    background-color: #0056b3;
    background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
}

</style>
