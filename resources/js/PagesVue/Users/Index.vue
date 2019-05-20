<template>
  <layout>
    <div class="container">
      <div v-if="successMessage" class="alert alert-success mt-4">
        {{ successMessage }}
      </div>

      <div class="my-5">
        <a href="/users/create" class="btn btn-primary">Create User</a>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <inertia-link :href="`/users/${user.id}/edit`">Edit</inertia-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </layout>
</template>

<script>
import Layout from '@/Shared/Layout'

export default {
 props: ['users', 'successMessage'],

  components: {
    Layout,
  },
}
</script>
