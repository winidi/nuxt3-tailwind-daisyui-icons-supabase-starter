
<template>
  <div v-if="embedCode" v-html="embedCode" class="twitter-embed"></div>
  <div v-else>Loading...</div>
</template>


<script setup>
import { useRoute } from 'vue-router';
import { useAsyncData } from 'nuxt/app';



const supabase = useSupabaseClient();
console.log("🚀 ~ supabase:", supabase)

const route = useRoute();
const { data: embedCode } = useAsyncData('twitterEmbed', () => fetchTwitterEmbed(route.params.id));

async function fetchTwitterEmbed(id) {
  console.log("🚀 ~ fetchTwitterEmbed ~ id:", id)
  const { data, error } = await supabase
    .from('webpagethreads')
    .select('embed_code')
    .eq('id', id)
    .single();
  console.log("🚀 ~ fetchTwitterEmbed ~ data:", data)
  
  if (error) {
    console.error('Error fetching Twitter embed:', error.message);
    return null;  // Return null to handle errors gracefully in the template.
  }
  return data.embed_code;
}

async function selectAll(){
    const { data, error } = await supabase
    .from('webpagethreads')
    .select('*')
    console.log("🚀 ~ selectAll ~ data", data)
}

selectAll()
</script>
