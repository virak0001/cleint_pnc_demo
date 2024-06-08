<script setup lang="ts">
import WebHeaderMenu from '@/components/WebHeaderMenu.vue'
</script>
<template>
  <WebHeaderMenu />
  <div class="md:px-50 pt-10 h-full">
    <div class="rounded-lg h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
