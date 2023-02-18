use content
db.createUser({ user: "content", pwd:  "content", roles: [{ role: "readWrite", db: "content" }, { role: "dbAdmin", db: "content" }] })