const getAbout = (req, res) => {
  res.json({
    success: true,
    message: 'About the Developer & Application',
    developer: {
      name: 'NEDI USMAN HUSSEN',
      title: 'Computer Sciences Student & Full-Stack Developer',
      specialization: ['Web Development', 'Junior Cybersecurity'],
      availability: '24/7',
      email: 'nediusman92@gmail.com',
      socialMedia: {
        instagram: 'https://www.instagram.com/alehmudin?igsh=MTRic210Z24zOXFwNw==',
        twitter: 'https://x.com/nediusmanx?t=w3uSpixDcrx-w_HjNrYKvg&s=09',
        telegram: '@alehmudin'
      }
    },
    application: {
      description: 'This Express.js server demonstrates MVC architecture and modern backend development practices.',
      features: [
        'RESTful API endpoints',
        'JSON request/response handling',
        'MVC pattern implementation',
        'Dynamic data generation',
        'Error handling for unknown routes',
        'Professional developer portfolio integration'
      ],
      version: '1.0.0',
      builtWith: ['Node.js', 'Express.js', 'JavaScript']
    }
  });
};

module.exports = {
  getAbout
};