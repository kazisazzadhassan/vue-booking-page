<template>
  <div>
    <v-app-bar color="white" style="z-index: 99; height: 80px; position: fixed;">
      <div class="logoImg" @click="$router.push('/')">
        <img src="@/assets/photo/logo.png" width="70px" class="mt-7" alt="">
      </div>
      <div class="humbargerMenu">
        <v-icon v-if="!showResponsive" color="#2D2D2D" @click="menu">mdi-menu</v-icon>
        <v-icon v-else color="#2D2D2D" @click="menu">mdi-close</v-icon>
      </div>
      <div class="navigationItem">
        <div>
          <v-btn
            class="navItem mx-1"
            style="color: #BA3834; margin-top: 30px;"
          >
            HOME
          </v-btn>

        </div>
        <div>
          <v-btn
            class="navItem mx-1"
            style="color: #2D2D2D; margin-top: 30px;"
          >
            ACCOMMODATION
          </v-btn>
        </div>
        <div>
          <v-btn
            class="navItem mx-1"
            style="color: #2D2D2D; margin-top: 30px;"
          >
            EXPERIENCES
          </v-btn>
        </div>
        <img src="@/assets/photo/logo.png" width="70px" class="mt-2" alt="">
        <div>
          <v-btn
            class="navItem mx-1"
            style="color: #2D2D2D; margin-top: 30px;"
          >
            ABOUT
          </v-btn>
        </div>
        <div>
          <v-btn
            class="navItem mx-1"
            style="color: #2D2D2D; margin-top: 30px;"
            to="#"
          >
            CONSERVATION
          </v-btn>
        </div>
        <div>
          <v-btn
            class="navItem mx-1"
            style="margin-top: 30px; background: #BA3834"
            to="#"
            dark
          >
            Sign up
          </v-btn>
        </div>
        <div>
          <v-btn
            class="navItem mx-1"
            style="color: #2D2D2D; margin-top: 30px;"
            to="#"
          >
            Login
          </v-btn>
        </div>
      </div>
      <div class="authSec">
        <div>
          <v-btn
            class="navItem mx-1"
            style="margin-top: 30px; background: #BA3834"
            to="#"
            dark
            small
          >
            Sign up
          </v-btn>
        </div>
        <div>
          <v-btn
            class="navItem mx-1"
            style="color: #2D2D2D; margin-top: 30px;"
            to="#"
            small
          >
            Login
          </v-btn>
        </div>
      </div>
      <div v-if="showResponsive" class="responsiveNav pb-16">
        <div class="d-flex justify-center">
          <v-btn
            class="navItem"
            style="color: #BA3834"
          >
            HOME
          </v-btn>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            class="navItem"
            style="color: #2D2D2D"
          >
            ACCOMMODATION
          </v-btn>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            class="navItem"
            style="color: #2D2D2D"
          >
            EXPERIENCES
          </v-btn>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            class="navItem"
            style="color: #2D2D2D"
          >
            ABOUT
          </v-btn>
        </div>
        <div class="d-flex justify-center">
          <v-btn
            class="navItem"
            style="color: #2D2D2D"
            to="#"
          >
            CONSERVATION
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  data: () => ({
    showResponsive: false
  }),
  
  methods:{
    menu(){
      if(this.showResponsive == true){
        this.showResponsive = false
      }else{
        this.showResponsive = true
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.authSec
  position: absolute
  right: 50px
  display: none
  @media screen and (max-width: 900px)
    display: flex
.navigationItem
  position: absolute
  left: 50%
  transform: translate(-50%)
  display: flex
  @media screen and (max-width: 900px)
    display: none
::v-deep .theme--light.v-btn.v-btn--has-bg 
  background-color: transparent
::v-deep .theme--light.v-btn
  color: #FFFF
::v-deep .v-btn--is-elevated
  box-shadow: none
.humbargerMenu
  display: none
  @media screen and (max-width: 900px)
    display: flex
    position: absolute
    right: 20px
    top: 30px
@media screen and (max-width: 900px)
  .responsiveNav
    width: 100%
    // height: 100vh
    position: fixed
    top: 75px
    right: 0
    background-color: #ffff
.logoImg
  cursor: pointer
  position: absolute
  left: 10px
  display: none
  @media screen and (max-width: 900px)
    display: block

</style>