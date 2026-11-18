<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

useHead({
  htmlAttrs: {
    lang: 'pl'
  }
})

useSeoMeta({
  title: props.error.statusCode === 404 ? 'Nie znaleziono strony - GearFlow' : 'Wystąpił błąd - GearFlow',
  description: 'Przepraszamy, ale wystąpił problem podczas ładowania strony.'
})

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <UApp>
    <div class="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white dark:bg-zinc-950">
      <UBadge color="primary" variant="subtle" size="lg" class="mb-4 font-mono">
        Błąd {{ error.statusCode }}
      </UBadge>

      <h1 class="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3">
        {{ error.statusCode === 404 ? 'Strona nie została znaleziona' : 'Coś poszło nie tak' }}
      </h1>

      <p class="text-zinc-500 dark:text-zinc-400 max-w-md mb-8">
        {{
          error.statusCode === 404
            ? 'Podany adres nie istnieje lub został przeniesiony. Wróć na stronę główną GearFlow, aby umówić wizytę lub sprawdzić status naprawy.'
            : error.message || 'Wystąpił nieoczekiwany błąd serwera.'
        }}
      </p>

      <div class="flex gap-3">
        <UButton color="primary" size="lg" icon="i-lucide-home" @click="handleClearError">
          Wróć na stronę główną
        </UButton>
      </div>
    </div>
  </UApp>
</template>
