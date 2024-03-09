import { Router } from 'express' //Router es una app especifica de express para enrutar de manera estatica las vistas 

const router = Router()//se llama al modulo mediante la constante router

//VISTAS
router.get('/', (req, res) => res.render('index', {title: 'First website with node'}))//Define una ruta raíz que renderiza la vista 'index'.

router.get('/about', (req, res) => res.render('about', {title: 'Sobre mi'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contacto'}))

export default router