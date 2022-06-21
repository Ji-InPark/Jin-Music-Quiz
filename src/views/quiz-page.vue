<template>
  <QuizBody v-bind:difficulty="this.difficulty" :year=this.year></QuizBody>
</template>

<script>
import QuizBody from '../components/quiz/quiz-body'

export default {
  name: 'quiz-page',
  components: {
    'QuizBody': QuizBody
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
