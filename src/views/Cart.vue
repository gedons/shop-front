<template>
    <!-- header -->
       <Header/>
    <!-- end header -->

   <!-- breadcrumb -->
   <div class="container py-4 flex items-center gap-3">
    <router-link :to="{name: 'Index'}" class="text-primary text-base">
        <i class="fa-solid fa-house"></i>
    </router-link>
    <span class="text-sm text-gray-400">
        <i class="fa-solid fa-chevron-right"></i>
    </span>
    <p class="text-gray-600 font-medium">Cart</p>
   </div>
  <!-- ./breadcrumb -->

    <div class="flex flex-col min-h-screen">
    <!-- wrapper -->
    <div class="container grid grid-cols-1 items-start gap-6 pt-4 pb-16">

        <!-- cart -->
        <div v-if="$store.state.cartCount.loading" class="flex justify-center items-center mt-3">
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
        <div v-else class="col-span-9 space-y-4">  
            <div v-if="cartProducts.length === 0"> 
                <p>No item in the cart</p>
            </div> 
            <div class="space-y-3">
                <div v-for="cartItem in cartProducts" :key="cartItem._id" class="flex items-center justify-between border gap-3 p-4 border-gray-200 rounded">
                    <div v-for="imageUrl in cartItem.product.images.slice(0, 1)"  class="w-28">
                        <img :src="back_url + imageUrl"  alt="product img" class="w-full">
                    </div>
                    <div class="w-1/3">
                        <h2 class="text-gray-800 text-xl font-medium uppercase">{{cartItem.product.title}}</h2>
                        <p class="text-gray-500 text-sm">Quantity: <span class="text-green-600">{{cartItem.quantity}}</span></p>
                         <div class="mt-1">
                            <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                <button @click="decreaseQuantity(cartItem)" class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</button>
                                <div class="h-8 w-8 text-base flex items-center justify-center">{{cartItem.quantity}}</div>
                                <button @click="increaseQuantity(cartItem)" class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="text-primary text-lg font-semibold">${{ calculateTotalPrice(cartItem) }}</div>
                    
                    <!-- <a href="#"
                        class="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium">add
                        to cart</a> -->

                    <div class="text-gray-600 cursor-pointer hover:text-primary">
                        <button @click="removeFromCart(cartItem.product._id)"><i class="fa-solid fa-trash"></i></button>
                    </div>

                   
                </div>
                <p  v-if="cartProducts.length !== 0">Total: <span class="font-medium">${{ TotalPrice() }}</span></p>
                <div class="flex justify-between">
                    <router-link  :to="{name: 'UserProducts'}"  v-if="cartProducts.length === 0" class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">Continue Shopping</router-link>
                    <router-link :to="{name: 'UserOrder'}" v-else class="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">Proceed to Checkout</router-link>
                </div>  
            </div>            
        </div>
        <!-- ./cart -->

    </div>
    <!-- ./wrapper -->


    
        <!-- footer -->
        <Footer/>
        <!-- end footer -->
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import bannerImage from '../assets/images/bannerq.jpg';
import adImage from '../assets/images/offer.jpg';
import axios from 'axios';
import api from '../api';
import moment from 'moment';

export default {
  components: {
    Header, 
    Footer,  
  },

  computed: {
    cartProducts() {
      return this.$store.state.cartCount.cartItems;
    },
  },

  data() {
    return {
      bgImage: bannerImage,
      ads: adImage,
      latestProducts: [],
      recommendProducts: [],
      loading: true,
      //back_url: 'https://shopo-api.onrender.com' 
      back_url: 'http://localhost:5000',
    };
  },

  created() {
    this.fetchUserCart();
  },

  methods: {
    async fetchUserCart() {
      await this.$store.dispatch('fetchUserCart');
    },

    calculateTotalPrice(cartItem) {
      return cartItem.product.price * cartItem.quantity;
    },

    TotalPrice() {
      // Logic to calculate total price from cart items
      // Replace this with your own calculation logic
      return this.cartProducts.reduce((total, cartItem) => {
        return total + cartItem.product.price * cartItem.quantity;
      }, 0);
    },

    async decreaseQuantity(cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        await this.updateCartItemQuantity(cartItem);
      }
    },

    async increaseQuantity(cartItem) {
      cartItem.quantity += 1;
      await this.updateCartItemQuantity(cartItem);
    },

    async updateCartItemQuantity(cartItem) {
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

        await axios.put(`${api}/cart/update-quantity/${cartItem.product._id}`, {
          productId: cartItem.product._id,
          quantity: cartItem.quantity,
        }, config);

       // await this.fetchUserCart();
      } catch (error) {
        console.error('Failed to update cart item quantity:', error);
        // Handle the error
      }
    },

    async removeFromCart(productId) {
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

        await axios.delete(`${api}/cart/remove-from-cart/${productId}`, config);
        await this.fetchUserCart();
        await this.$store.dispatch('updateCartAfterRemoval', productId);
      } catch (error) {
        console.error('Failed to remove product from cart:', error);        
      }
    },
  },
};
</script>
