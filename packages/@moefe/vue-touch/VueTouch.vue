<template>
    <div :class="classNames"
        style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import isMobile from 'utils/isMobile';

interface TouchProps {
    panMoveClass?: string;
}

interface TouchEvents {
    (evt: 'onPanStart', e: MouseEvent | TouchEvent): void;
    (evt: 'onPanMove', e: MouseEvent | TouchEvent): void;
    (evt: 'onPanEnd', e: MouseEvent | TouchEvent): void;
}

defineProps<TouchProps>();

const emit = defineEmits<TouchEvents>();

const panMoveClass = ref<string | undefined>();
const onMobile = ref(isMobile());
const isDragMove = ref(false);

const classNames = computed(() => ({
  [panMoveClass.value || '']: isDragMove.value,
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
  const el = document.querySelector('.touch-element') as HTMLElement;
  el?.addEventListener(dragStart.value, handleDragStart);
});
</script>