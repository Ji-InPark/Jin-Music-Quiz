<template>
  <HomeHeader></HomeHeader>
  <HomeBody></HomeBody>
  <HomeFooter></HomeFooter>
</template>

<script>
import HomeHeader from '../components/home/Home-Header'
import HomeBody from '../components/home/Home-Body'
import HomeFooter from '../components/home/Home-Footer'

export default {
  components: {
    'HomeHeader': HomeHeader,
    'HomeBody': HomeBody,
    'HomeFooter': HomeFooter
  }
}


</script>