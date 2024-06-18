<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login</h1>
        <p class="py-6">
          Willkommen zurück! Hast du noch keinen Account? Dann erstelle dir hier
          einen:
          <NuxtLink to="/register" class="link link-secondary">
            Kostenlos Starten
          </NuxtLink>
        </p>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <button @click="loginUser" class="btn btn-primary">Login mit Google</button>
      </div>
      <div class="toast toast-top toast-center">
        <div v-if="showErrorToast" class="alert alert-info">
          <span>Nicht Erfolgreich. Überprüfe deine Eingabe</span>
        </div>
        <div v-if="showSuccessToast" class="alert alert-success">
          <span>Erfolgreich eingeloggt</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


const { auth } = useSupabaseClient();

const email = ref("");
const password = ref("");
const showErrorToast = ref(false);
const showSuccessToast = ref(false);



const router = useRouter();

const supabase = useSupabaseClient()

const loginUser = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/confirm',
    },
  })
  if (error) console.log(error)
}

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
}
</script>

<style scoped>
/* Your CSS here */
</style>
