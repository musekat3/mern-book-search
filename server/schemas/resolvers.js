const User = require('./models/User'); //import your Mongoose model

const resolvers = {
 Query: {
   users: async () => {
     try {
       return await User.find({}); // fetch all users from the database
     } catch (err) {
       console.error(err);
       throw new Error('Failed to fetch users');
     }
   },
 },
 Mutation: {
   createUser: async (_, { username, email }) => {
     try {
       const user = new User({ username, email }); // create a new user
       await user.save(); // save the user to the database
       return user; // return the created user
     } catch (err) {
       console.error(err);
       throw new Error('Failed to create user');
     }
   },
 },
};

module.exports = resolvers;