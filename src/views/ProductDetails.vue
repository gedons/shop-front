<template>
    <!-- header -->
       <Header/>
    <!-- end header -->

    

    
      <!-- breadcrumb -->
      <div class="container py-4 flex items-center gap-3">
        <router-link :to="{name: 'Index'}" class="text-[#9F2DBE] text-base">
            <i class="fa-solid fa-house"></i>
        </router-link>
        <span class="text-sm text-gray-400">
            <i class="fa-solid fa-chevron-right"></i>
        </span>
        <p class="text-gray-600 font-medium">Product Details</p>
      </div>
    <!-- ./breadcrumb -->

    <div class="flex flex-col min-h-screen">
    <div v-if="loading" class="flex justify-center items-center mt-3">
        <svg class="w-10 h-10" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(2 1)" stroke="#9F2DBE" stroke-width="1.5">
                    <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#9F2DBE">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="1;0;0;0;0;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#9F2DBE">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;1;0;0;0;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#9F2DBE">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;1;0;0;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#9F2DBE">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;0;1;0;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#9F2DBE">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;0;0;1;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#9F2DBE">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;0;0;0;1;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#9F2DBE">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;0;0;0;0;1;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#9F2DBE">
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
     <!-- product-detail -->
     <div class="container grid grid-cols-2 gap-6">
        <div>
            <img :src="back_url + productDetails.images.slice(0, 1)" alt="product" class="w-full h-96">
            <div class="flex flex-wrap gap-4 mt-4">
                <div v-for="(imageUrl, index) in productDetails.images.slice(0, 4)" :key="index" class="w-1/4">
                  <img :src="back_url + imageUrl" :alt="`Product Image ${index + 2}`" class="h-36 w-full cursor-pointer border border-[#9F2DBE]">
                </div>
              </div>
        </div>

        <div>
            <h2 class="text-3xl font-medium uppercase mb-2">{{productDetails.title}}</h2>
            <div class="flex items-center mb-4">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span v-if="productDetails.availability == 'InStock'" class="text-green-600">In Stock</span>
                    <span v-else class="text-red-600">Out of Stock</span>
                </p>
                <!-- <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Brand: </span>
                    <span class="text-gray-600">Apex</span>
                </p> -->
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Category: </span>
                    <span class="text-gray-600">{{productDetails.category.name}}</span>
                </p>
                <!-- <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">SKU: </span>
                    <span class="text-gray-600">BE45VGRT</span>
                </p> -->
            </div>
            <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p class="text-xl text-[#9F2DBE] font-semibold">$ {{productDetails.price}}</p>
                <!-- <p class="text-base text-gray-400 line-through">$55.00</p> -->
            </div>

            <p class="mt-4 text-gray-600">{{productDetails.description}}</p>

            <div class="pt-4">
                <h3 class="text-2xl text-gray-800 uppercase mb-1 font-medium">Size</h3>
                <div class="flex items-center gap-2">
                    <!-- <div class="size-selector">
                        <input type="radio" name="size" id="size-xs" class="hidden">
                        <label for="size-xs"
                            class="text-sm border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">{{productDetails.size}}</label>
                    </div> -->
                    <span class="text-sm">{{productDetails.size}}</span>
                 
                </div>
            </div>

            <div class="pt-4">
                <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">{{productDetails.color}}</h3>
                <div class="flex items-center gap-2">
                    <div class="color-selector">
                        <input type="radio" :id="productDetails.color" class="hidden" :value="productDetails.color" v-model="selectedColor">
                        <label :for="productDetails.color" class="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block" :style="{ backgroundColor: productDetails.color }"></label>
                      </div>
                </div>
            </div>

            <!-- <div class="mt-4">
                <h3 class="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div class="h-8 w-8 text-base flex items-center justify-center">4</div>
                    <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div> -->

            <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <button  v-if="productDetails.availability == 'InStock'" @click="addToCart(productDetails._id)"
                class="bg-[#9F2DBE] border border-[#9F2DBE] text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-[#9F2DBE] transition">
                <i class="fa-solid fa-bag-shopping"></i> Add to cart
                 </button>
                <button v-else
                    class="bg-[#9F2DBE] border border-[#9F2DBE] text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 cursor-not-allowed hover:bg-transparent hover:text-[#9F2DBE] transition" disabled title="Out of Stock">
                    <i class="fa-solid fa-bag-shopping"></i> Add to cart
                </button>
                <!-- <a href="#"
                    class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-[#9F2DBE] transition">
                    <i class="fa-solid fa-heart"></i> Wishlist
                </a> -->
            </div>

            <!-- <div class="flex gap-3 mt-4">
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div> -->
        </div>
    </div>
    <!-- ./product-detail -->

     <!-- description -->
     <div class="container pb-16">
        <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium mt-6">Product details</h3>
        <div class="w-3/5 pt-6">
            <div class="text-gray-600">
                <p>{{productDetails.description}}</p>
            </div>

            <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                    <th class="py-2 px-4 border border-gray-300 ">{{productDetails.color}}</th>
                </tr>
                <!-- <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                    <th class="py-2 px-4 border border-gray-300 ">Latex</th>
                </tr>
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                    <th class="py-2 px-4 border border-gray-300 ">55kg</th>
                </tr> -->
            </table>
        </div>
    </div>
    <!-- ./description -->

      <!-- related product -->
    <div class="container pb-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>

        <div v-if="loading" class="flex justify-center items-center mt-3">
            <svg class="w-10 h-10" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(2 1)" stroke="#9F2DBE" stroke-width="1.5">
                        <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#9F2DBE">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="1;0;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#9F2DBE">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;1;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#9F2DBE">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;1;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#9F2DBE">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;1;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#9F2DBE">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;1;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#9F2DBE">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;1;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#9F2DBE">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;0;1;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#9F2DBE">
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
            <div v-if="relatedProducts === 0 " class="p-2.5 xl:p-5">
                <p class="font-semibold text-sm leading-5 text-gray-700">No Products Available!!!</p>
            </div>   
            <div v-else class="grid grid-cols-4 gap-6">                
                <div v-for="relatedProduct in relatedProducts" :key="relatedProduct._id" class="bg-white shadow rounded overflow-hidden group">
                    <div class="relative">
                        <a :href="`/product/${relatedProduct._id}/${relatedProduct.title}`">
                            <div v-for="imageUrl in relatedProduct.images.slice(0, 1)" :key="imageUrl">
                                <img :src="back_url + imageUrl" alt="product img" class="w-full h-52 cursor-pointer">
                            </div>
                            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <p class="text-white text-md flex items-center justify-center hover:text-[#9F2DBE] cursor-pointer font-semibold  transition">
                                <span>View Product</span>
                                </p>                        
                            </div>
                        </a>
                    </div>
                    <div class="pt-4 pb-3 px-4">
                        <a :href="`/product/${relatedProduct._id}/${relatedProduct.title}`">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-[#9F2DBE] transition">{{relatedProduct.title}}</h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-[#9F2DBE] font-semibold">$ {{relatedProduct.price}}</p>
                            <!-- <p class="text-sm text-gray-400 line-through">$55.90</p> -->
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
    </div>
    <!-- ./related product -->

   </div> 

     <!-- footer -->
     <Footer/>
     <!-- end footer -->
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
import api from '../api';
import moment from 'moment';


export default {
  components: {
    Header, 
    Footer,

    
  },

  data() {
    return {
        
        productDetails: {
             color: '#FF0000'
        },
        selectedColor: null,
        relatedProducts: [],
        loading: true,
        back_url: 'http://localhost:5000' 
        
    };
  },

  created() {      
      this.fetchProductDetails();  
      this.fetchRelatedProduct();       
  },

  methods: {
        fetchProductDetails(){
            const id = this.$route.params.id;

            axios.get(`${api}/products/${id}`).then((response) => {
                this.productDetails = response.data.product; 
                this.loading = false;       
                })
                .catch((error) => {
                console.error('Error getting products:', error);   
                this.loading = false;       
            });      
        },

        fetchRelatedProduct(){
            const id = this.$route.params.id;            
            axios.get(`${api}/products/${id}/related`).then((response) => {
                this.relatedProducts = response.data.relatedProducts;
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

                const currentCartCount = this.$store.state.cartCount.cartCount;
                const quantityAdded = 1;

                await axios.post(`${api}/cart/add-to-cart`, {
                productId,
                quantity: 1,
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
        

  },


};
</script>