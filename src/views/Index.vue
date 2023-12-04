<template>
    <!-- header -->
       <Header/>
    <!-- end header -->

     <!-- banner -->
     <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide>

        <div class="transition bg-cover  bg-no-repeat bg-center  py-[10rem]" v-bind:style="{ 'background-image': 'url(' + bgImage + ')' }">
        <div class="container pl-[6rem] max-md:pl-2">
            <h1 class="max-md:text-4xl text-6xl text-[#000] bg-opacity-40 font-medium mb-4 capitalize">
                best clothing wears <br> available for you
            </h1>
            <p class="text-[#000] bg-opacity-40 max-md:text-[14px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br>
                accusantium perspiciatis, sapiente
                magni eos dolorum ex quos dolores odio</p>
            <div class="mt-12">
                <a href="#" class="bg-[#000]  hover:bg-primary text-white px-8 py-3 font-medium 
                    rounded-md  hover:text-white">Shop Now</a>
            </div>
        </div>
    </div>

    </swiper-slide>
    <swiper-slide> 
        <div class="transition bg-cover bg-no-repeat bg-center  py-[10rem]" v-bind:style="{ 'background-image': 'url(' + bgImage1 + ')' }">
            <div class="container pl-[6rem] max-md:pl-2">
            <h1 class="max-md:text-4xl text-6xl text-[#000] bg-opacity-40 font-medium mb-4 capitalize">
                best clothing wears <br> available for you
            </h1>
            <p class="text-[#000] bg-opacity-40 max-md:text-[14px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br>
                accusantium perspiciatis, sapiente
                magni eos dolorum ex quos dolores odio</p>
            <div class="mt-12">
                <a href="#" class="bg-[#000]  hover:bg-primary text-white px-8 py-3 font-medium 
                    rounded-md  hover:text-white">Shop Now</a>
            </div>
        </div>
    </div>
</swiper-slide>
    <swiper-slide> <div class="transition bg-cover bg-no-repeat bg-center  py-[10rem]" v-bind:style="{ 'background-image': 'url(' + bgImage2 + ')' }">
        <div class="container pl-[6rem] max-md:pl-2">
            <h1 class="max-md:text-4xl text-6xl text-[#000] bg-opacity-40 font-medium mb-4 capitalize">
                best clothing wears <br> available for you
            </h1>
            <p class="text-[#000] bg-opacity-40 max-md:text-[14px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br>
                accusantium perspiciatis, sapiente
                magni eos dolorum ex quos dolores odio</p>
            <div class="mt-12">
                <a href="#" class="bg-[#000]  hover:bg-primary text-white px-8 py-3 font-medium 
                    rounded-md  hover:text-white">Shop Now</a>
            </div>
        </div>
    </div>
