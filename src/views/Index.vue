<template>
    <!-- header -->
       <Header/>
    <!-- end header -->

     <!-- banner -->
     <div class="bg-cover bg-no-repeat bg-center py-36" style="background-image: url('../src/assets/images/bannerq.jpg');">
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

</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: {
    Header,   
  },

  data() {
    return {
      imageUrl: 'assets/images/banner-bg.jpg',
    };
  },
   
};
</script>