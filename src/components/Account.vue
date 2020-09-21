<template>
  <div id="account">
<!--    info-->
    <div id="info" v-show="info">
      <p>Login: {{user.login}}</p>
      <p>Password: {{user.password}}</p>
      <p>Name: {{user.name}}</p>
      <p>Address: <a :href="user.address">Google Map</a></p>
      <p>Phone: {{user.phone}}</p>
      <p>Email: {{user.email}}</p>
      <p>Bought products number: {{user.boughtProductNumber}}</p>
    </div>
    <div id="edit" v-show="edit">
      <p>Login: <input type="text" v-model="user.login"></p>
      <p>Password: <input type="text" v-model="user.password"></p>
      <p>Name: <input type="text" v-model="user.name"></p>
      <p>Address: <input type="text" v-model="user.address"></p>
      <p>Phone: <input type="text" v-model="user.phone"></p>
      <p>Email: <input type="text" v-model="user.email"></p>
    </div>
<!--    buttons-->
    <button @click="editBtn" v-show="info" id="editBtn">Edit</button>
    <button v-show="edit" @click="save" id="saveBtn">Save</button>
    <button v-show="edit" @click="cancel" id="cancelBtn">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      info: true,
      edit: false,
      name: '',
      phone: '',
      email: '',
      address: '',
      login: '',
      password: '',
      user: {
        name: 'John Smith',
        phone: '+99899-123-67-45',
        email: 'johnsmith@gmail.com',
        boughtProductNumber: '3',
        address: '',
        login: 'login',
        password: 'password'
      }
    }
  },
  methods: {
    editBtn: function () {
      this.edit = true
      this.info = false
      this.name = this.user.name
      this.phone = this.user.phone
      this.address = this.user.address
      this.email = this.user.email
      this.login = this.user.login
      this.password = this.user.password
    },
    cancel: function () {
      this.edit = false
      this.info = true
      this.user.name = this.name
      this.user.phone = this.phone
      this.user.address = this.address
      this.user.email = this.email
      this.user.login = this.login
      this.user.password = this.password
      alert('Changes were not saved!!!')
    },
    save: function () {
      this.edit = false
      this.info = true
      alert('Changes were saved!!!')
    }
  }
}
</script>

<style scoped lang="scss">
  #account {
    border: 1px solid #bfbfbf;
    width: 900px;
    padding: 2rem;
    margin: 50px auto;
    box-sizing: border-box;
    p {
      margin-left: 30px;
      input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ;
        font-size: 15px;
      }
      a {
        text-decoration: none;
        color: black;
      }
    }
    button {
      border: none;
      background-color: cornflowerblue;
      padding: 10px 20px;
      border-radius: 5px;
    }
    #editBtn {
      margin-left: 750px;
    }
    #saveBtn {
      margin-left: 600px;
    }
  }
</style>
