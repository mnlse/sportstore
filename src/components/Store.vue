<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white">
                <div class="navbar-brand">Sklep sportowy</div>
            </div>
        </div>

        <div class="row">
            <div class="col-3 bg-info p-2">
                <h4 class="text-white m-2">
                    <category-controls />
                </h4>
            </div>
            <div class="col-9 bg-success p-2">
                <product-list />
            </div>
        </div>
    </div>
</template>

<script>
import ProductList from './ProductList'
import CategoryControls from './CategoryControls'

export default {
  name: 'Store',
  components: {
    ProductList, CategoryControls
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
