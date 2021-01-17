require('dotenv').config()
module.exports = {
  "development": {
    "database": "personal-growth-tracker_development",
    "dialect": "postgres"
  },
  "test": {
    "database": "personal-growth-tracker_test",
    "dialect": "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
