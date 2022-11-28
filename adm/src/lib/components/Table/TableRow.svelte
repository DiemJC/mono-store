<script>
    export let userData = [
        {   
            src: 'https://i.pravatar.cc/300',
            names: 'Developer',
            lastnames: 'None',
            lastlogin: 'hace un día',
            online: false,
            role: 'dev'
        },

        {   
            src: 'https://i.pravatar.cc/300',
            names: 'Administrator',
            lastnames: 'None',
            lastlogin: 'hace un minuto',
            online: true,
            role: 'adm'
        },

        {   
            src: 'https://i.pravatar.cc/300',
            names: 'Scout',
            lastnames: 'None',
            lastlogin: 'hace 2 horas',
            online: false,
            role: 'scout'
        },

        {   
            src: 'https://i.pravatar.cc/300',
            names: 'User',
            lastnames: 'None',
            lastlogin: 'hace 3 días',
            online: false,           
            role: 'user'
        }
    ]
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
                <div class="font-bold">{user.names}</div>
                <div class="text-sm opacity-50">{user.lastnames}</div>
            </div>
        </div>
    </td>
    <td>
        {user.lastlogin}
        <br/>
        <span class="badge badge-sm" class:badge-success={user.online} class:badge-error={!user.online}>
            {user.online ? 'online' : 'offline'}
        </span>
    </td>
    <td>{user.role}</td>
    <th>
        <button class="btn btn-ghost btn-xs">detalles</button>
    </th>
</tr>
{/each}

            <!-- Code needs proper indentation  -->