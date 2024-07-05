import { readable } from 'svelte/store';
import { onMount } from 'svelte';


const apiURL = "/api/test";

const getData = async () => {
    const res = await fetch(apiURL);
    if(!res.ok){
        throw new Error('Bad response');
    } 
    const items = await res.json();
    return items;
}

export const todos = readable([], set => {
    onMount(() => {
        getData()
            .then(set)
            .catch(err => {
                console.error('Failed to fetch', err)
            })
        return () => {

        }
    })
})


