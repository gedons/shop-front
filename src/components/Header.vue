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

            <div class="flex items-center space-x-6">
                <a href="#" class="text-center text-gray-700 hover:text-[#dc3545] transition relative">
                    <div class="text-1xl">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="text-xs leading-3">Wishlist</div>
                    <div
                        class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#dc3545] text-white text-xs">
                        8</div>
                </a>
                <a href="#" class="text-center text-gray-700 hover:text-[#dc3545] transition relative">
                    <div class="text-1xl">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="text-xs leading-3">Cart</div>
                    <div
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#dc3545] text-white text-xs">
                        2</div>
                </a>
                <a href="#" class="text-center text-gray-700 hover:text-[#dc3545] transition relative">
                    <div class="text-1xl">
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <div class="text-xs leading-3">Account</div>
                </a>
            </div>
        </div>
    </div>
    <!-- ./header -->

    <!-- navbar -->
    <nav class="bg-[#000]  w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-center gap-6 h-16 ">
    
            <!-- Navigation Links -->
            <div class="hidden md:block">
              <div class="mx-auto flex items-baseline space-x-6 font-rubik">
                <router-link :to="{name: 'Index'}" class="text-white hover:text-primary transition font-[2rem]">Home</router-link>
                <router-link :to="{name: 'UserProducts'}" class="text-white hover:text-primary transition font-[2rem]">Shop</router-link>
                <router-link :to="{name: 'Terms'}" class="text-white hover:text-primary transition font-[2rem]">About Us</router-link>
                <router-link :to="{name: 'Contact'}" class="text-white hover:text-primary transition font-[2rem]">Contact</router-link>
                <router-link :to="{name: 'Register'}" class="text-white bg-[#dc3545] border border-[#000000] font-[2rem] px-3 py-1 rounded-md hover:text-white hover:bg-transparent font-rubik transition">Get Started</router-link>
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
            <router-link :to="{name: 'Index'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-rubik font-[2rem] transition">Home</router-link>
              <router-link :to="{name: 'UserProducts'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-rubik font-[2rem] transition">Shop</router-link>
              <router-link :to="{name: 'Terms'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-rubik font-[2rem] transition">About Us</router-link>
              <router-link :to="{name: 'Contact'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-rubik font-[2rem] transition">Contact</router-link>
              <router-link :to="{name: 'Register'}" class="text-white hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-rubik font-[2rem] transition">Get Started</router-link>
          </div>
        </div>
    </nav>
    <!-- ./navbar -->
</template>

<script>
export default{
    data (){
        return{
            isOpen: false,
        }
    }
}
</script>

<style>
</style>