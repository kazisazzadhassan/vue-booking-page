<template>
  <div class="mt-16">
    <v-row class="px-0">
      <v-col md="8" sm="12" style="min-width: 444px">
        <h1 color="text">Location</h1>
        <v-list-item-avatar
          tile
          color="grey"
          width="100%"
          height="300px"
          class="mx-0"
        ></v-list-item-avatar>
      </v-col>
      <v-col md="4" sm="12" style="min-width: 344px">
        <h1 color="text" class="pl-7">How to get there</h1>
        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            color="grey lighten-1"
            large
            icon="mdi-airplane"
          >
            <v-row class="pt-1">
              <v-col>
                <strong>Fly to Port Elizabeth International Airport</strong>
                <div class="text-caption pt-1">
                  <v-icon small>mdi-map-marker</v-icon>
                  <span>Allister Miller Dr, Walmer, Gqeberha, 6070</span>
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            color="grey lighten-1"
            large
            icon="mdi-home"
            class="mt-4"
          >
            <v-row class="pt-1">
              <v-col>
                <strong>Drive from airport to Kwandwe </strong>
                <div class="text-caption pt-1">
                  <v-icon small>mdi-map-marker</v-icon>
                  R67 Fort Brown, Makhanda, 6140
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            color="grey lighten-1"
            large
            icon="mdi-airplane"
            class="mt-4"
          >
            <v-row class="pt-1">
              <v-col>
                <strong>Check in at Kwandwe</strong>
                <div class="text-caption pt-1" color="button">
                  11:00 on day of arrival
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            color="grey lighten-1"
            large
            icon="mdi-airplane"
            class="mt-4"
          >
            <v-row class="pt-1">
              <v-col>
                <strong>Check out at Kwandwe </strong>
                <div class="text-caption pt-1" color="button">
                  11:00 on day of departure
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
      },
    ],
  }),
}
</script>

<style>

</style>