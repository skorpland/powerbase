<script lang="ts">
  import { powerbase } from "../powerbaseClient";

  let loading = false
  let email = ''

  const handleLogin = async () => {
    try {
      loading = true
      const { error } = await powerbase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }
</script>

<div class="row flex-center flex">
  <div class="col-6 form-widget" aria-live="polite">
    <h1 class="header">Powerbase + Svelte</h1>
    <p class="description">Sign in via magic link with your email below</p>
    <form class="form-widget" on:submit|preventDefault={handleLogin}>
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          class="inputField"
          type="email"
          placeholder="Your email"
          bind:value={email}
        />
      </div>
      <div>
        <button type="submit" class="button block" aria-live="polite" disabled={loading}>
          <span>{loading ? 'Loading' : 'Send magic link'}</span>
        </button>
      </div>
    </form>
  </div>
</div>
