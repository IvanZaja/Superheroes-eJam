function cors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Headers', 'content-type,authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH');

    if (req.method === 'OPTIONS') {
        res.status(200).send();
    } else {
        next();
    }
}

module.exports = cors;