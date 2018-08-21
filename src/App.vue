<template>
  <div id="app">
    <tree-node :data="treeData1"/>
    <!--<collapse-tree :data="collapseData1"/>-->
    <item
      class="item"
      :model="treeData">
    </item>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TreeNode from '@/components/TreeNode'
import Item from './components/Item.vue'
export default {
  components: {
    TreeNode,
    Item},
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'treeData',
      'treeData1'
    ])
  }
}
</script>
