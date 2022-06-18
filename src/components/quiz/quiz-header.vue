<template>
  <div id="video-container">
    <transition-group name="refresh-iframe" tag="div">
      <iframe v-for="(link, index) in list" v-bind:key="link + index"
      width="0" height="0" v-bind:src="link" title="YouTube video player"
      allow="autoplay; encrypted-media;" hidden="true"></iframe>
    </transition-group>
    <button v-if="isValid" v-on:click="playVideo">test</button>
  </div>
</template>

<script>
export default {
  props: {
    difficulty: {
      type: String,
      default: "middle"
    },
    year: {
      type: String,
      default: "2010"
    }
  },
  data() {
    return {
      link: "https://www.youtube.com/embed/lOrU0MH0bMk?start=76&end=79&autoplay=1",
      list: [],
      isValid: true
    }
  },
  methods: {
    playVideo: function (){
      console.log(this.link)
      this.list.push(this.link)
      this.isValid = this.list.length < 5
    }
  }
}
</script>

<style scoped>
#video-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>