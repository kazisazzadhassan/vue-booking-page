<template>
  <div>
    <public-header/>
    <div>
      <router-view></router-view>
    </div>
    <public-footer />
  </div>
</template>

<script>
import PublicHeader from '@/components/app/navigation/Header'
import PublicFooter from '@/components/app/navigation/Footer'
export default {
  components:{
    PublicHeader,
    PublicFooter,
  },
}
</script>

<style lang="sass" scoped>
</style>