const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// middleware 
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6hk58.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    await client.connect();
    const db = client.db('Eduker');
    const courseCollection = db.collection('courses');
    const blogCollection = db.collection('Blogs');
    const eventCollection = db.collection('events');
    const teamCollection = db.collection('teams');
    const userCollection = db.collection('users');

   
    // get all courses
    app.get('/courses', async (req, res) => {
      const result = await courseCollection.find({}).toArray();
      res.json(result)
    })
      // paymentInfo
      app.get('/paymentInfo',async(req,res) => {
       try{
        const email = req.query.email;
        const id = req.query.id;
        const query = {_id:ObjectId(id),"payment.userEmail": email}
        // console.log(req.query)
        const result = await courseCollection.findOne(query);
        res.json({paymentInfo:true,result})
       }
       catch(err){
         console.log(err)
       }
      })
    // get blog
    app.get('/blog', async (req, res) => {
      const result = await blogCollection.find({}).toArray();
      res.json(result);
    })
    // single blog
    app.get('/blog/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await blogCollection.findOne(query);
      res.json(result)
    })
    // get events
    app.get('/events', async (req, res) => {
      const result = await eventCollection.find({}).toArray();
      res.json(result);
    })

    // single event
    app.get('/event/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) }
      // console.log(query)
      const result = await eventCollection.findOne(query);
      res.json(result)
      // console.log(result)
    })

    // get teams
    app.get('/teams', async (req, res) => {
      const result = await teamCollection.find({}).toArray();
      res.json(result);
    });
    // single team
    app.get('/team/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) }
      const result = await teamCollection.findOne(query);
      res.json(result)
    })

    // get course details
    app.get('/courseDetails/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: ObjectId(id) }
      const result = await courseCollection.findOne(query);
      res.json(result);
    });

    // update course
    app.put('/courses/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const payment = req.body;
      const updateDoc = {
        $set: {
          payment: payment
        }
      }
      const result = await courseCollection.updateOne(filter, updateDoc);
      res.json(result)
    })

    // category
    app.get('/category/:categoryItem', async (req, res) => {
      const categoryItem = req.params.categoryItem;
      // console.log(categoryItem)
      const query = { category: categoryItem }
      let result;
      if (categoryItem === 'Category') {
        result = await courseCollection.find({}).toArray();
      }
      else {
        result = await courseCollection.find(query).toArray();
      }
      res.json(result)
    })

    // create-payment-intent
    app.post("/create-payment-intent", async (req, res) => {
      const paymentInfo = req.body;
      const amount = parseInt(paymentInfo.price) * 100;
      const paymentIntent = await await stripe.paymentIntents.create({
        currency: "usd",
        amount: amount,
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    })

    // users
    app.post('/users', async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.json(result)
    })
    // put
    app.put('/users', async (req, res) => {
      const user = req.body;
      const email = user.email;
      const options = { upsert: true };
      const filter = { email: email };
      const updateDoc = {
        $set: {
          displayName: user.displayName,
          email: user.email,
        }
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.json(result)
    })
    // myOrder
    app.get('/myOrder/:email', async (req, res) => {
      try {
        const email = req.params.email;
        const result = await courseCollection.find({ "payment.userEmail": email }).toArray();
        res.json(result);
      }
      catch (err) {
        console.log(err)
      }
    })
  

  }


  finally {
    //   await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello Edukar server')
})


// running server
app.listen(process.env.PORT || 7000, () => {
  console.log('edukar server running', port)
})