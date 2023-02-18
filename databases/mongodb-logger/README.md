use logger
db.createUser({ user: "logger", pwd:  "logger", roles: [{ role: "readWrite", db: "logger" }, { role: "dbAdmin", db: "logger" }] })