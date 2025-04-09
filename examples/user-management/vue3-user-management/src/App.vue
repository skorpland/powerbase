<script setup>
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { powerbase } from './powerbase'

const session = ref()

onMounted(() => {
  powerbase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  powerbase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
</template>