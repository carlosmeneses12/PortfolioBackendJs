import express from 'express'// importar express
import {dirname, join} from 'path' //modulos dirname es donde almacena la ubicacion del archivo, join concatena
import {fileURLToPath} from 'url' //Importa fileURLToPath de url para convertir URLs de archivo en rutas de sistema de archivos.
import indexRoute from './routes/index.js'

const app = express() //llamar a express en la app
const __dirname = dirname(fileURLToPath(import.meta.url))/**import.meta.url es la url de la ubicacion
del archivo, fileURLToPath toma la url y la transforma en ruta de archivo, dirname es donde node js guarda
el archivo, a ese parametro se le pasa todo lo anterior, con la finalidad de que sea un archivo estatico. */

app.set('views', join(__dirname, 'views')) // 
app.set('view engine', 'ejs')//motor para enviar vistas o templates
app.use(indexRoute)

app.use(express.static(join(__dirname, 'public')))





app.listen(3000)//poner a correr la app en servidor 3000
console.log('Server listening on port  ', 3000 )//Mensaje que esta corriendo en el server