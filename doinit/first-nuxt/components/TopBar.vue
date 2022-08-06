<template>
  <v-app-bar elevate-on-scroll elevation="3" color="white" app>
    <v-app-bar-nav-icon
      v-ripple="false"
      @click.stop="$emit('drawerEvent')"
    ></v-app-bar-nav-icon>
    <v-spacer />
    <v-col lg="6" cols="12">
      <v-text-field
        outlined
        rounded
        dense
        placeholder="search"
        class="p-0 m-0 mt-6"
        append-icon="mdi-magnify"
      ></v-text-field>
    </v-col>
    <v-spacer />

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span class="mx-5 mr-10" style="cursor: pointer" v-on="on">
          <v-badge :content="items.length" offset-x="10">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </span>
      </template>
      <v-list three-line width="250">
        <v-subheader> Notifications </v-subheader>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span class="mx-5 mr-10" style="cursor: pointer" v-on="on">
          <v-chip>
            <v-badge color="green" bottom dot offset-x="10" offset-y="10">
              <v-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/81.jpg" />
              </v-avatar>
            </v-badge>
            <span class="ml-2"> Hana Dejene </span>
          </v-chip>
        </span>
      </template>

      <v-list width="250">
        <v-subheader>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Hana Dereje</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-subheader>
        <v-divider />
        <v-list-item
          v-for="(item, index) in menus"
          :key="index"
          style="cursor: pointer"
          :ripple="false"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      items: (state) => state.yohans.items,
      menus: (state) => state.yohans.menus,
    }),
    itemsLength() {
      items.length;
    },
  },
};
</script>
