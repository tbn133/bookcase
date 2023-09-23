<template>
  <main>
    <div>
      <ClientOnly fallback-tag="span" fallback="Loading Component">
        <pdf-embed :url="pdfurl"></pdf-embed>
      </ClientOnly>
    </div>
  </main>
</template>

<script setup>
const pdfurl = ref(null)
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  const _data = queryContent().where({ _path: path }).findOne()
  return _data;
});
if (data.value.url) {
  pdfurl.value = `https://cors-anywhere.herokuapp.com/${data.value.url}`;
} else {
  pdfurl.value = `/uploads/books/${data.value.url || data.value.name}.pdf`
}
</script>