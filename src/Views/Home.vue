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
  <div v-else class="w-screen h-screen flex items-center justify-center">
    <img src="../assets/lgofull.png" class="h-12 animate-bounce" alt="" />
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
      console.log(webinar.details);
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
      console.log(webinar.speakers);
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
      console.log(webinar.points);
    });
});
</script>
