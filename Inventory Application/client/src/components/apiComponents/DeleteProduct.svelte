<script>
    import {onMount} from 'svelte';
    import {dataStore} from '../../stores/dataStore'; 
    import {selected} from '../../stores/productSelectionStore'
    export let id;
    async function deleteProduct(){
        selected.set(false)
        await fetch(`http://localhost:3100/api/products/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            origin: 'http://localhost:3100'
        });

        dataStore.update(n=> n+1);
    }

    onMount(() =>{
        deleteProduct();
    })

</script>

<button class="bg-cyan-400 text-white rounded  p-2 flex justify-center items-center" on:click="{deleteProduct}" disabled={$selected == false}>
    Delete
</button>