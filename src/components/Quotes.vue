<script setup>
const props = defineProps({ quote: Object, data: Object });
</script>
<template>
  <v-container class="relative p-0 h-[100dvh] overflow-hidden">
    <img
      :src="props.data?.foto_opening[7]"
      class="w-full h-[100dvh] object-cover"
    />
    <div
      class="absolute left-0 top-0 flex items-center h-[100dvh] justify-center bg-black/40 backdrop-blur-sm px-10 z-[2]"
    >
      <div class="text-center" data-aos="zoom-in" data-aos-delay="500">
        <p class="text-[14px] text-white">
          {{ props.quote?.islam[0].quote }}
        </p>
        <h3 class="text-lg mt-3">
          {{ props.quote?.islam[0].sumber }}
        </h3>
      </div>
    </div>
  </v-container>
</template>
