let heroesArray = [];

module.exports.createHero = (req, res, next) => {
    console.log(req.body);
    const { name, superpower, humility } = req.body;

    if (humility < 0 || humility > 10) {
        return res.status(400).send('Humility must be a number between 0 and 10');
    }

    const hero = { name, superpower, humility };
    heroesArray.push(hero);
    res.status(201).send('Hero added to array');
};

module.exports.findAll = (req, res, next) => {
    const sortedHeroes = heroesArray.sort((a, b) => b.humility - a.humility);
    res.json(sortedHeroes);
};