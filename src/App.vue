<template>
  <div id="nav bg">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <section>
      <div class="card text-left">
        <div class="card-content">
        <a href="/" class="text-back">← Back </a>
        <form>
          <div>Start from free</div>
          <h1>Create an account</h1>
          <button>Sign up with Google</button>
          <button>Sign up with Facebook</button>
          <p class="line-text"><span>Or use your email for registration &nbsp;</span></p>
          <p>By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.</p>
          <button>Create an Free Account!</button>
          <p>Already have an account? <a href="#">Log in</a></p>
        </form>
        </div>

      </div>
    </section>
  </div>
  <!-- <router-view/> -->
  <div class="home">

  <Form v-slot="{ errors, values, validate }" @submit="onSubmit">

  {{ errors }} {{ values }}

  <div class="mb-3">

    <label for="email" class="form-label">Email</label>

    <Field id="email" name="email" type="email"

    class="form-control" :class="{ 'is-invalid': errors['email'] }"

    placeholder="請輸入 Email" rules="email|required" v-model="user.email"></Field>

    <error-message name="email" class="invalid-feedback"></error-message>

  </div>

  <button class="btn me-2 btn-outline-primary" type="button" @click="validate">驗證</button>

  <button class="btn btn-primary" type="submit">Submit</button>

  </Form>
</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #3C71FF;
    }
  }
}
.bg {
  background-color: #F1F5FF;
}
.card {
position: ralative;
margin: auto;
width: 610px;
height: 680px;

background: #FFFFFF;
box-shadow: 0px 5px 10px 5px rgba(222, 231, 255, 0.25);
border-radius: 20px;

padding: 32px;
}
.card.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, -50%);
}
.text-left{
  text-align: left;
}
.text-back{
  text-decoration: none;
}
.line-text{
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 20px 0 0 0px;
}
.line-text span{
  background: #fff;
  padding: 0;
}
</style>
<script>
export default {
  name: 'Home',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    onSubmit () {
      console.log(this.user)
    }
  },
  created () {
    console.log(this)
  }
}
</script>
