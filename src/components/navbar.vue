<template>
  <div>
    <nav>
      <div class="w-full bg-slate-900">
        <div class="max-w-screen-xl mx-auto">
          <div
            class="w-full flex items-center justify-between px-5 pb-5 pt-6 select-none"
          >
            <router-link to="/">
              <img src="../assets/logo.png" class="h-8 select-none" alt="logo" />
            </router-link>
            <ul
              class="text-white font-semibold text-sm lg:inline-flex tracking-wide space-x-8 cursor-pointer hidden"
            >
              <router-link
                to="/courses"
                class="px-2 hover:text-blue-500 border-b-0 duration-200 border-blue-500 hover:border-b transform"
                :class="[this.$route.name == 'courses' ? 'text-blue-500' : 'text-white']"
              >
                Courses
              </router-link>
              <li>
                <div class="text-center">
                  <div class="relative inline-block text-left group">
                    <router-link
                      to="/campusclub"
                      class="flex items-center rounded bg-blue px-5 text-sm font-semibold text-white hover:text-blue-500 hover:underline"
                    >
                      Campus Club
                      <span class="pl-2">
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          class="fill-current"
                        >
                          <path
                            d="M0.564864 0.879232C0.564864 0.808624 0.600168 0.720364 0.653125 0.667408C0.776689 0.543843 0.970861 0.543844 1.09443 0.649756L5.82517 5.09807C5.91343 5.18633 6.07229 5.18633 6.17821 5.09807L10.9089 0.649756C11.0325 0.526192 11.2267 0.543844 11.3502 0.667408C11.4738 0.790972 11.4562 0.985145 11.3326 1.10871L6.60185 5.55702C6.26647 5.85711 5.73691 5.85711 5.41917 5.55702L0.670776 1.10871C0.600168 1.0381 0.564864 0.967492 0.564864 0.879232Z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.4719 0.229332L6.00169 4.48868L10.5171 0.24288C10.9015 -0.133119 11.4504 -0.0312785 11.7497 0.267983C12.1344 0.652758 12.0332 1.2069 11.732 1.50812L11.7197 1.52041L6.97862 5.9781C6.43509 6.46442 5.57339 6.47872 5.03222 5.96853C5.03192 5.96825 5.03252 5.96881 5.03222 5.96853L0.271144 1.50833C0.123314 1.3605 -5.04223e-08 1.15353 -3.84322e-08 0.879226C-2.88721e-08 0.660517 0.0936127 0.428074 0.253705 0.267982C0.593641 -0.0719548 1.12269 -0.0699964 1.46204 0.220873L1.4719 0.229332ZM5.41917 5.55702C5.73691 5.85711 6.26647 5.85711 6.60185 5.55702L11.3326 1.10871C11.4562 0.985145 11.4738 0.790972 11.3502 0.667408C11.2267 0.543844 11.0325 0.526192 10.9089 0.649756L6.17821 5.09807C6.07229 5.18633 5.91343 5.18633 5.82517 5.09807L1.09443 0.649756C0.970861 0.543844 0.776689 0.543843 0.653125 0.667408C0.600168 0.720364 0.564864 0.808624 0.564864 0.879232C0.564864 0.967492 0.600168 1.0381 0.670776 1.10871L5.41917 5.55702Z"
                          />
                        </svg>
                      </span>
                    </router-link>
                    <div
                      class="absolute left-0 z-40 mt-2 w-[200px] rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all ease-linear duration-200 delay-200"
                    >
                      <a
                        href="/GetHired"
                        class="block py-2 px-5 text-base font-semibold text-gray-500 hover:bg-blue hover:bg-opacity-5 hover:text-blue-500"
                      >
                        Get Hired
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="text-center">
                  <div class="relative inline-block text-left group">
                    <button
                      class="flex items-center rounded bg-blue px-5 text-sm font-semibold text-white hover:text-blue-500 hover:underline"
                    >
                      Company
                      <span class="pl-2">
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          class="fill-current"
                        >
                          <path
                            d="M0.564864 0.879232C0.564864 0.808624 0.600168 0.720364 0.653125 0.667408C0.776689 0.543843 0.970861 0.543844 1.09443 0.649756L5.82517 5.09807C5.91343 5.18633 6.07229 5.18633 6.17821 5.09807L10.9089 0.649756C11.0325 0.526192 11.2267 0.543844 11.3502 0.667408C11.4738 0.790972 11.4562 0.985145 11.3326 1.10871L6.60185 5.55702C6.26647 5.85711 5.73691 5.85711 5.41917 5.55702L0.670776 1.10871C0.600168 1.0381 0.564864 0.967492 0.564864 0.879232Z"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.4719 0.229332L6.00169 4.48868L10.5171 0.24288C10.9015 -0.133119 11.4504 -0.0312785 11.7497 0.267983C12.1344 0.652758 12.0332 1.2069 11.732 1.50812L11.7197 1.52041L6.97862 5.9781C6.43509 6.46442 5.57339 6.47872 5.03222 5.96853C5.03192 5.96825 5.03252 5.96881 5.03222 5.96853L0.271144 1.50833C0.123314 1.3605 -5.04223e-08 1.15353 -3.84322e-08 0.879226C-2.88721e-08 0.660517 0.0936127 0.428074 0.253705 0.267982C0.593641 -0.0719548 1.12269 -0.0699964 1.46204 0.220873L1.4719 0.229332ZM5.41917 5.55702C5.73691 5.85711 6.26647 5.85711 6.60185 5.55702L11.3326 1.10871C11.4562 0.985145 11.4738 0.790972 11.3502 0.667408C11.2267 0.543844 11.0325 0.526192 10.9089 0.649756L6.17821 5.09807C6.07229 5.18633 5.91343 5.18633 5.82517 5.09807L1.09443 0.649756C0.970861 0.543844 0.776689 0.543843 0.653125 0.667408C0.600168 0.720364 0.564864 0.808624 0.564864 0.879232C0.564864 0.967492 0.600168 1.0381 0.670776 1.10871L5.41917 5.55702Z"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      class="absolute left-0 z-40 mt-2 w-[200px] rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all ease-linear duration-200 delay-200"
                    >
                      <a
                        href="/about"
                        class="block py-2 px-5 text-base font-semibold text-gray-500 hover:bg-blue hover:bg-opacity-5 hover:text-blue-500"
                      >
                        About Us
                      </a>
                      <a
                        href="/expressSocial"
                        class="block py-2 px-5 text-base font-semibold text-gray-500 hover:bg-blue hover:bg-opacity-5 hover:text-blue-500"
                      >
                        Express Social
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="block py-2 px-5 hidden text-base font-semibold text-gray-500 hover:bg-blue hover:bg-opacity-5 hover:text-blue-500"
                      >
                        News and events
                      </a>
                      <a
                        href="/digitizing-TVET"
                        class="block py-2 px-5 text-base font-semibold text-gray-500 hover:bg-blue hover:bg-opacity-5 hover:text-blue-500"
                      >
                        Digitizing TVET
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="block py-2 hidden px-5 text-base font-semibold text-gray-500 hover:bg-blue hover:bg-opacity-5 hover:text-blue-500"
                      >
                        Digital Trainers Hub
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="flex items-center">
              <router-link
                to="/contact"
                class="text-white uppercase tracking-wider font-normal text-sm px-5 py-3 hidden lg:block bg-blue-600 tracking-narmal transform"
              >
                Get in touch
              </router-link>
              <button @click="modal = true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-auto text-white border border-white lg:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="fixed z-40 inset-0 overflow-y-auto lg:hidden"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-if="modal"
      >
        <div
          class="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <!--
      Background overlay, show/hide based on modal state.
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
          <div
            class="fixed inset-0 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-top sm:h-screen" aria-hidden="true"
            >&#8203;</span
          >

          <!--
      Modal panel, show/hide based on modal state.
      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
          <div
            class="inline-block align-bottom w-full bg-white text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div class="relative bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="absolute top-0 right-0 p-5" @click="modal = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3
                class="text-lg leading-6 font-bold text-blue-800 text-center uppercase mt-10"
              >
                Menu
              </h3>
              <div class="mt-5">
                <div class="flex flex-col space-y-5 text-center text-lg font-medium">
                  <router-link to="/courses">Courses</router-link>

                  <router-link to="/campusclub">Campus Club</router-link>
                  <router-link to="/GetHired">Get Hired</router-link>

                  <div>
                    <div class="w-full">
                      <button
                        class="w-full space-x-4 flex font-medium items-center justify-center"
                        @click="submenu = !submenu"
                      >
                        Company
                        <span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            /></svg
                        ></span>
                      </button>
                      <div
                        class="text-blue-600 mt-5 transition flex flex-col space-y-2"
                        v-if="submenu"
                      >
                        <router-link to="/about">About Us</router-link>
                        <router-link to="/expressSocial">Express Social</router-link>
                        <router-link to="/digitizing-TVET"> DIgitizing TVET </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <router-link
                to="/contact"
                class="w-full rounded-md uppercase flex justify-center py-4 bg-blue-600 text-lg font-normal text-white hover:bg-blue-900"
              >
                Get in touch
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      submenu: false,
      navmenu: false,
      navmenu2: false,
    };
  },
  methods: {
    gohome: function () {
      $router.push("/");
    },
  },
};
</script>
