<template>

    <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="route in menuroutes" :key="route.name">
          <router-link :to="route.path ? route.path : '/'">
            {{ route.title }}
          </router-link>
        </el-menu-item>
    </el-menu>

</template>

<script>
export default {
    props: {
        menuroutes: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>