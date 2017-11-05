#!/bin/sh

tr -d '# ' < .env.example > .env
touch src/server/database/database.sqlite
