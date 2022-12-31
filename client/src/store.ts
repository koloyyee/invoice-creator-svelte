import { writable } from 'svelte/store';



export const additionalNote = writable('');
export let isLoggedIn = writable(false);

