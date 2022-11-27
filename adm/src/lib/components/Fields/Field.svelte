<script>
    export let label;
    export let type;
    export let name;
    export let warning = false
    export let ph = '';
    export let fb = '';
    export let value = ''
    export let focusable = false;

    export let onChange = e => console.log('On change');
    const action = (node) => {
        if(focusable) node.focus();
    }
</script>

<div class="form-group">
    <label for="" class="label text-sm" class:text-error={warning} >{label}</label>
    <input 
        name={name} 
        type={type} 
        value={value} 
        class:input-error={warning} 
        class="input input-bordered form-control w-full" 
        placeholder={ph} 
        use:action
        on:change={onChange}
    >
    {#if warning}
    <label for="" class="label text-sm text-error">{fb}</label>
    {/if}
</div>