const groupSeeds = require('./group-seeds');
const memberSeeds = require('./member-seeds');
const postSeeds = require('./post-seeds');
const commentSeeds = require('./comment-seeds');
const listItemSeeds = require('./listItem-seeds')

const sequelize = require('../config/connection');

const createSeeds = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await groupSeeds();
    console.log('--------------');

    await memberSeeds();
    console.log('--------------');
  
    await postSeeds();
    console.log('--------------');
  
    await commentSeeds();
    console.log('--------------');

    await listItemSeeds();
    console.log('--------------');
  
    process.exit(0);
  };
  
  createSeeds();