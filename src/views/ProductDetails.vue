<template>
    <!-- header -->
       <Header/>
    <!-- end header -->

    

    
    <!-- breadcrumb -->
    <div class="container justify-center py-[3rem] bg-[#f6f6f6] flex items-center gap-3 mb-[5rem]">
    <router-link :to="{name: 'Index'}" class="text-primary text-base">
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
                <g transform="translate(2 1)" stroke="#cc2121" stroke-width="1.5">
                    <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#cc2121">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="1;0;0;0;0;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#cc2121">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;1;0;0;0;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#cc2121">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;1;0;0;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#cc2121">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;0;1;0;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#cc2121">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;0;0;1;0;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#cc2121">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;0;0;0;1;0;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#cc2121">
                        <animate attributeName="fill-opacity"
                            begin="0s" dur="1.3s"
                            values="0;0;0;0;0;0;1;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#cc2121">
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
     <div class="container grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <img :src="productDetails.images.slice(0, 1)" alt="product" class="w-72 h-36 md:w-full md:h-96">
            <div class="flex flex-wrap gap-4 mt-4">
                <div v-for="(imageUrl, index) in productDetails.images.slice(0, 4)" :key="index" class="w-1/4">
                  <img :src="imageUrl" :alt="`Product Image ${index + 2}`" class="h-11 md:h-36 w-full cursor-pointer border border-[#cc2121]">
                </div>
              </div>
        </div>

        <div>
            <h2 class="text-3xl font-medium uppercase mb-2">{{productDetails.title}}</h2>           
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
            <div class="flex items-baseline mb-1 space-x-2 mt-4">
                <p class="text-2xl text-[#dc3545] font-semibold">$ {{productDetails.price}}</p>
                <!-- <p class="text-base text-gray-400 line-through">$55.00</p> -->
            </div>

            <p class="mt-4 text-gray-600">{{productDetails.description}}</p>
            <div class="pt-4">                 
                <h3 class="text-xl text-gray-800 uppercase mb-1 font-medium">Sizes: </h3>
                <select v-model="selectedSize" id="sizeDropdown" class="border rounded-md px-4 py-2 focus:outline-none focus:border-gray-500" style="width: 150px;">
                    <option v-for="(size, index) in productDetails.sizes" :key="index" :value="size">
                        {{ size }}
                    </option>
                </select>
            </div>
            <div class="pt-4">
                <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Colors: </h3>
                <select v-model="selectedColor" id="colorDropdown" class="border rounded-md px-4 py-2 focus:outline-none focus:border-gray-500" style="width: 150px;">
                    <option v-for="(color, index) in productDetails.colors" :key="index" :value="color">
                      {{ color }}
                    </option>
                </select>
            </div>            
            <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                <button  v-if="productDetails.availability == 'InStock'" @click="addToCart(productDetails._id)"
                class="bg-[#cc2121] border border-[#cc2121] text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-[#cc2121] transition">
                <i class="fa-solid fa-bag-shopping"></i><span>Add to Cart</span>
                 </button>
                <button v-else
                    class="bg-[#cc2121] border border-[#cc2121] text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 cursor-not-allowed hover:bg-transparent hover:text-[#cc2121] transition" disabled title="Out of Stock">
                    <i class="fa-solid fa-bag-shopping"></i><span>Add to Cart</span>
                </button>
                <!-- <a href="#"
                    class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-[#dc3545] transition">
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
        <h3 class="border-b border-gray-200 font-semibold text-gray-800 pb-3  mt-6">Product details</h3>
        <div class="w-full pt-6">
            <div class="text-gray-600">
                <p>{{productDetails.description}}</p>
            </div>

            <h3 class=" font-medium text-gray-800 pb-3 mt-6">Colors: </h3>
            <div class="flex items-center">
                <div v-for="(color, index) in productDetails.colors" :key="index" class="w-6 h-6 rounded-full mr-2" :style="{ backgroundColor: color }"></div>
            </div>

            <h3 class=" font-medium text-gray-800 pb-3 mt-6">Sizes: </h3>
            <div class="flex items-center">
                <div v-for="(size, index) in productDetails.sizes" :key="index" class="w-6 h-6 rounded-full mr-2">
                    <p>{{size}},</p>
                </div>
            </div>
              
        </div>
    </div>
    <!-- ./description -->

    <!-- review -->
    <div class="container pb-9">
        <h3 class="border-b border-gray-200 text-gray-800 pb-3 font-semibold mt-6">Reviews</h3>
        <div class="w-full md:w-3/5 pt-6">
            <div v-if="reviews.length > 0">                
                <div v-for="review in reviews" :key="review._id">
                <h2 class="font-semibold">{{review.user.firstname}} {{review.user.lastname}}</h2>
                    <template v-for="n in 5">
                        <span class="text-yellow-400" v-if="n <= review.rating">
                        <i class="fa-solid fa-star"></i>
                        </span>
                        <span v-else>
                        <i class="far fa-star"></i>
                        </span>
                    </template>                   
                  <p>Comment: {{ review.comment }}</p>    
                  <!-- <button @click="deleteReview(review._id)" class="text-red-500 ml-2 focus:outline-none">
                    <i class="fas fa-trash"></i>
                  </button>               -->
                </div>
              </div>
              <div v-else>
                <p>No reviews available for this product.</p>
              </div>
        </div>
    </div>

    <div class="container pb-16">
        <h3 class="border-b border-gray-200 text-gray-800 pb-3 font-semibold mt-6">Add a review</h3>
        <div class="w-full md:w-3/5 pt-6">
            <form @submit.prevent="submitReview">
                <div class="mb-4">
                    <label for="rating" class="block text-gray-700">Rating:</label>
                    <input type="number" id="rating" v-model="rating" min="1" max="5" required
                        class="w-full rounded-md border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                </div>
    
                <div class="mb-4">
                    <label for="comment" class="block text-gray-700">Comment:</label>
                    <textarea id="comment" v-model="comment" required
                        class="w-full rounded-md border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
                </div>
    
                <button type="submit"
                    class="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:bg-opacity-90">
                    Submit Review
                </button>
            </form>
        </div>
    </div>
    
    <!-- ./review -->

      <!-- related product -->
    <div class="container pb-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>

        <div v-if="loading" class="flex justify-center items-center mt-3">
            <svg class="w-10 h-10" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(2 1)" stroke="#dc3545" stroke-width="1.5">
                        <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#dc3545">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="1;0;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#dc3545">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;1;0;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#dc3545">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;1;0;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#dc3545">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;1;0;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#dc3545">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;1;0;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#dc3545">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;1;0;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#dc3545">
                            <animate attributeName="fill-opacity"
                                begin="0s" dur="1.3s"
                                values="0;0;0;0;0;0;1;0" calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#dc3545">
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
                <div v-for="relatedProduct in relatedProducts" :key="relatedProduct._id" class="w-72 bg-white shadow rounded overflow-hidden group">
                    <div class="relative">
                        <a :href="`/product/${relatedProduct._id}/${relatedProduct.title}`">
                            <div v-for="imageUrl in relatedProduct.images.slice(0, 1)" :key="imageUrl">
                                <img :src="imageUrl" alt="product img" class="w-full h-52 cursor-pointer">
                            </div>
                            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <p class="text-white text-md flex items-center justify-center hover:text-[#dc3545] cursor-pointer font-semibold  transition">
                                <span>View Product</span>
                                </p>                        
                            </div>
                        </a>
                    </div>
                    <div class="pt-4 pb-3 px-4">
                        <a :href="`/product/${relatedProduct._id}/${relatedProduct.title}`">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-[#dc3545] transition">{{relatedProduct.title}}</h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-[#dc3545] font-semibold">$ {{relatedProduct.price}}</p>
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
                    <a href="#"
                        class="block w-full py-1 text-center text-white bg-[#dc3545] border border-[#dc3545] rounded-b hover:bg-transparent hover:text-[#dc3545] transition">Add
                        to cart</a>
                </div>
            </div>
        </div>
    </div>
    <!-- ./related product -->

   </div> 



</div>
<!-- footer -->
<Footer/>
<!-- end footer -->
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
        
        productDetails: [],
        selectedSize: '',
        selectedColor: '',
        relatedProducts: [],
        reviews: [],
        loading: true,
        rating: 0,
        comment: '',
        back_url: 'https://shopo-api.onrender.com' 
      // back_url: 'http://localhost:5000' 
        
    };
  },

  created() {      
      this.fetchProductDetails();  
      this.fetchRelatedProduct(); 
      const productId = this.$route.params.id; 
      this.fetchReviewsForProduct(productId);      
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

                // Fetch the product details including its price
                const productDetails = await axios.get(`${api}/products/${productId}`);
                const product = productDetails.data.product;

                const currentCartCount = this.$store.state.cartCount.cartCount;
                const quantityAdded = 1;

                await axios.post(`${api}/cart/add-to-cart`, {
                productId,
                quantity: 1,
                price: product.price,
                size: this.selectedSize, 
                color: this.selectedColor,
                }, config);

                const updatedCartCount = currentCartCount + quantityAdded;
                this.$store.dispatch('updateCartCount', updatedCartCount);

                this.$toast.success('Product Added To Cart.', {
                timeout: 3000,
                });
            } catch (error) {
                this.$toast.info('An Error Occurred', {
                timeout: 9000,
                });
                console.error('Failed to add product to cart:', error);
                this.$router.push('/login');
                return; 
            }
        },

        async submitReview() {
        const productId = this.$route.params.id; 
        try {
            const token = sessionStorage.getItem('userToken');
            if (!token) {
            this.$router.push('/login');
            return;
            }
            const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            };
            const response = await axios.post(`${api}/reviews/products/${productId}/reviews`, {
            rating: this.rating,
            comment: this.comment
            }, config)
            .then(success => {
                    if (success) {
                    this.$toast.success('Review Added Successfully.', {
                        timeout: 3000, 
                    });		                         
                    this.fetchReviewsForProduct(productId);  
                    this.comment = ""; 
                    this.rating = 0;                                     
                    } else {
                        this.$toast.error('An Error Occured. try again!', {
                            timeout: 9000, 
                        });	          
                    }
                })                     
        } catch (error) {
            console.error('Failed to add review:', error.response.data.message);
            
        }
        },

        async fetchReviewsForProduct(productId) {
        try {
            const response = await axios.get(`${api}/reviews/products/${productId}/reviews`);
            this.reviews = response.data.reviews;
        } catch (error) {
            console.error('Failed to fetch reviews:', error);            
        }
        },

        // async deleteReview(reviewId) {
        // try {
        //     const token = sessionStorage.getItem('userToken');
        //     if (!token) {
        //     this.$router.push('/login');
        //     return;
        //     }
        //     const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        //     };
        // const response = await axios.delete(`${api}/reviews/reviews/${reviewId}`, config);
        // console.log(response.data.message); 
        //     this.fetchReviewsForProduct(reviewId);  
        // } catch (error) {
        // console.error('Failed to delete review:', error);
        // // Handle error (e.g., show an error message)
        // }
        // }


  },


};
</script>