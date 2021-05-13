async function listUsers(req, res) {
try {
const db = await conn.connect()
const result = await db.query('SELECT * FROM users');
const results = { users: (result) ? result.rows : null};
res.render('pages/index', results );
db.release();
} catch (err) {
console.error(err);
res.send("Error " + err);
}
}