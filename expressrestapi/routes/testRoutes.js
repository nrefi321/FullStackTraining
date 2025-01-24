import express from 'express'   // Import express

const router = express.Router() // Create a new router

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.get('/about', (req, res) => {
    res.send('About Us')
})
router.post('/login', (req, res) => {
    res.send('Login Success')
})
router.put('/user', (req, res) => {
    res.send('User Updated')
})
router.delete('/user', (req, res) => {
    res.send('User Deleted')
})

export default router // Export the router