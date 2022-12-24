import pool from "../db.js";

export const pullPageContent = async (req, res) => {
    // make it try catch
    const { page } = req.params


    const [sections] = await pool.query(`SELECT DISTINCT section FROM ${page}`)
    let unique = []

    for (let i = 0; i < sections.length; i++) {
        unique.push(sections[i].section)
    }
    let content = {}

    for (let i = 0; i < unique.length; i++) {
        let section = unique[i]
        const [response] = await pool.query(`SELECT * FROM ${page} WHERE section = ? ORDER BY created_at DESC limit 1`, section)
        content[section] = response[0]
    }

    console.log(content)
    res.json(content)

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
            const result = await pool.query('INSERT INTO HOME(section, content, path_to_image, user, user_id) VALUES (?, ?, ?, ?, ?)', [cont.section, cont.content, cont.image, cont.user, cont.user_id])
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
        default:
            res.json({
                Error: 'No page selected. An error ocurred'
            })
    }
}