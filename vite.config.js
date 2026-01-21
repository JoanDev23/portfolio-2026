
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    // define la raiz donde vite buscara archivos
    root: './',

    build: {
        //carpeta donde se generara la web final para subir a internet
        outDir: 'dist',


        // configuracion de Rollup para manejar multiples paginas
        rollupOptions: {
            input: {
                //pagina principal
                main: resolve(__dirname, 'index.html'),
            },
        },
    },

    server: {
        port: 3000,
        open: true, //abre el navegador automaticamente al ejecutar npm run dev
    },
});