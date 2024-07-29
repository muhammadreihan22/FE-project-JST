<template>
  <div class="fitur">
    <!-- Form Nama -->
    <div class="container">
      <div class="row">
        <div class="col-5 mt-10" style="margin-top: 120px; margin-left: 140px">
          <form @submit.prevent="filterData" v-if="!showResults">
            <div class="w-full">
              <h1 style="color: orangered; font-weight: bold">Silahkan isi Fitur</h1>
              <br />
              <div class="mb-3">
                <label for="nama" class="block"></label>
                <input type="text" require id="nama" v-model="nama" placeholder="Nama Anda" style="width: 250px; height: 35px" />
              </div>
              <div class="mb-2">
                <label for="nama" class="block"></label>
                <input type="text" require id="email" v-model="Email" placeholder="Email" style="width: 290px; height: 35px" />
              </div>
              <div class="mb-2">
                <label for="merek" class="block" style="color: orangered; display: flex; font-weight: bold">Merek:</label>
                <select id="merek" v-model="filter.merek" style="width: 120px; height: 35px">
                  <option value="">Pilih Merek</option>
                  <option v-for="option in merekOptions" :key="option">{{ option }}</option>
                </select>
              </div>
              <div class="mb-2">
                <label for="type" class="block" style="color: orangered; display: flex; font-weight: bold">Type:</label>
                <select id="type" v-model="filter.type" style="width: 120px; height: 35px">
                  <option value="">Pilih Type</option>
                  <option v-for="option in typeOptions" :key="option">{{ option }}</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="tahun" class="block" style="color: orangered; display: flex; font-weight: bold">Tahun:</label>
                <select id="tahun" v-model="filter.tahun" style="width: 220px; height: 35px">
                  <option value="">Pilih Tahun</option>
                  <option v-for="option in tahunOptions" :key="option">{{ option }}</option>
                </select>
              </div>
              <button type="submit">Lihat Rekomendasi</button>
            </div>
          </form>
        </div>
        <div class="col-4" style="margin-top: 150px">
          <img src="../assets/civic.jpg" alt="" style="height: 450px; width: 430px; border-radius: 5px" />
        </div>
      </div>
    </div>
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
<style>
.fitur {
  background-color: #222831;
  height: 743px;
}
.conotainer {
  margin-top: 20px;
}
.fitur button {
  padding: 5px 45px;
  border-radius: 5px;
  background-color: orangered;
  color: white;
  font-weight: 500;
  letter-spacing: 2px;
  border: none;
  border: 2px solid orangered;
  transition: all 0.3s ease;
}
.fitur button:hover {
  cursor: pointer;
  background-color: #222831;
  border: 2px solid orangered;
  color: orangered;
}
</style>

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
