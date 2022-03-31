import { Query } from './index';

const all = async () => Query('SELECT * FROM chirps');
const one = async (id) => Query('SELECT * FROM chirps WHERE id = ?', [id]); 
const post = async (userid, content, location) => Query("insert into chirps(userid, content, location) values(?,?,?)", [userid, content, location]);
const del = async (id) => Query('DELETE FROM chirps WHERE id = ?', [id]);
const update = async (content, id) => Query('UPDATE chirps SET CONTENT = ? WHERE id = ?', [content, id]);

export default {
    all,
    one,
    post,
    del,
    update
};