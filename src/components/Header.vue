<template>
    <!-- header -->
    <div class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-between">
            <router-link :to="{name: 'Index'}">
                <img src="../assets/images/logo-1.svg" alt="Logo" class="w-20">
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
                </a>
            </div>
        </div>
    </div>
    <!-- ./header -->

    <!-- navbar -->
    <nav class="bg-gray-800">
        <div class="container flex">
            <div class="px-8 md:mt-0 items-center cursor-pointer relative group sm:flex mt-7 lg:mt-0">
                <span class="text-white">
                    <i class="fa-solid fa-bars"></i>
                </span>
                <span class="capitalize ml-2 text-white">Categories</span>

                <!-- dropdown -->
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

            <!-- navigation links -->
            <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
                <div class="items-center space-x-6 capitalize hidden sm:flex">
                    <router-link :to="{name: 'Index'}" class="text-gray-200 hover:text-white transition">Home</router-link>
                    <router-link :to="{name: 'UserProducts'}" class="text-gray-200 hover:text-white transition">Products</router-link>
                    <router-link :to="{name: 'Terms'}" class="text-gray-200 hover:text-white transition">Terms & Condition</router-link>
                    <router-link :to="{name: 'Contact'}" class="text-gray-200 hover:text-white transition">Contact</router-link>
                </div>
                <router-link :to="{name: 'Register'}" class="text-white bg-[#9F2DBE] border border-[#9F2DBE] px-3 py-2 rounded-md hover:text-white hover:bg-transparent font-medium transition">Create Account</router-link>
            </div>
        </div>
    </nav>
    <!-- ./navbar -->
</template>

<script>
</script>

<style>
/* Your header component styles */
</style>