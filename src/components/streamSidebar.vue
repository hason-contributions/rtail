<template>
  <div class="stream-sidebar">
    <md-field md-clearable>
      <label>Search streams</label>
      <md-input v-model="streamsFilter"/>
    </md-field>
    <md-content class="stream-sidebar__content md-scrollbar">
      <h4>Favorites</h4>
      <stream-list
        :streams="streamsFavorites"
        :streams-filter="streamsFilter"/>
      <h4>Streams</h4>
      <stream-list
        :streams="streamsNotFavorites"
        :streams-filter="streamsFilter"/>
    </md-content>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import streamList from './streamList.vue';

export default {
  components: {
    streamList,
  },
  data: () => ({
    streamsFilter: '',
  }),
  computed: mapState({
    streamsFavorites() { return this.$store.getters.streamsFavorites; },
    streamsNotFavorites() { return this.$store.getters.streamsNotFavorites; },
    isloadingComplete: state => state.isStreamsLoaded,
  }),
};
</script>

<style>
.stream-sidebar {
  padding: 0 5px;
  height: 100%;
  overflow: hidden;
}
.stream-sidebar__content {
  overflow: scroll;
  height: calc(100% - 76px);
}
</style>
