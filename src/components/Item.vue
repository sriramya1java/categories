<template>
<div>
  <!--<v-layout row wrap>
    <v-flex xs2>
      <v-btn @click="expandAll">Expand All</v-btn>
    </v-flex>
    <v-flex xs2>
      <v-btn>Collapse All</v-btn>
    </v-flex>
  </v-layout>
  Integrate drag-drop and expanding collapsing functionality
  and just implement expandAll and collapseAll buttons
  -->
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">
      </item>
      <li class="add" @click="addChild">+</li>
    </ul>
</div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'Item',
  data: function () {
    return {
      open: false
    }
  },
  props: {
    model: Object
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>
<style scoped>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
