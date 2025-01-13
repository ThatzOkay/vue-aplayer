<template>
  <button
    type="button"
    :class="'aplayer-icon aplayer-icon-' + type"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { watch } from 'vue';

interface ButtonProps {
  type: string;
}

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};

const props = defineProps<ButtonProps>();

watch(
  () => props.type,
  () => {
    console.log(props.type);
  }
);
</script>
