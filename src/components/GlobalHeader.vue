<!--
 * @Descripttion: 
 * @Author: heweilun weilun@ssc-hn.com
 * @Date: 2022-12-15
 * @LastEditors: heweilun weilun@ssc-hn.com
 * @LastEditTime: 2022-12-15
-->
<template>
    <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="list-inline mb-0" v-if="!user.isLogin">
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
        </ul>
        <ul class="list-inline mb-0" v-else>
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">{{user.name}}</a></li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { type } from 'os';
import { defineProps } from 'vue'
export type UserInfo = {
        isLogin: boolean
        name?: string
        id?: number | null
    }
 interface UserProps {
    user: UserInfo
}
const props = withDefaults(defineProps<UserProps>(), {user: () => ({
    isLogin: false
})})
</script>

<style lang="scss" scoped>

</style>