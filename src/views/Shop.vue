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
    <p class="text-gray-600 font-medium">All Products</p>
   </div>
  <!-- ./breadcrumb -->


<div class="flex flex-col min-h-screen">

<!-- shop wrapper -->
<div class="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
   <!-- sidebar -->
   <!-- drawer init and toggle -->
   <div class="text-center md:hidden" >
       <button
           class="text-white hover:bg-red-400 bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none block md:hidden"
           type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example"
           aria-controls="drawer-example">
           <ion-icon name="grid-outline"></ion-icon>
       </button>
   </div>

   <!-- drawer component -->
   <div id="drawer-example" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80" tabindex="-1" aria-labelledby="drawer-label">
       <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 "><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Menu</h5>
       <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center  dark:hover:text-white" >
       <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       <span class="sr-only">Close menu</span>
       </button>
       <div class="divide-y divide-gray-200 space-y-5">
           <div>
               <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
               <div class="space-y-2">
                   <div v-if="categories.length === 0" class="p-2.5 xl:p-5">
                       <p class="font-semibold text-sm leading-5 text-gray-700">No Category Available!!!</p>
                   </div>
                   <div v-else v-for="category in categories" :key="category._id" class="flex items-center">
                       <input
                       type="checkbox"
                       :id="category._id"
                       class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                       v-model="selectedCategories"
                       :value="category._id"
                       @change="filterProducts"
                     >
                     <label :for="category._id" class="text-gray-600 ml-3 cursor-pointer">{{ category.name }}</label>                         
                   </div>
                   
               </div>
           </div>                                     


       </div>
        
   </div>

   <!-- ./sidebar -->
   <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
       <div class="divide-y divide-gray-200 space-y-5">
           <div>
               <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
               <div class="space-y-2">
                   <div v-if="categories.length === 0" class="p-2.5 xl:p-5">
                       <p class="font-semibold text-sm leading-5 text-gray-700">No Category Available!!!</p>
                   </div>
                   <div v-else v-for="category in categories" :key="category._id" class="flex items-center">
                       <input
                       type="checkbox"
                       :id="category._id"
                       class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                       v-model="selectedCategories"
                       :value="category._id"
                       @change="filterProducts"
                     >
                     <label :for="category._id" class="text-gray-600 ml-3 cursor-pointer">{{ category.name }}</label>                         
                   </div>
                   
               </div>
           </div>                                     

       </div>
   </div>
   <!-- products -->
   <div class="col-span-3">
       <div class="flex items-center mb-4">
           <select name="sort" id="sort"
             class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
             v-model="selectedSortOption"
             @change="sortProducts"
           >
             <option value="">Default sorting</option>
             <option value="price-low-to-high">Price low to high</option>
             <option value="price-high-to-low">Price high to low</option>
             <option value="latest">Latest product</option>
           </select>
         </div>

       <div v-if="loading" class="flex justify-center items-center mt-3">
        <svg class="w-10 h-10" version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
        <circle fill="#000" stroke="none" cx="6" cy="50" r="6">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 15 ; 0 -15; 0 15" 
             repeatCount="indefinite" 
             begin="0.1"/>
        </circle>
        <circle fill="#000" stroke="none" cx="30" cy="50" r="6">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 10 ; 0 -10; 0 10" 
             repeatCount="indefinite" 
             begin="0.2"/>
        </circle>
        <circle fill="#000" stroke="none" cx="54" cy="50" r="6">
          <animateTransform 
             attributeName="transform" 
             dur="1s" 
             type="translate" 
             values="0 5 ; 0 -5; 0 5" 
             repeatCount="indefinite" 
             begin="0.3"/>
        </circle>
        </svg>
       </div> 

       <div v-else class="grid md:grid-cols-3 grid-cols-2 gap-6">
           <div v-if="filteredProducts.length === 0" class="p-2.5 xl:p-5">
               <p class="font-semibold text-sm leading-5 text-gray-700">No Products Available!!!</p>
           </div>                 
           <div  v-else v-for="product in filteredProducts" :key="product._id" class="bg-white shadow rounded overflow-hidden group">
               <div class="relative">
                   <router-link :to="{name: 'ProductDetails',  params: {id: product._id, productName: product.title} }">
                       <div v-for="imageUrl in product.images.slice(0, 1)" :key="imageUrl">
                           <img :src="imageUrl" alt="product img" class="w-full h-52 cursor-pointer">
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
                       <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-[#cc2121] transition">{{product.title}}</h4>
                   </a>
                   <div class="flex items-baseline mb-1 space-x-2">
                       <p class="text-xl text-[#cc2121] font-semibold">${{product.price}}</p>
                       <!-- <p class="text-sm text-gray-400 line-through">$55.90</p> -->
                   </div>
                   <!-- <div class="flex items-center">
                       <div class="flex gap-1 text-sm text-yellow-400">
                           <span><i class="fa-solid fa-star"></i></span>                                 
                       </div>
                       <div class="text-xs text-gray-500 ml-3">(150)</div>
                   </div> -->
               </div>
               <button @click="addToCart(product._id)"
                   class="block w-full py-1 text-center text-white bg-[#cc2121] border border-[#cc2121] rounded-b hover:bg-transparent hover:text-[#cc2121] transition">Add
                   to cart
               </button>
           </div>                                
       </div>
   </div>

   <!-- ./products -->
</div>
<!-- ./shop wrapper -->

   <!-- footer -->
   <Footer/>
   <!-- end footer -->
</div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
import api from '../api'; // Your API endpoint

export default {
components: {
   Header, 
   Footer,  
},
data() {
 return {
   categoryId: this.$route.params.categoryId,
   products: [],
   categories: [], 
   selectedCategories: [],  
   selectedSortOption: '',       
   loading: true, 
   back_url: 'https://shopo-api.onrender.com' 
  // back_url: 'http://localhost:5000' 
 };
},

computed: {
   filteredProducts() {
   if (this.selectedCategories.length === 0) {
       return this.products;
   } else {
       return this.products.filter(product => {
       return this.selectedCategories.some(categoryId => product.category._id === categoryId);
       });
   }
   },

},

created() {
 this.fetchallProducts();
 this.fetchCategories();

},
methods: {
 async fetchallProducts() {
   try {
     const response = await axios.get(`${api}/products/all`);
     this.products = response.data.products;
     this.loading = false;   
   } catch (error) {
     console.error('Failed to fetch products:', error);
     this.loading = false;   
     // Handle error
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
  
 async filterProducts() {
   try {
   if (this.selectedCategories.length === 0) {          
       this.fetchallProducts();
   } else {
       // Filter products based on selected categories
       const categoryIds = this.selectedCategories.join(',');
       const response = await axios.get(`${api}/products/product-category/${categoryIds}`);
       this.products = response.data.products;
       this.loading = false;
   }
   } catch (error) {
   console.error('Failed to filter products:', error);
   this.loading = false;
   // Handle error
   }
 },

 sortProducts() {
 switch (this.selectedSortOption) {
   case 'price-low-to-high':
     this.products.sort((a, b) => a.price - b.price);
     break;
   case 'price-high-to-low':
     this.products.sort((a, b) => b.price - a.price);
     break;
   case 'latest':          
     this.products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
     break;
   default:           
     this.fetchallProducts();
     break;
 }
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
},
};
</script>
