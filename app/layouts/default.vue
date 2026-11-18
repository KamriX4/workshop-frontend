<script setup lang="ts">
const isMobileMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-(--ui-bg) text-(--ui-text)">
    <!-- Górny pasek nawigacji -->
    <header class="sticky top-0 z-50 border-b bg-(--ui-bg)/80 border-(--ui-border) backdrop-blur">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-6">
          <!-- Logo GearFlow -->
          <NuxtLink to="/" class="flex items-center gap-2.5 font-bold text-xl tracking-tight">
            <div class="w-8 h-8 rounded-lg bg-fire-500 flex items-center justify-center text-white">
              <UIcon name="i-lucide-wrench" class="w-5 h-5" />
            </div>
            <span class="inline-flex">
              <span>Gear</span>
              <span class="text-fire-500">Flow</span>
            </span>
          </NuxtLink>

          <!-- Menu główne (Desktop) -->
          <nav class="hidden md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 items-center gap-1">
            <UButton to="/#uslugi" color="neutral" variant="ghost">Usługi</UButton>
            <UButton to="/#jak-to-dziala" color="neutral" variant="ghost">Jak to działa</UButton>
            <UButton to="/status" color="neutral" variant="ghost">Sprawdź status</UButton>
            <UButton to="/kontakt" color="neutral" variant="ghost">Kontakt</UButton>
          </nav>
        </div>

        <!-- Akcje po prawej -->
        <div class="flex items-center gap-1 sm:gap-2 shrink-0">
          <!-- Przełącznik Light / Dark mode -->
          <UButton
            color="neutral"
            variant="ghost"
            aria-label="Przełącz motyw"
            @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
          >
            <UIcon name="i-lucide-moon" class="w-5 h-5 dark:hidden" />
            <UIcon name="i-lucide-sun" class="w-5 h-5 hidden dark:block" />
          </UButton>

          <UButton
            to="/logowanie"
            color="neutral"
            variant="outline"
            icon="i-lucide-user"
            aria-label="Strefa Klienta"
            class="bg-(--ui-bg-accented)/70 hover:bg-(--ui-bg-accented) text-(--ui-text)"
          >
            <span class="hidden sm:inline">Strefa Klienta</span>
          </UButton>

          <UButton to="/rezerwacja" color="primary" icon="i-lucide-calendar-plus" class="font-semibold">
            <span class="hidden sm:inline">Umów wizytę</span>
            <span class="sm:hidden">Wizyta</span>
          </UButton>

          <!-- Przycisk otwierający menu mobilne (tylko poniżej md) -->
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-menu"
            class="md:hidden"
            aria-label="Otwórz menu"
            @click="isMobileMenuOpen = true"
          />
        </div>
      </div>
    </header>

    <!-- Wysuwane menu mobilne (Slideover) -->
    <USlideover v-model:open="isMobileMenuOpen" title="Menu" side="right">
      <template #body>
        <div class="flex flex-col gap-2">
          <UButton
            to="/#uslugi"
            color="neutral"
            variant="ghost"
            size="lg"
            icon="i-lucide-wrench"
            class="justify-start"
            @click="isMobileMenuOpen = false"
          >
            Usługi
          </UButton>

          <UButton
            to="/#jak-to-dziala"
            color="neutral"
            variant="ghost"
            size="lg"
            icon="i-lucide-info"
            class="justify-start"
            @click="isMobileMenuOpen = false"
          >
            Jak to działa
          </UButton>

          <UButton
            to="/status"
            color="neutral"
            variant="ghost"
            size="lg"
            icon="i-lucide-search"
            class="justify-start"
            @click="isMobileMenuOpen = false"
          >
            Sprawdź status
          </UButton>

          <UButton
            to="/kontakt"
            color="neutral"
            variant="ghost"
            size="lg"
            icon="i-lucide-mail"
            class="justify-start"
            @click="isMobileMenuOpen = false"
          >
            Kontakt
          </UButton>

          <USeparator class="my-3" />

          <!-- Strefa Klienta i Umów wizytę w menu mobilnym -->
          <UButton
            to="/logowanie"
            color="neutral"
            variant="outline"
            size="lg"
            icon="i-lucide-user"
            class="justify-center bg-(--ui-bg-accented)/70 text-(--ui-text)"
            @click="isMobileMenuOpen = false"
          >
            Strefa Klienta
          </UButton>

          <UButton
            to="/rezerwacja"
            color="primary"
            size="lg"
            icon="i-lucide-calendar-plus"
            class="justify-center font-semibold mt-1"
            @click="isMobileMenuOpen = false"
          >
            Umów wizytę
          </UButton>
        </div>
      </template>
    </USlideover>

    <!-- Główna treść strony -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Stopka -->
    <footer class="border-t bg-(--ui-bg-muted) border-(--ui-border) py-10 mt-16">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-sm text-(--ui-text-muted)"
      >
        <!-- Lewa kolumna: Logo -->
        <div class="flex items-center justify-center md:justify-start gap-2 font-semibold text-(--ui-text)">
          <UIcon name="i-lucide-wrench" class="w-4 h-4 text-fire-500" />
          <span>GearFlow Auto Service</span>
        </div>

        <!-- Środkowa kolumna: Prawa zastrzeżone -->
        <p class="text-center">&copy; {{ new Date().getFullYear() }} GearFlow. Wszelkie prawa zastrzeżone.</p>

        <!-- Prawa kolumna: Linki jeden pod drugim -->
        <div class="flex flex-col items-center md:items-end gap-2">
          <NuxtLink to="/rezerwacja" class="hover:text-(--ui-primary) transition">Zgłoś usterkę</NuxtLink>
          <NuxtLink to="/kontakt" class="hover:text-(--ui-primary) transition">Formularz kontaktowy</NuxtLink>
          <NuxtLink to="/panel" class="hover:text-(--ui-primary) transition">Panel pracownika</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
