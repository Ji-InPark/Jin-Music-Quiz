<template>
  <div id="body">
    <div class="explain-container">
      <div class="box explain">
        여기에 진행 방식 설명 같은거 적고
      </div>
      <div class="box buttons">
        여기에 난이도와 년도 선택하는 거 넣고
      </div>
    </div>
    <div class="submit-container">
      <button id="submit-button">
        여기는 이제 시작
      </button>
    </div>
  </div>
</template>

<style>
#body{
  background-image: url("../../assets/beach.jpg");
  background-size: 100%;
}

.explain-container {
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
}

.box {
  display: flex;
  height: 30em;
  border: 30px;
  border-radius: 3em;
  opacity: 0.8;
  margin-top: 8em;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
}

.explain {
  flex: 2;
  max-width: 40em;
  min-width: 20em;
  background-color: #61BFAD;
}

.buttons {
  flex: 1;
  max-width: 30em;
  min-width: 15em;
  background-color: #61BFAD;
}

.submit-container {
  display: flex;
  margin-top: 5em;
  justify-content: center;
}

#submit-button {
  display: block;
  height: 5em;
  width: 60%;
  max-width: 60em;
  text-align: center;
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