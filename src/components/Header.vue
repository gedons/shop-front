<template>
    <!-- header -->
    <div class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-between px-8">
            <div class="pt-2 relative text-gray-600">
        <input class="border-b-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search">
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>

      <router-link :to="{name: 'Index'}" >
                <img src="../assets/images/logo-1.png" alt="Logo" >
            </router-link>

            <div class="flex items-center justify-center">
                
              <div class="relative hidden sm:block">
                <input type="text" name="search" id="search"
                       class="w-full border border-[#9F2DBE] border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:ring-0 focus:border-[#9F2DBE]"
                       placeholder="Search">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
                </span>
              </div>
              <button class="bg-[#9F2DBE] border border-[#9F2DBE] text-white px-8 py-3 rounded-r-md hover:bg-transparent hover:text-[#9F2DBE] transition hidden sm:block">Search</button>
              
            </div>

            <div class="flex items-center space-x-4">
                <a href="#" class="text-center text-gray-700 hover:text-[#9F2DBE] transition relative">
                    <div class="text-2xl">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="text-xs leading-3">Wishlist</div>
                    <div
                        class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#9F2DBE] text-white text-xs">
                        8</div>
                </a>
                <a href="#" class="text-center text-gray-700 hover:text-[#9F2DBE] transition relative">
                    <div class="text-2xl">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="text-xs leading-3">Cart</div>
                    <div
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#9F2DBE] text-white text-xs">
                        2</div>
                </a>
                <a href="#" class="text-center text-gray-700 hover:text-[#9F2DBE] transition relative">
                    <div class="text-2xl">
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="text-xs leading-3">Account</div>
                </router-link>
            </div>
        </div>
    </div>
    <!-- ./header -->

    <!-- navbar -->
    <nav class="bg-[#000]  w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Categories -->
            <div class="px-7 md:mt-0 items-center cursor-pointer relative group sm:flex lg:mt-0">
            <div class="flex-shrink-0 inline-flex items-center justify-center space-x-2">   
                <span class="text-white">
                    <i class="fa-solid fa-bars"></i>
                </span>                         
              <span class="capitalize font-poppins text-white ">Categories</span>

              <div class="absolute w-full left-0 top-full bg-white shadow-md py-6 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                    <img src="../assets/images/icons/sofa.svg" alt="sofa" class="w-5 h-5 object-contain">
                    <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                    <img src="../assets/images/icons/terrace.svg" alt="terrace" class="w-5 h-5 object-contain">
                    <span class="ml-6 text-gray-600 text-sm">Terarce</span>
                </a>
             </div>
            </div>
            </div>  
    
            <!-- Navigation Links -->
            <div class="hidden md:block">
              <div class="mx-auto flex items-baseline space-x-6 font-poppins">
                <router-link :to="{name: 'Index'}" class="text-white hover:text-primary transition">Home</router-link>
                <router-link :to="{name: 'UserProducts'}" class="text-white hover:text-primary transition">Products</router-link>
                <router-link :to="{name: 'Terms'}" class="text-white hover:text-primary transition">Terms & Condition</router-link>
                <router-link :to="{name: 'Contact'}" class="text-white hover:text-primary transition">Contact</router-link>
                <router-link :to="{name: 'Register'}" class="text-white bg-[#9F2DBE] border border-[#9F2DBE] px-3 py-2 rounded-md hover:text-white hover:bg-transparent font-poppins transition">Get Started</router-link>
              </div>
            </div>
    
    
            <!-- Mobile Menu Button (hambuger) -->
            <div class="-mr-2 flex md:hidden">
              <button @click="isOpen = !isOpen" type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!-- Icon when menu is closed -->
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <!-- Icon when menu is open -->
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
    
        <!-- Mobile Menu -->
        <div class="md:hidden" :class="{'block': isOpen, 'hidden': !isOpen}" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <router-link :to="{name: 'Index'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-poppins transition">Home</router-link>
              <router-link :to="{name: 'UserProducts'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-poppins transition">Products</router-link>
              <router-link :to="{name: 'Terms'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-poppins transition">Terms & Condition</router-link>
              <router-link :to="{name: 'Contact'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-poppins transition">Contact</router-link>
              <router-link :to="{name: 'Register'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-poppins transition">Get Started</router-link>
          </div>
        </div>
    </nav>
    <!-- ./navbar -->
</template>

<script>
import axios from 'axios';
import api from '../api';
import moment from 'moment';
export default{
    data (){
        return{
            isOpen: false,
            categories: [],
            back_url: 'http://localhost:5000'
        }
    },

    mounted() {    
      window.addEventListener('beforeunload', this.handleBeforeUnload);
    },

    created() {     
      this.fetchCategories();
    },

    methods: {
      handleBeforeUnload(event) {
      this.$store.dispatch('clearUserCart');
    },

    fetchCategories() {
        axios.get(`${api}/categories/all`).then((response) => {
        this.categories = response.data.categories;        
        this.loading = false;     
        })
        .catch((error) => {
        console.error('Error getting user images:', error);     
        this.loading = false;       
        });      
    },
  },

  beforeUnmount() {
    // Remove the event listener when the component is unmounted to avoid memory leaks
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }
}
</script>

<style>
</style>