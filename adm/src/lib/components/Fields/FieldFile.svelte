<script>
    export let label = '';
    export let fb = '';
    export let name = '';
    export let value = ''
    export let changed = false;

    const handleImage = e => {
        changed = true;
        const reader = new FileReader();
        reader.onload = e => {
            value = reader.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }

</script>

{#if value} 
    <img src="{value}" alt="cover" style="width:100px;margin:1em;">
    <div class="flex justify-start">
        <button class="btn btn-ghost btn-primary btn-sm" style="margin-left:1em;" on:click={() => value = ''}  >quitar</button>
    </div>
{/if}

<div class="form-group" class:hidden={value}>
    <label for="" class="label text-sm">{label}</label>
    <input name={name} type="file" bind:value class="file-input file-input-primary w-full " on:change={handleImage} />
    <label for="" class="label text-sm text-error">{fb}</label>
</div>

