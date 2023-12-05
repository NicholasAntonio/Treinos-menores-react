import {db} from '../db.js';

export const getUsers = (_, res) =>{
    const query = "SELECT * FROM users";

    db.query(query, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};


export const addUser = (req, res) => {
    const query = "INSERT INTO users(`nome`, `email`, `phone`, `data_nasc`) VALUES(?)"

    const values =[
        req.body.nome,
        req.body.email,
        req.body.phone,
        req.body.data_nasc,
    ];

    db.query(query, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso")
    })
}

export const updateUser = (req, res) => {
    const query = "UPDATE users SET `nome` = ?, `email` = ?, `phone` = ?, `data_nasc`= ? WHERE `id`= ?"

    const values =[
        req.body.nome,
        req.body.email,
        req.body.phone,
        req.body.data_nasc,
    ];

    db.query(query, [...values, req.params.id],(err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso")
    })
}

export const deleteUser = (req, res) => {
    const query = "DELETE FROM users WHERE `id` = ? "

    db.query(query, [req.params.id],(err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso")
    })
}