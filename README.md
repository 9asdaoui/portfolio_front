# Modern Portfolio Website

A sleek, responsive portfolio website built with React and styled with Tailwind CSS. This portfolio showcases a developer's profile, projects, and provides a contact form for potential clients or employers.

![Portfolio Screenshot](https://via.placeholder.com/800x400?text=Portfolio+Screenshot)
## Features

- **Modern UI Design:** 🎨 Modern UI with gradient accents and responsive design
- **Dark Mode Support:** 🌓 Dark mode themed for developers
- **Mobile Optimization:** 📱 Mobile-friendly navigation with hamburger menu
- **Project Showcase:** 🖼️ Project showcase with descriptions and technology tags
- **Interactive Contact:** 📝 Contact form with validation and success/error notifications
- **Dynamic Content:** 🔄 Dynamic content loading from API endpoints

## Components

### Header
A fixed navigation bar that provides easy access to different sections of the portfolio:
- Brand logo with gradient effect
- Responsive navigation with mobile menu
- Smooth transitions and hover effects

### Profile
The profile section displays:
- Profile image
- Name and contact information
- Bio/about me section
- Skills and tools visualization
- Social media links

### Projects
A showcase of development work featuring:
- Project cards with images
- Description and project type
- Technologies used with icons
- External links to live projects

### Messages
A contact form that allows visitors to:
- Send messages directly to the portfolio owner
- Form validation
- Success/error notifications using SweetAlert2

### Footer
The page footer includes:
- Navigation links
- Social media connections
- Copyright information

## Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling
- **Axios** - API requests
- **SweetAlert2** - User notifications
- **React Router** - Navigation

## API Integration

The portfolio connects to a backend API to fetch:
- User profile information
- Project details
- Tool/skill data
- Message submission

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-frontend.git
cd portfolio-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. The application will be available at `http://localhost:3000`

## Customization

To customize this portfolio for your own use:

1. Update the API endpoints in the component files to point to your own backend
2. Replace the profile information and project details
3. Modify the color scheme by editing the Tailwind classes (primarily the gradient colors)
4. Add or remove sections as needed

## Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS Amplify
- Any other static site hosting service

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Icons from [Icons8](https://icons8.com/)
- Placeholder images from [Placeholder.com](https://placeholder.com/)