<script>
    import { TableRow } from '$lib/components'

     export const userData = [
        {   
            src: 'https://i.pravatar.cc/300',
            name: 'User 1',
            city: 'Los Teques',
            company: 'IndieDev, Aether & inc.',
            profession: 'Developer',
            role: 'Admin'
        },

        {   
            src: 'https://i.pravatar.cc/300',
            name: 'User 2',
            city: 'Caracas',
            company: 'IndieDev, Aether & inc.',
            profession: 'Designer',
            role: 'Admin'
        },

        {   
            src: 'https://i.pravatar.cc/300',
            name: 'User 3',
            city: 'Montevideo',
            company: 'IndieDev, Aether & inc.',
            profession: 'Developer',
            role: 'Member'
        },

        {   
            src: 'https://i.pravatar.cc/300',
            name: 'User 4',
            city: 'California',
            company: 'IndieDev, Aether & inc.',
            profession: 'Intern',
            role: 'Member'
        }
    ]
</script>

<div class="overflow-x-auto w-full">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Role</th>
          <th>Actions</th>
          <th></th>
        </tr>
      </thead>
        <tbody>
            <TableRow {userData} />
        </tbody>
    </table>
</div>
