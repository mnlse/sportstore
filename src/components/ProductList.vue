<template>
  <div>
    <div v-for="p in products" :key="p.id" class="card m-1 p-1 bg-light">
      <h4>
        {{p.name}}
        <span class="badge badge-pill badge-primary float-right">
          {{ p.price | currency }}
        </span>
      </h4>
    </div>
    <page-controls />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageControls from './PageControls.vue'

export default {
  components: { PageControls },
  computed: {
    ...mapGetters({ products: 'processedProducts' })
  },
  filters: {
    currency (value) {
      let val = Number(value)
      return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(val)
    }
  }
}
</script>

<style>

</style>
