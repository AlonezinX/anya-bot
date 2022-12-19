const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('alone.env')) require('dotenv').config({ path: './alone.env' })
const DATABASE_URL =
	process.env.DATABASE_URL === undefined
		? './database.db'
		: process.env.DATABASE_URL
module.exports = {
		
			
	HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
	HEROKU_API_KEY: process.env.HEROKU_API_KEY,
	BRANCH: 'main',
	
}