const executeQuery = async (req, res) => {
    try {
        let result = await req.client.query(req.body.query);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send({ message: err.toString() })
    }
}
exports.executeQuery = executeQuery;