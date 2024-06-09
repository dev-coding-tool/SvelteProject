<script>
	import { page } from '$app/stores';
    let pageUrl = $page.url;
    let breadcrumbArray = [];

    if(pageUrl){
        let pathName = pageUrl.pathname;
        let pathNameArray = pathName.slice(1,pathName.length).split('/');
        
        let pathValue = '';
        let nameValue = '';
        let obj={};

        for(let i=0; i<pathNameArray.length; i++){
            nameValue = pathNameArray[i];
            pathValue += '/'+nameValue;

            obj = {
                name: nameValue,
                path: pathValue
            };

            breadcrumbArray.push(obj);
        }
    }
    
</script>

<div class="breadcrumb_container">
    <nav class="mx-2 py-1" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a data-sveltekit-reload href="/">Coding-Tool</a></li>
            {#each breadcrumbArray as {name, path}, i}
                <li class="breadcrumb-item {i == breadcrumbArray.length-1 ? 'active' : ''}" aria-current="page">
                    <a data-sveltekit-reload href={path}>{name}</a>
                </li>
            {/each}
        </ol>
    </nav>
</div>

<style>
</style>