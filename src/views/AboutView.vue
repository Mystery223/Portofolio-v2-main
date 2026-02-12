<script>
export default {
  mounted() {
    document.title = 'About | Djul Fikri Ferdiansyah';
  },
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Advanced'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Advanced'
        },
        {
          id: 3,
          name: 'PHP',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
          status: 'Advanced'
        },
        {
          id: 4,
          name: 'Javascript',
          imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
          status: 'Advance'
        },
        {
          id: 5,
          name: 'Laravel',
          imageUrl: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
          status: 'Advance'
        },
        {
          id: 6,
          name: 'Next JS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-next-js-1175005.png',
          status: 'Intermediate'
        },

        {
          id: 7,
          name: 'ReactJS',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          status: 'Beginner'
        },
        {
          id: 8,
          name: 'Tailwind',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
          status: 'Advance'
        },
        {
          id: 9,
          name: 'Bootstrap',
          imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
          status: 'Intermediate'
        }
      ],
      tools: [
        {
          id: 1,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 2,
          name: 'GitHub',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          status: 'Git Hosting'
        },
        {
          id: 3,
          name: 'NPM',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png',
          status: 'Package Manager'
        },
        {
          id: 4,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
        {
          id: 5,
          name: 'Prisma',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-prisma-3629013-3030253.png',
          status: 'Database'
        },
        {
          id: 6,
          name: 'PostgreSQL',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-postgresql-11-1175122.png',
          status: 'Database'
        },
      ]
    };
  }
}
</script>
<template>
  <div>
    <div
      class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-16 text-left border border-[#383838] rounded-3xl text-primary mx-3 mb-5 overflow-hidden">
      <article data-page="about">

        <header>
          <div class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center">
            About Me &nbsp;
            <div class="h-[1px] w-32 bg-primary md:w-96"
              data-aos-duration="600"></div>
          </div>
        </header>

        <section
          class="flex flex-col md:flex-row items-center justify-center md:gap-16 gap-10">
          <div class="flex-shrink-0">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img class="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px] object-cover rounded-full border-2 border-primary fadein-up shadow-2xl shadow-primary/20"
                src="/img/Profile.png" alt="Foto">
            </div>
          </div>
          <div class="md:w-8/12 border-l-0 md:border-l-2 border-primary/20 md:pl-10 relative">
            <h2 class="text-xl md:text-3xl font-bold text-white mb-6 fadein-left fadeins-1 italic tracking-tight">
              <span class="text-primary uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">The Story Behind</span>
              <span class="uppercase ml-2">Every Code</span>
            </h2>
            <div class="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg leading-relaxed text-slate-300">
              <p class="fadein-left fadeins-1">
                Hello! I am a developer who believes that the best kind of technology
                is the one that possesses <span class="text-primary font-medium">'soul'</span>.
              </p>
              <p class="fadein-left fadeins-2">
                My fascination with the digital world began with a simple curiosity: <span class="italic text-white/90">how does it all work?</span> That spark of inquiry is what led me to my current career—transforming complex problems into elegant solutions. To me, code is more than just lines of instructions; it is an instrument for creating meaningful user experiences.
              </p>
              <p class="fadein-left fadeins-3">
                From building large-scale platforms to designing minimalist personal blogs, my focus remains the same: meticulous attention to detail and a commitment to quality. <span class="text-white font-semibold">I don't just build products; I build unforgettable experiences.</span>
              </p>
            </div>
          </div>
        </section>

      </article>
    </div>

    <div class="px-5 py-5 md:px-12 md:py-10 text-left text-primary mx-3">
      <article data-page="about">
        <header>
          <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            <div class="h-[1px] w-10 bg-primary md:w-20"
              data-aos-duration="600"></div>
            &nbsp; Skills
          </div>
        </header>
        <section>
          <div>
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
              <li class="mr-2">
                <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                  :class="{ 'text-primary bg-primary bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech Stack</button>
              </li>
              <li class="mr-2">
                <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                  :class="{ 'text-primary bg-primary bg-opacity-10': activeTab === 2 }" @click="activeTab = 2">Tools</button>
              </li>
            </ul>
          </div>
          <div v-show="activeTab === 1">
            <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
              <div v-for="item in tech" :key="item.id">
                <div
                  class="item-tech flex cursor-pointer items-center gap-2 rounded border border-primary px-2 py-2 hover:bg-primary hover:bg-opacity-10 md:gap-3 lg:px-3">
                  <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                    <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                      class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                      :src="item.imageUrl" style="color: transparent;">
                  </div>
                  <div class="flex items-center text-sm md:text-base lg:text-lg">
                    <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                    </div>
                    <div
                      class="status-tech opacity-0 absolute mt-5 text-[10px] text-primary transition-all duration-300 md:text-xs lg:text-sm">
                      {{ item.status }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeTab === 2">
            <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
              <div v-for="item in tools" :key="item.id">
                <div
                  class="item-tech flex cursor-pointer items-center gap-2 rounded border border-primary px-2 py-2 hover:bg-primary hover:bg-opacity-10 md:gap-3 lg:px-3">
                  <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                    <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                      class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                      :src="item.imageUrl" style="color: transparent;">
                  </div>
                  <div class="flex items-center text-sm md:text-base lg:text-lg">
                    <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                    </div>
                    <div
                      class="status-tech opacity-0 absolute mt-5 text-[10px] text-primary transition-all duration-300 md:text-xs lg:text-sm">
                      {{ item.status }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 200ms;
}

.fadeins-2 {
  animation-delay: 400ms;
}

.fadeins-3 {
  animation-delay: 600ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}
</style>
