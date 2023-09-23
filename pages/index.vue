<template>
  <main>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      <ContentList path="/book" :query="{
        only: ['name', 'description', '_path', 'image', 'isbn', 'url'],
      }">
        <template v-slot="{ list }">
          <div v-for="book in list" :key="book._path"
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <NuxtLink :to="book._path">
              <div class="h-64 w-auto md:w-1/2">
                <img :src="`/images/${book.image || book.isbn}.png`" alt="" class="inset-0 h-full w-full object-cover object-center" />
              </div>
            </NuxtLink>
            <div class="p-5">
              <NuxtLink :to="book._path">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {{ book.name }}
                </h5>
              </NuxtLink>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ book.description }}
              </p>
              <NuxtLink :to="book._path"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read Now
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </template>
        <template #not-found>
          <p>No books found.</p>
        </template>
      </ContentList>
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped></style>