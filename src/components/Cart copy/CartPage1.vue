<template>
  <div class="container">
    <div class="chat">
      <div class="chat-header">
        <h3>Live Chat</h3>
      </div>
      <div class="chat-body">
        <ul class="message-list">
          <li v-for="message in messages" :key="message.id" :class="message.type">
            <div class="message">
              <div class="message-content">{{ message.text }}</div>
              <div class="message-timestamp">{{ message.timestamp }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="chat-footer">
        <input v-model="newMessage" @keyup.enter="sendMessage" type="text" class="form-control"
          placeholder="Type your message..." />
        <button @click="sendMessage" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>



  
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        const message = {
          id: Date.now(),
          text: this.newMessage,
          timestamp: new Date().toLocaleTimeString(),
          type: 'outgoing', // Change to 'incoming' for received messages
        };
        this.messages.push(message);
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 20px;
}

.chat {
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.chat-header {
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
}

.chat-body {
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
}

.message-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.message {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.message-content {
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 4px;
}

.message-timestamp {
  color: #777;
  font-size: 12px;
}

.chat-footer {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
}

.form-control {
  flex-grow: 1;
  margin-right: 10px;
}
</style>

<!-- <template> -->
  <!-- <div>
    <nav>
      <ul class="nav" v-scrollactive>
        <li v-for="(section, index) in sections" :key="index">
          <a :href="'#' + section.id">{{ section.title }}</a>
        </li>
      </ul>
    </nav>

    <div>
      <div v-for="(section, index) in sections" :key="index" :id="section.id">
        Content of each section goes here
      </div>
    </div>
  </div> -->

  <!-- <div class="chat-container">
    <div class="chat-header">Live Chat</div>
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" class="chat-message">
        <div class="message-sender">{{ message.sender }}</div>
        <div class="message-content">{{ message.content }}</div>
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({
          sender: 'You',
          content: this.newMessage
        });
        this.newMessage = '';
      }
    }
  }
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.chat-container {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.chat-header {
  background-color: #f5f5f5;
  padding: 10px;
  font-weight: bold;
  text-align: center;
}

.chat-messages {
  height: 300px;
  overflow-y: scroll;
  padding: 10px;
}

.chat-message {
  margin-bottom: 10px;
}

.message-sender {
  font-weight: bold;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
}

.chat-input input {
  flex: 1;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.chat-input button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
}
</style> -->







<!-- <script>
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
</script> -->


<!-- <style>
/* Style the active link */
li.active a {
  color: red;
}
</style> -->




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