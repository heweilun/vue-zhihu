/*
 * @Descripttion: 
 * @Author: heweilun weilun@ssc-hn.com
 * @Date: 2022-12-12
 * @LastEditors: heweilun weilun@ssc-hn.com
 * @LastEditTime: 2022-12-13
 */
import { ref } from 'vue'
import axios from 'axios'

function useURLLoader<T> (url: string) {
    const result = ref<T | null>(null)
    const loading = ref<boolean>(true)
    const loaded = ref<boolean>(false)
    const error = ref(null)

    axios.get(url).then((rowData) => {
        loading.value = false
        loaded.value = true
        result.value = rowData.data
    }).catch(e => {
        error.value = e
        loading.value = false
    })
    return {
        result,
        loading,
        error,
        loaded
    }
}

export default useURLLoader
