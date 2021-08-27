<template>
  <v-navigation-drawer permanent expand-on-hover app :width="280">
    <v-list>
      <v-list-item class="px-2" link to="/dashboard" dense>
        <v-list-item-avatar>
          <v-img src="@/assets/photo/logo.png" width="100"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>Conservation Club</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item class="pointer">
        <v-list-item-content>
          <v-list-item-title class="title">
            User Name
          </v-list-item-title>
          <v-list-item-subtitle>example@example.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link to="/dashboard/reservation">
          <v-list-item-icon>
            <v-icon color="button">mdi-book-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Reservation</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="button">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Rooms</v-list-item-title>
        </v-list-item>
      </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item link to="#">
        <v-list-item-icon>
          <v-icon color="button">mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon color="button">mdi-open-in-new</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.pointer
  cursor: pointer
</style>