<template>
  <v-app>

    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="curser: pointer">The Seminary App</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems"
        :key="item.title"
        router
        :to="item.link"
        @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>


    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'date_range', title: 'Attendance', link: '/attendance'},
        {icon: 'book', title: 'Scripture Reading', link: '/scriptureschedule'},
        {icon: 'assignment', title: 'Assignments', link: '/assignments'},
        {icon: 'face', title: 'Register', link: '/register'},
        {icon: 'lock_open', title: 'Sign in', link: '/signin'}
      ]

    }
  },
  name: 'App'
}
</script>
