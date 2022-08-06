<template>
  <v-app id="inspire">
    <TopBar @drawerEvent="drawer = !drawer"> </TopBar>
    <SideBar :drawer="drawer"></SideBar>
    <v-main>
      <v-container>
        <DashBoard></DashBoard>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import TopBar from "../components/TopBar.vue";
import DashBoard from "../components/DashBoard.vue";

export default {
  components: { SideBar, TopBar, DashBoard },
  data: () => ({
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
  }),
};
</script>
