<template>
    <div id="app">
        <Sidebar />
        <ToggleButton />
        <md-content class="main-content md-scrollbar">
          <div class="header-content">
            <img class="header" src="./assets/temp.jpg">
          </div>
          <Introduction />
          <Portfolio />
        </md-content>
    </div>
</template>

<script>

import Sidebar from './components/Sidebar'
import Introduction from './components/Introduction'
import Portfolio from './components/Portfolio'
import ToggleButton from './components/ToggleButton'

export default {
  name: 'app',
  components: {
    Sidebar,
    Introduction,
    Portfolio,
    ToggleButton
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
h1 {
  margin: 0;
}
.header {
  width: 100%;
}
html, body {
  margin: 0;
  padding: 0;
}
.main-content {
  margin-left: 330px;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  position: fixed;
  background-color: #ece3e3 !important;
}
.md-content.md-theme-default {
  background-color: #fff1f1;
  /*#ebebeb*/
}
.md-scrollbar.md-theme-default::-webkit-scrollbar-thumb {
    background-color: #909090;
}
.md-scrollbar.md-theme-default::-webkit-scrollbar {
    width: 6px;
}
.header-content {
  position: relative;
}
p {
  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
}
@media (max-width: 800px) {
  .main-content {
    margin-left: 0px;
  }
}
</style>
