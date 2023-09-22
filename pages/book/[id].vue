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
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
  const _data = queryContent().where({ _path: path }).findOne();
  return _data;
});
pdfurl.value = `/uploads/books/${data.value.name}.pdf`;
</script>