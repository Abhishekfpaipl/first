
<template>
  <div>
    <nav>
      <ul class="nav" v-scrollactive>
        <li v-for="(section, index) in sections" :key="index">
          <a :href="'#' + section.id">{{ section.title }}</a>
        </li>
      </ul>
    </nav>

    <div>
      <div v-for="(section, index) in sections" :key="index" :id="section.id">
        <!-- Content of each section goes here -->
      </div>
    </div>
  </div>
</template>

<script>
import { Scrollactive } from 'vue-scrollactive';

export default {
  directives: {
    Scrollactive
  },
  data() {
    return {
      sections: [
        { id: 'section1', title: 'Section 1' },
        { id: 'section2', title: 'Section 2' },
        { id: 'section3', title: 'Section 3' },
      ]
    };
  }
};
</script>

<style>
/* Style the active link */
li.active a {
  color: red;
}
</style>



<!-- <template>
   
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Customer Address</div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="street" class="form-label">Street</label>
                <input type="text" class="form-control" id="street" v-model="newAddress.street">
              </div>
              <div class="mb-3">
                <label for="city" class="form-label">City</label>
                <input type="text" class="form-control" id="city" v-model="newAddress.city">
              </div>
              <div class="mb-3">
                <label for="state" class="form-label">State</label>
                <input type="text" class="form-control" id="state" v-model="newAddress.state">
              </div>
              <div class="mb-3">
                <label for="zipcode" class="form-label">Zip Code</label>
                <input type="text" class="form-control" id="zipcode" v-model="newAddress.zipcode">
              </div>
              <button type="button" class="btn btn-primary" @click="saveAddress">Save</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Saved Address</div>
          <div class="card-body">
            <p v-for="address in savedAddresses" :key="address">{{ address }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newAddress: {
          street: '',
          city: '',
          state: '',
          zipcode: '',
        },
        savedAddresses: [],
      };
    },
    methods: {
      saveAddress() {
        const addressString = `${this.newAddress.street}, ${this.newAddress.city}, ${this.newAddress.state}, ${this.newAddress.zipcode}`;
        this.savedAddresses.push(addressString);
        this.newAddress = {
          street: '',
          city: '',
          state: '',
          zipcode: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  </style>
   -->
  






  <!-- Circular progress bar (npm i vue3-radial-progress) import RadialProgressBar from "vue3-radial-progress"; .use(RadialProgressBar)-->
  <!-- <template>
    <div>
      <radial-progress-bar 
       :diameter="200"
       :completed-steps="completedSteps"
       :total-steps="totalSteps">
        <div class="counter">{{ completedSteps }} / {{ totalSteps }}</div>
      </radial-progress-bar>
      <button @click="incrementCompletedSteps" :disabled="completedSteps >= totalSteps">Increment</button>
      <button @click="decrementCompletedSteps" :disabled="completedSteps <= 0">Decrement</button>
    </div>
  </template>
  <script>
  import { ref, defineComponent } from "vue";
  
  export default defineComponent({
    setup() {
      const completedSteps = ref(0);
      const totalSteps = ref(4);
  
      const incrementCompletedSteps = () => {
        completedSteps.value += 1;
      };
  
      const decrementCompletedSteps = () => {
        completedSteps.value -= 1;
      };
  
      return {
        completedSteps,
        totalSteps,
        incrementCompletedSteps,
        decrementCompletedSteps
      };
    }
  });
  </script>
  
  <style>
  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 24px;
  }
  </style> -->