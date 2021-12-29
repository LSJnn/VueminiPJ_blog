<template>
  <div>
<!--    <router-link to="/list">리스트페이지</router-link>-->
    <home/>
    <div class="board">
    <div class="boardList">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" @click="$router.push('/list')">12월 4주차 프로젝트</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>

    <div class="mainBoard">
      <router-view :blog="blog"/>
    </div>
      <router-link to="/list" v-if="$route.path!='/list'">리스트로 돌아가기</router-link>
  </div>
  </div>
</template>

<script>

import blog from './assets/blogdata.js'
import Home from "./components/Home";

export default {
  name: 'App',
  components : {
    Home
  },
  data(){
    return {
      blog : blog,
  }
  },
  methods : {
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.board{
  font-family: "한컴 말랑말랑 Regular";
}
.boardList{
  margin-left: 10pt;
  margin-right: 10pt;
  margin-bottom: 30pt;
}
.mainBoard{
  background: cornsilk;
  margin: 10pt;
  padding: 10pt;
}
</style>
