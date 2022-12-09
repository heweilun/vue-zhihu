/*
 * @Descripttion: 
 * @Author: heweilun weilun@ssc-hn.com
 * @Date: 2022-12-09
 * @LastEditors: heweilun weilun@ssc-hn.com
 * @LastEditTime: 2022-12-09
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})
