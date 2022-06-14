<template>
  <QuizHeader v-bind:difficulty="this.difficulty" :year=this.year></QuizHeader>
</template>

<script>
import QuizHeader from '../components/quiz/quiz-header'

export default {
  name: 'quiz-page',
  components: {
    'QuizHeader': QuizHeader
  },
  props: {
    difficulty: {
      type: String,
      default: null
    },
    year: {
      type: String,
      default: null
    }
  },
  created() {
    if(this.difficulty === null || this.year === null) {
      alert("잘못된 접근입니다.")
      this.$router.push('/home')
    }
  }
}
</script>
