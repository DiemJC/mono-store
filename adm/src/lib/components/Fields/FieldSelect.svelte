<script>
    export let options;
    export let label;
    export let name = '';
    export let warnings = false;
    export let fb = '';
    export let value = ''

    export let onChange = e => console.log(e.target.value);

</script>

<div class="form-group">
    <label for="" class="label text-sm" class:text-error={warnings}>{label}</label>
    <select on:change={onChange} name={name} id="" value={value} class="select select-bordered w-full" class:select-error={warnings} >
        <option value="" disabled selected>Seleccione</option>
        {#if options.length > 0}
            {#each options as option}
            <option value="{option.key}">{option.text}</option>
            {/each}
        {/if}
    </select>
    <label for="" class="label text-sm" class:text-error={warnings}>{fb}</label>
</div>