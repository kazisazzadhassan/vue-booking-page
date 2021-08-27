<template>
  <div class="mt-16 col-md-8 col-sm-12 px-0">
    <h1 color="text">Reviews</h1>
    <div class="mt-7">
      <h4 color="text">What an amazing experience</h4>
      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper efficitur consequat. Pellentesque justo elit, consequat sit amet elit eu, tempus ultricies arcu.</p>
      <v-list-item class="px-0">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <h4>Joe Soap</h4>
          <v-list-item-subtitle>12 June 2021</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div class="mt-7">
      <h4 color="text">What an amazing experience</h4>
      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper efficitur consequat. Pellentesque justo elit, consequat sit amet elit eu, tempus ultricies arcu.</p>
      <v-list-item class="px-0">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <h4>Joe Soap</h4>
          <v-list-item-subtitle>12 June 2021</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div class="mt-7">
      <h4 color="text">What an amazing experience</h4>
      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper efficitur consequat. Pellentesque justo elit, consequat sit amet elit eu, tempus ultricies arcu.</p>
      <v-list-item class="px-0">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <h4>Joe Soap</h4>
          <v-list-item-subtitle>12 June 2021</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <v-pagination
      v-model="page"
      :length="4"
      circle
      class="mt-8"
      color="button"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
    }
  },
}
</script>

<style scoped lang="sass">
::v-deep .v-pagination
  align-items: left
  justify-content: start
</style>