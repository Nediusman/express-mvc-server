const getContact = (req, res) => {
  res.json({
    success: true,
    message: 'Contact Information',
    developer: {
      name: 'NEDI USMAN HUSSEN',
      title: 'Computer Sciences Student & Full-Stack Developer',
      email: 'nediusman92@gmail.com',
      availability: 'Available 24/7 for projects and collaborations',
      specialties: ['Web Development', 'Cybersecurity', 'Backend Development']
    },
    socialMedia: {
      instagram: {
        url: 'https://www.instagram.com/alehmudin?igsh=MTRic210Z24zOXFwNw==',
        handle: '@alehmudin'
      },
      twitter: {
        url: 'https://x.com/nediusmanx?t=w3uSpixDcrx-w_HjNrYKvg&s=09',
        handle: '@nediusmanx'
      },
      telegram: {
        handle: '@alehmudin'
      }
    },
    services: [
      'Full-Stack Web Development',
      'Backend API Development',
      'Cybersecurity Consulting',
      'Code Review & Optimization',
      'Technical Consultation'
    ],
    responseTime: 'Quick response guaranteed within 24 hours'
  });
};

module.exports = {
  getContact
};