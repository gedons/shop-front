<template>
    <Header/>
   <section class="bg-white ">
    <div class="container px-12 py-12 mx-auto">
        <div>
            <p class="font-medium text-[#dc3545] ">GET IN TOUCH</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-[#343a40]">Send us some message</h1>

            <p class="mt-3 text-gray-500 text-[#343a40] font-light">Have some suggestions or just want to say hi? Contact us:</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span class="inline-block p-3 text-[#dc3545] rounded-full bg-[#f8f9fa] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-[#343a40]">Email</h2>
                    <p class="mt-2 text-sm text-gray-500 text-[#343a40]-400">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-[#dc3545] ">Daedsfashion@gmail.com</p>
                </div>


                <div>
                    <span class="inline-block p-3 text-[#dc3545] rounded-full bg-[#f8f9fa] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-[#343a40]">Office</h2>
                    <p class="mt-2 text-sm text-gray-500 text-[#343a40]-400">Come say hello at our office HQ.</p>
                    <p class="mt-2 text-sm text-[#dc3545] ">17 Awudu Ekpekha Boulevard Street Lekki Phase one</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-[#dc3545] rounded-full bg-[#f8f9fa] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-[#343a40]">Phone</h2>
                    <p class="mt-2 text-sm text-gray-500 text-[#343a40]-400">Mon-Fri from 8am to 5pm.</p>
                    <p class="mt-2 text-sm text-[#dc3545] ">+234 (555) 000-0000</p>
                </div>
            </div>

            <div class="p-4 py-6 rounded-lg bg-[#f6f6f6] md:p-8">
                <form>
                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-600 text-[#343a40]-200">First Name</label>
                            <input type="text" placeholder="John " class="block w-full px-5 py-2.5 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  text-[#343a40] dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 text-[#343a40]-200">Last Name</label>
                            <input type="text" placeholder="Doe" class="block w-full px-5 py-2.5 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  text-[#343a40] dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600 text-[#343a40]-200">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  text-[#343a40] dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600 text-[#343a40]-200">Message</label>
                        <textarea class="block w-full h-32 px-5 py-2.5 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600  text-[#343a40] dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-[#fff] capitalize transition-colors duration-300 transform bg-[#252525] rounded-lg hover:bg-[#dc3545] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
    <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
</section>
<Footer/>
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
        

  },


};
</script>