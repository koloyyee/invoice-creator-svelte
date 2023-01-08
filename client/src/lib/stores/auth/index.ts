import { writable } from "svelte/store";

export let isAuthenticated = writable(false);
export let hasAccount = writable(false)

export function setHasAccount(){
    hasAccount.update(value => value = !value)
}