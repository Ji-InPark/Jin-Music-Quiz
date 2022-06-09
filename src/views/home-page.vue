<template>
  <HomeHeader/>
  <HomeBody/>
  <HomeFooter/>
</template>

<script>
import HomeHeader from '../components/home/home-header'
import HomeBody from '../components/home/home-body'
import HomeFooter from '../components/home/home-footer'

export default {
  components: {
    'HomeHeader': HomeHeader,
    'HomeBody': HomeBody,
    'HomeFooter': HomeFooter
  }
}


</script>