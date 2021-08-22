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
  import OfferSection from '@/components/home/OfferSection'
  import ActivitySection from '@/components/home/ActivitySection'
  import AboutRoom from '@/components/home/AboutRoom'
  import ReviewSection from '@/components/home/ReviewSection'
  import LocationSection from '@/components/home/LocationSection'

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
