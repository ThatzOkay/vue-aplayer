import { InstallOptions } from '@/types';
import { ref, watch } from 'vue';

const key = 'aplayer-setting';

// Reactive store for shared data
const store = ref<InstallOptions[]>(JSON.parse(localStorage.getItem(key) || '[]'));

// Watch for changes to sync with localStorage
watch(store, (newVal) => {
  localStorage.setItem(key, JSON.stringify(newVal));
});

// Methods to interact with the store
const set = (val: InstallOptions[]) => {
  store.value = val;
};

export const usePlayerStore = () => ({
  store,
  set,
});
