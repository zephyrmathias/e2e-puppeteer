import { defineFeature, loadFeature } from 'jest-cucumber'

const feature = loadFeature('./__tests__/features/Test.feature')

defineFeature(feature, (test) => {
  test('Test', ({ given, then }) => {
    given('I go to google', async () => {
      await page.goto('https://www.google.com')
    })

    then('done', async () => {
      await page.screenshot({ path: 'screenshot.jpg' })
      expect(1).toBe(1)
    })
  })
})
