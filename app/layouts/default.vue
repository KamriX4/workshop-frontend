<template>
  <div class="min-h-screen flex flex-col bg-(--ui-bg) text-(--ui-text)">
    <!-- Górny pasek nawigacji -->
    <header class="sticky top-0 z-50 border-b bg-(--ui-bg)/80 border-(--ui-border) backdrop-blur">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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
        <nav class="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center gap-1">
          <UButton to="/#uslugi" color="neutral" variant="ghost">Usługi</UButton>
          <UButton to="/#jak-to-dziala" color="neutral" variant="ghost">Jak to działa</UButton>
          <UButton to="/status" color="neutral" variant="ghost">Sprawdź status</UButton>
          <UButton to="/kontakt" color="neutral" variant="ghost">Kontakt</UButton>
        </nav>

        <!-- Akcje po prawej -->
        <div class="flex items-center gap-2">
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
            variant="ghost"
            class="hidden sm:inline-flex bg-(--ui-bg-accented)/70 hover:bg-(--ui-bg-accented) text-(--ui-text)"
          >
            Strefa Klienta
          </UButton>

          <UButton to="/rezerwacja" color="primary" icon="i-lucide-calendar-plus" class="font-semibold">
            Umów wizytę
          </UButton>
        </div>
      </div>
    </header>

    <!-- Główna treść strony -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Stopka -->
    <footer class="border-t bg-(--ui-bg-muted) border-(--ui-border) py-10 mt-16">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-(--ui-text-muted)"
      >
        <div class="flex items-center gap-2 font-semibold text-(--ui-text)">
          <UIcon name="i-lucide-wrench" class="w-4 h-4 text-fire-500" />
          <span>GearFlow Auto Service</span>
        </div>
        <div class="flex gap-6">
          <NuxtLink to="/rezerwacja" class="hover:text-fire-500 transition">Zgłoś usterkę</NuxtLink>
          <NuxtLink to="/kontakt" class="hover:text-fire-500 transition">Formularz kontaktowy</NuxtLink>
          <NuxtLink to="/panel" class="hover:text-fire-500 transition">Panel pracownika</NuxtLink>
        </div>
        <p>&copy; {{ new Date().getFullYear() }} GearFlow. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  </div>
</template>
