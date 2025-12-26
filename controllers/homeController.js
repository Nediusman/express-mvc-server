const getHome = (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to NEDI USMAN HUSSEN\'s Express.js MVC Server!',
    developer: {
      name: 'NEDI USMAN HUSSEN',
      title: 'Computer Sciences Student & Full-Stack Developer',
      expertise: ['Web Development', 'Junior Cybersecurity'],
      availability: '24/7'
    },
    description: 'Professional backend application showcasing MVC architecture and modern development practices.',
    contact: {
      email: 'nediusman92@gmail.com',
      social: '@alehmudin (Instagram/Telegram), @nediusmanx (Twitter)'
    },
    availableRoutes: [
      'GET / - Home page & developer info',
      'GET /about - About developer & application',
      'GET /contact - Contact & social media links',
      'GET /time - Current server time',
      'GET /greeting - Dynamic greeting',
      'POST /echo - Echo JSON data back'
    ]
  });
};

module.exports = {
  getHome
};