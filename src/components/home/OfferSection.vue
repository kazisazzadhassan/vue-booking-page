<template>
  <v-card
    style="box-shadow: none"
    class="mt-16 pt-12"
  >
    <v-card-title color="text" class="title pl-0">
      3 Night Stay at Great Fish River Lodge
    </v-card-title>
    <v-card-subtitle class="pl-0 pt-2">
      Kwandwe Private Game Reserve, Eastern Cape, South Africa
    </v-card-subtitle>
    <v-btn class="button customBtn" dark small>
      Hurry offer valid from Aug 2021 - Sept 2021
    </v-btn>
    <div class="d-flex mt-16">
      <div class="mr-4">
        <v-btn fab x-small>
          <v-icon>mdi-account-multiple</v-icon>
        </v-btn>
        <small class="pl-2">Min 2 guests - Max 18 guests</small>
      </div>
      <div class="mr-4">
        <v-btn fab x-small>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <small class="pl-2">9 Rooms</small>
      </div>
      <div class="mr-2">
        <v-btn fab x-small>
          <v-icon>mdi-silverware-variant</v-icon>
        </v-btn>
        <small class="pl-2">Fully inclusive</small>
      </div>
      <div class="mt-1">
        <v-icon size="20">mdi-comment-question-outline</v-icon>
      </div>
    </div>
    <div class="mt-5">
      <v-row>
        <v-col md="8" sm="12">
          <div class="imgDiv">
            <img src="@/assets/photo/img.png" class="hotelImage" width="100%" height="460px" style="min-width: 350px" alt="">
            <div class="overlay">
            </div>
          </div>
        </v-col>
        <v-col md="4" sm="12">
          <div class="imgDiv">
            <img src="@/assets/photo/Home.png" class="hotelImage" width="100%" height="230px" style="min-width: 200px" alt="">
            <div class="overlay">
            </div>
          </div>
          <v-row class="pt-5">
            <v-col md="6" sm="6">
              <div class="imgDiv">
                <img src="@/assets/photo/img.png" class="hotelImage" width="100%" height="202px" style="min-width: 100px" alt="">
                <div class="overlay">
                </div>
              </div>
            </v-col>
            <v-col md="6" sm="6">
              <div class="imgDiv1">
                <img src="@/assets/photo/Home.png" class="hotelImage" width="100%" height="202px" style="min-width: 100px" alt="">
                <div class="overlay1">
                  <div class="textnew">+8 Photos</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
.title
  font-size: 28px !important
.customBtn
  border-radius: 10px
.hotelImage
  border-radius: 5px
.overlay 
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  height: 98.5%
  width: 100%
  opacity: 0
  transition: .5s ease
  background-color: #937484
  border-radius: 5px
.overlay1 
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  height: 98.5%
  width: 100%
  opacity: .6
  transition: .5s ease
  background-color: #4A121E
  border-radius: 5px
.imgDiv
  position: relative
  &:hover .overlay 
    opacity: .4
.imgDiv1
  position: relative
  &:hover .overlay1
    opacity: .9
.textnew 
  color: white
  font-size: 20px
  position: absolute
  top: 50%
  left: 50%
  -webkit-transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)
  text-align: center
</style>