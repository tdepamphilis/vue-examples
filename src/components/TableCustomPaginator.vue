<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      style="z-index: 1"
      :search="searchBar"
      hide-default-footer
      :page.sync="page"
    >
      <template v-slot:top>
        <v-text-field
          v-model="searchBar"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          class="searchbar"
        ></v-text-field>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div style="max-width: 5em; padding: 0px">
          <v-btn icon x-small>
            <v-icon @click="edititem(item)">mdi-pencil</v-icon>
          </v-btn>
        </div>
      </template>
      <template v-slot:footer>
        <v-pagination v-model="page" :length="pageCount" :total-visible="5">
        </v-pagination>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchBar: null,
      page: 1,
      headers: [
        { text: "nombre", value: "nombre", width: '25%' },
        { text: "sexo", value: "sexo", width: '25%' },
        { text: "edad", value: "edad", width: '50%',  },
        { text: "opciones", value: "actions", align: 'center', sortable: false },
      ],
      items: [
        { nombre: "Juan", edad: 17, sexo: "M" },
        { nombre: "carlos", edad: 17, sexo: "M" },
        { nombre: "Pedro", edad: 17, sexo: "M" },
        { nombre: "Martin", edad: 17, sexo: "M" },
        { nombre: "Mariano", edad: 17, sexo: "M" },
        { nombre: "Roberto", edad: 17, sexo: "M" },
        { nombre: "Carla", edad: 17, sexo: "F" },
        { nombre: "Laura", edad: 17, sexo: "F" },
      ],
    };
  },
  computed: {
    pageCount() {
      if (this.items.length % 5 == 0) {
        return this.items.length / 5;
      }
      return this.items.length / 5 + 1;
    },
  },
};
</script>

<style scoped>

.searchbar{
    width: 45%;
    margin: auto;
}
</style>