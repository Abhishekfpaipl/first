<template>
  <home-topnav></home-topnav>
  <div style="padding-top:50px;padding-bottom: 80px;">
    <div class="card d-flex align-items-center border-0">
      <div class="card-body">
        <div class="">
          <form>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" />
              <label class="form-label" for="form2Example1">Email address</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" />
              <label class="form-label" for="form2Example2">Password</label>
            </div>

            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div class="col">
                <!-- Simple link -->
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <!-- Submit button -->
            <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

            <!-- Register buttons -->
            <div class="text-center">
              <p>Not a member? <a href="#!"></a></p>

              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Register
              </button>
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <a href="https://www.facebook.com/"> <i class="bi bi-facebook"></i></a>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <a href="https://www.google.com/"><i class="bi bi-google"></i></a>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <a href="https://twitter.com/i/flow/login"> <i class="bi bi-twitter"></i></a>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <a href="https://github.com/"><i class="bi bi-github"></i></a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Register</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="heading d-flex justify-content-center w-100">
              <img src="" width="180" alt="">
            </div>
            <div class="text text-center">
              <!-- <p>Want to create your eRetail Shop</p> -->
              <h2>Create Account</h2>
            </div>
            <div class="inputss ">
              <input name="Your Name" type="text" class="form-control mb-2" placeholder="First & Last Name "
                aria-label="Username" aria-describedby="addon-wrapping" required>
              <input name="Mobile Number" type="text" class="form-control mb-2" placeholder="Mobile Number"
                aria-label="Username" aria-describedby="addon-wrapping" required>
              <input name="Password" type="password" class="form-control mb-2" placeholder="Password atleast 6 characters"
                aria-label="Username" aria-describedby="addon-wrapping" required>

              <button v-on:click="signUp"
                class="btn btn-primary rouded-pill d-flex justify-content-center w-100">Login</button>
            </div>
            <div class="text my-4">
              <span>Be enrolling your mobile phone number, you consent to receive automated security
                notification via text message from DeshiGirl. Message and data rates may apply.</span>
            </div>
            <div class="btn btn-warning w-100 mt-1">Continue</div>
            <div class="txt mt-2">
              <span>Already have an account? <a style="cursor: pointer;" class="text-primary"
                  data-bs-target="#exampleModalToggle" data-bs-dismiss="modal">Sign in</a></span>
              <br><span>Buying for work? <a style="cursor: pointer;" class="text-primary">Crate a free
                  business account</a></span> <br>
              <br><span>By creating an account or logging in, you agree to Retailpur <a style="cursor: pointer;"
                  class="text-primary">Conditions of Use</a> and <a style="cursor: pointer;" class="text-primary">Privacy
                  policy</a> </span>
            </div>

            <div class="modal-footer">
              <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-dismiss="modal">Back to
                Login</button>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>







    <div class="accordion bg-light mt-2" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="false" aria-controls="collapseOne">
            Get In Touch
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class=" d-flex">
              <i class="bi bi-geo-alt"></i>
              <p class="ms-2">B-94 Okhla Industrial Area, Phase-II New Delhi South Delhi DL 110020 IN</p>
            </div>

            <div class=" d-flex">
              <i class="bi bi-envelope"></i>
              <p class="ms-2">contact@deshigirl.com</p>
            </div>

            <div class=" d-flex">
              <i class="bi bi-telephone"></i>
              <p class="ms-2">+91 1234567890</p>
            </div>

            <p class="ms-2">Timings: 10 AM to 5 PM (Except Sundays and Public Holidays)</p>

            <p class="m-0 fs-4 fw-bold">Social</p>
            <div class="d-flex gap-2">
              <div class="bg-secondary px-2 py-1">
                <i class="bi bi-facebook fs-1"></i>
              </div>

              <div class="bg-secondary px-2 py-1">
                <i class="bi bi-instagram fs-1"></i>
              </div>

              <div class="bg-secondary px-2 py-1">
                <i class="bi bi-linkedin fs-1"></i>
              </div>

              <div class="bg-secondary px-2 py-1">
                <i class="bi bi-youtube fs-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            Policies
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div v-for="(link, index) in links" :key="index" class="">
              <router-link :to="link.route" class="text-decoration-none text-dark">
                <p>{{ link.label }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Other Contacts
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div v-for="(contact, index) in contacts" :key="index" class="">
              <div class="d-flex">
                <i :class="contact.icon"></i>
                <router-link :to="contact.route" class="text-decoration-none text-dark">
                  <p class="ms-2">{{ contact.name }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Newsletter Signup
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="">
              <p>Subscribe to our newsletter and get 10% off on your first purchase</p>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Your Email" aria-label="Recipient's username"
                  aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Popular Search
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="">
              Dress | T-Shirts | Kurtis | Designer Blouse | Gowns | Punjabi Suits | Myntra Fashion Show | Saree | Watches
              |
              Dresses
              | Lehenga
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import HomeTopnav from '../NavBar/HomeTopnav.vue';
export default {
  name: "SignUP",
  data() {
    return {
      links: [
        { label: "Refund Policy", route: "/RefundPolicy" },
        { label: "Shipping & Delivery Policy", route: "/ShippingPolicy" },
        { label: "Return Policy", route: "/ReturnPolicy" },
        { label: "Privacy Policy", route: "/RefundPolicy" },
        { label: "Terms of Service", route: "/TOSPage" },
      ],
      contacts: [
        { icon: "bi bi-envelope", name: "Collaborations: social@deshigirl.com", route: "" },
        { icon: "bi bi-envelope", name: "Bulk Enquiry: Click Here", route: "" },
        { icon: "bi bi-envelope", name: "Franchise Enquiry: Click Here", route: "" },
        { icon: "bi bi-envelope", name: "About Us: Click Here", route: "" },
      ]
    };
  },
  methods: {},
  components: { HomeTopnav }
}
</script>
<style></style>