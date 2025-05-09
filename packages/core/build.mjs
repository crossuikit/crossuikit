import * as esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

const isProduction = process.env.NODE_ENV === 'production';

async function build() {
    try {
        // Common build options
        const commonOptions = {
            entryPoints: ['src/index.ts'],
            bundle: true,
            minify: isProduction,
            sourcemap: !isProduction,
            target: ['es2019'],
            plugins: [nodeExternalsPlugin()],
            external: ['react', 'react-dom'],
        };

        // Build ESM version
        await esbuild.build({
            ...commonOptions,
            format: 'esm',
            outfile: 'dist/index.mjs',
        });

        // Build CJS version
        await esbuild.build({
            ...commonOptions,
            format: 'cjs',
            outfile: 'dist/index.js',
        });

        console.log('Build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build(); 