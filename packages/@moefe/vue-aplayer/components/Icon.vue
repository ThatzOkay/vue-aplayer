<template>
    <img :src="icon" />   
</template>

<script setup lang="ts">
import play from '../assets/svg/play.svg';
import pause from '../assets/svg/pause.svg';
import { ref } from 'vue';

const props = defineProps({
  type: String,
});

const icon = ref(props.type === 'play' ? play : pause);

</script>