import pool from "../db.js";
import bcryptjs from 'bcryptjs'

export const register = async (req, res) => {
    //make it try catch
    try {
        const { username, email, password } = req.body
        console.log(username, email, password)
        let passwordHash = await bcryptjs.hash(password, 10)

        const [rowsWithUsername] = await pool.query('SELECT * FROM users WHERE username = ?', username)
        const [rowsWithEmail] = await pool.query('SELECT * FROM users WHERE email = ?', email)


        if (rowsWithUsername.length !== 0) {
            res.json({
                registerError: 'This username already exists'
            })
        } else if (rowsWithEmail.length !== 0) {
            res.json({
                registerError: 'This email already exists'
            })
        } else {
            const [result] = await pool.query('INSERT INTO users(username, email, password) VALUES (?, ?, ?)', [username, email, passwordHash])
            res.json({
                redirect: '/auth/login'
            })
        }
    } catch (error) {
        res.json(error)
    }

}

export const login = async (req, res) => {
    //make it try catch
    console.log(req.body)
    const { username, password, type } = req.body
    console.log(username, password, type)

    const loginAction = async (response) => {
        // CHECKING IF EXISTS A USER WITH USERNAME / EMAIL  
        if (response.length == 0) {
            res.json({
                loginError: 'No matching user with username'
            })

        } else if (response.length > 1) {
            res.json({
                loginError: 'ServerError: multiple accounts were found'
            })
        // CHECKING IF PASSWORD IS CORRECT
        } else {
            var passwordIsCorrect = await bcryptjs.compare(password, response[0].password)
            if (!passwordIsCorrect) {
                res.json({
                    loginError: 'Incorrect Password'
                })
            } else {
                const user = {
                    id: response[0].id,
                    username: response[0].username,
                    email: response[0].email
                }

                res.json({
                    user
                })
            }
        }
    }

    switch (type) {
        case 'email':
            var [user] = await pool.query('SELECT * FROM users WHERE email = ?', email)
            loginAction(user)
            break
        case 'username':
            var [user] = await pool.query('SELECT * FROM users WHERE username = ?', username)
            loginAction(user)
            break
        default:
            res.json({
                loginError: 'Nonetype not valid. An error ocurred'
            })
            break
    }





    //check if password hash is correct
    // res.json(uid)
}