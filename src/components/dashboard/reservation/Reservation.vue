<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn class="mr-4" small color="button" dark>
        Add New
      </v-btn>
      <v-btn class="mr-4" small color="button" dark>
        Import
      </v-btn>
      <v-btn class="mr-4" small color="button" dark>
        Export
      </v-btn>
    </div>
    <v-row class="d-md-flex justify-md-space-between my-4">
      <h3 class="col-6">Reservation List</h3>
      <v-text-field class="table-search-field col-6 ml-auto" v-model="search" append-icon="mdi-magnify" label="Search" hide-details dense color="button"/>
    </v-row>
    <v-data-table
      dense
      :headers="headers"
      :items="reservation"
      class="elevation-1"
      :search="search"
      :loading="fetching"
    >
      <template v-slot:item.sl="{ index }">
        {{index + 1}}
      </template>
      <template v-slot:item.action="{ item }">
        <v-progress-circular v-if="submitting" class="mr-2" indeterminate color="" size="13" width="1.5" />
        <span v-else>
          <v-btn fab x-small class="my-1 mr-3" color="button" dark>
            <v-icon size="18" class="pointer">mdi-lead-pencil</v-icon>
          </v-btn>
          <v-btn fab x-small class="my-1" color="button" dark>
            <v-icon size="18" class="pointer">mdi-delete</v-icon>
          </v-btn>
        </span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return{
      headers: [
        { text: 'SL', align: 'center', sortable: false, value: 'sl'},
        { text: 'Arrival Date', align: 'center', sortable: false, value: 'date_of_arrival'},
        { text: 'Number Of Guest', align: 'center', sortable: false, value: 'total_guests'},
        { text: 'Actions', align: 'center', sortable: false, value: 'action'},
      ],
      reservation: [],
      search: '',
      submitting: false,
      fetching: false,
    }
  },
  methods: {
    ...mapActions(['ADD_RESERVATION', 'FETCH_ALL_RESERVATION']),
    async fetchData(){
      this.loading = true
      try{
        let data = await this.FETCH_ALL_RESERVATION()
        this.reservation = data.data
      }catch(e){
        console.log('Error: '+ e);
      }
      this.loading = false
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style lang="sass" scoped>
::v-deep .table-search-field
  width: 10%
  max-width: 300px 
.pop-dialog
  z-index: 999999
</style>