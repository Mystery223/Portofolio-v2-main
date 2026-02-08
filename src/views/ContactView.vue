<script>
import emailjs from '@emailjs/browser'

export default {
  mounted() {
    document.title = 'Contact | Djul Fikri Ferdiansyah';
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      isLoading: false,
      isSent: false,
      error: null
    }
  },
  methods: {
    async sendEmail() {
      // Validate form
      if (!this.form.name || !this.form.email || !this.form.message) {
        this.error = 'Please fill in all fields.';
        return;
      }

      this.isLoading = true;
      this.error = null;

      try {
        // EmailJS configuration
        // User needs to set up at https://emailjs.com
        // 1. Create account and add email service
        // 2. Create email template with variables: from_name, from_email, message
        // 3. Get Service ID, Template ID, and Public Key
        await emailjs.send(
          'service_hvekyq5',
          'template_snmtzvi',
          {
            name: this.form.name,
            email: this.form.email,
            message: this.form.message,
            title: 'New Message from Portfolio',
            to_email: 'projectag807@gmail.com'
          },
          'GK1uDl4xp4926F1jC'
        );

        this.isSent = true;
        this.form = { name: '', email: '', message: '' };
      } catch (err) {
        // More descriptive error handling
        if (err && err.text) {
          this.error = `Error: ${err.text}. Please check your credentials.`;
        } else {
          this.error = 'Failed to send message. Please try again later.';
        }
        console.error('EmailJS Error Detail:', err);
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.isSent = false;
      this.error = null;
    }
  }
}
</script>

<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h1>
        <p class="text-slate-400">Have a question or want to work together? Feel free to reach out!</p>
        <div class="h-[2px] w-20 mx-auto mt-6 bg-primary"></div>
      </div>

      <!-- Success Message -->
      <div v-if="isSent" class="bg-green-900/30 border border-green-500 rounded-xl p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto text-green-400 mb-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <h3 class="text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
        <p class="text-slate-300 mb-6">Thank you for reaching out. I'll get back to you soon!</p>
        <button @click="resetForm" class="px-6 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/80 transition-colors">
          Send Another Message
        </button>
      </div>

      <!-- Contact Form -->
      <form v-else @submit.prevent="sendEmail" class="bg-[#1e1e1f] border border-[#383838] rounded-xl p-6 md:p-8">
        <!-- Error Message -->
        <div v-if="error" class="bg-red-900/30 border border-red-500 rounded-lg p-4 mb-6 text-red-400">
          {{ error }}
        </div>

        <!-- Name Field -->
        <div class="mb-6">
          <label for="name" class="block text-slate-300 text-sm font-medium mb-2">Your Name</label>
          <input 
            type="text" 
            id="name"
            v-model="form.name"
            placeholder="John Doe"
            class="w-full bg-[#121212] border border-[#383838] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
          >
        </div>

        <!-- Email Field -->
        <div class="mb-6">
          <label for="email" class="block text-slate-300 text-sm font-medium mb-2">Your Email</label>
          <input 
            type="email" 
            id="email"
            v-model="form.email"
            placeholder="john@example.com"
            class="w-full bg-[#121212] border border-[#383838] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
          >
        </div>

        <!-- Message Field -->
        <div class="mb-6">
          <label for="message" class="block text-slate-300 text-sm font-medium mb-2">Message</label>
          <textarea 
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="Your message here..."
            class="w-full bg-[#121212] border border-[#383838] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors resize-none"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit"
          :disabled="isLoading"
          class="w-full bg-gradient-to-r from-primary to-secondary text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <span v-if="isLoading">Sending...</span>
          <span v-else>Send Message</span>
          <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </form>

      <div class="mt-8 text-center text-slate-400">
        <!-- Social Icons for Mobile -->
        <div class="flex md:hidden justify-center gap-6 mt-8">
          <a href="https://github.com/Mystery223" target="_blank" class="text-slate-400 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://instagram.com/mamang.fikriii" target="_blank" class="text-slate-400 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.tiktok.com/@djulfikrii" target="_blank" class="text-slate-400 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
