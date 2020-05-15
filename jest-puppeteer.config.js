module.exports = {
  launch: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
    ],
  },
  browserContext: 'incognito',
}
