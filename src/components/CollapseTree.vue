<template>
  <div :class="['tree-node', { 'empty-node': amIEmptyNode }, {bold: isFolder}]"
  @click="toggle">
    {{ data.label }}
    <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
  <div v-if="displayedChildren.length" class="tree-node-children">
    <collapse-tree
      :key="child.id"
      v-for="(child, idx) in displayedChildren"
      :data="child"
      :shared="shared"
      :vm-idx="idx">
    </collapse-tree>
  </div>
  </div>
</template>
<script>
export default {
  name: 'CollapseTree',
  props: {
    data: { type: Object, required: true }, // { label: String, children: [{ label, children }] } or an empty object
    shared: { type: Object, default: () => ({/* draggingVm: VueInstance */}) }, // shared data for all the instances
    vmIdx: Number, // current instance's index in v-for (if exists)
    open: false
  },
  data () {
    return {
      showChildren: false
    }
  },
  computed: {
    amIEmptyNode () {
      // data of an empty node is an empty object: {}
      return !this.data.label
    },
    isFolder: function () {
      return this.data.children &&
        this.data.children.length
    },
    displayedChildren () {
      const realNodes = this.data.children
      if (!realNodes || !realNodes.length) return [] // an empty node or a real node without children
      return realNodes.reduce((displayedChildren, realNode) => {
        displayedChildren.push(realNode, {}/* <--- empty node */)
        return displayedChildren
      }, [{}])
    }
  },
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren
    },
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>
<style scoped>
  .bold {
    font-weight: bold;
  }
</style>
