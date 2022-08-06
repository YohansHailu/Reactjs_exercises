<template>
  <div>
    <v-subheader class="d-flex justify-space-between rounded-lg" app>
      <h1>Dashboard</h1>
      <v-btn color="success">View Orders</v-btn>
    </v-subheader>
    <br />
    <v-row>
      <v-col cols="8">
        <v-alert type="success" text dense>
          loged in successfully <strong> well come to web burden</strong>
        </v-alert>
        <v-row>
          <v-col cols="6" v-for="(item, index) in activityLog" :key="index">
            <v-card class="rounded-lg" elevation="5">
              <v-card-text class="d-flex justify-space-between">
                <div>
                  <strong>{{ item.title }}</strong
                  ><br />
                  <span>last 3 weeks</span>
                </div>
                <v-avatar size="60" :color="item.color">
                  <span style="color: white">{{ item.amount }}</span>
                </v-avatar>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>Activities</v-card-title>
          <v-timeline dense class="text-left">
            <v-timeline-item>
              <strong>5 minutes ago </strong>
              <div class="text-caption">you have a new order</div>
            </v-timeline-item>
            <v-timeline-item color="green">
              <strong>25 minutes ago </strong>
              <div class="text-caption">product on the way</div>
            </v-timeline-item>
            <v-timeline-item>
              <strong> 35 minutes ago </strong>
              <div class="text-caption">another product just delivered</div>
            </v-timeline-item>
            <v-timeline-item color="red">
              <strong> a day minutes ago </strong>
              <div class="text-caption">you were about to make an order</div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mt-10">
          <v-data-table
            caption="Recent Order List"
            class="elevation-10"
            :headers="headers"
            :items="items"
            :items-per-page="5"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { faker } from "@faker-js/faker";
export default {
  data() {
    return {
      cards: ["Today", "Yesterday"],
      activityLog: [
        {
          title: "Total Products",
          amount: 50,
          icon: "mdi-account",
          color: "cyan lighten-3",
        },
        {
          title: "Total Customer",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "green darken-2",
        },
        {
          title: "Total Sale",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "blue-grey darken-1",
        },
        {
          title: "Pending Orders",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "deep-orange darken-1",
        },
        {
          title: "Total Sale",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "blue-grey darken-1",
        },
        {
          title: "Pending Orders",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "deep-orange darken-1",
        },
        {
          title: "Total Sale",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "blue-grey darken-1",
        },
        {
          title: "Pending Orders",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "deep-orange darken-1",
        },
      ],

      headers: [
        { text: "name", value: "name" },
        { text: "lastName", value: "lastName" },
        { text: "phoneNumber", value: "phoneNumber" },
        { text: "song", value: "song" },
      ],
      items: Array(20)
        .fill()
        .map(() => ({
          name: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phoneNumber: faker.phone.imei(),
          song: faker.music.songName(),
        })),
    };
  },
};
</script>
