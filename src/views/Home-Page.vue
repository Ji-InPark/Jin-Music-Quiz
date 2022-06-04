<template>
  <header>
    <HomeHeader></HomeHeader>
    <HomeBody></HomeBody>
  </header>
  <body>

  </body>
  <footer>

  </footer>
</template>

<script>
import HomeHeader from '../components/home/Home-Header'
import HomeBody from '../components/home/Home-Body'

export default {
  components: {
    'HomeHeader': HomeHeader,
    'HomeBody': HomeBody
  }
}


</script>