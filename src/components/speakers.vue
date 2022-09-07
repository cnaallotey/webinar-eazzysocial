<template>
  <div>
    <section class="relative pt-10 pb-10 overflow-hidden">
      <div class="container max-w-screen-lg mx-auto px-4">
        <h2
          class="text-2xl font-bold leading-7 text-center text-gray-900 sm:text-3xl sm:tracking-tight sm:truncate mt-20"
        >
          Our speaker{{ props.speakers.length > 1 ? "s" : "" }}
        </h2>
        <p class="mb-10 text-base max-w-md mx-auto text-center text-gray-600">
          Know more about the Speaker{{ props.speakers.length > 1 ? "s" : "" }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div
            class="w-full place-content-center lg:place-content-start col-span-2 md:col-span-1 md:p-7"
            v-for="speaker in props.speakers"
            :key="speaker.id"
          >
            <div class="flex flex-wrap -m-3.5">
              <div class="w-auto p-3.5">
                <div class="h-16 w-16 lg:w-32 lg:h-32 rounded-full overflow-hidden">
                  <img
                    :src="speaker['speaker-image'].url"
                    class="w-full h-full object-cover object-center"
                    :alt="speaker.name"
                  />
                </div>
              </div>
              <div class="flex-1 p-3.5">
                <p class="mb-6 text-lg text-gray-700">
                  {{ speaker["speaker-info"] }}
                </p>
                <h3 class="font-heading font-bold text-lg text-gray-900">
                  {{ speaker.name }}, {{ speaker.role }}
                </h3>
                <div class="flex items-center w-fit mt-3 space-x-2">
                  <img src="../assets/linkedin.png" class="w-7 h-7" alt="linkedin" />
                  <a
                    :href="speaker['profile-link']"
                    target="_blank"
                    class="text-gray-700 font-normal text-base"
                    >{{ speaker["linkedin-profile"] }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  speakers: Array,
});
</script>
