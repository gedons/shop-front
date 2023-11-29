<template>
    <!-- header -->
       <Header/>
    <!-- end header -->

     <!-- banner -->
     <div class="bg-cover bg-no-repeat bg-center py-36" v-bind:style="{ 'background-image': 'url(' + bgImage + ')' }">
        <div class="container">
            <h1 class="text-6xl text-gray-200 bg-opacity-40 font-medium mb-4 capitalize">
                best clothing wears <br> available for you
            </h1>
            <p class="text-gray-200 bg-opacity-40">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br>
                accusantium perspiciatis, sapiente
                magni eos dolorum ex quos dolores odio</p>
            <div class="mt-12">
                <a href="#" class="bg-[#9F2DBE] border border-[#9F2DBE] text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-white">Shop Now</a>
            </div>
        </div>
    </div>
    <!-- ./banner -->

    <!-- features -->
    <div class="container py-16">
        <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div class="border border-[#9F2DBE] rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="../assets/images/icons/delivery-van.svg" alt="Delivery" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
                    <p class="text-gray-500 text-sm">Order over $200</p>
                </div>
            </div>
            <div class="border border-[#9F2DBE] rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="../assets/images/icons/money-back.svg" alt="Delivery" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">Money Returns</h4>
                    <p class="text-gray-500 text-sm">30 days money returs</p>
                </div>
            </div>
            <div class="border border-[#9F2DBE] rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="../assets/images/icons/service-hours.svg" alt="Delivery" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
                    <p class="text-gray-500 text-sm">Customer support</p>
                </div>
            </div>
        </div>
    </div>
    <!-- ./features -->

    <!-- categories -->
    <div class="container py-16">
        <h2 class="text-2xl font-semibold text-gray-700  mb-6">shop by category</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="relative rounded-sm overflow-hidden group md:h-72">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full md:h-72">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Men</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group md:h-72">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full md:h-72">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Women</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group md:h-72">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full md:h-72">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Children
                </a>
            </div>
            <div class="relative rounded-sm overflow-hidden group md:h-72">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full md:h-72">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Shoes</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group md:h-72">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full md:h-72">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Accessories
                    </a>
            </div>
            <div class="relative rounded-sm overflow-hidden group md:h-72">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full md:h-72">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Head Wear</a>
            </div>
        </div>
    </div>
    <!-- ./categories -->

     <!-- new products -->
     <div class="container pb-16">
        <h2 class="text-2xl font-semibold text-gray-700 uppercase mb-6">Top New Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="bg-white shadow rounded overflow-hidden group">
                <div class="relative">
                    <router-link :to="{name: 'ProductDetails'}">
                        <img :src="pro1Image" alt="product 1" class="w-full cursor-pointer">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <p class="text-white text-md flex items-center justify-center hover:text-[#9F2DBE] cursor-pointer font-semibold  transition">
                            <span>View Product</span>
                            </p>                        
                        </div>
                    </router-link>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-[#9F2DBE] transition">Guyer
                            Chair</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                        <p class="text-xl text-[#9F2DBE] font-semibold">$45.00</p>
                        <p class="text-sm text-gray-400 line-through">$55.90</p>
                    </div>
                    <div class="flex items-center">
                        <div class="flex gap-1 text-sm text-yellow-400">
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                        </div>
                        <div class="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="#"
                    class="block w-full py-1 text-center text-white bg-[#9F2DBE] border border-[#9F2DBE] rounded-b hover:bg-transparent hover:text-[#9F2DBE] transition">Add
                    to cart</a>
            </div>           
        </div>
    </div>
     <!-- ./product -->

      <!-- ads -->
    <div class="container pb-16">
        <a href="#">
            <img :src="ads" alt="ads" class="w-full">
        </a>
    </div>
    <!-- ./ads -->

    <!--recommended  product -->
    <div class="container pb-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="bg-white shadow rounded overflow-hidden group">
                <div class="relative">
                    <router-link :to="{name: 'ProductDetails'}">
                        <img :src="pro1Image" alt="product 1" class="w-full cursor-pointer">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <p class="text-white text-md flex items-center justify-center hover:text-[#9F2DBE] cursor-pointer font-semibold  transition">
                            <span>View Product</span>
                            </p>                        
                        </div>
                    </router-link>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 class=" font-medium text-xl mb-2 text-gray-800 hover:text-[#9F2DBE] transition">Guyer
                            Chair</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                        <p class="text-xl text-[#9F2DBE] font-semibold">$45.00</p>
                        <p class="text-sm text-gray-400 line-through">$55.90</p>
                    </div>
                    <div class="flex items-center">
                        <div class="flex gap-1 text-sm text-yellow-400">
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                        </div>
                        <div class="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="#"
                    class="block w-full py-1 text-center text-white bg-[#9F2DBE] border border-[#9F2DBE] rounded-b hover:bg-transparent hover:text-[#9F2DBE] transition">Add
                    to cart</a>
            </div>
            <div class="bg-white shadow rounded overflow-hidden group">
                <div class="relative">
                    <router-link :to="{name: 'ProductDetails'}">
                        <img :src="pro1Image" alt="product 1" class="w-full cursor-pointer">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <p class="text-white text-md flex items-center justify-center hover:text-[#9F2DBE] cursor-pointer font-semibold  transition">
                            <span>View Product</span>
                            </p>                        
                        </div>
                    </router-link>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 class=" font-medium text-xl mb-2 text-gray-800 hover:text-[#9F2DBE] transition">Bed
                            King Size</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                        <p class="text-xl text-[#9F2DBE] font-semibold">$45.00</p>
                        <p class="text-sm text-gray-400 line-through">$55.90</p>
                    </div>
                    <div class="flex items-center">
                        <div class="flex gap-1 text-sm text-yellow-400">
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                            <span><i class="fa-solid fa-star"></i></span>
                        </div>
                        <div class="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <a href="#"
                    class="block w-full py-1 text-center text-white bg-[#9F2DBE] border border-[#9F2DBE] rounded-b hover:bg-transparent hover:text-[#9F2DBE] transition">Add
                    to cart</a>
            </div>           
        </div>
    </div>
    <!-- ./recommended product -->

     <!-- footer -->
     <Footer/>
     <!-- end footer -->

</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import bannerImage from '../assets/images/bannerq.jpg';
import product1Image from '../assets/images/products/product1.jpg';
import adImage from '../assets/images/offer.jpg';

export default {
  components: {
    Header, 
    Footer,

    
  },

  data() {
    return {
      bgImage: bannerImage,
      pro1Image : product1Image,
      ads : adImage
    };
  },

};
</script>