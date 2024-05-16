<script setup lang="ts">
import { ref } from 'vue';
import type { NavItem } from '@nuxt/content/dist/runtime/types';

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]));

const links = [
  {
    label: 'Products',
    items: [
      [{ label: 'Project 1', to: '/products/project1' }],
      [{ label: 'Project 2', to: '/products/project2' }],
      [{ label: 'Project 3', to: '/products/project3' }],
    ]
  },
  {
    label: 'Pricing',
    to: '/pricing'
  },
  {
    label: 'Documentation',
    to: '/docs'
  },
  {
    label: 'Blog',
    to: '/blog'
  },
];
</script>

<template>
  <UHeader>
    <template #logo>
      <div class="flex items-center space-x-2">
        <img src="" alt="Logo" class="h-8" />
        <UBadge label="SaaS" variant="subtle" class="mb-0.5" />
      </div>
    </template>

    <template #center>
      <div class="flex space-x-4">
        <template v-for="link in links" :key="link.label">
          <div v-if="link.items">

            <UDropdown mode="hover" :items="link.items.map(group => group.map(item => ({
              ...item,
              to: undefined,
              click: () => $router.push(item.to)
            })) )" :popper="{ placement: 'bottom-start' }">
              <UButton square variant="ghost" color="white" :label="link.label" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
          </div>
          <div v-else>
            <UButton square variant="ghost" color="white" :to="link.to" :label="link.label" />
          </div>
        </template>
      </div>
    </template>

    <template #right>
      <UButton
        label="Log in"
        color="gray"
        to="/login"

      />
      <UButton
        label="Sign up"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="black"
        to="/signup"
      />
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      />
    </template>
  </UHeader>
</template>

<style scoped>
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.space-x-2 > * + * {
  margin-left: 0.5rem;
}

.space-x-4 > * + * {
  margin-left: 1rem;
}

.h-8 {
  height: 2rem;
}

.u-link {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
}

.u-link:hover {
  text-decoration: underline;
}
</style>
