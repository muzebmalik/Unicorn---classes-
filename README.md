# Unicorn Classes - Learning Management System

A modern, role-based learning management system built with Next.js, Firebase, and TypeScript.

## 🚀 Live Demo

**Website**: https://unicornclasses-56cd4.web.app

## ✨ Features

### 🔐 Authentication & Authorization
- **Firebase Authentication** with email/password
- **Role-based access control**:
  - **Admin**: `muzebmaliko1@gmail.com` - Full access to upload/manage notes
  - **Students**: All other emails - Read-only access to notes
- **Protected routes** with automatic redirects

### 👨‍🏫 Admin Features
- Upload and manage study notes
- Delete notes
- View all uploaded content
- Dashboard with statistics

### 👨‍🎓 Student Features
- Read-only access to all notes
- Search functionality
- View note statistics
- Responsive design

### 🛠 Technical Features
- **Next.js 14** with App Router
- **Firebase Firestore** for real-time data
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive design** for all devices
- **Toast notifications** for user feedback

## 📞 Contact Information

- **Email**: muzebmaliko1@gmail.com
- **Phone**: +91 8088070409
- **Location**: Delhi, India

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muzebmalik/Unicorn--classes.git
   cd UnicornClasses
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project
   - Enable Authentication and Firestore
   - Update `lib/firebase.ts` with your config

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Visit `http://localhost:3000`

## 🔧 Usage

### For Admins (muzebmaliko1@gmail.com)
1. Sign up/login with `muzebmaliko1@gmail.com`
2. Access admin dashboard at `/admin`
3. Upload notes with title and content
4. Manage existing notes

### For Students (any other email)
1. Sign up/login with any email (except admin email)
2. Access student dashboard at `/dashboard`
3. View and search through notes
4. Read-only access to all content

## 🚀 Deployment

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

### Automatic Deployment (GitHub Actions)
The project is configured with GitHub Actions for automatic deployment:
- Push to `main` branch triggers deployment
- Automatic build and deploy to Firebase Hosting
- Live at: https://unicornclasses-56cd4.web.app

## 📁 Project Structure

```
UnicornClasses/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard page
│   ├── dashboard/         # Student dashboard page
│   ├── login/             # Login page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── AdminDashboard.tsx # Admin interface
│   ├── StudentDashboard.tsx # Student interface
│   ├── LoginForm.tsx      # Authentication form
│   └── ...
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication context
├── lib/                   # Utility libraries
│   └── firebase.ts        # Firebase configuration
├── firestore.rules        # Firestore security rules
└── firebase.json          # Firebase hosting config
```

## 🔒 Security

- **Firestore Rules**: Configured for secure access
- **Authentication**: Firebase Auth with role-based access
- **Protected Routes**: Automatic redirects based on user role
- **Input Validation**: Client and server-side validation

## 🛠 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to Firebase

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, contact:
- **Email**: muzebmaliko1@gmail.com
- **Phone**: +91 8088070409

---

**Made with ❤️ for students and teachers**

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: Purple (#8b5cf6)
- **Secondary**: Blue (#3b82f6) 
- **Accent**: Pink (#d946ef)

### Fonts
- **Primary**: Inter (sans-serif)
- **Display**: Poppins (headings)

### Animations
Custom animations are defined in `tailwind.config.js`:
- `fade-in`: Smooth fade in effect
- `slide-up`: Slide up from bottom
- `bounce-gentle`: Gentle bouncing animation
- `float`: Floating animation
- `glow`: Glowing effect

## 📊 Performance Optimizations

- **Image Optimization**: Next.js built-in image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Compression**: Gzip compression enabled
- **Caching**: Static asset caching
- **SEO**: Optimized meta tags and Open Graph

## �� Configuration

### SEO Configuration
Update metadata in `app/layout.tsx`:
- Site title and description
- Open Graph tags
- Twitter cards
- Google verification

## 📱 PWA Features

The platform is designed to be a Progressive Web App with:
- **Offline Support**: Service worker for offline access
- **Install Prompt**: Add to home screen functionality
- **Fast Loading**: Optimized for slow connections
- **Push Notifications**: For announcements and updates

## 🎯 Future Enhancements

- **Multi-Teacher Support**: Scale to multiple teachers
- **Mobile App**: Native iOS and Android apps
- **Advanced Analytics**: Detailed student performance insights
- **AI Tutor**: Personalized learning recommendations
- **Video Conferencing**: Live classes integration
- **Payment Integration**: Premium content monetization

## 🎯 Future Enhancements

- **Multi-Teacher Support**: Scale to multiple teachers
- **Mobile App**: Native iOS and Android apps
- **Advanced Analytics**: Detailed student performance insights
- **AI Tutor**: Personalized learning recommendations
- **Video Conferencing**: Live classes integration
- **Payment Integration**: Premium content monetization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern educational platforms
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Framework**: Next.js team

## 📞 Contact

- **Email**: teacher@unicornclasses.com
- **Phone**: +91 98765 43210
- **Website**: https://unicornclasses.com

---

**Made with ❤️ for students by a teacher who believes in the magic of organized learning.**