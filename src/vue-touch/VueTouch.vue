<template>
  <div
    ref="touchElement"
    :class="classNames"
    style="
      touch-action: none;
      user-select: none;
      -webkit-user-drag: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    "
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import isMobile from '@/utils';

interface TouchProps {
  panMoveClass?: string;
}

const touchElement = ref<HTMLElement | null>(null);

defineProps<TouchProps>();

const emit = defineEmits(['onPanStart', 'onPanMove', 'onPanEnd']);

const touchClass = ref<string | undefined>();
const onMobile = ref(isMobile());
const isDragMove = ref(false);

const classNames = computed(() => ({
  [touchClass.value || '']: isDragMove.value,
}));

const dragStart = computed(() => (onMobile.value ? 'touchstart' : 'mousedown'));
const dragMove = computed(() => (onMobile.value ? 'touchmove' : 'mousemove'));
const dragEnd = computed(() => (onMobile.value ? 'touchend' : 'mouseup'));

const thumbMove = (e: MouseEvent | TouchEvent) => {
  isDragMove.value = true;
  emit('onPanMove', e);
};

const thumbUp = (e: MouseEvent | TouchEvent) => {
  document.removeEventListener(dragMove.value, thumbMove);
  document.removeEventListener(dragEnd.value, thumbUp);
  isDragMove.value = false;
  emit('onPanEnd', e);
};

onMounted(() => {
  const handleDragStart = (e: MouseEvent | TouchEvent) => {
    emit('onPanStart', e);
    document.addEventListener(dragMove.value, thumbMove);
    document.addEventListener(dragEnd.value, thumbUp);
  };

  // Attach the event listener to the root element
  touchElement.value?.addEventListener(dragStart.value, handleDragStart);
});
</script>
