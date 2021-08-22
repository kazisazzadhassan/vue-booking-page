<template>
  <div class="mt-16">
    <v-row class="mt-4 px-0">
      <v-col md="8" sm="12">
        <h1 color="text">Activities included in the cost of your stay</h1>
        <div class="d-flex flex-wrap justify-space-between">
          <v-card
            class="my-3"
            max-width="344"
          >
            <v-list-item three-line>
              <v-list-item-avatar
                size="80"
                color="#FAE7E6"
              ></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6 mb-1">
                  Game drives
                </v-list-item-title>
                <v-list-item-subtitle>Day & night game drives in an open 4x4 safari vehicle</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            class="my-3"
            max-width="344"
          >
            <v-list-item three-line>
              <v-list-item-avatar
                size="80"
                color="#FAE7E6"
              >
                <img src="@/assets/photo/fish.png" alt="">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6 mb-1">
                  Fishing
                </v-list-item-title>
                <v-list-item-subtitle>Catch-and-release fishing on artificial lures or fly rod</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            class="my-3"
            max-width="344"
          >
            <v-list-item three-line>
              <v-list-item-avatar
                size="80"
                color="#FAE7E6"
              ></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6 mb-1">
                  Walking safaris
                </v-list-item-title>
                <v-list-item-subtitle>Experience the thrill of tracking big game on foot</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            class="my-3"
            max-width="344"
          >
            <v-list-item three-line>
              <v-list-item-avatar
                size="80"
                color="#FAE7E6"
              >
                <img src="@/assets/photo/eco-nect.png" alt="">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6 mb-1">
                  Eco-nect kids safari
                </v-list-item-title>
                <v-list-item-subtitle>Animal checklists, themed games and activities</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            class="my-3"
            max-width="344"
          >
            <v-list-item three-line>
              <v-list-item-avatar
                size="80"
                color="#FAE7E6"
              >
                <img src="@/assets/photo/boating.png" alt="">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6 mb-1">
                  Boating
                </v-list-item-title>
                <v-list-item-subtitle>Boat crusies with a guide</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            class="my-3"
            max-width="344"
          >
            <v-list-item three-line>
              <v-list-item-avatar
                size="80"
                color="#FAE7E6"
              >
                <img src="@/assets/photo/birding.png" alt="">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6 mb-1">
                  Birding
                </v-list-item-title>
                <v-list-item-subtitle>Kwandwe’s has recorded 315 species of bird</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            class="my-3"
            max-width="344"
          >
            <v-list-item three-line>
              <v-list-item-avatar
                size="80"
                color="#FAE7E6"
              >
                <img src="@/assets/photo/community hands.png" alt="">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6 mb-1">
                  Community visit
                </v-list-item-title>
                <v-list-item-subtitle>Visit the rural communities located in the reserve</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
        <div class="mt-8" style="position: relative">
          <p>This 3 night stay includes all meals, drinks and activities. Twice daily game drives, nature walks accompanied by an armed ranger, big game walking safaris (tracking white rhino, black rhino, elephant and buffalo on foot, accompanied by an armed specialist ranger and tracker team) are all included in your stay. Back at the lodge, several lounging and dining options are available. Delicious African-inspired meals are served in the candlelit dining room or in the boma under a magnificent starlit sky. </p>
          <p>The lodge is Elegant, intimate and contemporary, and boasts plush furnishings and majestic views of the reserve. Perched along the lush green banks of its namesake, Great Fish River Lodge has been designed to showcase the seemingly endless landscape in which it is set. Expansive viewing decks allow for a fully immersive experience in nature and is the perfect spot to enjoy an African sunset.</p>
          <div class="gradientBg">
            <div class="ReadMore d-flex">
              <span>Read More</span>
              <v-icon>mdi-plus</v-icon>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="4" sm="12" class="pt-5">
        <div class="d-flex justify-center resMargin">
          <v-chip class="text" dark>Valid from Aug 2021 - Sept 2021</v-chip>
        </div>
        <div class="mt-5">
          <v-card>
            <v-card-subtitle class="pb-1">
              From <strong class="font-34">R13,500.00</strong> / per person per stay
            </v-card-subtitle>
            <v-card-subtitle class="py-1">
              <span class="redText">3 night stay</span>
            </v-card-subtitle>
            <div class="px-4 mt-8">
              <v-menu
                v-model="menu_start"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Prefered date of arrival"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    hide-details="auto" 
                    outlined 
                    dense
                    class="mb-5 mt-2"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu_start = false"
                ></v-date-picker>
              </v-menu>
            </div>
            <div class="px-4">
              <v-select
                v-model="persons"
                :items="items"
                label="Number of guests"
                dense
                outlined
              ></v-select>
            </div>
            <div class="d-flex justify-center">
              <v-btn class="button my-3" dark x-large rounded>
                SUBMIT YOUR ENQUIRY
              </v-btn>
            </div>
            <div class="d-flex justify-center py-2 pb-5">
              <p>You won't be charged until property confirms</p>
            </div>
          </v-card>
        </div>
        <div>
          <h2 class="pt-12 pb-4" color="text">Enquire about optional extras</h2>
          <p>Click to add extras to your enquiry for pricing on optional extras</p>
          <v-card
            class="pt-3 pl-3 pb-3 mb-3"
          >
            <v-radio-group
              v-model="ex7"
              column
            >
              <v-radio
                label="Spa Treatments"
                color="red"
                value="Spa Treatments"
              ></v-radio>
            </v-radio-group>
          </v-card>
          <v-card
            class="pt-3 pl-3 pb-3"
          >
            <v-radio-group
              v-model="ex7"
              column
            >
              <v-radio
                label="Rhino Conservation Safari"
                color="red"
                value="Rhino Conservation Safari"
              ></v-radio>
            </v-radio-group>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    ex7: '',
    persons: '',
    menu_start: false,
    date: null,
    items: [
      {text: '2 Adults', value: 2},
      {text: '3 Adults', value: 3},
      {text: '4 Adults', value: 4},
      {text: '5 Adults', value: 5},
      {text: '6 Adults', value: 6},
      {text: '7 Adults', value: 7},
      {text: '8 Adults', value: 8},
      {text: '9 Adults', value: 9},
      {text: '10 Adults', value: 10},
      {text: '11 Adults', value: 11},
      {text: '12 Adults', value: 12},
      {text: '13 Adults', value: 13},
      {text: '14 Adults', value: 14},
      {text: '15 Adults', value: 15},
      {text: '16 Adults', value: 16},
      {text: '17 Adults', value: 17},
      {text: '18 Adults', value: 18},
    ],
  }),
}
</script>

<style scoped lang="sass">
.redText
  color: #BA3834 !important
.font-34
  font-size: 30px
.gradientBg
  position: absolute
  width:100%
  height:100px
  bottom: -60px
  background: transparent linear-gradient(180deg, #FFFFFF00 0%, #FFFFFF 37%, #FFFFFF 100%)
.ReadMore
  position: absolute
  top: 70px
@media screen and (max-width: 960px)
  .resMargin
    margin-top: 80px 
</style>