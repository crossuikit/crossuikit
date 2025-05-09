import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const isProduction = process.env.NODE_ENV === 'production';
const CACHE_DIR = '.cache';
const CACHE_FILE = path.join(CACHE_DIR, 'css-cache.json');

async function getFileHash(filePath) {
    console.log(`Reading file for hash: ${filePath}`);
    const content = await fs.readFile(filePath, 'utf-8');
    return crypto.createHash('md5').update(content).digest('hex');
}

async function getCache() {
    try {
        console.log('Reading cache file...');
        const cacheContent = await fs.readFile(CACHE_FILE, 'utf-8');
        return JSON.parse(cacheContent);
    } catch {
        console.log('No cache found, starting fresh');
        return {};
    }
}

async function saveCache(cache) {
    console.log('Saving cache...');
    await fs.mkdir(CACHE_DIR, { recursive: true });
    await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
}

async function buildCSS() {
    try {
        const cssPath = 'src/styles/main.css';
        const tailwindConfigPath = './tailwind.config.js';

        console.log('Starting CSS build process...');
        console.log(`CSS file path: ${cssPath}`);
        console.log(`Tailwind config path: ${tailwindConfigPath}`);

        // Get file hashes
        console.log('Calculating file hashes...');
        const cssHash = await getFileHash(cssPath);
        const configHash = await getFileHash(tailwindConfigPath);

        // Check cache
        const cache = await getCache();
        const cacheKey = `${cssHash}-${configHash}`;

        if (cache[cacheKey] && !isProduction) {
            console.log('Using cached CSS build');
            await fs.mkdir('dist', { recursive: true });
            await fs.writeFile('dist/index.css', cache[cacheKey]);
            return;
        }

        console.log('Reading source CSS file...');
        const css = await fs.readFile(cssPath, 'utf-8');
        console.log('Source CSS file read successfully');

        console.log('Initializing PostCSS with Tailwind...');
        // Initialize Tailwind with optimized settings
        const tailwindPlugin = tailwindcss({
            content: ['./src/**/*.{js,ts,jsx,tsx}'],
            corePlugins: {
                preflight: false,
            },
            future: {
                hoverOnlyWhenSupported: true,
            },
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                            950: '#082f49',
                        },
                        secondary: {
                            50: '#f8fafc',
                            100: '#f1f5f9',
                            200: '#e2e8f0',
                            300: '#cbd5e1',
                            400: '#94a3b8',
                            500: '#64748b',
                            600: '#475569',
                            700: '#334155',
                            800: '#1e293b',
                            900: '#0f172a',
                            950: '#020617',
                        },
                    },
                    spacing: {
                        xs: '0.25rem',
                        sm: '0.5rem',
                        md: '1rem',
                        lg: '1.5rem',
                        xl: '2rem'
                    },
                    borderRadius: {
                        xs: '0.125rem',
                        sm: '0.25rem',
                        md: '0.375rem',
                        lg: '0.5rem',
                        xl: '0.75rem'
                    }
                }
            }
        });

        // Process the CSS with optimized settings
        const result = await postcss([
            tailwindPlugin,
            autoprefixer({
                remove: false,
                flexbox: 'no-2009',
            }),
        ]).process(css, {
            from: cssPath,
            to: 'dist/index.css',
            map: false,
        });
        console.log('PostCSS processing completed');

        // Ensure the dist directory exists
        console.log('Creating dist directory...');
        await fs.mkdir('dist', { recursive: true });

        // Write the processed CSS
        console.log('Writing processed CSS to file...');
        await fs.writeFile('dist/index.css', result.css);

        // Update cache
        console.log('Updating cache...');
        cache[cacheKey] = result.css;
        await saveCache(cache);

        console.log('CSS build completed successfully!');
    } catch (error) {
        console.error('CSS build failed:', error);
        process.exit(1);
    }
}

buildCSS(); 