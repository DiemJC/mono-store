<script>
    export let label = '';
    export let name = '';
    export let ph = '';
    export let value = '';
</script>

<div class="form-group">
    <label for="" class="label text-sm">{label}</label>
    <textarea name={name} value={value}
    class="textarea textarea-bordered w-full" placeholder={ph} />
</div>