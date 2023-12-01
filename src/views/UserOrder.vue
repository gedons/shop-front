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
  <div class="container grid grid-cols-2  items-start pb-16 pt-4 gap-6">

    <div class="col-span-4 border border-gray-200 p-4 rounded">
        <h3 class="text-lg font-medium capitalize mb-4">Customer Details</h3>
        <div class="space-y-4">             
            <div>
                <label  class="text-gray-600">Email</label>
                <p>{{ user.email }}</p>

                <label  class="text-gray-600">Name</label>
                <p>{{ user.name }}</p>

                <label  class="text-gray-600">Address</label>
                <p>{{ user.address }}</p>

                <label  class="text-gray-600">Country</label>
                <p>{{ user.country }}</p>

                <label  class="text-gray-600">State</label>
                <p>{{ user.state }}</p>

                <label  class="text-gray-600">Address</label>
                <p>{{ user.address }}</p>

                <label  class="text-gray-600">Postcode</label>
                <p>{{ user.postcode }}</p>
            </div>           
        </div>

    </div>

    <div class="col-span-4 border border-gray-200 p-4 rounded">
        <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
        <div class="space-y-2">
            <div class="flex justify-between" v-for="cartItem in cartProducts" :key="cartItem.product._id">
                <div>
                    <h5 class="text-gray-800 font-medium">{{ cartItem.product.title }}</h5>                   
                </div>
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

        <a href="#"
            class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Place
            order</a>
    </div>

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
            this.user = response.data;
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

        // Method to initiate payment
        initiatePayment() {
            // Logic to initiate payment based on the calculated total price
            // Make an API call to place an order and initialize payment
            // Use this.$router.push to redirect to the payment gateway or handle the payment process
        },
    },
  };
  </script>
  