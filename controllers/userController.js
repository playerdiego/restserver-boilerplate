const { request, response } = require('express');

const usersGet = (req = request, res = response) => {

    const {q, name} = req.query;

    res.json({
        ok: true,
        msg: "get API - controller",
        q, name
    });
}

const usersPut = (req = request, res = response) => {

    const id = req.params.id;

    res.status(400).json({
        ok: true,
        msg: "put API - controller",
        id
    });
};

const usersPost = (req = request, res = response) => {

    const {name, age} = req.body;

    res.status(201).json({
        ok: true,
        msg: "post API - controller",
        name,
        age
    });

};

const usersPatch = (req = request, res = response) => {
    res.status(201).json({
        ok: true,
        msg: "patch API - controller"
    });
};

const usersDelete = (req = request, res = response) => {
    res.json({
        ok: true,
        msg: "delete API - controller"
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersPatch,
    usersDelete
};