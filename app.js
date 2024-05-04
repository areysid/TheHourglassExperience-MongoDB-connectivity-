const express = require('express');
const app = express();
const port = 3333;
const path = require('path');
const mongoose = require('mongoose');

// Middleware
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static('public'));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://sidharthmalpani:Sidharth%232004@clustermain.e74teer.mongodb.net/userdata', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
});

// Define Mongoose schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    dob: Date
});

const User = mongoose.model('User', userSchema);

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/aboutus', (req, res) => {
    res.render('aboutus');
});

app.get('/essentials', (req, res) => {
    res.render('essentials');
});

app.get('/loginpage', (req, res) => {
    res.render('loginpage');
});

app.get('/manprod', (req, res) => {
    res.render('manprod');
});

app.get('/product', (req, res) => {
    res.render('product');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/womenprod', (req, res) => {
    res.render('womenprod');
});

// Signup route
app.post("/signup", async (req, res) => {
    try {
        console.log(req.body); // Log received form data for debugging

        const { firstName, dob, phone, email, password, confirmPassword } = req.body;

        // Perform validation checks
        if (!firstName || !dob || !phone || !email || !password || !confirmPassword) {
            return res.status(400).send("All fields are required");
        }

        if (password !== confirmPassword) {
            return res.status(400).send("Passwords do not match");
        }

        // Create a new user instance
        const newUser = new User({
            name: firstName,
            dob: dob,
            phone: phone,
            email: email,
            password: password
        });

        // Save the new user to the database
        await newUser.save();

        // Redirect to the login page
        res.redirect("/loginpage");
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send("Internal server error");
    }
});




// app.post("/loginpage", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user by email
//         const userFound = await User.findOne({ email });

//         // Check if user exists and password matches
//         if (userFound && userFound.password === password) {
//             res.render("index"); // Login successful, render index page
//         } else {
//             res.status(401).json({ message: "Incorrect email or password" }); // Unauthorized
//         }
//     } catch (error) {
//         // Handle errors
//         console.error(error);
//         res.status(500).send("Internal server error");
//     }
// });

const http = require('http').Server(app);

app.use(express.static('public'));

app.post("/loginpage", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const userFound = await User.findOne({ email });

    // Check if user exists and password matches
    if (userFound && userFound.password === password) {
      res.render("index"); // Login successful, render index page

      // Send a message to the client-side
      http.emit('login-success', { message: 'Login successful' });
    } else {
        res.status(500).send("Either email or password is incorrect, please go back and try again!"); // Unauthorized
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send("Internal server error");
  }
});



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
