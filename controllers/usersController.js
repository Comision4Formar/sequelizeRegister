module.exports = {
    register : (req,res) => {
        res.render('register')
    },
    processRegister : (req,res) => {
        res.send(req.body)
    },
    login : (req,res) => {
        res.render('login')
    },
    processLogin : (req,res) => {
        res.send(req.body)
    },
    logout : (req,res) => {

    },
    profile : (req,res) => {
        res.render('profile')
    }
}