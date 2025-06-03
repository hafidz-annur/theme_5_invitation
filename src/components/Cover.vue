<script setup>
const props = defineProps({ name: String, data: Object });

const emits = defineEmits(["selected"]);
const openInvitation = () => {
  emits("selected", "Pembukaan");
};
</script>
<template>
  <v-container height="100dvh" class="relative p-0 overflow-hidden">
    <v-carousel
      height="100dvh"
      :show-arrows="false"
      :cycle="true"
      :interval="7000"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item, i) in props.data?.foto_cover"
        :key="i"
        :src="item"
        height="100dvh"
        cover
      />
    </v-carousel>

    <div
      class="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm"
    >
      <div
        class="absolute inset-0 flex flex-col justify-end pb-16 items-center text-white font-serif"
      >
        <p class="text-lg tracking-widest">You're Invited To</p>
        <h1 class="text-4xl font-bold mb-2">
          {{ props.data?.mempelai.pria.nama_panggilan }} &
          {{ props.data?.mempelai.wanita.nama_panggilan }}
        </h1>
        <p class="text-sm italic mb-4">The Wedding Ceremony</p>
        <v-card
          variant="tonal"
          color="secondary"
          class="px-6 py-2 mb-2 rounded-md shadow-md"
        >
          <p class="text-center text-[16px] text-white">{{ props.name || "Tamu Undangan" }}</p>
        </v-card>
        <small>Mohon maaf apabila ada keselahan dalam penulisan nama/gelar.</small>
        <v-btn
          @click="openInvitation"
          color="primary"
          size="small"
          class="mt-3"
          prepend-icon="mdi-email-open-heart-outline"
        >
          Buka Undangan
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
