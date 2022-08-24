<script setup>
import moment from "moment";

const props = defineProps({
  webinar: Object,
  speakers: Array,
});
</script>

<template>
  <div>
    <section class="skewed-bottom-right">
      <div class="bg-blue-600 radius-for-skewed">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 -mx-4">
            <div class="w-full px-4 py-10 lg:py-20 flex items-center">
              <div class="w-full text-center lg:text-left">
                <p class="text-lg uppercase text-white font-normal tracking-wide mb-5">
                  WEBINAR
                </p>
                <div class="max-w-3xl mx-auto lg:mx-0 text-white">
                  <h2 class="mb-3 text-4xl lg:text-5xl text-white font-bold">
                    {{ webinar.name }}
                  </h2>
                </div>
                <div class="max-w-3xl mx-auto lg:mx-0 mt-8">
                  <div
                    class="mb-6 flex flex-col md:flex-row items-center w-fit mx-auto lg:mx-0"
                  >
                    <p
                      class="text-white uppercase tracking-wide leading-loose bg-orange-600 px-3 py-1 w-full md:w-auto"
                    >
                      Upcoming Live
                    </p>
                    <p
                      class="text-gray-900 uppercase tracking-wide leading-loose bg-white px-2 py-1"
                    >
                      {{
                        moment(webinar["date-and-timeof-webinar"]).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )
                      }}
                    </p>
                  </div>
                  <p class="text-base font-semibold text-white leading-5">
                    Speaker{{ speakers.length > 0 ? "s" : "" }}
                  </p>
                  <div class="w-full grid grid-cols-1 md:grid-cols-2 mt-2 gap-y-3">
                    <div
                      class="flex flex-col items-center lg:items-start space-y-3 w-full"
                      v-for="speaker in speakers"
                      :key="speaker.id"
                    >
                      <div
                        class="w-[64px] h-[64px] rounded-full bg-white overflow-hidden"
                      >
                        <img
                          :src="speaker['speaker-image'].url"
                          class="w-full h-full object-cover object-center"
                          alt=""
                        />
                      </div>
                      <div class="">
                        <p class="text-lg font-normal text-gray-800">
                          {{ speaker.name }}
                        </p>
                        <p class="text-lg font-normal text-gray-800 italic">
                          {{ speaker["role"] }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full h-full overflow-hidden">
              <div class="relative h-full w-full" style="z-index: 0">
                <img
                  class="h-full w-full object-cover"
                  :src="webinar['banner-image']['url']"
                  alt=""
                />
                <!-- <img
                  class="hidden md:block absolute"
                  style="top: -2rem; right: 3rem; z-index: -1"
                  src="atis-assets/elements/blue-up.svg"
                  alt=""
                />
                <img
                  class="hidden md:block absolute"
                  style="bottom: -2rem; right: -2rem; z-index: -1"
                  src="atis-assets/elements/wing-blue-down.svg"
                  alt=""
                />
                <img
                  class="hidden md:block absolute"
                  style="top: 3rem; right: -3rem; z-index: -1"
                  src="atis-assets/elements/bullets-blue-right.svg"
                  alt=""
                />
                <img
                  class="hidden md:block absolute"
                  style="bottom: 2.5rem; left: -4.5rem; z-index: -1"
                  src="atis-assets/elements/bullets-blue-left.svg"
                  alt=""
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-blue-600"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
    </section>
  </div>
</template>
