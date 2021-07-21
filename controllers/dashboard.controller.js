

const { v4: uuidv4 } = require('uuid');


const viewRootDashboard = (req, res, next) => {
    res.status(200).render('dashboard/dashboard', { title: 'Game Academy by Zuhri Saifudin' });
}


const loginHandler = async (req, res, next) => {
    await db.User.authenticate(req.body)
      .then(user => {
        if (user.username === "admin") {
          console.log("Amin Masuk");
          dataUser = {
            id: user.id,
            username: user.username,
            token: user.generateToken()
          }
          res.status(200).redirect('/dashboard/users');
        } else {
          res.redirect('/dashboard');
          next("USER UNAUTHORIZED");
        }
      })
      .catch(error => {
        console.log(error);
        res.redirect('/dashboard');
      })
}
  
module.exports = {
    viewRootDashboard,
    loginHandler
}