# show_ta_js

## Setup

```bash
sh misc/setup.sh
foreman start -p 3000
open http://localhost:3000
```

## Server

### Database

#### Overview
ORM of this project uses  [Sequelize](http://docs.sequelizejs.com/)

#### Configuration
edit ```.env```

```
DB_DRIVER=sqlite    
DB_HOST
DB_DATABASE
DB_USERNAME
DB_PASSWORD
DB_PATH=''          #Sqlite file path
```

#### Make migrate file and model
Make the model file to ```src/server/database/models```

Example User model
```
sequelize = require '../db_client'
Sequelize = require('sequelize')

User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

module.exports = User
```
Reference article: http://docs.sequelizejs.com/manual/tutorial/models-definition.html 

#### Exec Migration

```bash
npm run migrate:db
```

#### setup sqlite

```bash
npm run sqlite
```
