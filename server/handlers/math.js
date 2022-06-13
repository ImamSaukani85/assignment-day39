const mathModel = require ("../../models/mathModel")

const isWeekend = async (req, res) => {
    try {
        const result = await mathModel.isWeekend();
        res.json({
            data: result,
            error: null
        });
    } finally {
        res.end();
    }
};

const isLeapYear = async (req, res) => {
    try {
        const result = await mathModel.isLeapYear();
        res.json({
            data: result,
            error: null
        });
    } finally {
        res.end();
    }
};

module.exports = {
    isWeekend,
    isLeapYear
};