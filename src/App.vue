<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <section>
      <div class="card text-left">
        <div class="card-content">
        <a href="#" class="f-14 text-back">← Back </a>
        <form class="card-form f-14">
          <div class="f-18">Start from free</div>
          <h1 class="f-30 mb-16">Create an account</h1>
          <div class="d-flex flex-between">
            <button class="btn">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 8.8V13.2H17.2238C16.3152 15.7608 13.8688 17.6 11 17.6C7.3612 17.6 4.4 14.6388 4.4 11C4.4 7.3612 7.3612 4.4 11 4.4C12.5774 4.4 14.0954 4.9654 15.2746 5.9928L18.1654 2.6752C16.1854 0.9504 13.6422 0 11 0C4.9346 0 0 4.9346 0 11C0 17.0654 4.9346 22 11 22C17.0654 22 22 17.0654 22 11V8.8H11Z"/>
              </svg>
            <span>Sign up with Google</span></button>
          <button class="btn">
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.66391 3.65291H11.6723V0.154909C11.3258 0.107242 10.1342 -7.62939e-06 8.74633 -7.62939e-06C5.85058 -7.62939e-06 3.86692 1.82141 3.86692 5.16908V8.24999H0.671416V12.1605H3.86692V22H7.78475V12.1614H10.851L11.3377 8.25091H7.78383V5.55683C7.78475 4.42658 8.08908 3.65291 9.66391 3.65291Z"/>
            </svg>
            <span>Sign up with Facebook</span></button>
          </div>
          <p class="line-text"><span>Or use your email for registration &nbsp;</span></p>
          <div class="d-flex flex-between">
          <input class="input-style input-between" type="text" placeholder=" First Name"/>
          <input class="input-style input-between" type="text" placeholder=" Last Name"/>
          </div>
          <div><input class="input-style" type="email" placeholder=" E-mail"/></div>
          <div><input class="input-style" type="password" placeholder=" Password"/></div>

            <!-- <div class="d-flex flex-between mb-12">
              <input type="checkbox" class="input-checkbox" id="privacyCheck">
              <span class="checkmark"></span>
              <label class="f-13" for="privacyCheck">By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.</label>
              </div> -->
              <div class="d-flex mb-12">
                <input class="input-checkbox" type="checkbox" id="checkbox" name="checkbox" value="custom and accessible">
                <label for="checkbox">By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.</label>
                </div>
          <button class="btn-2 text-center">Create an Free Account!</button>
          <p class="text-center">Already have an account? <a href="#" class="priamry-blue">Log in</a></p>
        </form>
        </div>

      </div>
    </section>
  </div>
  <!-- <router-view/> -->
  <div class="home">

  <!-- <Form v-slot="{ errors, values, validate }" @submit="onSubmit">

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

  </Form> -->
</div>
</template>

<style lang="scss">
$priamry-blue: #3C71FF;
$blue-200: #F1F5FF;
$white: #ffffff;
$black :#000000;
$gray-200: #ABABAB;
body {
  background: #F1F5FF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
}

#nav {
  padding-top: 30px;
  // a {
  //   font-weight: bold;
  //   color: $priamry-blue;
  //   &.router-link-exact-active {
  //     color: $priamry-blue;
  //   }
  // }
}
.d-flex{
  display: flex;
}
.flex-between{
  justify-content: space-between;
}
.f-14{
  font-family: Interstate;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
}
.f-13{
  font-family: Interstate;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
}
.f-18{
  font-family: Interstate;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  //line-height: 21.6px;
}
.f-30{
  font-family: Interstate;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  margin: 0 auto;
}
.mb-12{
  margin-bottom: 12px;
}
.mb-16{
  margin-bottom: 16px;
}
.text-center{
  text-align: center;
  a{
    color: $priamry-blue;
    text-decoration: auto;
    &:hover, &:focus, &:active{
      text-decoration-line: underline;
      text-decoration-thickness: 0.2em;
      text-decoration-color: $priamry-blue;;
    }
  }
}
.card {
position: ralative;
margin: auto;
width: 610px;
height: 680px;
background: $white;
box-shadow: 0px 5px 10px 5px rgba(222, 231, 255, 0.25);
border-radius: 20px;
padding: 32px;
.content{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, -50%);
}
}
.card-form{
  margin: 26px 105px 36px 105px;
  input{
    margin-bottom: 12px;
  }
  label{
    margin-bottom: 0px;
  }
  .input-style{
    width: 99%;
    height: 45px;
    background: $blue-200;
    border-radius: 5px;
    border: solid 0px;
  }
  .input-between{
    width: 186px;
  }
  .input-checkbox{
    border-radius: 4px;
    //background-color: red;
    display: flex;
    align-self: center;
    background: gray-200;
    padding-right: 16px;
  }
}
.text-left{
  text-align: left;
}
.text-back{
  text-decoration: none;
  color: $black;
    &:hover, &:focus, &:active{
      text-decoration-line: underline;
      text-decoration-thickness: 0.2em;
      text-decoration-color: $priamry-blue;;
    }
}
.line-text{
  width: 100%;
  text-align: left;
  border-bottom: 1px solid $black;
  line-height: 0.1em;
  margin: 20px 0 20px 0px;
  span{
  background: $white;
  padding: 0;
  }
}
.btn{
  background: $white;
  border: 1px solid hsla(224, 100%, 62%, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  // padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 55px;
  svg{
  padding-right: 16px;
  fill: $priamry-blue;
  }
  &:focus, &:hover, &:active{
    background: $priamry-blue;
    mix-blend-mode: normal;
    box-shadow: 0px 6px 15px rgba(60, 113, 255, 0.4);
    border-radius: 5px;
    color: $white;
    svg{
    fill: $white;
    }
  }
}
.btn-2{
  background: $priamry-blue;
  color: $white;
  border: 1px solid hsla(224, 100%, 62%, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  // padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
    &:focus, &:hover{
    background: $priamry-blue;
    mix-blend-mode: normal;
    box-shadow: 0px 6px 15px rgba(60, 113, 255, 0.4);
    border-radius: 5px;
    color: $white;
  }
}
@supports(-webkit-appearance: none) {
  input[type="checkbox"] {
  background-color: gray-200;
  border-radius: 5px;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid $white;
    margin-right: 12px;
  }
  input[type="checkbox"]:focus {
    border: 1px solid $black;
    }
    input[type="checkbox"]:checked {
      position: relative;
      background: none;
    border: 1px solid $black;
      }
      input[id="checkbox"]:checked::after {
        position: absolute;
        top: 0rem;
        left: 0.3rem;
        content: "";
        width: 1rem;
        height: 0.4rem;
        border: 2px solid $priamry-blue;
        border-right: none;
        border-top: none;
    transform: rotate(-45deg);}
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
