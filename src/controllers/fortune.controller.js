const fortune = [
    'Hoy resolveras un bug eliminando una línea que no entiendes.',
    'Un git status evitará una tragedia.'
];

const getFortune = (req, res) =>{
    const developerName = req.get('X-Developer-Name') ||
          'Desarollador anonimo';
    const randomIndex = Math.floor(Math.random()* fortune.length);
    const fort = fortune[randomIndex];
    res.set('X-API-Version', '1.0');

    return res.status(200).json({
        developer: developerName,
        fort,
        requestId : req.requestId
    });
};

module.exports = {getFortune};