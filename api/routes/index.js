const express = require("express")
const router = express.router()

router.get("/", (req, res) => {
    res.send(router)
})

router.get("/users", (req, res) => {
    
})

router.get("/users/:id", (req, res) => {
    
})

router.put("/users/:id", (req, res) => {
    
})

router.patch("/users/:id", (req, res) => {
    
})

router.post("/register", (req, res) => {

})

router.get("/books", (req, res) => {

})

router.get("/book/:id", (req, res) => {
    
})

router.put("/book/:id", (req, res) => {

})

router.patch("/book/:id", (req, res) => {
    
})

router.delete("/book/:id", (req, res) => {
    
})

router.post("/bookAuthor", (req, res) => {
    
})

router.get("/bookDetails", (req, res) => {
    
})


module.exports = router