import { writable } from "svelte/store";

export let isLoggedIn = writable(true);
export let hasAccount = writable(false)

export function setHasAccount(){
    hasAccount.update(value => value = !value)
}