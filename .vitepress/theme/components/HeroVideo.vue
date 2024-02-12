<script setup lang="ts"></script>

<template>
  <video class="home-video" src="/quick.mp4" controls="controls"></video>
</template>

<style>
.home-video {
  margin-left: 60px;
  margin-top: 42px;
}

@media (max-width: 960px) {
  .home-video {
    margin-left: 0px;
    margin-top: 42px;
  }
}
</style>
