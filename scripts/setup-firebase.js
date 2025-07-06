const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBvUTXp13dnTRVr2hVWikDccllxLAcm_-E",
  authDomain: "unicornclasses-56cd4.firebaseapp.com",
  projectId: "unicornclasses-56cd4",
  storageBucket: "unicornclasses-56cd4.firebasestorage.app",
  messagingSenderId: "592370600854",
  appId: "1:592370600854:web:94766611cca2350c296bb7",
  measurementId: "G-PT8SEJ6L65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function setupUsers() {
  try {
    console.log('Setting up Firebase users...');

    // Create admin user
    const adminUserCredential = await createUserWithEmailAndPassword(
      auth,
      'sir@unicorn.com',
      'cyr123'
    );

    // Set admin user role in Firestore
    await setDoc(doc(db, 'users', adminUserCredential.user.uid), {
      role: 'ADMIN',
      name: 'Sir Unicorn',
      email: 'sir@unicorn.com',
      createdAt: new Date()
    });

    console.log('✅ Admin user created successfully');

    // Create student user
    const studentUserCredential = await createUserWithEmailAndPassword(
      auth,
      'student@unicorn.com',
      'student123'
    );

    // Set student user role in Firestore
    await setDoc(doc(db, 'users', studentUserCredential.user.uid), {
      role: 'STUDENT',
      name: 'Student User',
      email: 'student@unicorn.com',
      createdAt: new Date()
    });

    console.log('✅ Student user created successfully');
    console.log('\n🎉 Firebase setup completed!');
    console.log('\nDemo Credentials:');
    console.log('Admin: sir@unicorn.com / cyr123');
    console.log('Student: student@unicorn.com / student123');

  } catch (error) {
    console.error('❌ Error setting up users:', error.message);
    
    if (error.code === 'auth/email-already-in-use') {
      console.log('Users already exist. Skipping creation...');
    }
  }
}

setupUsers(); 