<template>
  <div class="giscus-container mt-10" ref="giscusContainer"></div>
</template>

<script>
export default {
  name: 'GiscusComponent',
  mounted() {
    this.loadGiscus();
  },
  methods: {
    loadGiscus() {
      const script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.setAttribute('data-repo', 'Mystery223/Portofolio-v2-main');
      script.setAttribute('data-repo-id', 'R_kgDORLpHfg');
      script.setAttribute('data-category', 'General');
      script.setAttribute('data-category-id', 'DIC_kwDORLpHfs4C2D1e');
      script.setAttribute('data-mapping', 'pathname');
      script.setAttribute('data-strict', '0');
      script.setAttribute('data-reactions-enabled', '1');
      script.setAttribute('data-emit-metadata', '0');
      script.setAttribute('data-input-position', 'bottom');
      script.setAttribute('data-theme', 'transparent_dark');
      script.setAttribute('data-lang', 'en');
      script.setAttribute('crossorigin', 'anonymous');
      script.async = true;

      this.$refs.giscusContainer.appendChild(script);
    }
  }
}
</script>

<style scoped>
.giscus-container {
  width: 100%;
}
</style>
