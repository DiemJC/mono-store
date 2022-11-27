<script>
    export let userData
</script>

{#each userData as user}
                    <tr>
                    <td>
                        <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                            <img src="https://i.pravatar.cc/300" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div class="font-bold">{user.name}</div>
                            <div class="text-sm opacity-50">{user.city}</div>
                        </div>
                        </div>
                    </td>
                    <td>
                        {user.company}
                        <br/>
                        <span class="badge badge-ghost badge-sm">{user.profession}</span>
                    </td>
                    <td>{user.role}</td>
                    <th>
                        <button class="btn btn-ghost btn-xs">details</button>
                    </th>
                    </tr>
                {/each}

            <!-- Code needs proper indentation  -->