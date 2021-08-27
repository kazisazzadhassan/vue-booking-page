<template>
  <div>
    <side-bar />
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
import SideBar from '@/components/dashboard/navigation/SideBar'
export default {
  components: {
    SideBar
  }
}
</script>

<style>

</style>