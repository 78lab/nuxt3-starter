<template>
<h3>inputEntry name:{{user.savedName}}</h3>
<div><input type="text" v-model="user.savedName"></div>

</template>

<script setup>
const user = useUserStore()
</script>