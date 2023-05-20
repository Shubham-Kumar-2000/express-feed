exports.user = (req, res, next) => {
    try {
        return res.status(200).json({
            user : "anonymous"
        });
    } catch (e) {
        next(e);
    }
};
