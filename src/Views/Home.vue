<template>
  <div v-if="loaded.webinar && loaded.details && loaded.points">
    <Navbar />
    <HeroSection :webinar="webinar.details" :speakers="webinar.speakers" />
    <ContentWebinar
      :webinar="webinar.details"
      :speakers="webinar.speakers"
      :points="webinar.points"
    />
    <Speakers :speakers="webinar.speakers" />
    <Foote></Foote>
  </div>
  <div v-else class="w-screen h-screen flex flex-col items-center justify-center">
    <lottie-player
      src="https://assets8.lottiefiles.com/packages/lf20_dkz94xcg.json"
      background="transparent"
      speed="1"
      class="h-32 w-auto"
      loop
      autoplay
    ></lottie-player>

    <p class="text-sm font-semibold text-gray-700 leading-6 text-center mt-2">
      loading Webinar ...
    </p>
  </div>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import HeroSection from "../components/heroSection.vue";
import ContentWebinar from "../components/content-webinar.vue";
import Foote from "../components/foote.vue";

import axios from "axios";
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Speakers from "../components/speakers.vue";

const webinar = reactive({ details: {}, speakers: [], points: [] });
const loaded = reactive({ webinar: false, details: false, points: false });

onMounted(() => {
  axios
    .get("https://resources.eazzysocial.blog/webinar_details", {
      Headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      webinar.details = res.data.items[0];
      loaded.webinar = true;
      //console.log(webinar.details);
    });

  axios
    .get("https://resources.eazzysocial.blog/speakers", {
      Headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      webinar.speakers = res.data.items;
      loaded.details = true;
      //console.log(webinar.speakers);
    });
  axios
    .get("https://resources.eazzysocial.blog/points", {
      Headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      webinar.points = res.data.items;
      loaded.points = true;
      //console.log(webinar.points);
    });
});
</script>
