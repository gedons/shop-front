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


    <!-- account wrapper -->
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

        <!-- sidebar -->
        <div class="col-span-12 md:col-span-3">
            <div class="px-4 py-3 shadow flex items-center gap-4">                
                <div class="flex-grow">
                    <p class="text-gray-600">Hello,</p>
                    <h4 class="text-gray-800 font-medium">{{user.firstname}} {{user.lastname}}</h4>
                </div>
            </div>

            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div class="space-y-1 pl-8">
                    <router-link :to="{name: 'UserAccount'}" class="relative text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-address-card"></i>
                        </span>
                         Account
                    </router-link>             
                    <router-link :to="{name: 'UpdateAccount'}" class="relative hover:text-primary block capitalize transition">
                        Manage Account
                    </router-link>
                    <router-link :to="{name: 'ChangePassword'}" class="relative hover:text-primary block capitalize transition">
                        Change password
                    </router-link>
                </div>

                <div class="space-y-1 pl-8 pt-4">
                    <p class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-solid fa-box-archive"></i>
                        </span>
                        My order history
                    </p>
                    <router-link :to="{name: 'UserOrders'}" class="relative hover:text-primary block capitalize transition">
                        All Orders
                    </router-link>
                    <router-link :to="{name: 'PendingOrders'}" class="relative hover:text-primary block capitalize transition">
                        Pending Orders
                    </router-link>
                    
                </div>

                <!-- <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-credit-card"></i>
                        </span>
                        Payment methods
                    </a>
                    <a href="#" class="relative hover:text-primary block capitalize transition">
                        voucher
                    </a>
                </div> -->

                <!-- <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-heart"></i>
                        </span>
                        My wishlist
                    </a>
                </div> -->

                <div class="space-y-1 pl-8 pt-4">
                    <button @click="logout" class="relative hover:text-primary block font-medium capitalize transition">                        
                        Logout
                    </button>
                </div>


            </div>
        </div>
        <!-- ./sidebar -->

        <!-- info -->
        <div class="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div class="space-y-4 md:col-span-9">
                <h3 class="text-md font-medium capitalize mb-4">Change Password</h3>
                 <form @submit.prevent="changePassword">
                     
                    <div class="mt-3">
                        <label for="currentpassword" class="text-gray-600">Current Password</label>
                        <input type="password" v-model="formData.currentPassword" id="currentpassword" class="input-box">
                    </div>   
                    <div class="mt-3">
                        <label for="newPassword" class="text-gray-600">New Password</label>
                        <input type="password" v-model="formData.newPassword" id="newPassword" class="input-box">
                    </div>  
                    
                    <div class="mt-3">
                        <button type="submit" class="bg-gray-900 border border-bg-gray-900 text-white px-4 py-2 font-medium 
                        rounded-lg hover:bg-transparent hover:text-gray-900">Update</button>
                    </div>
                </form>
                </div>

        </div>
        <!-- ./info -->

    </div>
    <!-- ./account wrapper -->



    <!-- footer -->
    <Footer/>
    <!-- end footer -->

</template>

<script>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import bannerImage from '../../assets/images/bannerq.jpg';
import adImage from '../../assets/images/offer.jpg';
import axios from 'axios';
import api from '../../api';
import moment from 'moment';

export default {
  components: {
    Header, 
    Footer,  
  },

  data() {
    return {
      bgImage: bannerImage,
      ads : adImage,
      user: {},
      formData: {
        currentPassword: '',
        newPassword: '',
      },
      loading: true,
      back_url: 'https://shopo-api.onrender.com' 
      //back_url: 'http://localhost:5000' 

    };
  },
  created() {      
          this.fetchUserData();    
        //  this.fetchUserOrder();  
        //  this.fetchUserOrderCount();
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

    async changePassword() {
    try {
        const token = sessionStorage.getItem('userToken');
        const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        };

        const response = await axios.put(`${api}/users/change-password`, this.formData, config);

        if (response.status === 200) {
        this.$toast.success('Password updated successfully.', {
            timeout: 3000,
        });
        this.$router.push({ name: 'UserAccount' });
        } else {
        this.$toast.error('An Error Occurred!!. Try Again', {
            timeout: 3000,
        });
        }
    } catch (error) {
        if (error.response) {       
        this.$toast.error('Error: ' + error.response.data.message, {
            timeout: 3000,
        });
        } else if (error.request) {        
        console.error('No response received:', error.request);
        this.$toast.error('No response received from the server', {
            timeout: 3000,
        });
        } else {       
        console.error('Request error:', error.message);
        this.$toast.error('Request Error: ' + error.message, {
            timeout: 3000,
        });
        }
    }
    },
  

  },

};
</script>