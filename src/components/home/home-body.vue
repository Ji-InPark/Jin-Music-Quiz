<template>
  <div id="body">
    <div class="content-container">
      <div class="box explain">
        <h1 id="explain-title">방송에서 많이 봤던 1초 듣고 음악 맞히기!!</h1>
        <br/>
        <h3>난이도 설명</h3>
        <p>쉬움:</p>
        <p>보통:</p>
        <p>어려움:</p>
      </div>
      <div class="box buttons">
        여기에 난이도와 년도 선택하는 거 넣고
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
  methods:{
    startQuiz: function (){
      console.log("버튼 눌렸는지 테스트")
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

#body{
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

#explain-title{
  text-align: center;
}

.buttons {
  flex: 1;
  max-width: 30em;
  min-width: 15em;
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

#submit-button:hover{
  background-color: #F24C0C;
  box-shadow: 0px 15px 20px rgba(242, 76, 14, 0.4);
  color: white;
  transform: translateY(-7px);
}
</style>