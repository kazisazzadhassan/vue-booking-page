<template>
  <v-container>
    <offer-section />
    <activity-section />
    <about-room />
    <review-section />
    <location-section />
  </v-container>
</template>

<script>
  import OfferSection from '@/components/app/home/OfferSection'
  import ActivitySection from '@/components/app/home/ActivitySection'
  import AboutRoom from '@/components/app/home/AboutRoom'
  import ReviewSection from '@/components/app/home/ReviewSection'
  import LocationSection from '@/components/app/home/LocationSection'

  export default {
    components: {
      OfferSection,
      ActivitySection,
      AboutRoom,
      ReviewSection,
      LocationSection
    },
  }
</script>
