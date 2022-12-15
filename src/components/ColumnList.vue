<!--
 * @Descripttion: 
 * @Author: heweilun weilun@ssc-hn.com
 * @Date: 2022-12-14
 * @LastEditors: heweilun weilun@ssc-hn.com
 * @LastEditTime: 2022-12-15
-->
<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-3 mt-4">
            <div class="card h-100 shadow-sm " >
                <div class="card-body text-center">
                    <img :src="column.avatar" class="card-img-top border rounded-circle w-25" :alt="column.title"/>
                    <h5 class="card-title">{{column.title}}</h5>
                    <p class="card-text text-start">{{column.description}}</p>
                    <a href="#" class="btn btn-outline-secondary">进入专栏</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
export interface ColumnProps {
    id: number
    title: string
    avatar?: string
    description: string
}
interface IProps {
    list: ColumnProps[]
}

const props = withDefaults(defineProps<IProps>(), {list: () => []})
const columnList = computed(() => {
    return props.list.map(column =>{
        if(!column.avatar) {
            column.avatar = new URL('@/assets/image/errorImage.png', import.meta.url).href
        }
        return column
    })
})
</script>

<style lang="scss" scoped>

</style>