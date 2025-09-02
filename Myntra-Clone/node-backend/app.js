const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (for images)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Load items data
const loadItems = () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'items.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading items.json:', error);
    return { items: [] };
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Myntra Clone Backend API',
    status: 'Server is running successfully',
    version: '1.0.0',
    endpoints: {
      getAllItems: 'GET /api/items',
      getItemById: 'GET /api/items/:id',
      searchItems: 'GET /api/items/search?q=searchterm'
    }
  });
});

// Get all items
app.get('/api/items', (req, res) => {
  try {
    const itemsData = loadItems();
    res.json({
      success: true,
      count: itemsData.items.length,
      data: itemsData.items
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to load items' 
    });
  }
});

// Get item by ID
app.get('/api/items/:id', (req, res) => {
  try {
    const itemsData = loadItems();
    const item = itemsData.items.find(item => item.id === req.params.id);
    
    if (!item) {
      return res.status(404).json({ 
        success: false,
        error: 'Item not found' 
      });
    }
    
    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to load item' 
    });
  }
});

// Search items
app.get('/api/items/search', (req, res) => {
  try {
    const query = req.query.q?.toLowerCase();
    if (!query) {
      return res.status(400).json({
        success: false,
        error: 'Search query is required'
      });
    }

    const itemsData = loadItems();
    const filteredItems = itemsData.items.filter(item => 
      item.item_name.toLowerCase().includes(query) ||
      item.company.toLowerCase().includes(query)
    );

    res.json({
      success: true,
      count: filteredItems.length,
      data: filteredItems
    });
  } catch (error) {
    console.error('Error searching items:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search items'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ 
    success: false,
    error: 'Internal server error' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    error: `Route ${req.method} ${req.path} not found`,
    availableEndpoints: [
      'GET /',
      'GET /api/items',
      'GET /api/items/:id',
      'GET /api/items/search?q=searchterm',
      'GET /health'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Myntra Clone Backend Server is running on http://localhost:${PORT}`);
  console.log(`📋 API Documentation available at http://localhost:${PORT}`);
  console.log(`💾 Items endpoint: http://localhost:${PORT}/api/items`);
});

module.exports = app;