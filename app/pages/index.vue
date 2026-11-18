<script setup lang="ts">
useSeoMeta({
  title: 'Nowoczesny serwis samochodowy online'
})

const services = [
  {
    title: 'Przeglądy okresowe i olejowe',
    description:
      'Wymiana oleju, filtrów i płynów eksploatacyjnych z pełnym wpisem do cyfrowej książki serwisowej.',
    icon: 'i-lucide-droplets'
  },
  {
    title: 'Układ hamulcowy i zawieszenie',
    description:
      'Diagnostyka luzów, wymiana tarcz, klocków, amortyzatorów i ustawianie geometrii kół.',
    icon: 'i-lucide-disc'
  },
  {
    title: 'Diagnostyka komputerowa',
    description:
      'Odczyt błędów sterowników, diagnostyka układu wtryskowego, DPF oraz elektroniki pojazdu.',
    icon: 'i-lucide-cpu'
  },
  {
    title: 'Mechanika silnikowa i rozrządy',
    description:
      'Kompleksowa wymiana rozrządów, sprzęgieł, dwumas oraz naprawy osprzętu silnika.',
    icon: 'i-lucide-cog'
  },
  {
    title: 'Serwis klimatyzacji',
    description:
      'Napełnianie czynnikiem, sprawdzanie szczelności azotem oraz ozonowanie wnętrza.',
    icon: 'i-lucide-wind'
  },
  {
    title: 'Przegląd przed zakupem',
    description:
      'Szczegółowa weryfikacja stanu technicznego pojazdu przed zakupem wraz z raportem.',
    icon: 'i-lucide-file-check-2'
  }
]
</script>

<template>
  <div>
    <!-- 1. HERO SECTION -->
    <section
      class="relative overflow-hidden py-16 md:py-24 border-b border-(--ui-border)"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <UBadge
            color="primary"
            variant="subtle"
            size="md"
            class="mb-4 font-semibold"
          >
            <UIcon
              name="i-lucide-zap"
              class="w-4 h-4 mr-1"
            />
            Warsztat bez zbędnych telefonów
          </UBadge>

          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6"
          >
            Serwisuj auto z pełną kontrolą nad
            <span class="text-orange-500">kosztami i czasem.</span>
          </h1>

          <p
            class="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed"
          >
            Zgłoś usterkę online w 2 minuty, śledź status naprawy na żywo i
            zatwierdzaj kosztorysy jednym kliknięciem. Pełna historia Twojego
            pojazdu zawsze pod ręką.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <UButton
              to="/rezerwacja"
              size="xl"
              color="primary"
              icon="i-lucide-wrench"
              class="font-semibold text-zinc-950 justify-center"
            >
              Zgłoś naprawę i wybierz termin
            </UButton>

            <UButton
              to="/status"
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-lucide-search"
              class="hidden sm:inline-flex bg-(--ui-bg-accented)/70 hover:bg-(--ui-bg-accented) text-(--ui-text)"
            >
              Śledź swoje zlecenie
            </UButton>
          </div>

          <!-- Szybka podpowiedź dla niezdecydowanych -->
          <p class="mt-5 text-sm text-zinc-500 dark:text-zinc-400">
            Chcesz tylko zapytać o cenę lub dostępność?
            <NuxtLink
              to="/kontakt"
              class="text-orange-500 font-medium hover:underline"
            >
              Skorzystaj z szybkiego formularza kontaktowego &rarr;
            </NuxtLink>
          </p>
        </div>
      </div>
    </section>

    <!-- 2. JAK TO DZIAŁA -->
    <section
      id="jak-to-dziala"
      class="py-16 bg-(--ui-bg-muted) border-(--ui-border)"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl font-bold mb-3">
            Jak działa obsługa w GearFlow?
          </h2>
          <p class="text-zinc-600 dark:text-zinc-400">
            Zautomatyzowany proces od momentu zgłoszenia aż po wydanie
            kluczyków.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard>
            <div
              class="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-lg mb-4"
            >
              1
            </div>
            <h3 class="text-lg font-bold mb-2">
              Zgłaszasz usterkę online
            </h3>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">
              Wybierasz markę, model, opisujesz objawy i wskazujesz dogodny
              termin. Od razu otrzymujesz numer zlecenia.
            </p>
          </UCard>

          <UCard>
            <div
              class="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-lg mb-4"
            >
              2
            </div>
            <h3 class="text-lg font-bold mb-2">
              Zatwierdzasz kosztorys w panelu
            </h3>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">
              Po diagnostyce mechanik wysyła wycenę części i robocizny.
              Akceptujesz ją online bez niespodzianek przy odbiorze.
            </p>
          </UCard>

          <UCard>
            <div
              class="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-lg mb-4"
            >
              3
            </div>
            <h3 class="text-lg font-bold mb-2">
              Odbierasz auto z historią PDF
            </h3>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">
              Dostajesz powiadomienie o gotowości pojazdu, a pełna karta
              serwisowa zapisuje się w Twoim wirtualnym garażu.
            </p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- 3. USŁUGI -->
    <section
      id="uslugi"
      class="py-16"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 class="text-3xl font-bold mb-2">
              Zakres usług serwisowych
            </h2>
            <p class="text-zinc-600 dark:text-zinc-400">
              Kompleksowa obsługa samochodów osobowych i dostawczych.
            </p>
          </div>
          <UButton
            to="/rezerwacja"
            color="primary"
            variant="soft"
            icon="i-lucide-arrow-right"
            trailing
          >
            Przejdź do formularza wizyty
          </UButton>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard
            v-for="service in services"
            :key="service.title"
            class="hover:border-orange-500/50 transition"
          >
            <div class="flex items-start gap-4">
              <div
                class="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-orange-500 shrink-0"
              >
                <UIcon
                  :name="service.icon"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h3 class="font-bold text-base mb-1">
                  {{ service.title }}
                </h3>
                <p
                  class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                >
                  {{ service.description }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>
