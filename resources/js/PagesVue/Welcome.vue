<template>
  <layout>
    <div>
      This is the welcome page: {{ foo }}
    </div>
  </layout>
</template>

<script>
import Layout from '@/Shared/Layout'

export default {
 props: ['foo'],

  components: {
    Layout,
  },
}
</script>
