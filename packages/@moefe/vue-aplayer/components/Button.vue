<template>
    <button
        type="button"
        :class="'aplayer-icon aplayer-icon-' + type"
        @click="handleClick"
        >
        <Icon :type="icon" />
    </button>
</template>

<script setup lang="ts">
import Icon from './Icon.vue';

interface ButtonProps {
  type: string;
  icon: string;
}

const emit = defineEmits(['click']);

const handleClick = () => {
    emit('click');
};

defineProps<ButtonProps>();
</script>