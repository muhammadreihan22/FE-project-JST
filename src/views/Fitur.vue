<template>
  <div>
    <!-- Form Nama -->
    <form @submit.prevent="filterData" v-if="!showResults" class="bg-gray-900 text-white min-h-screen py-8">
      <div class="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <div class="mb-4">
          <label for="nama" class="block text-sm font-medium">Nama Anda:</label>
          <input type="text" require id="nama" v-model="nama" class="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-gray-700 text-white" />
        </div>
        <div class="mb-4">
          <label for="merek" class="block text-sm font-medium">Merek:</label>
          <select id="merek" v-model="filter.merek" class="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-gray-700 text-white">
            <option value="">Pilih Merek</option>
            <option v-for="option in merekOptions" :key="option">{{ option }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="type" class="block text-sm font-medium">Type:</label>
          <select id="type" v-model="filter.type" class="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-gray-700 text-white">
            <option value="">Pilih Type</option>
            <option v-for="option in typeOptions" :key="option">{{ option }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="tahun" class="block text-sm font-medium">Tahun:</label>
          <select id="tahun" v-model="filter.tahun" class="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-gray-700 text-white">
            <option value="">Pilih Tahun</option>
            <option v-for="option in tahunOptions" :key="option">{{ option }}</option>
          </select>
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Filter</button>
      </div>
    </form>

    <!-- Single Card of Filtered Result -->
    <div v-if="showResults" class="text-white bg-gray-900 h-[200vh]">
      <div class="max-w-2xl mx-auto p-4">
        <div v-if="filteredData.length > 0">
          <p class="text-white text-lg mb-4">Hallo {{ nama }}, ini adalah rekomendasi dari kami!</p>
          <div :key="filteredData[currentIndex].id" class="bg-gray-800 rounded-lg shadow-lg p-4">
            <div>
              <img :src="'http://localhost:8000/images/' + filteredData[currentIndex].image" />
            </div>
            <p class="font-semibold text-lg">{{ filteredData[currentIndex].nama }}</p>
            <p><strong>Merek:</strong> {{ filteredData[currentIndex].merek }}</p>
            <p><strong>Tahun:</strong> {{ filteredData[currentIndex].tahun }}</p>
            <p><strong>Type:</strong> {{ filteredData[currentIndex].type }}</p>
            <p><strong>Description: </strong> {{ filteredData[currentIndex].decs }}</p>
          </div>
          <div class="flex justify-between mt-4">
            <button v-if="currentIndex > 0" @click="prevResult" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Prev</button>
            <button v-if="currentIndex < filteredData.length - 1" @click="nextResult" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Next</button>
          </div>
        </div>
        <div v-else>
          <p class="text-gray-400">Tidak ada mobil yang sesuai dengan filter.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: null,
      filter: {
        merek: "",
        type: "",
        tahun: "",
      },
      merekOptions: [],
      typeOptions: [],
      tahunOptions: [],
      showResults: false,
      currentIndex: 0,
      nama: "", // Menambahkan data untuk nama
    };
  },
  computed: {
    filteredData() {
      if (!this.data) return [];

      return this.data.filter((item) => {
        let matchMerek = true;
        let matchType = true;
        let matchTahun = true;

        if (this.filter.merek && item.merek.toLowerCase().indexOf(this.filter.merek.toLowerCase()) === -1) {
          matchMerek = false;
        }

        if (this.filter.type && item.type.toLowerCase().indexOf(this.filter.type.toLowerCase()) === -1) {
          matchType = false;
        }

        if (this.filter.tahun) {
          const tahunRange = this.filter.tahun.split("-").map(Number);
          const itemTahun = parseInt(item.tahun);
          if (!(itemTahun >= tahunRange[0] && itemTahun <= tahunRange[1])) {
            matchTahun = false;
          }
        }

        return matchMerek && matchType && matchTahun;
      });
    },
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:8000/api/mobil");
      this.data = response.data;

      this.merekOptions = this.getUniqueValues("merek");
      this.typeOptions = this.getUniqueValues("type");
      this.tahunOptions = this.generateYearOptions();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    filterData() {
      this.showResults = true;
      this.currentIndex = 0; // Reset current index when filter is applied
    },
    getUniqueValues(key) {
      const uniqueValues = new Set();
      this.data.forEach((item) => {
        uniqueValues.add(item[key]);
      });
      return Array.from(uniqueValues);
    },
    generateYearOptions() {
      const currentYear = new Date().getFullYear();
      const yearOptions = [];

      yearOptions.push(`${currentYear - 15}-${currentYear - 10}`);
      yearOptions.push(`${currentYear - 9}-${currentYear - 4}`);
      yearOptions.push(`${currentYear - 3}-${currentYear}`);

      return yearOptions;
    },
    prevResult() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextResult() {
      if (this.currentIndex < this.filteredData.length - 1) {
        this.currentIndex++;
      }
    },
  },
};
</script>
