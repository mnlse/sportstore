<template>
  <div v-if="pageCount > 1" class="text-right">
    <div class="row mt-2">
      <div class="col form-group">
        <select
          name="pageSize"
          id="pageSize"
          class="form-control"
          @change="changePageSize"
        >
          <option value="4">4 na stronę</option>
          <option value="8">8 na stronę</option>
          <option value="12">12 na stronę</option>
        </select>
      </div>
      <div class="btn-group mx-2">
        <button v-for="i in pageNumbers" :key="i"
          class="btn"
          :class="{ 'btn-primary': i == currentPage, 'btn-secondary': i != currentPage }"
          @click="setCurrentPage(i)">
          {{ i }}
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['pageCount']),
    pageNumbers () {
      return [...Array(this.pageCount + 1).keys()].slice(1)
    }
  },
  methods: {
    ...mapMutations(['setCurrentPage', 'setPageSize']),
    changePageSize ($event) {
      this.setPageSize(Number($event.target.value))
    }
  }
}
</script>

<style>

</style>
