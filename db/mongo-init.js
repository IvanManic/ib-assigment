db.createUser({
    user: 'admin',
    pwd: 'password',
    roles: [
        {
            role: 'dbOwner',
            db: 'shortner',
        },
        {
            "role": "read",
            "db": "shortner"
        },
        {
            "role": "readWrite",
            "db": "shortner"
        }

    ],
})