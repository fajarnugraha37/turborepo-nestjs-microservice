use auth
db.createUser({ user: "auth", pwd:  "auth", roles: [{ role: "readWrite", db: "auth" }, { role: "dbAdmin", db: "auth" }] })