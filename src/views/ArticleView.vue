<template>
    <div class="w-full md:w-3/5 min-h-screen mx-auto md:mt-5 pb-20">
        <div class="bg-white rounded-xl mx-3 p-5 md:p-10 md:mx-0 shadow-2xl">
            <div>
                <h1 class="text-xl md:text-4xl text-black text-left font-bold leading-relaxed">{{ title }}</h1>
                <div class="mt-3 text-left text-gray-800 text-sm">Published at <span>{{ date }}</span></div>
                <div class="h-[2px] w-20 my-5 md:my-10 bg-primary md:w-1/3 mr-2"></div>
                <div class="flex items-center text-sm text-gray-500 gap-2 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>{{ readTime }} min read</span>
                </div>
                <div v-if="image">
                    <div class="relative w-full" style="padding-top: 50%;">
                        <img :src="image" class="absolute top-0 left-0 rounded-lg w-full h-full object-cover"
                            alt="Thumbnail">
                    </div>
                </div>
                <div class="text-left text-black mt-8 prose prose-slate max-w-none" v-html="renderedContent">
                    
                </div>
                <!-- Giscus Comments -->
                <div class="mt-16 border-t border-gray-100 pt-10">
                    <h3 class="text-2xl font-bold text-black mb-8">Comments</h3>
                    <GiscusComponent />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { parseFrontmatter } from '@/utils/frontmatter.js';
import GiscusComponent from '@/components/GiscusComponent.vue';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

// Configure marked with highlight.js
marked.setOptions({
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
    breaks: true
});

export default {
    components: {
        GiscusComponent
    },
    data() {
        return {
            route: useRoute(),
            title: '',
            image: '',
            date: '',
            content: '',
        }
    },
    mounted() {
        this.getDetails();
    },
    methods: {
        getDetails() {
            const slug = this.route.params.slug;
            // Updated Vite glob syntax for raw text
            const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });
            
            // Find the file that has the matching slug in its frontmatter
            for (const path in modules) {
                const rawContent = modules[path];
                const { data, content } = parseFrontmatter(rawContent);
                if (data.slug === slug) {
                    this.title = data.title;
                    this.image = data.image;
                    this.date = data.date;
                    this.content = content;
                    return;
                }
            }
        }
    },
    computed: {
        renderedContent() {
            return marked.parse(this.content || '');
        },
        readTime() {
            const wordsPerMinute = 200;
            const noOfWords = this.content ? this.content.split(/\s/g).length : 0;
            const minutes = noOfWords / wordsPerMinute;
            return Math.ceil(minutes);
        }
    }
}
</script>

<style scoped></style>
ory