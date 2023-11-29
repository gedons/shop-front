<template>
    <!-- header -->
    <Header/>
    <!-- end header -->

    <!-- login -->
    <div class="contain py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">User Login</h2>
            <p class="text-gray-600 mb-6 text-sm">
                welcome back customer
            </p>
            <form @submit.prevent="loginAdmin">
                <div class="space-y-2">
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block">Email address</label>
                        <input type="email" v-model="email" 
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[#9F2DBE] placeholder-gray-400"
                            placeholder="youremail.@domain.com">
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Password</label>
                        <input type="password"   v-model="password" 
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[#9F2DBE] placeholder-gray-400"
                            placeholder="*******">
                    </div>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center">
                        <input type="checkbox" name="remember" id="remember"
                            class="text-[#9F2DBE] focus:ring-0 rounded-sm cursor-pointer">
                        <label for="remember" class="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                    </div>
                    <a href="#" class="text-[#9F2DBE]">Forgot password</a>
                </div>
                <div class="mt-4">
                    <button type="submit"
                        class="block w-full py-2 text-center text-white bg-[#9F2DBE] border border-[#9F2DBE] rounded hover:bg-transparent hover:text-[#9F2DBE] transition uppercase font-roboto font-medium">Login</button>
                </div>
            </form>

            <!-- login with -->
            <!-- <div class="mt-6 flex justify-center relative">
                <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div> -->
            <!-- ./login with -->

            <p class="mt-4 text-center text-gray-600">Don't have account? <router-link :to="{name: 'Register'}"
                    class="text-[#9F2DBE]">Register
                    now</router-link></p>
        </div>
    </div>
    <!-- ./login -->

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
      email: '',
      password: '',
    };
  },
  
  methods: {
    async loginAdmin() {
      try {
        await this.$store.dispatch('userLogin', {
          email: this.email,
          password: this.password,
        })
        .then((success) => {
          if (success) {
	          	this.$toast.success('User Login successful.', {
		            timeout: 3000, 
		          });		       
	            console.log('Successfully logged in!'); 
              this.$router.push({name: 'UserAccount'});
	          } else {
	             this.$toast.error('User details does not exist. Confirm and try again!', {
		            timeout: 9000, 
		          });	          
	          }
        });       
      } catch (error) {
        console.error('User Login Failed', error.message);
      }
    },
  },
};
</script>