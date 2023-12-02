<template>
    <div> 
      <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
          <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"></div>
      
          <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
              <div class="flex items-center justify-center mt-8">
                  <div class="flex items-center">
                      <svg class="w-12 h-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                      </svg>
                      
                      <span class="mx-2 text-2xl font-semibold text-white">Dashboard</span>
                  </div>
              </div>
      
              <nav class="mt-10">
                <router-link :to="{name: 'Dashboard'}" class="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
    
                    <span class="mx-3">Dashboard</span>
                </router-link>
                  
                    <!-- customer link start -->
                    <router-link :to="{name: 'Customers'}" class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                    >
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="9.00098" cy="6" r="4" fill="#6B7280"></circle> <ellipse cx="9.00098" cy="17.001" rx="7" ry="4" fill="#6B7280"></ellipse> <path d="M20.9996 17.0005C20.9996 18.6573 18.9641 20.0004 16.4788 20.0004C17.211 19.2001 17.7145 18.1955 17.7145 17.0018C17.7145 15.8068 17.2098 14.8013 16.4762 14.0005C18.9615 14.0005 20.9996 15.3436 20.9996 17.0005Z" fill="#6B7280"></path> <path d="M17.9996 6.00073C17.9996 7.65759 16.6565 9.00073 14.9996 9.00073C14.6383 9.00073 14.292 8.93687 13.9712 8.81981C14.4443 7.98772 14.7145 7.02522 14.7145 5.99962C14.7145 4.97477 14.4447 4.01294 13.9722 3.18127C14.2927 3.06446 14.6387 3.00073 14.9996 3.00073C16.6565 3.00073 17.9996 4.34388 17.9996 6.00073Z" fill="#6B7280"></path> </g></svg>
        
                        <span class="mx-3">Customers</span>
                    </router-link>
                    <!-- customer link end -->
  
                  <!-- category link start -->
                    <li class="list-none mt-4">
                      <a
                      class="group relative flex items-center gap-2.5  py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                      href="#"   
                       @click="categoryDropdown"                                          
                      >
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
                          </path>
                      </svg>
                      Category
                      <svg
                          class="absolute right-4 top-1/2 -translate-y-1/2 fill-current"                             
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                          />
                      </svg>
                      </a>
  
                      <!-- Dropdown Menu Start -->
                  <div v-show="selected === 'Category'"
                      class="overflow-hidden"
                      :class="(selected === 'Category') ? 'block' : 'hidden'">
                      <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                          <router-link :to="{name: 'Categories'}"
                              class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out text-gray-500 hover:text-white"
                              >
                              <svg class="w-6 h-6"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12" stroke="#6B7280" stroke-width="1.5"></path> <path d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14Z" stroke="#6B7280" stroke-width="1.5"></path> <path d="M9.5 14.4L10.9286 16L14.5 12" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                              Categories</router-link
                          >
                          </li>
                                                 
                      </ul>
                      </div>
                      <!-- Dropdown Menu End -->
                   </li>
                  <!-- category link end -->
  
                  <!-- product link start -->
                    <li class="list-none mt-4">
                          <a
                          class="group relative flex items-center gap-2.5  py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                          href="#"   
                           @click="productDropdown"                                          
                          >                    
                          <svg fill="#6B7280" class="w-6 h-6" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.2,2.2a1.63,1.63,0,0,1,1.7,1.7V5a1.63,1.63,0,0,1-1.7,1.7H10.1A3.4,3.4,0,0,0,6.7,9.9v32a3.4,3.4,0,0,0,3.2,3.4h32a3.4,3.4,0,0,0,3.4-3.2V36.8A1.63,1.63,0,0,1,47,35.1h1.1a1.63,1.63,0,0,1,1.7,1.7V43A6.81,6.81,0,0,1,43,49.8H9A6.81,6.81,0,0,1,2.2,43V9A6.81,6.81,0,0,1,9,2.2Z" fill-rule="evenodd"></path><path d="M40.4,25.4l3.1-3.1a1,1,0,0,0,0-1.5L31,8.2a1,1,0,0,0-1.5,0l-3.1,3.1a1,1,0,0,0,0,1.5L38.9,25.3A1,1,0,0,0,40.4,25.4Z"></path><path d="M47.4,18.3l1.5-1.5a1,1,0,0,0,0-1.5L36.5,2.7a1,1,0,0,0-1.5,0L33.5,4.2a1,1,0,0,0,0,1.5L46,18.3A1,1,0,0,0,47.4,18.3Z"></path><path d="M36.8,28.9h0c.6-.6.5-1.1.1-1.5L24.4,14.9a1,1,0,0,0-1.5,0l-.1.1a1,1,0,0,0,0,1.5L35.3,29A1,1,0,0,0,36.8,28.9Z"></path><path d="M32.4,33.3l.7-.7a1,1,0,0,0,0-1.5L20.7,18.5a1,1,0,0,0-1.5,0l-.7.7a1,1,0,0,0,0,1.5L31,33.2C31.3,33.8,31.9,33.8,32.4,33.3Z"></path><path d="M25.7,40.1,28.8,37a1,1,0,0,0,0-1.5L16.3,22.9a1,1,0,0,0-1.5,0L11.7,26a1,1,0,0,0,0,1.5L24.2,40A1,1,0,0,0,25.7,40.1Z"></path></g></svg>
                          Products
                          <svg
                              class="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                              :class="{ 'rotate-180': (selected === 'Forms') }"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                              fill=""
                              />
                          </svg>
                          </a>
  
                          <!-- Dropdown Menu Start -->
                          <div v-show="selected === 'Products'"
                          class="overflow-hidden"
                          :class="(selected === 'Products') ? 'block' : 'hidden'">
                          <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                              <li>
                              <router-link :to="{name: 'Products'}"
                                  class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out text-gray-500 hover:text-white"                                    
                                  >
                                  <svg class="w-6 h-6"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12" stroke="#6B7280" stroke-width="1.5"></path> <path d="M2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14Z" stroke="#6B7280" stroke-width="1.5"></path> <path d="M9.5 14.4L10.9286 16L14.5 12" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                  Products</router-link
                              >
                              </li>
                              <li>
                                  <router-link :to="{name: 'AddProduct'}"
                                  class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out text-gray-500 hover:text-white"
                                  >
                                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 14H12M12 14H14M12 14V16M12 14V12" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z" stroke="#6B7280" stroke-width="1.5"></path> </g></svg>
                                  Add Product</router-link
                              >                           
                              </li>
                              
                          </ul>
                          </div>
                          <!-- Dropdown Menu End -->
                    </li>
                  <!-- product link end -->
  
                  <!-- order link start -->
                  <router-link :to="{name: 'Orders'}" class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                      >
                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                          </path>
                      </svg>
      
                      <span class="mx-3">Orders</span>
                  </router-link>
                  <!-- order link end -->
  
                   <!-- paged link start -->
                   <li class="list-none mt-4">
                      <a
                      class="group relative flex items-center gap-2.5  py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                      href="#"   
                       @click="pageDropdown"                                          
                      >
                      <svg fill="#6B7280" class="w-6 h-6"  version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22,16c-4.4,0-8,3.6-8,8c0,1.6,0.5,3.2,1.4,4.6c0.2,0.3,0.5,0.4,0.8,0.4s0.6-0.2,0.8-0.4c0.7-1,1.7-1.8,2.9-2.2l4.3-6 c0.3-0.4,0.9-0.6,1.4-0.2c0.4,0.3,0.6,0.9,0.2,1.4L22.6,26c1.7,0.2,3.3,1.1,4.3,2.5c0.2,0.3,0.5,0.4,0.8,0.4c0.3,0,0.6-0.2,0.8-0.4 c0.9-1.3,1.4-2.9,1.4-4.6C30,19.6,26.4,16,22,16z"></path> <g> <path d="M12,24c0-5.5,4.5-10,10-10c3.3,0,6.2,1.6,8,4V7c0-1.7-1.3-3-3-3H5C3.3,4,2,5.3,2,7v18c0,1.7,1.3,3,3,3h7.8 C12.3,26.7,12,25.4,12,24z M12.1,7.6c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.4,1-0.4,1.4,0c0.1,0.1,0.2,0.2,0.2,0.3C14,7.7,14,7.9,14,8 c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3C13.5,8.9,13.3,9,13,9c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2 c-0.1-0.1-0.2-0.2-0.2-0.3C12,8.3,12,8.1,12,8C12,7.9,12,7.7,12.1,7.6z M9.1,7.6c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2 C10,6.9,10.4,7,10.7,7.3c0.1,0.1,0.2,0.2,0.2,0.3C11,7.7,11,7.9,11,8c0,0.3-0.1,0.5-0.3,0.7C10.5,8.9,10.3,9,10,9 C9.7,9,9.5,8.9,9.3,8.7C9.1,8.5,9,8.3,9,8C9,7.9,9,7.7,9.1,7.6z M6.3,7.3c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1 C6.7,7,6.7,7,6.8,7c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3 C8,7.7,8,7.9,8,8c0,0.1,0,0.3-0.1,0.4C7.9,8.5,7.8,8.6,7.7,8.7C7.5,8.9,7.3,9,7,9S6.5,8.9,6.3,8.7C6.1,8.5,6,8.3,6,8 C6,7.7,6.1,7.5,6.3,7.3z M7,14h5c0.6,0,1,0.4,1,1s-0.4,1-1,1H7c-0.6,0-1-0.4-1-1S6.4,14,7,14z M9,19H7c-0.6,0-1-0.4-1-1s0.4-1,1-1 h2c0.6,0,1,0.4,1,1S9.6,19,9,19z"></path> </g> </g></svg>
                      Pages
                      <svg
                          class="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                          :class="{ 'rotate-180': (selected === 'Forms') }"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                          fill=""
                          />
                      </svg>
                      </a>
  
                      <!-- Dropdown Menu Start -->
                      <div v-show="selected === 'Page'"
                      class="overflow-hidden"
                      :class="(selected === 'Page') ? 'block' : 'hidden'">
                      <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                          <a
                              class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out text-gray-500 hover:text-white"
                              href="form-elements.html"
                              >Banner</a
                          >
                          </li>
                          <li>
                          <a
                              class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out text-gray-500 hover:text-white"
                              href="form-layout.html">Ads</a
                          >                           
                          </li>
                          <li>
                          <a
                              class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out text-gray-500 hover:text-white"
                              href="form-layout.html">Faqs</a
                          >
                          </li>
                          <li>
                              <a
                                  class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out text-gray-500 hover:text-white"
                                  href="form-layout.html">Terms & Conditions</a
                              >
                          </li>
                      </ul>
                      </div>
                      <!-- Dropdown Menu End -->
                   </li>
                   <!-- pages link end -->
                   
                   <!-- settings link start -->
                   <router-link :to="{name: 'Settings'}" class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                        >
                          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                              </path>
                          </svg>
      
                          <span class="mx-3">Settings</span>
                   </router-link>
                  <!-- settings link end -->
  
                   <!-- logout link start -->
                   <a @click="logoutAdmin" class="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 cursor-pointer">                           
                          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="#6B7280"></path> </g></svg>
      
                          <span class="mx-3">Logout</span>
                   </a>
                  <!-- logout link end -->
              </nav>
          </div>
          <div class="flex flex-col flex-1 overflow-hidden">
              <header class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
                  <div class="flex items-center">
                      <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
                          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                          </svg>
                      </button>
      
                      <div class="relative mx-4 lg:mx-0">
                          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                              <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                  <path
                                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  </path>
                              </svg>
                          </span>
      
                          <input class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text"
                              placeholder="Search">
                      </div>
                  </div>
      
                  <div class="flex items-center">
                      <div class="relative">
                          <button @click="toggleNotification"
                              class="flex mx-4 text-gray-600 focus:outline-none">
                              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  </path>
                              </svg>
                          </button>
      
                          <div @click="closeNotification" v-show="notificationOpen"
                              class="fixed inset-0 z-10 w-full h-full" style="display: none;"></div>
      
                          <div v-show="notificationOpen"
                              class="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80"
                              style="width: 20rem; display: none;">
                              <a href="#"
                                  class="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600">
                                  <img class="object-cover w-8 h-8 mx-1 rounded-full"
                                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                                      alt="avatar">
                                  <p class="mx-2 text-sm">
                                      <span class="font-bold" href="#">Sara Salah</span> replied on the <span
                                          class="font-bold text-indigo-400" href="#">Upload Image</span> artical . 2m
                                  </p>
                              </a>
                             
                          </div>
                      </div>
      
                      <div class="relative">
                          <button @click="toggleDropdown"
                              class="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                              <img class="object-cover w-full h-full"
                                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                                  alt="Your avatar">
                          </button>
      
                          <div @click="closeDropdown" v-show="dropdownOpen" class="fixed inset-0 z-10 w-full h-full"
                              style="display: none;"></div>
      
                          <div v-show="dropdownOpen"
                              class="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
                              style="display: none;">
                              <a href="#"
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                              <a href="#"
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Settings</a>
                              <a href="#"
                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
                          </div>
                      </div>
                  </div>
              </header>
  
              <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                  <div class="container px-6 py-8 mx-auto">
                      <div class="flex">
                          <h3 class="text-3xl font-medium text-gray-700">All Orders</h3>                          
                      </div>
                                         
                      <div class="flex flex-col mt-8">
                          <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">

                            <div v-if="loading" class="flex justify-center items-center mt-3">
                        <svg class="w-10 h-10" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(2 1)" stroke="#000" stroke-width="1.5">
                                    <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#000">
                                        <animate attributeName="fill-opacity"
                                            begin="0s" dur="1.3s"
                                            values="1;0;0;0;0;0;0;0" calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#000">
                                        <animate attributeName="fill-opacity"
                                            begin="0s" dur="1.3s"
                                            values="0;1;0;0;0;0;0;0" calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#000">
                                        <animate attributeName="fill-opacity"
                                            begin="0s" dur="1.3s"
                                            values="0;0;1;0;0;0;0;0" calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#000">
                                        <animate attributeName="fill-opacity"
                                            begin="0s" dur="1.3s"
                                            values="0;0;0;1;0;0;0;0" calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#000">
                                        <animate attributeName="fill-opacity"
                                            begin="0s" dur="1.3s"
                                            values="0;0;0;0;1;0;0;0" calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#000">
                                        <animate attributeName="fill-opacity"
                                            begin="0s" dur="1.3s"
                                            values="0;0;0;0;0;1;0;0" calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#000">
                                        <animate attributeName="fill-opacity"
                                            begin="0s" dur="1.3s"
                                            values="0;0;0;0;0;0;1;0" calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#000">
                                        <animate attributeName="fill-opacity"
                                            begin="0s" dur="1.3s"
                                            values="0;0;0;0;0;0;0;1" calcMode="linear"
                                            repeatCount="indefinite" />
                                    </circle>
                                </g>
                            </g>
                        </svg>
                            </div>

                              <div v-else
                                  class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                                  <table class="min-w-full">
                                      <thead>
                                          <tr>
                                              <th
                                                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                  User</th>
                                              <th
                                                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                  Product Title</th>
                                              <th
                                                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                  Price</th>
                                              <th
                                                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                  Status</th>
                                            <th
                                                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                  Payment Reference</th>
                                             <th
                                                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                  Created</th>
                                              <th
                                              
                                                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                                  Action</th>
                                              
                                          </tr>
                                      </thead>
                                     <div v-if="orders.length === 0" class="p-2.5 xl:p-5">
                                          <p class="font-semibold text-sm leading-5 text-gray-700">No Orders Available!!!</p>
                                      </div>
                                      <tbody v-else v-for="order in orders" :key="order._id" class="bg-white">
                                          <tr>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 font-semibold text-gray-900">{{ order.user.firstname }} ({{ order.user.email }})</div>  
                                                <span class="text-sm leading-loose">{{ order.user.address }} ({{ order.user.postcode }})</span>                                              
                                            </td>
      
                                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200" v-for="product in order.products" :key="product._id">
                                                <template v-if="product.product">  
                                                <div class="text-sm leading-5 font-semibold text-gray-900">{{product.product.title}}</div>                                                
                                                  <span class="text-sm leading-loose">Quantity: {{product.quantity}}</span>
                                                </template>
                                                <template v-else>
                                                    <div class="text-sm leading-5 font-semibold text-red-500">[Product Deleted]</div>                                                
                                                    <!-- <span class="text-sm leading-loose">Quantity</span> -->
                                                </template>
                                              </td>

                                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 font-semibold text-gray-900">$ {{order.totalPrice}}</div>                                                
                                            </td>

                                            <td v-if="order.status == 'Paid'" class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 font-semibold text-green-500">{{order.status}}</div>                                                
                                            </td>

                                            <td v-else class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 font-semibold text-red-500">{{order.status}}</div>                                                
                                            </td>

                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 font-semibold text-gray-900">{{order.paymentReference}}</div>                                                
                                            </td>
      
                                              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                  <span
                                                      class="inline-flex px-2 text-sm font-semibold leading-5 text-green-800"> {{ formatDate(order.createdAt) }}</span>
                                              </td>
      
                                              <td
                                                  class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">                                                 
                                                  <button @click="openDeleteModal(order)" class=" text-sm font-semibold px-2 py-2 text-red-500 hover:text-red-400">Delete</button>    
                                              </td>                                    
                                          </tr>                                                                                                                          
                                      </tbody> 
                                  </table>
                              </div>
                          </div>
                      </div>                                       
                      
                  </div>
              </main>
          </div>
      </div>
  

   

    <!-- delete modal -->
    <div>
        <div id="modal-bg4" class="w-full h-full  bg-[#848A97] top-0 absolute hidden opacity-80"></div>
        <div id="modal-box4" class="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[25vh] flex-col justify-between items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFFF] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute hidden">              
        <!-- Delete confirmation -->
        <div v-if="isDeleteMode">
            <p class="font-semibold">Are you sure you want to delete this order?</p>
            <div class="flex gap-3">
                <button class="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md mt-3 text-white" @click="confirmDelete(order)">Yes</button>
                <button class="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md mt-3 text-white" @click="cancelDelete">No</button>
            </div>
        </div>
        <button id="modal-close" class="p-3 w-full text-gray-900  hover:bg-gray-200 rounded-md mt-3"  @click="closeModal1">Close</button>
        </div>
    </div>
   <!-- modal end -->

  
     
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  import api from '../../api';
  import moment from 'moment';
  
  export default {
    data() {
      return {
        loading: true,
        orders: [],         
        sidebarOpen: false,
        notificationOpen: false,
        dropdownOpen: false,
        selected: '',  
        page: '' ,       
        isDeleteMode: false,              
        deleteOrder: {},       
        
      };
    },
    created() {
      // Fetch products on component mount
      this.fetchAdminOrders();
    },
    methods: {
       
          fetchAdminOrders() {

            const token = sessionStorage.getItem('adminToken');  
              const config = {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
              };

            axios.get(`${api}/orders/all-orders`, config).then((response) => {
            this.orders = response.data.orders;         
            this.loading = false;    
            })
            .catch((error) => {
            this.loading = false;  
            console.error('Error getting Orders:', error);          
            });      
          },
  
          logoutAdmin() {
              this.$store.dispatch('adminLogout')
              .then((success) => {
                  if (success) {
                      this.$toast.default('Logout successful.', {
                      timeout: 3000, 
                      });		       
                      this.$router.push('/login');
                  } else {
                      this.$toast.error('Logout Error. Please try again.', {
                      timeout: 9000, 
                      });
                  }
              })
              .catch((error) => {
              console.error('Logout Error:', error);
              this.$toast.error('Logout Error. Please try again.', {
                  timeout: 9000, 
              });
              });
          },  

          formatDate(date) {
            return moment(date).fromNow();
          },                    
      
  
          async confirmDelete() {
          try {
              const token = sessionStorage.getItem('adminToken');  
              const config = {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
              };
              await axios.delete(`${api}/orders/delete-order/${this.deleteOrder._id}`, config)            
                .then((success) => {
                  if (success) {
                      this.$toast.success('Order Deleted Successfully.', {
                          timeout: 3000, 
                      });		 
                        this.closeModal1();  
                        const orderId = this.deleteOrder._id;  
                        this.orders = this.orders.filter(order => order._id !== orderId);
                        this.orders.sort((a, b) => {
                        const dateA = new Date(a.createdAt).getTime();
                        const dateB = new Date(b.createdAt).getTime();
                        return dateB - dateA;  
                        });
                  } else {
                      this.$toast.error('An Error Occured. try again!', {
                          timeout: 9000, 
                      });	          
                  }
                  });  
                 
            
          } catch (error) {
              console.log('Error deleting order', error);
              // Handle error
          }
          },
  
          cancelDelete() {
          this.closeModal1();
          },
           
  
  
          toggleSidebar() {
              this.sidebarOpen = !this.sidebarOpen;
          },
          toggleNotifications() {
              this.notificationOpen = !this.notificationOpen;
          },
          toggleDropdown() {
           this.dropdownOpen = !this.dropdownOpen;
          },
          closeDropdown() {
              this.dropdownOpen = false;
          },
          toggleNotification() {
              this.notificationOpen = !this.notificationOpen;
          },
          closeNotification() {
              this.notificationOpen = false;
          },
          productDropdown() {
           this.selected = (this.selected === 'Products') ? '' : 'Products';
          },
          categoryDropdown() {
           this.selected = (this.selected === 'Category') ? '' : 'Category';
          },
          pageDropdown() {
           this.selected = (this.selected === 'Page') ? '' : 'Page';
          },
          
  
          openDeleteModal(order) {
          this.isDeleteMode = true;
          this.deleteOrder = { ...order };
          document.getElementById('modal-bg4').classList.remove('hidden');
          document.getElementById('modal-box4').classList.remove('hidden');
          },
                                                                          
  
          closeModal1() {       
          document.getElementById('modal-bg4').classList.add('hidden');
          document.getElementById('modal-box4').classList.add('hidden');
          },
    },
  };
  </script>
  