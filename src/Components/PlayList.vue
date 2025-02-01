<template>
  <div class="aplayer-list-wrap">
    <ol ref="list" class="aplayer-list" :style="style">
      <li v-for="(item, index) in dataSource" :key="item.id" :class="classNames({
        'aplayer-list-light': item.id === currentMusic?.id,
      })
        " @click="handleClick(item, index)">
        <span class="aplayer-list-cur" :style="{ backgroundColor: aplayer?.currentTheme }" />
        <span class="aplayer-list-index">{{ index + 1 }}</span>
        <span class="aplayer-list-title">{{ item.name }}</span>
        <span class="aplayer-list-author">{{ item.artist }}</span>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import classNames from 'classnames';
import type { Audio, Options } from '../types';
import { computed, inject, ref, watch } from 'vue';

interface PlayListProps {
  visible?: boolean;
  currentMusic?: Audio;
  dataSource: Audio[];
  scrollTop: number;
}

const emit = defineEmits(['change']);

const props = withDefaults(defineProps<PlayListProps>(), {
  visible: false,
});

const aplayer = inject<
  Options & {
    currentTheme: string;
  }
>('aplayer');

const list = ref<HTMLOListElement | null>(null);

const listHeight = computed(() => {
  return props.visible
    ? Math.min(props.dataSource.length * 33, Number(aplayer?.listMaxHeight))
    : 0;
});

const style = computed(() => {
  return {
    height: listHeight.value + 'px',
  };
});

const handleChangeScrollTop = async () => {
  if (props.visible) {
    if (!list.value) {
      return;
    }
    list.value.scrollTop = props.scrollTop;
  }
};

watch(
  () => props.scrollTop,
  () => handleChangeScrollTop(),
  { immediate: true }
);
watch(
  () => props.dataSource,
  () => handleChangeScrollTop(),
  { immediate: true }
);
watch(
  () => props.visible,
  () => handleChangeScrollTop()
);

const handleClick = (item: Audio, index: number) => {
  emit('change', item, index);
};
</script>