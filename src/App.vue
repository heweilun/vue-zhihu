<!--
 * @Descripttion: 
 * @Author: heweilun weilun@ssc-hn.com
 * @Date: 2022-12-09
 * @LastEditors: heweilun weilun@ssc-hn.com
 * @LastEditTime: 2022-12-15
-->
<script setup lang="ts">
import useURLLoader from '@/hooks/useURLLoader'
import 'bootstrap/dist/css/bootstrap.min.css'
import CoumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserInfo } from '@/components/GlobalHeader.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: '标题1',
    description: '这是专栏1',
    avatar: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.png'
  },
  {
    id: 2,
    title: '标题2',
    description: '这是专栏2'
  },
  {
    id: 3,
    title: '标题3',
    description: '这是专栏3',
    avatar: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.png'
  },
  {
    id: 4,
    title: '标题4',
    description: '这是专栏4',
    avatar: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.png'
  },
  {
    id: 5,
    title: '标题5',
    description: '这是专栏5',
    avatar: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.png'
  }
]
const currentUser: UserInfo  = {
  isLogin: true,
  name: '',
  id: 1
}
interface CatResult {
  id: string
  url: string
  width: number
  height: number
  breeds: string[]
}
const { result, error, loading, loaded } = useURLLoader<CatResult[]>("http://api.thecatapi.com/v1/images/search?limit=1")

</script>

<template>
  <div class="container">
    <GlobalHeader :user="currentUser"/>
    <CoumnList :list="testData"/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
