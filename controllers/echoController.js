const echoData = (req, res) => {
  // Simple validation - check if request body exists
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: 'No data provided in request body',
      example: {
        name: 'John Doe',
        message: 'Hello World'
      }
    });
  }
  
  // Echo back the received data with additional metadata
  const echoResponse = {
    success: true,
    message: 'Data received and echoed back successfully',
    receivedData: req.body,
    metadata: {
      timestamp: new Date().toISOString(),
      method: req.method,
      contentType: req.get('Content-Type') || 'not specified',
      dataSize: JSON.stringify(req.body).length + ' bytes'
    }
  };
  
  res.json(echoResponse);
};

module.exports = {
  echoData
};