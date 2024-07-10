prisma orm

orm - Object-Relational Mapping
used to modeling our data,
run schema migration and qurey you database

advantanges of orm -
database independence 
simpler code writing and maintainance
abstraction of database complexity
prortability
No need for SQL syntax knowledge

-- create new folder and go into it
-- npm init -y  // initialize backend
-- npm i prisma --save-dev // install prisma orm
-- npx prisma // check prisma commands
-- npx prisma init // initialize the folders prisma and env in which schema.prisma will be present

-- add you db url in the env file
    - looks like  "postgresql://dbserver:password@host:port/dbname

-- mention models in the schema.prisma
-- to make changes to the db
- npx prisma migrate dev --name init // to create the db

--npm install @prisma/client
- invokes prisma generate // generates a version of Prisma Client that is tailored to your models.

-- Whenever you update your Prisma schema, you will have to update your database schema using either prisma migrate dev or prisma db push


-- how thing work if we use prisma

https://www.prisma.io/docs/assets/images/prisma-client-install-and-generate-ece3e0733edc615e416d6d654c05e980.png


-- Thats for the implementation of the prisma orm

-- for now I under stood that we can give the crud operation commands in the prisma

-- my final intution is that now we can create all config,users,models,controllers,routes.. and all and use prisma implemenation to achive crud operations

-- I have implemeteed and tested some crud operations and commented in index.js