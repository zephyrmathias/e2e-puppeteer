import puppeteer from 'puppeteer'

// default timeout for each test
jest.setTimeout(20000)

beforeAll(async () => {
  // setup device and user-agent
  // const iPhone = puppeteer.devices['iPhone 6']
  // await page.emulate(iPhone)
})
