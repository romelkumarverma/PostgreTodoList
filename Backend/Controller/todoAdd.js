const con = require('../Model/Model');



const todoPost = (req, res) => {
    const { task, due_datae} = req.body; 
    const sql = `INSERT INTO todolistapp (task, due_datae) VALUES ($1, $2)`; 
    con.query(sql, [task, due_datae], (err, result) => {
        if (err) {
            console.error("Error posting todo:", err);
            res.status(500).json({ error: "Failed to post todo item." });
        } else {
            console.log("Todo item posted successfully.");
            res.json({ success: true });
        }
    });
};


const todoGet = (req, res) =>{
    const sql = `SELECT * from todolistapp`
    con.query(sql, (err, result)=>{
        if(err){
            console.log("Not getting")
            res.json(err)
        }
        else {
            console.log("Getting")
            res.json(result)
        }
    })
}



const todoUpdate = (req, res) => {
    const {id, status, completion_date } = req.body;
    const id1 = req.params.id; 
    const sql = 'UPDATE todolistapp SET status = $2, completion_date = $3 WHERE id = $1'; 
    con.query(sql,[id1, status,  completion_date], (err, result) => {
        if (err) {
            console.log("Not Updated...");
            res.send(err);
        } else {
            console.log("Updated...");
            res.send(result);
        }
    });
};





const todoDelete = (req, res) => {
    const id = req.params.id; 
    // const sql = 'DELETE FROM todoAdd WHERE id = ?';
    const sql = 'DELETE FROM todolistapp WHERE id = $1 RETURNING *'; 
    con.query(sql, [id], (err, result) => {
        if (err) {
            console.log("Not Deleted...");
            res.send(err);
        } else {
            console.log("Deleted...");
            res.send(result);
        }
    });
};



module.exports = { todoPost, todoGet, todoUpdate, todoDelete }
