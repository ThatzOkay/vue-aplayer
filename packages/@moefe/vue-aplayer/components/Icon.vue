  <template>
  <img :src="icon" :alt="`${type} icon`" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: String,
});

// Dynamically construct the path to the SVG based on the `type` prop
const icon = computed(() => {
  return new URL(`../assets/svg/${props.type}.svg`, import.meta.url).href;
});
</script>
