import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJETC_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
    
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id:childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // })

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {nose 
// //         const expenses = [];
        
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id:childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// // database.ref('notes/-L39fJT9wAAv3hD6o_qW').remove();

// // database.ref('expenses').push({
// //     description: 'This is a dexcription',
// //     note:'React Native, Angular, Python',
// //     amount: 100,
// //     createdAt:1000
// // });

 

// // const firebaseNotes = {
// //     notes: {

// //     }
// // };

// //  const notes = [{
// //     id:'12',
// //     title:'First Note!',
// //     body: 'This is my note'
// //  },{
// //     id:'761ase',
// //     title:'Another  Note!',
// //     body: 'This is my note' 
// //  }]

// // database.ref('notes').set(notes);
// // database.ref('notes')

// //  database.ref().on('value', (snapshot) => {
// //      const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// //  })

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e)
// //     })

// // database.ref().set({
// //     name:'Julio Baptista',
// //     age: 25,
// //     stressLevel: 6,
// //     job:{
// //         title:'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Santiago',
// //         country:'Chile'
// //     }
// // }).then(() => {
// //     console.log('data is saved');
// // }).catch((e) => {
// //     console.log('This failed.',e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     "job/company": 'Amazon',
// //     "location/country":'Seattle'
// // });

// // database.ref().remove().then(function() {
// //     console.log("Remove succeeded.")
// // }).catch(function(error) {
// //     console.log("Remove failed: " + error.message)
// // });