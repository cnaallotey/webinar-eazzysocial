<script setup>
import { reactive, ref } from "@vue/reactivity";
import moment from "moment";

const props = defineProps({
  webinar: Object,
  points: Array,
});

import axios from "axios";
import Error from "./error.vue";

const submitted = ref(false);
const error = ref(false);

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  employed: "",
  profession: "",
  location: "",
  contact: "",
  whatsapp: "",
});

const token = "JN7nKqBECZ";

const submitForm = async (x) => {
  const response = await axios.post(
    `https://app.headlessforms.cloud/api/v1/form-submission/${token}`,
    { ...x }
  );
  if (response.status == 200) {
    submitted.value = true;
  } else {
    error.value = true;
    setTimeout(() => {
      error.value = false;
    }, 2000);
  }
};
</script>

<template>
  <div>
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto px-4">
        <div class="w-full grid grid-cols-3 gap-y-10">
          <Error v-if="error" />
          <div class="col-span-3 lg:col-span-2 order-2 lg:order-1">
            <h2
              class="text-2xl font-bold leading-7 text-left text-gray-900 sm:text-3xl sm:tracking-tight sm:truncate mt-20"
            >
              Details
            </h2>
            <p class="text-xl font-semibold text-gray-900 hidden">
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
            <div
              class="w-full h-full flex flex-col items-center justify-center p-4"
              v-if="submitted"
            >
              <img
                src="../assets/check.png"
                class="w-40 h-auto mx-auto animate-bounce"
                alt=""
              />
              <p class="font-semibold text-2xl text-gray-900 my-4 text-center">
                Registration Successful
              </p>
              <p class="text-sm font-normal text-gray-600 text-center leading-5">
                Thank you for your registration. Sit back and relax. Our representative
                will contact you for confirmation and provide further details.
              </p>
            </div>
            <form action="submit" @submit.prevent="submitForm(form)" v-else>
              <div class="p-4">
                <label for="name">First name</label
                ><input
                  type="text"
                  required
                  v-model="form.firstName"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="name">Last name</label
                ><input
                  type="text"
                  required
                  v-model="form.lastName"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="email">Email</label
                ><input
                  type="email"
                  v-model="form.email"
                  required
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="company">Are your currently employed?</label
                ><select
                  name="company"
                  id=""
                  v-model="form.employed"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4 bg-white"
                  required
                >
                  <option value="" selected>Choose one</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
                <label for="company">Profession</label
                ><input
                  type="text"
                  v-model="form.profession"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="Country">Location/City</label
                ><input
                  type="text"
                  required
                  v-model="form.location"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="contact">Contact Number</label
                ><input
                  type="tel"
                  v-model="form.contact"
                  required
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
                <label for="whatsapp">Whatsapp Number</label
                ><input
                  type="tel"
                  v-model="form.whatsapp"
                  class="w-full border border-gray-300 rounded p-2 text-sm font-normal mt-1 mb-4"
                />
              </div>
              <button
                type="submit"
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
