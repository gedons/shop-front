<template>
    <!-- header -->
       <Header/>
    <!-- end header -->

     <!-- banner -->
     <div class="bg-cover bg-no-repeat bg-center py-36" v-bind:style="{ 'background-image': 'url(' + bgImage + ')' }">
        <div class="container">
            <h1 class="text-6xl text-gray-200 font-medium mb-4 capitalize">
                best clothing wears <br> available for you
            </h1>
            <p class="text-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br>
                accusantium perspiciatis, sapiente
                magni eos dolorum ex quos dolores odio</p>
            <div class="mt-12">
                <a href="#" class="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-white">Shop Now</a>
            </div>
        </div>
    </div>
    <!-- ./banner -->

    <!-- features -->
    <div class="container py-16">
        <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="../assets/images/icons/delivery-van.svg" alt="Delivery" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
                    <p class="text-gray-500 text-sm">Order over $200</p>
                </div>
            </div>
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="../assets/images/icons/money-back.svg" alt="Delivery" class="w-12 h-12 object-contain">
                <div>
                    <h4 class="font-medium capitalize text-lg">Money Returns</h4>
                    <p class="text-gray-500 text-sm">30 days money returs</p>
                </div>
            </div>
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
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
        <h2 class="text-2xl font-semibold text-gray-700 uppercase mb-6">shop by category</h2>
        <div class="grid grid-cols-3 gap-3">
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Men</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Women</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Children
                </a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Shoes</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Accessories
                    </a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="../assets/images/category/2.jpg" alt="category 1" class="w-full">
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">Head Wear</a>
            </div>
        </div>
    </div>
    <!-- ./categories -->

     <!-- product -->
     <div class="container pb-16">
        <h2 class="text-2xl font-semibold text-gray-700 uppercase mb-6">Products</h2>
    </div>
     <!-- ./product -->

     <!-- footer -->
     <Footer/>
     <!-- end footer -->

</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import bannerImage from '../assets/images/bannerq.jpg';

export default {
  components: {
    Header, 
    Footer,
    
  },

  data() {
    return {
      bgImage: bannerImage,
    };
  },

};
</script>