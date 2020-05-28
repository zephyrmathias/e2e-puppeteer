module.exports = {
  launch: {
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
    ],
  },
  browserContext: 'incognito',
}
