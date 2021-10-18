import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': `${__dirname}/src/components`,
            '@atoms': `${__dirname}/src/components/atoms`,
            '@molecules': `${__dirname}/src/components/molecules`,
            '@organisms': `${__dirname}/src/components/organisms`,
            '@layouts': `${__dirname}/src/layouts`,
            '@stores': `${__dirname}/src/stores`,
            '@modules': `${__dirname}/src/modules`,
        }
    }
})