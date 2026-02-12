<template>
  <main
    class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
    <div class="space-y-4 text-center md:text-left px-10">
      <p class="text-primary font-mono tracking-widest uppercase text-sm fadein-up">Welcome to my universe</p>
      <h1 class="text-4xl font-bold md:text-6xl text-white fadein-up">Djul Fikri Ferdiansyah</h1>
      <div class="py-2">
        <h1
          class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-primary md:text-3xl fadein-up"
          ref="typewriter">
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>
      <p class="text-slate-400 max-w-lg mx-auto md:mx-0 fade-in-from-left leading-relaxed">
        Passionate about crafting <span class="text-white">beautiful digital experiences</span> through code. Based in Indonesia, exploring the boundaries of the digital world. 👋🏼
      </p>
      
      <div class="pt-6 fadein-up animation-delay-500">
        <button @click="downloadCV" class="group relative px-8 py-3 font-bold text-white transition-all duration-300">
          <span class="absolute inset-0 border border-primary/50 group-hover:border-primary transition-colors"></span>
          <span class="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all scale-x-0 group-hover:scale-x-100 origin-left"></span>
          <span class="relative flex items-center gap-2">
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-y-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </span>
        </button>
      </div>
    </div>
    
    <div class="flex justify-center md:justify-start fadein-right">
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <img alt="avatar" fetchpriority="high" width="300" height="300" decoding="async" data-nimg="1"
          class="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px] object-cover rounded-full border-4 border-[#121212] pict" src="/img/Profile.jpg">
      </div>
    </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'HomeView',
  data() {
    return {
      toRotate: ["Fullstack Explorer", "Digital Artisan", "Creative Problem Solver", "Engineering Enthusiast"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 150 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
    downloadCV() {
      Swal.fire({
        title: '<span style="color: #22d3ee; font-family: Poppins, sans-serif;">System Notification</span>',
        html: '<span style="color: #cbd5e1; font-family: Poppins, sans-serif;">CV link coming soon! Please reach out to me via the <b>Contact</b> menu for now.</span>',
        icon: 'info',
        background: '#1e1e1f',
        iconColor: '#22d3ee',
        showConfirmButton: true,
        confirmButtonText: 'Understood',
        confirmButtonColor: '#22d3ee',
        backdrop: `rgba(0,0,0,0.8)`,
        customClass: {
          popup: 'rounded-3xl border border-[#383838]',
          title: 'text-2xl font-bold',
          confirmButton: 'rounded-xl text-black font-bold'
        }
      });
    }
  }
}
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.typewrite>.wrap {
  border-right: 0.08em solid #22d3ee;
  padding-right: 2px;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block
}

@keyframes wave-animation {
  0% { transform: rotate(0deg) }
  10% { transform: rotate(14deg) }
  20% { transform: rotate(-8deg) }
  30% { transform: rotate(14deg) }
  40% { transform: rotate(-4deg) }
  50% { transform: rotate(10deg) }
  60% { transform: rotate(0deg) }
  to { transform: rotate(0deg) }
}

.pict {
  box-shadow: 0px 0px 50px -10px rgba(34,211,238,0.3);
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 100ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 200ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s ease-out forwards;
  animation-delay: 100ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animation-delay-500 {
  animation-delay: 300ms;
}
</style>ory
