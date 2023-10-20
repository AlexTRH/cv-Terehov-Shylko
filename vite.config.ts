import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@atoms/*': path.resolve(__dirname, './src/components/atoms/*'),
      '@molecules/*': path.resolve(__dirname, './src/components/molecules/*'),
      '@organisms/*': path.resolve(__dirname, './src/components/organisms/*'),
      '@components/*': path.resolve(__dirname, './src/components/*'),
      '@templates/*': path.resolve(__dirname, './src/components/templates/*'),
      '@features/*': path.resolve(__dirname, './src/components/features/*'),
      '@pages/*': path.resolve(__dirname, './src/pages/*'),
      '@dialogs/*': path.resolve(__dirname, './src/components/dialogs/*'),
      '@configuration/*': path.resolve(__dirname, './src/configuration/*'),
      '@constants/*': path.resolve(__dirname, './src/constants/*'),
      '@graphql/*': path.resolve(__dirname, './src/graphql/*'),
      '@helpers/*': path.resolve(__dirname, './src/helpers/*'),
      '@hooks/*': path.resolve(__dirname, './src/hooks/*'),
      '@interfaces/*': path.resolve(__dirname, './src/interfaces/*'),
      '@routes/*': path.resolve(__dirname, './src/routes/*'),
      '@themes/*': path.resolve(__dirname, './src/themes/*'),
    },
  },
})
