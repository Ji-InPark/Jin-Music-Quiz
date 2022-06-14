<template>
  <div id="body">
    <div class="content-container">
      <div class="box explain">
        <h2 id="explain-title">방송에서 많이 봤던 1초 듣고 음악 맞히기!!</h2>
        <div class="radio-container">
          <h3>난이도 선택</h3>
            <label class="radio-label">
              <input type="radio" name="difficulty" v-model="selectedDifficulty" value="easy" id="easy">
              <p class="radio-explain">쉬움: 가수 표시 ⭕, 노래 재생 시간 3초</p>
            </label>
            <label class="radio-label">
              <input type="radio" name="difficulty" v-model="selectedDifficulty" value="normal" id="normal">
              <p class="radio-explain">보통: 가수 표시 ❌, 노래 재생 시간 2초</p>
            </label>
            <label class="radio-label">
              <input type="radio" name="difficulty" v-model="selectedDifficulty" value="hard" id="hard">
              <p class="radio-explain">어려움: 가수 표시 ❌, 노래 재생 시간 1초</p>
            </label>
        </div>
        <div class="year-container">
          <h3>연도 선택</h3>
            <select v-model="selectedComboItem" class="combobox">
              <option v-for="(year,index) in comboItems" :key="index" v-bind:value="{ year }">
                {{ year }} 년
              </option>
            </select>
        </div>
        <div class="explain-container">
          <p class="explain-text">🎧 멜론차트 연간차트 100위를 기준으로 문제를 출제합니다. 🎧</p>
        </div>
      </div>
    </div>
    <div class="submit-container">
      <button v-on:click="startQuiz" id="submit-button">
        시작하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    for(let i = 2000; i <= 2021; i++)
      this.comboItems.push(i)
    console.log(this.comboItems.length)
  },
  data() {
    return {
      selectedDifficulty: "",
      selectedComboItem: "",
      comboItems: []
    }
  },
  methods: {
    startQuiz: function () {
      if (this.selectedDifficulty === ""){
        alert("난이도를 선택해주세요!")
      } else if(this.selectedComboItem === ""){
        alert("연도를 선택해주세요!")
      } else{
        this.$router.push({
          name: 'quiz-page',
          params: {
            difficulty: this.selectedDifficulty,
            year: this.selectedComboItem.year
          }
        })
      }
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

#body {
  background-image: url("../../assets/beach.jpg");
  background-size: cover;
  padding: 1em;
}

.content-container {
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
}

.box {
  display: flex;
  height: 480px;
  border: 30px;
  border-radius: 1em;
  color: #1B130F;
  background-color: #ffe085;
  opacity: 0.9;
  margin-top: 2.5em;
  margin-left: 20px;
  margin-right: 20px;
  padding: 24px;
  font-family: SUIT-Medium;
  font-size: 18px;
}

.explain {
  flex: 2;
  flex-direction: column;
  max-width: 40em;
  min-width: 20em;
}

#explain-title {
  text-align: center;
}

.radio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.radio-label {
  display: flex;
  align-items: center;
  height: 2em;
}

input[type="radio"] {
  transition: all 0.3s ease 0s;
  color: #ffe085;
}

input[type="radio"]:checked {
  transform: scale(150%);
}

input[type="radio"]:checked{
  transform: scale(150%);
}

.radio-explain {
  margin-left: 10px;
}

.year-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
}

.combobox{
  width: 100px;
  height: 35px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
}

.combobox option {
  background: #F2930C;
  color: white;
  padding: 3px 0;
}

.explain-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
}
.submit-container {
  display: flex;
  margin-top: 5em;
  justify-content: center;
}

#submit-button {
  display: block;
  height: 60px;
  width: 60%;
  max-width: 30em;
  text-align: center;
  font-size: 2em;
  border: none;
  border-radius: 3em;
  background-color: #F2930C;
  color: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

#submit-button:hover {
  background-color: #F24C0C;
  box-shadow: 0px 15px 20px rgba(242, 76, 14, 0.4);
  color: white;
  transform: translateY(-7px);
}
</style>