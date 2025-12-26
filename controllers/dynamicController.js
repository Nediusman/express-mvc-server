const getCurrentTime = (req, res) => {
  const now = new Date();
  const timeData = {
    success: true,
    message: 'Current server time',
    timestamp: now.toISOString(),
    localTime: now.toLocaleString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    unixTimestamp: Math.floor(now.getTime() / 1000)
  };
  
  res.json(timeData);
};

const getGreeting = (req, res) => {
  const hour = new Date().getHours();
  let greeting;
  
  if (hour < 12) {
    greeting = 'Good morning!';
  } else if (hour < 18) {
    greeting = 'Good afternoon!';
  } else {
    greeting = 'Good evening!';
  }
  
  const greetingData = {
    success: true,
    message: greeting,
    personalizedMessage: `${greeting} I'm NEDI USMAN HUSSEN, your dedicated full-stack developer available 24/7!`,
    currentHour: hour,
    developer: {
      name: 'NEDI USMAN HUSSEN',
      status: 'Available for projects',
      specialties: ['Web Development', 'Cybersecurity'],
      contact: 'nediusman92@gmail.com'
    },
    serverStatus: 'Running smoothly',
    currentTime: new Date().toLocaleTimeString()
  };
  
  res.json(greetingData);
};

module.exports = {
  getCurrentTime,
  getGreeting
};