<template>
    <!-- header -->
    <Header/>
    <!-- end header -->

    <!-- register -->
    <div class="contain py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">Create an account</h2>
            <p class="text-gray-600 mb-6 text-sm">
                Register for new customer
            </p>
            <form @submit.prevent="registerUser">
                <div class="space-y-2">
                    <div class="mt-5">                        
                        <div class="px-5 pb-5">
                        <input type="text" placeholder="FirstName" v-model="firstname" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white">
                        <input type="text" placeholder="Lastname" v-model="lastname" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white"> 
                        <input type="email" placeholder="Email" v-model="email" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white"> 
                        <input type="number" placeholder="Phone Number" v-model="phone" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white"> 
                        <div class="flex">
                            <div class="flex-grow pr-2">
                                <input type="password" placeholder="Password" v-model="password" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white">
                            </div>
                            <div class="flex-grow">
                                <input type="password" placeholder="Confirm Password" v-model="passwordConfirmation" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white">
                            </div>
                        </div>                        
                        </div>
                        
                        <div class="flex">
                        <div class="flex-1 py-5 pl-5 overflow-hidden">
                            <svg class="inline align-text-top" width="21" height="20.5" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g>
                                    <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                                    <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                                    <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                                </g>
                            </svg>
                            <h1 class="inline text-2xl font-semibold leading-none">Location</h1>
                        </div>
                        <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
                        </div>
                        <div class="px-5 pb-5">
                        <input type="text" placeholder="Country" v-model="country" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white">
                        <input type="text" placeholder="State" v-model="state" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white"> 
                        <div class="flex">
                            <div class="flex-grow pr-2">
                                <input type="text" placeholder="Address" v-model="address" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white">
                            </div>
                            <div class="flex-grow">
                                <input type="text" placeholder="Postcode" v-model="postcode" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:ring-0 focus:border-[#dc3545] focus:bg-white">
                            </div>
                        </div>                        
                        </div>                       
                    </div>
                </div>
                <div class="mt-6">
                    <div class="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            class="text-[#dc3545] focus:ring-0 rounded-sm cursor-pointer">
                        <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                href="#" class="text-[#dc3545]">terms & conditions</a></label>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit"
                        class="block w-full py-2 text-center text-white bg-[#252525] border border-[#252525] rounded hover:bg-[#dc3545] hover:text-[#fff] transition uppercase font-roboto font-medium">Register</button>
                </div>
            </form>

            <!-- login with -->
            <!-- <div class="mt-6 flex justify-center relative">
                <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div> -->
            <!-- ./login with -->

            <p class="mt-4 text-center text-gray-600">Already have account? <router-link :to="{name: 'UserLogin'}"
                    class="text-[#dc3545]">Login now</router-link></p>
        </div>
    </div>
    <!-- end register -->

    <!-- footer -->
    <Footer/>
    <!-- end footer -->
</template>



<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header, 
    Footer,
  },

  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      state: '',
      country: '',
      phone: '',
      postcode: '',
      address: '',
      passwordConfirmation: ''
    };
  },
  methods: {
    async registerUser() {

      // Check if passwords match before submitting the form
      if (this.password !== this.passwordConfirmation) {
           	this.$toast.default('Password does not match.', {
		        timeout: 3000, 
		    });
            return;
      }
      try {
        await this.$store.dispatch('userRegister', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          state: this.state,
          country: this.country,
          phone: this.phone,
          postcode: this.postcode,
          address: this.address,
        })
        .then((success) => {
          if (success) {
	          	this.$toast.success('Registration successful.', {
		            timeout: 3000, 
		          });		       
                this.$router.push({ name: 'UserLogin' }); 
	          } else {
	             this.$toast.error('Registration Error. Please try again!', {
		            timeout: 9000, 
		          });	          
	          }
        });          
      } catch (error) {
        console.error('User Registration Failed', error.message);
        // Handle registration failure
      }
    },
  },
};
</script>