</swiper-slide>
    <swiper-slide>
        <div class="transition bg-cover bg-no-repeat bg-center  py-[10rem]" v-bind:style="{ 'background-image': 'url(' + bgImage3 + ')' }">
            <div class="container pl-[6rem] max-md:pl-2">
            <h1 class="max-md:text-4xl text-6xl text-[#000] bg-opacity-40 font-medium mb-4 capitalize">
                best clothing wears <br> available for you
            </h1>
            <p class="text-[#000] bg-opacity-40 max-md:text-[14px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br>
                accusantium perspiciatis, sapiente
                magni eos dolorum ex quos dolores odio</p>
            <div class="mt-12">
                <a href="#" class="bg-[#000] border hover:bg-[#cc2121] text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-white">Shop Now</a>
            </div>
        </div>
    </div>
    </swiper-slide>
    </swiper>
    <!-- ./banner -->

    <!-- features -->
    <div class="container py-12">

        <div>
        <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div class=" rounded-sm px-3 py-6 flex justify-center items-center gap-3">
                <img src="../assets/images/icons/delivery-van.svg" alt="Delivery" class="w-10 h-10 object-contain">
                <div>
                    <h4 class="font-medium text-center capitalize text-[14px]">Free Shipping</h4>
                    <p class="text-gray-500 text-[12px]">Order over $200</p>
                </div>
            </div>
            <div class="border-l border-[#848484] max-md:border-none  rounded-sm px-3 py-6 flex justify-center items-center gap-3">
                <img src="../assets/images/icons/money-back.svg" alt="Delivery" class="w-10 h-10 object-contain">
                <div>
                    <h4 class="font-medium text-center capitalize text-[14px]">Money Returns</h4>
                    <p class="text-gray-500 text-[12px]">30 days money returns</p>
                </div>
            </div>
            <div class="border-l border-[#848484] max-md:border-none rounded-sm px-3 py-6 flex justify-center items-center gap-3">
                <img src="../assets/images/icons/service-hours.svg" alt="Delivery" class="w-10 h-10 object-contain">
                <div>
                    <h4 class="font-medium text-center capitalize text-[14px]">24/7 Support</h4>
                    <p class="text-gray-500 text-[12px]">Customer support</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- ./features -->

    <!-- categories -->
    <div class="container py-16 md:px-[13rem]">
        <div v-if="loading" class="flex justify-center items-center mt-3">
            <svg class="w-10 h-10" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(2 1)" stroke="#000" stroke-width="1.5">
                        <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="1;0;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;1;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;1;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;1;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;1;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;1;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;0;1;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;0;0;1" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                    </g>
                </g>
            </svg>
        </div> 
        <div v-else>
        <div v-if="categories.length === 0" class="p-2.5 xl:p-5">
            <p class="font-semibold text-sm leading-5 text-gray-700">No Products Available!!!</p>
        </div>  
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="category in categories" :key="category._id"  class="relative rounded-sm overflow-hidden  group md:h-64">
                <img v-if="category.imageUrl"  :src="back_url + category.imageUrl" alt="image" class="max-md:w-full md:h-64">
                <img v-else :src="bgImage2" alt="image" class="max-md:w-full md:h-64">
                <router-link :to="{name: 'ProductCategory', params: {categoryId: category._id} }"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-sans font-medium group-hover:bg-opacity-60 transition">{{category.name}}</router-link>
            </div>                   
        </div>
        </div>
     </div>
    <!-- ./categories -->

     <!-- new products -->
     <div class="container pb-16">
        <h2 class="text-2xl  text-[#000] text-center font-bold  mb-3">Top New Products</h2>
        <h4 class="text-1xl  text-[#000] text-center font-normal  mb-6">View our latest products</h4>

        <div v-if="loading" class="flex justify-center items-center mt-3">
            <svg class="w-10 h-10" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(2 1)" stroke="#000" stroke-width="1.5">
                        <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="1;0;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;1;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;1;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;1;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;1;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;1;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;0;1;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;0;0;1" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                    </g>
                </g>
            </svg>
        </div> 

        <div v-else>
            <div v-if="latestProducts.length === 0" class="p-2.5 xl:p-5">
                <p class="font-semibold text-sm leading-5 text-gray-700">No Products Available!!!</p>
            </div>           
            <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div v-for="latestProduct in latestProducts" :key="latestProduct._id" class="bg-white shadow rounded overflow-hidden group">
                    <div class="relative">
                        <router-link :to="{name: 'ProductDetails',  params: {id: latestProduct._id, productName: latestProduct.title} }">
                            <div v-for="imageUrl in latestProduct.images.slice(0, 1)" :key="imageUrl">
                                <img :src="back_url + imageUrl" alt="product img" class="w-full h-52 cursor-pointer">
                            </div>
                            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <p class="text-white text-md flex items-center justify-center hover:text-[#cc2121] cursor-pointer font-semibold  transition">
                                <span>View Product</span>
                                </p>                        
                            </div>
                        </router-link>
                    </div>
                    <div class="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-[#cc2121] transition">{{latestProduct.title}}</h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-[#cc2121] font-semibold">${{latestProduct.price}}</p>
                            <!-- <p class="text-sm text-gray-400 line-through">$55.90</p> -->
                        </div>
                        <!-- <div class="flex items-center">
                            <div class="flex gap-1 text-sm text-yellow-400">
                                <span><i class="fa-solid fa-star"></i></span>                                 
                            </div>
                            <div class="text-xs text-gray-500 ml-3">(150)</div>
                        </div> -->
                    </div>
                    <button @click="addToCart(latestProduct._id)"
                        class="block w-full py-1 text-center text-white bg-[#cc2121] border border-[#cc2121] rounded-b hover:bg-transparent hover:text-[#cc2121] transition">Add
                        to cart
                    </button>
                </div>           
            </div>         
        </div>
    </div>
     <!-- ./product -->

      <!-- ads -->
    <div class="container pb-16">
        <a href="#">
            <img :src="ads" alt="ads" class="w-full h-[40%]">
        </a>
    </div>
    <!-- ./ads -->

    <!--recommended  product -->
    <div class="container pb-16">
        <h2 class="text-2xl font-bold text-[#000]  mb-6">Recommended For You</h2>
        <div v-if="loading" class="flex justify-center items-center mt-3">
            <svg class="w-10 h-10" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(2 1)" stroke="#000" stroke-width="1.5">
                        <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="1;0;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;1;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;1;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;1;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;1;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;1;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;0;1;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#000">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;0;0;1" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                    </g>
                </g>
            </svg>
        </div> 

        <div v-else>
            <div v-if="recommendProducts.length === 0" class="p-2.5 xl:p-5">
                <p class="font-semibold text-sm leading-5 text-gray-700">No Products Available!!!</p>
            </div>           
            <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div v-for="recommendProduct in recommendProducts" :key="recommendProduct._id" class="bg-white shadow rounded overflow-hidden group">
                    <div class="relative">
                        <router-link :to="{name: 'ProductDetails',  params: {id: recommendProduct._id, productName: recommendProduct.title} }">
                            <div v-for="imageUrl in recommendProduct.images.slice(0, 1)" :key="imageUrl">
                                <img :src="back_url + imageUrl" alt="product img" class="w-full h-56 cursor-pointer">
                            </div>
                            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <p class="text-white text-md flex items-center justify-center hover:text-[#cc2121] cursor-pointer font-semibold  transition">
                                <span>View Product</span>
                                </p>                        
                            </div>
                        </router-link>
                    </div>
                    <div class="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-[#cc2121] transition">{{recommendProduct.title}}</h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-[#cc2121] font-semibold">${{recommendProduct.price}}</p>
                            <!-- <p class="text-sm text-gray-400 line-through">$55.90</p> -->
                        </div>
                        <!-- <div class="flex items-center">
                            <div class="flex gap-1 text-sm text-yellow-400">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="text-xs text-gray-500 ml-3">(150)</div>
                        </div> -->
                    </div>
                    <button  @click="addToCart(recommendProduct._id)"
                        class="block w-full py-1 text-center text-white bg-[#cc2121] border border-[#cc2121] rounded-b hover:bg-transparent hover:text-[#cc2121] transition">Add
                        to cart</button>
                </div>           
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
import bannerImage from '../assets/images/slide-1.jpg';
import bannerImage1 from '../assets/images/slide-3.jpg';
import bannerImage2 from '../assets/images/slide-4.jpg';
import bannerImage3 from '../assets/images/slide-2.jpg';
import adImage from '../assets/images/offer.jpg';
import axios from 'axios';
import api from '../api';
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Header, 
        Footer,  
        Swiper,
        SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },

  data() {
    return {
      bgImage: bannerImage,
      bgImage1: bannerImage1,
      bgImage2: bannerImage2,
      bgImage3: bannerImage3,
      ads : adImage,
      categories: [],
      latestProducts: [],
      recommendProducts: [],
      loading: true,
      back_url: 'https://shopo-api.onrender.com' 
      //back_url: 'http://localhost:5000' 

    };
  },
  created() {      
      this.fetchLatestProducts();  
      this.fetchRecommendedProducts();      
      this.fetchCategories();
  },

  methods: {
        fetchLatestProducts(){
            axios.get(`${api}/products/all`).then((response) => {
                this.latestProducts = response.data.products;    
                this.loading = false;       
                })
                .catch((error) => {
                console.error('Error getting products:', error);   
                this.loading = false;       
            });      
        },

        fetchRecommendedProducts(){
            axios.get(`${api}/products/random`).then((response) => {
                this.recommendProducts = response.data.randomProducts;    
                this.loading = false;       
                })
                .catch((error) => {
                console.error('Error getting products:', error);   
                this.loading = false;       
            });      
        },

        async addToCart(productId) {
            try {
                const token = sessionStorage.getItem('userToken');
                if (!token) {
                // If user is not authenticated, redirect to the login page
                this.$router.push('/login');
                return; 
                }

                const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                };

                // Fetch the product details including its price
                const productDetails = await axios.get(`${api}/products/${productId}`);
                const product = productDetails.data.product;

                const currentCartCount = this.$store.state.cartCount.cartCount;
                const quantityAdded = 1;

                await axios.post(`${api}/cart/add-to-cart`, {
                productId,
                quantity: 1,
                price: product.price,
                }, config);

                const updatedCartCount = currentCartCount + quantityAdded;
                this.$store.dispatch('updateCartCount', updatedCartCount);

                this.$toast.success('Product Added To Cart.', {
                timeout: 3000,
                });
            } catch (error) {
                this.$toast.error('An Error Occurred. Please try again!', {
                timeout: 9000,
                });
                console.error('Failed to add product to cart:', error);
                // Handle the error (e.g., show an error message)
            }
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

};
</script>