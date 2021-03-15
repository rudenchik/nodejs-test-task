const database = {
    getUser: (id, callback) => {
        const users = [{
            id: 1,
            name: 'Robert',
        }, {
            id: 2,
            name: 'John'
        }];

        const user = users.find((user) => user.id === id);
        if (!user) {
            callback(`User with id=${id} not found`);
        } else {
            callback(null, user);
        }
    },
    getUsersBook: (userId, callback) => {
        const usersBooks = {
            1: [],
            2: [1, 2],
        };

        const userBook = usersBooks[userId];
        if (!userBook) {
            callback(`Set of books related to userId=${userId} not found`);
        } else {
            callback(null, userBook);
        }
    },
    buyBook: (id, callback) => {
        const books = [{
            id: 1,
            name: 'Art of war'
        }, {
            id: 2,
            name: 'Hunger games'
        }, {
            id: 3,
            name: '1984'
        }];

        const book = books.find((book) => book.id === id);
        if (!book) {
            callback(`Book with id=${id} not found`);
        } else {
            callback(null, true);
        }
    },
};


function promisify(obj, method, ...args) {
    return new Promise((resolve, reject) => {
        obj[method](args[0], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

const buyBookForUser = async (bookId, userId, callback) => {
    try {
        await promisify(database, "getUser", userId);
        const userBooks = await promisify(database, "getUsersBook", userId);

        if (userBooks.includes(bookId)) {
            callback(`User already has book with id=${bookId}`);
            return;
        }
        await promisify(database, "buyBook", bookId);
        callback(null, "Success");
    } catch (e) {
        callback(e);
    }
};


buyBookForUser(1, 1, (err, message) => {
    console.log(err);
    console.log(message);
})

buyBookForUser(1, 2, (err, message) => {
    console.log(err);
    console.log(message);
})

buyBookForUser(3, 2, (err, message) => {
    console.log(err);
    console.log(message);
})

buyBookForUser(5, 2, (err, message) => {
    console.log(err);
    console.log(message);
})

buyBookForUser(1, 3, (err, message) => {
    console.log(err);
    console.log(message);
})