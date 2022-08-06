<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-img
      src="https://preview.pixlr.com/images/800wm/1439/2/1439104804.jpg"
      class="pa-4"
    >
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="84">
          <v-img
            aspect-ratio="30"
            src="https://www.thefamouspeople.com/profiles/images/friedrich-nietzsche-23.jpg"
          />
        </v-avatar>
        <h2 class="black--text">Web Burden</h2>
      </div>
    </v-img>

    <v-divider></v-divider>
    <br />
    <v-list>
      <v-list-item
        v-for="[icon, text] in links"
        :key="icon"
        link
        v-ripple="false"
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["drawer"],
  computed: {
    ...mapState({
      links: (state) => state.yohans.links,
    }),
  },
};
</script>
