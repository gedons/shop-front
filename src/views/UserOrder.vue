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
            <p class="text-gray-600 font-medium">Checkout</p>
        </div>
        <!-- ./breadcrumb -->

    <!-- Display user details and items in the cart -->
    <div class="flex flex-col min-h-screen">
     
  <!-- wrapper -->
  <div v-if="cartProducts.length > 0" class="container grid grid-cols-2  items-start pb-16 pt-4 gap-6">

    <div class="col-span-4 border border-gray-200 p-4 rounded">
        <h3 class="text-lg font-medium capitalize mb-4">Customer Details</h3>
        <div class="space-y-4">            
            <div class="flex flex-col">
                <label  class="text-gray-600 font-medium">Email</label>
                <p>{{ user.email }}</p>
            </div>
            <div class="flex flex-col">
                <label  class="text-gray-600 font-medium">Name</label>
                <p>{{ user.firstname }} {{ user.lastname }}</p>
            </div>
            <div class="flex flex-col">
                <label  class="text-gray-600 font-medium">Address</label>
                <p>{{ user.address }}</p>
            </div>
            <div class="flex flex-col">
                <label  class="text-gray-600 font-medium">Country</label>
                <p>{{ user.country }}</p>
            </div>
            <div class="flex flex-col">
                <label  class="text-gray-600 font-medium">State</label>
                <p>{{ user.state }}</p>
            </div>
            <div class="flex flex-col">
                <label  class="text-gray-600 font-medium">Address</label>
                <p>{{ user.address }}</p>
            </div>
            <div class="flex flex-col">
                <label  class="text-gray-600 font-medium">Postcode</label>
                <p>{{ user.postcode }}</p>
            </div>           
        </div>

    </div>

    <div class="col-span-4 border border-gray-200 p-4 rounded">
        <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
        <div class="space-y-2">
            <div class="flex justify-between" v-for="cartItem in cartProducts" :key="cartItem.product._id">                
                    <h5 class="text-gray-800 font-medium">{{ cartItem.product.title }}</h5>                                                                                      
                <p class="text-gray-600">
                   x {{ cartItem.quantity }}
                </p>
                <p class="text-gray-800 font-medium">${{ TotalPrice(cartItem) }}</p>
            </div>           
        </div>

        <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
            <p>subtotal</p>
            <p>${{ total }}</p>
        </div>

        <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
            <p>shipping</p>
            <p>Free</p>
        </div>

        <div class="flex justify-between text-gray-800 font-medium py-3 uppercas">
            <p class="font-semibold">Total</p>
            <p>${{ total }}</p>
        </div>

        <div class="flex items-center mb-4 mt-2">
            <input type="checkbox" name="aggrement" id="aggrement"
                class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3">
            <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <a href="#"
                    class="text-primary">terms & conditions</a></label>
        </div>

        <button @click="initiatePayment"
            class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Pay Now</button>
    </div>

  </div>

  <div v-else class="container grid grid-cols-2  items-start pb-16 pt-4 gap-6">
    <p>No Order Available</p>
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
  import api from '../api';
  import axios from 'axios';
  export default {
    components: {
    Header, 
    Footer,  
  },

  
    data() {
      return {
        user: {},
        total: 0, 
      };
    },
  
    computed: {
      cartProducts() {      
        return this.$store.state.cartCount.cartItems;
      },
    },
  
    created() {
      this.fetchUserData();
      this.total = this.calculateTotalPrice();
      this.fetchUserCart();
    },
  
    methods: {

        async fetchUserData() {
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
            // Make an API call to fetch user details
            const response = await axios.get(`${api}/users/profile`, config);
            // Store user details in the component data
            this.user = response.data.user;
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            // Handle error
        }
        },        

        async fetchUserCart() {
            await this.$store.dispatch('fetchUserCart');
        },

        TotalPrice(cartItem) {
        return cartItem.product.price * cartItem.quantity;
        },
     
        calculateTotalPrice() {
            return this.cartProducts.reduce((total, cartItem) => {
            return total + cartItem.product.price * cartItem.quantity;
            }, 0);
        },

        async initiatePayment() {
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

            // Replace this logic with data needed for the API call
            const email = this.user.email;
            const amount = this.total;  
            const products = this.cartProducts.map(item => {
            return {
                product: item.product._id,
                quantity: item.quantity,
            };
            });

            // Make API call to place order and initialize payment
            const response = await axios.post(`${api}/orders/place-order`, {
            email,
            amount,
            products,
            }, config);

           
            const authorizationURL = response.data.paymentInfo.data.authorization_url;
            window.location.href = authorizationURL;
        } catch (error) {
            console.log('Failed to initiate payment:', error);
            
        }
        },
    },
  };
  </script>
  