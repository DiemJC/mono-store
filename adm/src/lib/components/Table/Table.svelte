<script>
    import { TableRow } from '$lib/components';
</script>

<div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Sesión</th>
          <th>Role</th>
          <th>Actions</th>
          <th></th>
        </tr>
      </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</div>
