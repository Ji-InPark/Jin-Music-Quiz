<template>
  <div id="home-footer">
    <a href="https://github.com/Ji-InPark" id="github-link">Ji-In Park</a>
    <p id="copyright">Copyright&copy; 2022.Ji-In Park.All rights reserved</p>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'SUIT-Medium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

#home-footer{
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: end;
  opacity: 0.9;
  height: 8.3em;
  font-family: SUIT-Medium;
}

#github-link{
  color: white;
  font-size: 2em;
}

#copyright{
  color: white;
  font-size: 10px;
  margin-top: 2em;
}
</style>