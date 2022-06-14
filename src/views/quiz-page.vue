<template>
  <QuizHeader></QuizHeader>
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
      default: "middle"
    },
    year: {
      type: Number,
      default: 2010
    }
  },
  created() {
    console.log(this.difficulty)
    console.log(this.year)
  }
}
</script>
