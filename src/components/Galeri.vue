<script setup>
import { ref } from "vue";
const props = defineProps({ data: Object });
</script>
<template>
  <v-container class="overflow-auto p-0">
    <div
      class="relative bg-white overflow-auto p-5 h-[100dvh] flex w-100 items-center"
    >
      <div>
        <h2 class="text-center text-primary text-2xl mb-5">Moment Kami</h2>

        <Splide
          :options="{
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 2000,
            pagination: true,
            arrows: false,
            gap: 10,
            pauseOnHover: false,
          }"
          class="mb-5"
        >
          <SplideSlide v-for="item in props.data?.foto_opening" :key="item">
            <img
              :src="item"
              alt="Amantrana"
              class="w-full h-[55dvh] object-cover"
            />
          </SplideSlide>
        </Splide>

        <Splide
          :options="{
            type: 'loop',
            perPage: 3,
            autoplay: true,
            interval: 2000,
            pagination: false,
            arrows: false,
            gap: 10,
            pauseOnHover: false,
          }"
          class=""
        >
          <SplideSlide v-for="item in props.data?.foto_opening" :key="item">
            <img
              :src="item"
              alt="Amantrana"
              class="w-full h-[150px] object-cover"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </v-container>
</template>
