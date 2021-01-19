const adjectives = [
    'Smelly',
    'Greedy',
    'Shiny',
    'Jolly',
    'Peaceful',
    'Sly',
    'Exciting',
    'Evasive',
    'Easy',
    'Slippery',
]

const animals = [
    'Fish',
    'Okapi',
    'Bison',
    'Bunny',
    'Skunk',
    'Zebu',
    'Mare',
    'Parrot',
    'Tiger',
    'Lion'
]

function generate() {
    const first = adjectives[Math.floor(Math.random()*10)];
    const last = animals[Math.floor(Math.random()*10)];
    return `${first} ${last}`;
}

module.exports = {generate}