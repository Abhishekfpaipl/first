<template>
  <div>
    <label class="p-2 lead btn d-flex text-white align-items-center justify-content-center"
      style="background-color:#ECA1A6" @click="triggerFileUpload">{{ buttonText }}</label>
    <input ref="fileInput" type="file" @change="previewImage" style="display: none" accept="image/*,application/pdf">
    <div v-if="previewUrl" class="d-flex flex-column align-items-center">
      <img v-if="isImage" :src="previewUrl" alt="preview" class="mt-3"
        style="object-fit:contain; width: 200px; height: 200px;" />
      <a v-else :href="previewUrl" target="_blank"
        class="d-flex align-items-center justify-content-center btn mt-3 border rounded"
        style="height:200px;width:200px;">
        <i class="bi bi-filetype-pdf text-danger" style="font-size:50px"></i></a>
      <br>
      <button class="btn btn-primary" @click="clearImage">Change File</button>
    </div>
    <p v-if="error" class="error-text">{{ error }}</p>
  </div>
</template>
  
<script>
export default {
  name: 'ImageUploadBox',
  data() {
    return {
      buttonText: 'Upload File',
      previewUrl: '',
      isImage: true,
      error: ''
    }
  },
  methods: {
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    previewImage(event) {
      this.error = ''; // Reset error message
      const file = event.target.files[0];
      if (!file) {
        return;
      }

      // Ensure the file is an image or a PDF
      if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
        this.error = 'File must be an image or a PDF.';
        return;
      }

      // Limit file size to 5MB
      if (file.size > 5 * 1024 * 1024) {
        this.error = 'File size should not exceed 5MB.';
        return;
      }

      this.isImage = file.type.startsWith('image/');
      this.previewUrl = URL.createObjectURL(file);
      this.buttonText = 'Change File';
    },
    clearImage() {
      this.previewUrl = '';
      this.$refs.fileInput.value = null;
      this.buttonText = 'Upload File';
      this.isImage = true; // Reset file type
      this.error = ''; // Reset error message
      this.triggerFileUpload();
    }
  }
}
</script>
  
<style scoped>
.p-2 {
  padding: 2em;
}

.lead {
  font-size: 1.5em;
  font-weight: bold;
}

.error-text {
  color: red;
}
</style>
  