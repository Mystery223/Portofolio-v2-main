<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <ArticleList :articles="filteredArticles" />
      </div>
      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24">
        <div class="flex flex-col text-left">
          <div class="bg-clip-text bg-gradient-to-r from-slate-100 to-primary text-transparent">Let's share experiences,
            stories, and knowledge together.
          </div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-primary mr-2"></div>
          
          <div class="mb-5">
            <input 
              v-model="search"
              type="text" 
              placeholder="Search articles..."
              class="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-slate-50 focus:outline-none focus:border-primary transition-colors text-sm"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import ArticleList from '@/components/ArticleList.vue';
import { parseFrontmatter } from '@/utils/frontmatter.js';

export default {
  mounted() {
    document.title = 'Blog | Djul Fikri Ferdiansyah';
    this.getArticles();
  },
  data() {
    return {
      search: '',
      selectedTemplate: '',
      articles: []
    }
  },
  components: {
    ArticleList
  },
  computed: {
    filteredArticles() {
      return this.articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(this.search.toLowerCase()) || 
                             article.desc.toLowerCase().includes(this.search.toLowerCase());
        return matchesSearch;
      });
    }
  },
  methods: {
    getArticles() {
      const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });
      const articles = Object.keys(modules).map((path, index) => {
        const rawContent = modules[path];
        const { data, content } = parseFrontmatter(rawContent);
        return {
          id: index + 1,
          ...data,
          content: content
        };
      });
      this.articles = articles.reverse();
    }
  }
}

</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 0.5s ease-in-out;
}
</style>