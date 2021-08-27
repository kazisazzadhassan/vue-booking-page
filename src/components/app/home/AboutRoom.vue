<template>
  <div class="mt-16 pt-16">
    <h1 color="text">About the rooms</h1>
    <v-col md="8" sm="12" class="px-0">
      <div class="d-flex flex-wrap">
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          class="mr-3 hotelImage"
        >
          <div class="imgDiv">
            <img src="@/assets/photo/img.png" class="hotelImage" width="100%" height="100%">
            <div class="overlay">
            </div>
          </div>
        </v-list-item-avatar>
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          class="mr-3 hotelImage"
        >
          <div class="imgDiv">
            <img src="@/assets/photo/Home.png" class="hotelImage" width="100%" height="100%">
            <div class="overlay">
            </div>
          </div>
        </v-list-item-avatar>
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          class="mr-3 hotelImage"
        >
          <div class="imgDiv">
            <img src="@/assets/photo/img.png" class="hotelImage" width="100%" height="100%">
            <div class="overlay">
            </div>
          </div>
        </v-list-item-avatar>
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          class="hotelImage"
        >
          <div class="imgDiv">
            <img src="@/assets/photo/Home.png" class="hotelImage" width="100%" height="100%">
            <div class="overlay">
            </div>
          </div>
        </v-list-item-avatar>
        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          class="hotelImage"
        >
          <div class="imgDiv">
            <img src="@/assets/photo/img.png" class="hotelImage" width="100%" height="100%">
            <div class="overlay">
            </div>
          </div>
        </v-list-item-avatar>
      </div>
      <p color="text" class="py-2">This welcoming retreat offers nine spacious suites complemented with ensuite bathrooms featuring an outdoor shower as well as indoor bath and shower. Floor-to-ceiling framed glass doors fold back to reveal an uninterrupted wilderness. Relax by your private plunge pool on your thatched terrace with unmatched views over the sweeping landscape. Step inside and cocoon within the comfortable living space after a day of exploring the reserve.</p>
      <v-row class="d-flex flex-wrap">
        <v-col md="4" sm="6" xs="12">
          <div class="mb-10">
            <v-icon>mdi-tshirt-crew</v-icon>
            <span class="pl-2">Laundry</span>
          </div>
          <div class="mb-10">
            <v-icon>mdi-lock</v-icon>
            <span class="pl-2">In-room Safe</span>
          </div>
          <div class="mb-10">
            <v-icon>mdi-wifi</v-icon>
            <span class="pl-2">Free Wifi</span>
          </div>
          <div class="mb-10">
            <v-icon>mdi-led-on</v-icon>
            <span class="pl-2">Malaria Free Area</span>
          </div>
        </v-col>
        <v-col md="4" sm="6" xs="12">
          <div class="mb-10">
            <v-icon>mdi-air-conditioner</v-icon>
            <span class="pl-2">Aircon</span>
          </div>
          <div class="mb-10">
            <v-icon>mdi-fan</v-icon>
            <span class="pl-2">Fan</span>
          </div>
          <div class="mb-10">
            <v-icon>mdi-pool</v-icon>
            <span class="pl-2">Private Pool</span>
          </div>
          <div class="mb-10">
            <v-icon>mdi-glass-tulip</v-icon>
            <span class="pl-2">Mini Bar</span>
          </div>
        </v-col>
        <v-col md="4" sm="6" xs="12">
          <div class="mb-10">
            <v-icon>mdi-water-pump</v-icon>
            <span class="pl-2">Indoor & Outdoor Shower</span>
          </div>
          <div class="mb-10">
            <v-icon>mdi-douban</v-icon>
            <span class="pl-2">Double Vanity</span>
          </div>
          <div class="mb-10">
            <v-icon>mdi-scale-bathroom</v-icon>
            <span class="pl-2">Bath</span>
          </div>
          <div class="mb-10">
            <v-icon>mdi-silverware</v-icon>
            <span class="pl-2">Private Dinner</span>
          </div>
        </v-col>
      </v-row>
      <div>
        <v-card
          style="background: #FCE7E6"
          class="py-3"
        >
          <div class="d-flex justify-space-between">
            <div>
              <v-card-title color="text">Want to see more about <br> Kwandwe Private Game Reserve</v-card-title>
            </div>
            <div class="d-flex align-center">
              <v-btn class="mr-5" rounded outlined>WATCH THE VIDEO TOUR</v-btn>
            </div>
          </div>
        </v-card>
      </div>
    </v-col>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.hotelImage
  border-radius: 7px !important
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
  background-color: #4A121E
  border-radius: 7px
.imgDiv
  width: 100%
  height: 100%
  border-radius: 7px
  position: relative
  &:hover .overlay 
    opacity: .7
</style>