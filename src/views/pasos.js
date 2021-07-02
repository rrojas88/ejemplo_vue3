

npm install vue@next
#npm install -D @vue/compiler-sfc
npm install -g @vue/cli

# Crear la App: "myapp"
vue create myapp
Defaul: [ vue2 ]
Defaul: [ vue3 ]
Manually features...
# De lo anterior Seleccionar "Manually..."

# Seleccionar de la lista :
* Babel

# Seleccionar la version de Vue:
* 3.x

# Seleccionar Configuracion en ficheros dedicados
* In dedicated config files
# Save para futures projects: N

// Iniciar el Servidor de VUE:
cd myapp
// Poner el ROUTER
vue add router
// Iniciar el Server local...
npm run serve

/*
=====================
Subir la APP en el server
*/
npm run build

# Crea la carpeta "dist"

1. Registrarme y logarme en : netlify.com
2. Ir a "Sites"
3. Bajar al final y arrastrar la carpeta "dist" para subirla....

4. Cambiar la URL: Ir a "Setting"
5. Change site name
6. poner nombre, ejemplo: miweb
# queda algo como: miweb.netlify.app




/* ======================
==== Plugins VS Code ====
*/

# Vue VSCode Snippets (Sirve para vue 3)

ejem: "vue" y selecciona el del template

---
# Vetur
Resaltar la sintasix de Vue

# Prettier - Code formatter
Formate y al Guardar formatea el codigo solo
1. Instalo
2. Setting
3. Save -> Format On Save (chulear)

4. CTRL + P (ver coso de comandos)
Format Document
y seleccionar en la venta: config
"prettier - code formatter"

# Path Intellisense

/* ======================
==== Plugins ATOM ====
*/

++ color-tabs
ctrl + alt + a (en la pestaña a poner color...)

++ chrome color picker
ctrl + alt + c

++ bracket-colorizer
