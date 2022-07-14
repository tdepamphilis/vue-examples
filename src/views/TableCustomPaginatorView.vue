<template>
  <div class="container">
    <v-card elevation="2">
      <table-custom-paginator />
    </v-card>
  </div>
</template>

<script>
import TableCustomPaginator from "@/components/TableCustomPaginator.vue";
export default {
  name: "TableCustomPaginatorView",
  components: { TableCustomPaginator },
};
</script>

<style>
.container {
  width: 30%;
  margin: auto;
}
</style>