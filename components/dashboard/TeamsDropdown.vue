<script setup lang="ts">
const workspaces = [{
  label: 'Nuxt',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/23360933?s=200&v=4'
  },
  click: () => {
    workspace.value = workspaces[0]
  }
}, {
  label: 'NuxtLabs',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/62017400?s=200&v=4'
  },
  click: () => {
    workspace.value = workspaces[1]
  }
}]

const actions = [{
  label: 'Create workspace',
  icon: 'i-heroicons-plus-circle'
}, {
  label: 'Manage workspaces',
  icon: 'i-heroicons-cog-8-tooth'
}]

const workspace = ref(workspaces[0])
</script>

<template>
  <UDropdown
    v-slot="{ open }"
    mode="hover"
    :items="[workspaces, actions]"
    class="w-full"
    :ui="{ width: 'w-full' }"
    :popper="{ strategy: 'absolute' }"
  >
    <UButton
      color="gray"
      variant="ghost"
      :class="[open && 'bg-gray-50 dark:bg-gray-800']"
      class="w-full"
    >
      <UAvatar
        :src="workspace.avatar.src"
        size="2xs"
      />

      <span class="truncate text-gray-900 dark:text-white font-semibold">{{ workspace.label }}</span>
    </UButton>
  </UDropdown>
</template>
