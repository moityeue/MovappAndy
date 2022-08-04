<template>
  <nav>
    <li><router-link :to="{name:'HomeView', params: {id:id}}">Home</router-link></li>
    <li><router-link :to="{name:'SearchView', params: {id:id}}">Search</router-link></li>
    <li><router-link :to="{name:'GenreView', params: {id:id}}">Gender </router-link></li>
  </nav>
  <router-view/>
</template>

<style>
#app {
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  background: linear-gradient(#e66465, #9198e5);
  font-family: sans-serif;
}
nav {
  width: 200px;
  margin-left: 44%;
  padding: 0;
}
nav > li > router-link {
  list-style-type:none;
  font-size: 1rem;
  color: rgb(173, 247, 136);
}
nav > li {
   list-style-type:none;
    color: #fff;
}
.movie {
  display:inline-block;
  height: 100%;
  width: 30%;
}
.genresList {
  display:inline-block;
  height: 100%;
  width: 30%;
}
.tvList {
  margin-top:150px;
  display:inline-block;
  height: 100%;
  width: 100%;
}
.infos {
  position: relative;
  overflow: hidden;
  left:25%;
  width: 50%;
  height: 100%;
  margin: 10px 0;
  background: #2a264f;
  border: 5px solid #1a163f;
  border-radius: 1px;
  box-shadow: 0 0 10px #2a264f;
}
.infos > poster {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  width: 100%;
  background-size: 310px 440px;
  background-position: left bottom;
  transition: all 0.5s ease-in-out;
}
.infos > router-link {
  text-decoration: none;
  color: #000;
}
.infos > h1 {
  height: 22%;
  width: 100%;
  font-size: 1rem;
  text-align: center;
  font-weight: 300;
  color: #FFFC;
  padding: 15px 10px;
  position: relative;
  bottom: 0;
  left: 0px;
  box-shadow: 0 -95px 28px -25px #000 inset;
}
.infos > p {
  color: aliceblue;
}
.infos > title {
  height: 22%;
  width: 100%;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: #ffff;
  padding: 15px 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0 -95px 28px -25px #000 inset;
}
.tv {
  display:inline-block;
  height: 100%;
  width: 100%;
}
.infosTv > p {
  color: aliceblue;
}
.movie > p {
  width:80%
}
.movie > h1 {
  width:80%
}
a {
  text-decoration: none;
  color: #ffff;
  font-family: monospace;
  font-size: 1rem;
}
.checkbox {
  display: none;
}

.btn{
color: rgb(255, 255, 255); font-size: 16px; line-height: 16px; padding: 6px; border-radius: 10px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-color: #1a163f; }

</style>
