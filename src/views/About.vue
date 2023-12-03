<template>
    <Header/>

      <!-- breadcrumb -->
      <div class="container justify-center py-[3rem] bg-[#f6f6f6] flex items-center gap-3 mb-[5rem]">
    <router-link :to="{name: 'Index'}" class="text-primary text-base">
        <i class="fa-solid fa-house"></i>
    </router-link>
    <span class="text-sm text-gray-400">
        <i class="fa-solid fa-chevron-right"></i>
    </span>
    <p class="text-gray-600 font-medium">About Us</p>
   </div>
  <!-- ./breadcrumb -->

      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold">Welcome to Daeds Clothing Store - Where Individuality Takes Center Stage!</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">

                At Daeds, we're not just a fashion destination; we're the embodiment of a movement, a celebration of freedom,
                and a sanctuary for authentic self-expression. We stand proudly for a world where you have the absolute liberty and confidence to be exactly who you are,
                free from judgment, and ready to experiment with your unique style.
                </p>
                <h3 class="mt-5">Why Daeds Store?</h3>
                <ul class="list-none">
                  <li class="py-2">
                    <div class=" items-center">
                        <h4 class="text-gray-600">
                            Authenticity :
                        </h4>
                        <p>We celebrate your uniqueness and offer authentic wears that resonate with your individual style.</p>
                      </div>
                  </li>
                  <li class="py-2">
                    <div class=" items-center">
                        <h4 class="text-gray-600">Affordability:</h4>
                        <p>Enjoy retail and wholesale prices that allow you to express yourself without breaking the bank.</p>
                      </div>
                  </li>
                  <li class="py-2">
                    <div class=" items-center">
                        <h4 class="text-gray-600">Diversity</h4>
                        <p>From trendy streetwear to classic staples, our collections cater to a wide range of tastes and preferences.</p>
                      </div>
                  </li>
                  <li class="py-2">
                    <div class=" items-center">
                      </div>
                      <div>
                        <h4 class="text-gray-600">Empowerment:</h4>
                        <p>Whether you're buying for yourself or exploring entrepreneurial opportunities, Daeds empowers you to make a statement.</p>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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