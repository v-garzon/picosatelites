import pool from "../db.js";

export const pullPageContent = async (req, res) => {
    // make it try catch
    const { page } = req.params
    switch (page) {

        case 'HOME': 
        case 'PROJECT':
            const [sections] = await pool.query(`SELECT DISTINCT section FROM ${page}`)
            var unique = []
        
            for (let i = 0; i < sections.length; i++) {
                unique.push(sections[i].section)
            }
            var content = {
                page: page
            }
        
            for (let i = 0; i < unique.length; i++) {
                let section = unique[i]
                const [response] = await pool.query(`SELECT * FROM ${page} WHERE section = ? ORDER BY created_at DESC limit 1`, section)
                content[section] = response[0]
            }
        
            console.log(content)
            res.json(content)
            break

        case 'OURTEAM':
            const [names] = await pool.query(`SELECT DISTINCT name FROM ${page}`)
            var unique = []
        
            for (let i = 0; i < names.length; i++) {
                unique.push(names[i].name)
            }

            var content = {
                page: page
            }

            for (let i = 0; i < unique.length; i++) {
                let member = unique[i]
                const [response] = await pool.query(`SELECT * FROM ${page} WHERE name = ? ORDER BY created_at DESC limit 1`, member)
                content[member] = response[0]
            }

            console.log(content)
            res.json(content)
            break

        default:
            res.json({
                Error: 'No page selected'
            })
    }

    

}


export const pullAllContent = async () => {
    //make it try catch
    let content = {
        HOME: '',
        SUPPORT: '',
        OURTEAM: '',
        NEWS: '',
        PROJECT: ''
    }

    for (page in content) {
        content[page] = await pool.query('SELECT * FROM texts WHERE page = ?', page)
    }
    console.log(content)
    res.json(content)
}

export const pushContent = async (req, res) => {

    const cont = req.body

    const pushHomeContent = async (content) => {
        try {
            const result = await pool.query('INSERT INTO HOME(section, content, path_to_image, user, user_id) VALUES (?, ?, ?, ?, ?)',
                [content.section, content.content, content.image, content.user, content.user_id])
            return result
        } catch (error) {
            return error
        }
    }

    const pushProjectContent = async (content) => {
        // console.log(content)
        try {
            const result = await pool.query('INSERT INTO PROJECT(section, content, user, user_id) VALUES (?, ?, ?, ?)',
                [content.section, content.content, content.user, content.user_id])
            return result
        } catch (error) {
            return error
        }
    }

    const pushOurTeamContent = async (content) => {
        // console.log(content)
        try {

            if (content.leader) {
                switch (content.leader) {
                    case 'true':
                        content.leader = true
                        break
                    case 'false':
                        content.leader = false
                        break
                    default:
                        break
                }
            }
    
            if (content.major_contributions) {
                content.major_contributions = content.major_contributions.split(',')
                for (let i = 0; i < content.major_contributions.length; i++) {
                    content.major_contributions[i] = content.major_contributions[i].trim()
                }
                content.major_contributions = JSON.stringify(content.major_contributions)
            }

            const result = await pool.query('INSERT INTO OURTEAM(name, team, description, major_contributions, contact, path_to_image, leader, user, user_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [content.name, content.team, content.description, content.major_contributions, content.contact, content.image, content.leader, content.user, content.user_id])
            return result
        } catch (error) {
            return error
        }
    }


    switch (cont.page) {
        case 'HOME':
            var result = await pushHomeContent(cont)
            res.json({
                feedback: result
            })
            break

        case 'PROJECT':
            var result = await pushProjectContent(cont)
            res.json({
                feedback: result
            })
            break

        case 'OURTEAM':
            var result = await pushOurTeamContent(cont)
            res.json({
                feedback: result
            })
            break
        default:
            res.json({
                Error: 'No page selected. An error ocurred'
            })
    }
}