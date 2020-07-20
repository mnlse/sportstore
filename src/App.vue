<template>
    <div id="app">
      <store></store>
    </div>
</template>

<script>
import Store from './components/Store.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Store
  },
  methods: {
    ...mapActions(['getData'])
  },
  created () {
    this.getData()
  }
}
</script>

<style>

</style>
