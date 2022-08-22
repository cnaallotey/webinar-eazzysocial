<script setup>
import moment from "moment";
const props = defineProps({
  webinar: Object,
  points: Array,
});
</script>

<template>
  <div>
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto px-4">
        <div class="w-full grid grid-cols-3">
          <div class="col-span-3 lg:col-span-2 order-2 lg:order-1">
            <h2
              class="text-2xl font-bold leading-7 text-left text-gray-900 sm:text-3xl sm:tracking-tight sm:truncate mt-20"
            >
              Details
            </h2>
            <p class="text-xl font-semibold text-gray-900">
              {{
                moment(webinar["date-and-timeof-webinar"]).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )
              }}
            </p>
            <p class="text-base font-normal text-gray-700 leading-6 mt-5 max-w-2xl">
              {{ webinar["details-2"] }}
            </p>
            <div class="mt-10">
              <h2
                class="text-2xl font-bold leading-7 text-left text-gray-900 sm:text-3xl sm:tracking-tight sm:truncate mt-20"
              >
                Things you will learn
              </h2>
              <div
                class="mt-5 flex items-center space-x-2"
                v-for="point in props.points"
                :key="point.id"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="text-xl font-semibold text-gray-900">{{ point.name }}</p>
              </div>
            </div>
          </div>
          <div
            class="w-fill col-span-3 lg:col-span-1 border border-gray-200 order-2 lg:order-2"
          >
            <div class="w-full p-4 bg-blue-900">
              <p class="text-xl font-bold text-white leading-6 text-center">
                Please complete this form to register
              </p>
            </div>
            <form action="submit">
              <div class="p-4">
                <label for="name">First name</label
                ><input
                  type="text"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="name">Last name</label
                ><input
                  type="text"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="email">Email</label
                ><input
                  type="email"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="company">Profession</label
                ><input
                  type="text"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="Country">Country</label
                ><input
                  type="text"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="contact">Contact Number</label
                ><input
                  type="tel"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="whatsapp">Whatsapp Number</label
                ><input
                  type="tel"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
              </div>
              <button
                class="py-3 w-full text-center bg-blue-500 text-sm font-semibold text-white hover:bg-blue-600"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
