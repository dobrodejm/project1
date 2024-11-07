async function fetchBitcoinPrice() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  
    try {
      // Fetch the data from the CoinDesk API
      const response = await fetch(url);
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      // Parse the response body as JSON
      const data = await response.json();
  
      // Access the USD price from the response
      const usdPrice = data.bpi.USD.rate;
  
      // Log or return the price
      console.log('Current Bitcoin Price in USD:', usdPrice);
      document.getElementById('usd').textContent = usdPrice;
      return usdPrice;
    } catch (error) {
      // Log any errors that occur
      console.error('Error fetching Bitcoin price:', error);
    }
  }
  fetchBitcoinPrice();