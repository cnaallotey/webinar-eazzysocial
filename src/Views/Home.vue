<template>
  <div>
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

onMounted(() => {
  axios
    .get("/webinar_details", {
      Headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      webinar.details = res.data.items[0];
      console.log(webinar.details);
    });

  axios
    .get("/speakers", {
      Headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      webinar.speakers = res.data.items;
      console.log(webinar.speakers);
    });
  axios
    .get("/points", {
      Headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      webinar.points = res.data.items;
      console.log(webinar.points);
    });
});
</script>
