<!-- src/components/HeaderMenu.vue -->
<template>
  <header class="text-white px-50 py-3 bg-white flex justify-between items-center">
    <div class="flex items-center text-black font-bold">
      <Icon icon="skill-icons:devto-dark" style="font-size: 45px" />
      <div class="ml-5 flex font-semibold">
        <div class="p-3 rounded hover:text-blue cursor-pointer">User</div>
        <div class="p-3 rounded hover:text-blue cursor-pointer">Role</div>
        <div class="p-3 rounded hover:text-blue cursor-pointer">Permission</div>
      </div>
    </div>
    <nav :class="['flex', 'items-center', { hidden: !isMenuOpen, 'flex-col': isMenuOpen }]">
      <ul class="flex space-x-4 text-black">
        <Icon icon="pepicons-pencil:person-circle" style="font-size: 32px" />
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
