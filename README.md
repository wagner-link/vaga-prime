# PrimeCode Solutions - Recruitment System

A comprehensive candidate recruitment system for PrimeCode Solutions, specifically designed for lead generation specialist job applications.

## 🚀 Features

- **Professional Landing Page**: Modern, responsive design with company branding
- **Integrated Application Form**: Comprehensive form with real-time validation
- **Automated Email System**: Sends applications to HR team and confirmation to candidates
- **Mobile Responsive**: Optimized for all device sizes
- **Form Validation**: Client and server-side validation with user-friendly error messages
- **Modern Tech Stack**: Built with Next.js, TypeScript, and Tailwind CSS

## 🛠 Technology Stack

- **Frontend**: Next.js 13, TypeScript, React
- **Styling**: Tailwind CSS, Shadcn/UI components
- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: Nodemailer with SMTP
- **Icons**: Lucide React

## 📧 Email Configuration

To set up email functionality:

1. **Gmail Setup** (recommended):
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: [Gmail App Passwords](https://myaccount.google.com/apppasswords)
   - Update `EMAIL_USER` with your Gmail address
   - Update `EMAIL_PASS` with the generated app password

2. **Environment Variables**:
   ```env
   EMAIL_USER=naoresponda@primecode.com.br
   EMAIL_PASS=your-gmail-app-password
   ADMIN_EMAIL=rh@primecode.com.br,contato@primecode.com.br
   ```

## 🚀 Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env.local` and update with your email credentials

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📋 Form Fields

### Required Fields:
- Full Name
- Email (with validation)
- Phone/WhatsApp
- Previous Experience (textarea)
- Availability (dropdown)
- Data Consent (checkbox)

### Optional Fields:
- LinkedIn Profile URL

## 📧 Email Flow

1. **Candidate submits form** → Validation occurs
2. **Admin notification** → Sent to HR team with candidate details
3. **Candidate confirmation** → Sent to applicant confirming receipt
4. **Success message** → Displayed to user with next steps

## 🎨 Design System

- **Primary Color**: #0a2463 (Dark Blue)
- **Background**: Dark gray tones
- **Accent**: Purple gradients
- **Typography**: Poppins font family
- **Components**: Shadcn/UI for consistent design

## 🔒 Security Features

- Server-side validation with Zod
- CSRF protection via Next.js
- Input sanitization
- Rate limiting considerations
- LGPD compliance for data processing

## 📱 Responsive Design

- **Mobile**: < 768px - Optimized for touch interaction
- **Tablet**: 768px - 1024px - Balanced layout
- **Desktop**: > 1024px - Full feature display

## 🚀 Deployment

The application is configured for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting provider

Make sure to configure environment variables in your hosting platform.