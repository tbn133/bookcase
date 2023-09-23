<script setup lang="ts">
import axios from "axios"

const props = defineProps<{ url: string }>()

const isLoading = ref(false)
const page = ref(1)
const pdfSource = ref()
const pdfRef = ref()
const pageCount = computed(() => pdfRef.value?.pageCount || 1)
const showAllPages = ref(false)
watch(() => props.url, async (newValue, _) => {
  const response = await axios({
    url: newValue,
    method: 'get',
    withCredentials: false,
    responseType: 'arraybuffer',
    onDownloadProgress: function (progressEvent: any) {
      // Do whatever you want with the native progress event
      console.log(progressEvent.loaded / progressEvent.total * 100)
    }
  })
  pdfSource.value = response.data
}, { immediate: true })

watch(() => showAllPages.value, (newValue, _) => {
  page.value = newValue ? 0 : 1
})

const handlePasswordRequest = (callback: any, retry: any) => {
  callback(prompt(retry
    ? 'Enter password again'
    : 'Enter password'
  ))
}

const handleDocumentRender = () => {
  isLoading.value = false
}

onBeforeUnmount(() => {
  pdfRef.value = null
})
</script>
<template>
  <div class="app-header">
    <template v-if="isLoading">
      Loading...
    </template>

    <template v-else>
      <span v-if="showAllPages" class="pl-2">
        {{ pageCount }} page(s)
      </span>

      <span v-else class="pl-2">
        <button :disabled="page <= 1" @click="page--">❮</button>
        {{ page }} / {{ pageCount }}
        <button :disabled="page >= pageCount" @click="page++">❯</button>
      </span>
      <label class="float-right pr-2">
        <input v-model="showAllPages" type="checkbox">
        Show all pages
      </label>
    </template>
  </div>

  <div class="app-content">
    <vue-pdf-embed ref="pdfRef" :source="pdfSource" :page="page" @password-requested="handlePasswordRequest"
      @rendered="handleDocumentRender" />
  </div>
</template>

<style scoped>
.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #555;
  color: #ddd;
}
.app-content {
  padding: 24px 16px;
}

.vue-pdf-embed>div {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}
</style>
