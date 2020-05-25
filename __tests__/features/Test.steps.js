import { defineFeature, loadFeature } from 'jest-cucumber'
import { percySnapshot } from '@percy/puppeteer'

const feature = loadFeature('./__tests__/features/Test.feature')

defineFeature(feature, (test) => {
  test('Test', ({ given, then }) => {
    given('I go to google', async () => {
      await page.goto('https://www.google.com')
    })

    then('done', async () => {
      await percySnapshot(page, `screenshot - ${process.env.DEVICE}`, {
        widths: [process.env.DEVICE === 'desktop' ? 1366 : 375],
      })
    })
  })
})
