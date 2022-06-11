<template>
  <div id="body">
    <div class="content-container">
      <div class="box explain">
        <h1 id="explain-title">방송에서 많이 봤던 1초 듣고 음악 맞히기!!</h1>
        <div class="radio-container">
          <h3>난이도 선택</h3>
            <label class="radio-label">
              <input type="radio" name="difficulty" v-model="selectedDifficulty" value="easy" id="easy">
              <p class="radio-explain">쉬움: 가수 표시 O, 노래 재생 시간 3초</p>
            </label>
            <label class="radio-label">
              <input type="radio" name="difficulty" v-model="selectedDifficulty" value="normal" id="normal">
              <p class="radio-explain">보통: 가수 표시 X, 노래 재생 시간 2초</p>
            </label>
            <label class="radio-label">
              <input type="radio" name="difficulty" v-model="selectedDifficulty" value="hard" id="hard">
              <p class="radio-explain">어려움: 가수 표시 X, 노래 재생 시간 1초</p>
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
  watch: {
    selectedDifficulty() {
      console.log(this.selectedDifficulty)
    },
    selectedComboItem() {
      console.log(this.selectedComboItem)
    },
  },
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
      if (this.selectedDifficulty == ""){
        alert("난이도를 선택해주세요!")
      } else if(this.selectedComboItem == ""){
        alert("연도를 선택해주세요!")
      } else{
        console.log("버튼 눌렸는지 테스트")
      }
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'SUIT-Medium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

#body {
  background-image: url("../../assets/beach.jpg");
  background-size: 100%;
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
  margin-top: 5em;
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
}

.radio-label {
  display: flex;
  align-items: center;
  height: 3em;
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

.combobox{
  width: 80px;
  height: 35px;
  border-radius: 5px;
  text-align: center;
}

.combobox option {
  background: black;
  color: #fff;
  padding: 3px 0;
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
  max-width: 60em;
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