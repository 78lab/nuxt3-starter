<template>
<div>
    <h1>Index Page name: {{user.savedName}}</h1>
    <InputEntry />
    <Auth />
    <h3>Time Ago: {{ timeAgo }}</h3>
</div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useUserStore()
const startAt = Date.now()
const timeAgo = useTimeAgo(startAt)
</script>