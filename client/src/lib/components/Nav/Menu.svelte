<script>
	import MdAddToPhotos from 'svelte-icons/md/MdAddToPhotos.svelte';
	import MdDashboard from 'svelte-icons/md/MdDashboard.svelte';
	import MdExitToApp from 'svelte-icons/md/MdExitToApp.svelte';
	import MdLibraryBooks from 'svelte-icons/md/MdLibraryBooks.svelte';

	import { link, push } from "svelte-spa-router";
	import { isAuthenticated } from '../../stores/auth';
	import MobileMenu from '../Buttons/MobileMenu.svelte';

    export function toggleMenu(){
        const nav = document.querySelector('nav')
        nav.classList.toggle('hidden')
    }

    function logout(){
        isAuthenticated.set(false)
        push('/auth')
    }
</script>

<MobileMenu {toggleMenu}/>
<nav class='not-printable text-white bg-slate-900  text-xl pt-24 pl-5
top-0 bottom-0 right-0 p-2
fixed

hidden
lg:left-0
lg:right-3/4
lg:static
lg:block
'>
<ul class='
flex flex-col gap-5
w-48
'>
    <a href="/" use:link>
        <li>
            <span class='menu-icons'> <MdDashboard/> </span>
            Overview
        </li>
    </a>
    <a href="/invoice/new" use:link>
        <li > 
            <span class='menu-icons'><MdAddToPhotos /></span>
            New Invoice
        </li>
    </a>
    <a href="/" use:link>
        <li > 
            <span class='menu-icons'><MdLibraryBooks /></span>
            Records
        </li>
    </a>
    <a class='justify-self-end' on:click={logout}>
        <li > 
            <span class='menu-icons exit '><MdExitToApp /></span>
            Logout
        </li>
    </a>

</ul>
</nav>

<style>
    nav > ul li{
        display: flex;
        align-items: center;
        gap:1.2rem;
        font-weight: 800;
        margin-bottom: 1.4rem;
    }
    .menu-icons {
        width: 1.8rem;

    }
    .exit {
        transform: rotate(180deg);
    }

</style>