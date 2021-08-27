<template>
  <div class="mt-16">
    <div class="footer pb-16 mt-16">
      <v-container>
        <v-row class="pt-6 pv-16">
          <v-col md="3" sm="12">
            <h3 color="text">About</h3>
            <p class="pt-5">Welcome to Conservation Club, we bring conscious travellers together with unique tourism experiences in Africa. We connect those who commit to making a difference.</p>
          </v-col>
          <v-col md="2" sm="6">
            <h3 color="text">Contact</h3>
            <p class="pt-5">A: Cape Town. South Africa <br>E: info@conservation-club.com <br>T: +27 82 456 8228</p>
          </v-col>
          <v-col md="2" sm="6">
            <h3 color="text">Operating Regions</h3>
            <p class="pt-5">We are currently offering experiences and stays in South Africa.</p>
          </v-col>
          <v-col md="2" sm="6">
            <h3 color="text">Quick Links</h3>
            <div class="pt-5">
              <ul class="liststyle">
                <li>Privacy Policy</li>
                <li>T&Cs</li>
                <li>FAQs</li>
                <li>Site</li>
                <li>Map</li>
              </ul>
            </div>
          </v-col>
          <v-col md="3" sm="12">
            <h3 color="text">Get Social</h3>
            <p class="pt-5">Follow us on social media and keep in touch with Conservation Club.</p>
            <div>
              <v-icon class="mr-2">mdi-instagram</v-icon>
              <v-icon class="mr-2">mdi-facebook</v-icon>
              <v-icon>mdi-linkedin</v-icon>
            </div>
            <div class="mt-4">
              <v-btn class="button" width="100%" dark>SIGN UP TO OUR NEWSLETTER</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="bottomSec">
      <p class="text-center pt-3"><small>© Copyright Conservation Club</small></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.liststyle
  list-style: none
  padding-left: 0 
  cursor: pointer
.bottomSec
  background: #EDE9E1
  height: 50px
  width: 100%
</style>