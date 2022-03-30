s<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :height="height"
    :width="width"
  />
</template>

<script>
import { Bar } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      width: 500,
      height: 400,
      chartData: {
        labels: ['Match', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Number of Orders',
            data: [21, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
            ],
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    };
  },
};
</script>