<template>
  <div id="quiz-container">
    <div id="audio-container">
      <div id="answer-container">
        <div v-if="summitButtonClicked" id="question-mark-container">
          ？
        </div>
        <transition-group name="answer-iframe" tag="div">
          <iframe v-for="(link, index) in answerList" v-bind:key="link + index"
                  width="500" height="500" v-bind:src="link" title="YouTube video player"
                  allow="autoplay; encrypted-media;" id="answer-iframe"></iframe>
        </transition-group>
      </div>
      <transition-group name="refresh-iframe" tag="div">
        <iframe v-for="(link, index) in quizList" v-bind:key="link + index"
                width="0" height="0" v-bind:src="link" title="YouTube video player"
                allow="autoplay; encrypted-media;" hidden="true"></iframe>
      </transition-group>
      <button v-on:click="playAudio" id="replay-button">음악 재생</button>
    </div>
    <div id="user-input-container">
      <p id="showing-answer">{{userAnswer}}</p>
      <input type="text" v-bind:value="userAnswer" @input="changeUserAnswer" placeholder="노래 제목을 적어주세요." maxlength="20" id="user-input-answer"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    difficulty: {
      type: String,
      default: "2"
    },
    year: {
      type: String,
      default: "2010"
    }
  },
  watch: {
    userAnswer(){
      // 여기다가 자동완성 관련 기능 넣기
      console.log(this.userAnswer)
    }
  },
  data() {
    return {
      // link는 api를 통해서 얻어온다
      // 지금은 정적으로 넣어두기
      quizLink: "https://www.youtube.com/embed/lOrU0MH0bMk?autoplay=1&start=76&end=79",
      quizList: [],
      playingTime: (this.difficulty * 1 + 2) * 1000,
      isPlaying: false,
      userAnswer: "",
      answerList: [],
      summitButtonClicked: true
    }
  },
  methods: {
    playAudio: function (){
      if(this.quizList.length >= 5){
        alert("더 이상 들을 수는 없어요!!")
        return
      }

      if(this.isPlaying) {
        return
      }

      this.startPlaying()
      setTimeout(() => this.stopPlaying(), this.playingTime)

      this.quizList.push(this.quizLink)
    },
    startPlaying: function (){
      this.isPlaying = true
    },
    stopPlaying: function (){
      this.isPlaying = false
    },
    changeUserAnswer(e){
      this.userAnswer = e?.target.value
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'SUIT-Medium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

#quiz-container{
  display: flex;
  justify-content: space-evenly;
  margin-top: 5em;
  font-family: SUIT-Medium;
}

#audio-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#question-mark-container{
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  font-size: 200px;
  text-align: center;
  justify-content: center;
  border: solid;
  border-radius: 5%;
}

#answer-iframe{
  border-radius: 5%;
}

#replay-button {
  display: block;
  height: 60px;
  width: 60%;
  max-width: 30em;
  min-width: 10em;
  text-align: center;
  font-size: 2em;
  border: none;
  border-radius: 3em;
  background-color: #F2930C;
  margin-top: 2em;
  color: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

#replay-button:hover {
  background-color: #F24C0C;
  box-shadow: 0px 15px 20px rgba(242, 76, 14, 0.4);
  color: white;
  transform: translateY(-7px);
}

#user-input-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 40em;
}

#showing-answer{
  font-size: 30px;
  text-align: center;
}

#user-input-answer{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
}

#user-input-answer:focus{
  outline: none;
}
</style>