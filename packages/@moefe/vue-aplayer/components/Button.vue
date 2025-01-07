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
import { watch } from 'vue';
import Icon from './Icon.vue';

interface ButtonProps {
  type: string;
  icon: string;
}

const emit = defineEmits(['click']);

const handleClick = () => {
    emit('click');
};

const props = defineProps<ButtonProps>();

watch(() => props.type, () => {
    console.log(props.type);
});
</script>
