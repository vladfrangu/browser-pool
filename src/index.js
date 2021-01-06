const BrowserPool = require('./browser-pool');
const PuppeteerPlugin = require('./browser-plugins/puppeteer-plugin');
const PlaywrightPlugin = require('./browser-plugins/playwright-plugin');

const EVENTS = require('./events');

/**
 * The `browser-pool` module exports three constructors. One for `BrowserPool`
 * itself and two for the included Puppeteer and Playwright plugins.
 *
 * **Example:**
 * ```js
 * const {
 *  BrowserPool,
 *  PuppeteerPlugin,
 *  PlaywrightPlugin
 * } = require('browser-pool');
 * const puppeteer = require('puppeteer');
 * const playwright = require('playwright');
 *
 * const browserPool = new BrowserPool({
 *     browserPlugins: [
 *         new PuppeteerPlugin(puppeteer),
 *         new PlaywrightPlugin(playwright.chromium),
 *     ]
 * });
 * ```
 *
 * @property {BrowserPool} BrowserPool
 * @property {PuppeteerPlugin} PuppeteerPlugin
 * @property {PlaywrightPlugin} PlaywrightPlugin
 * @property {object} EVENTS
 * @module browser-pool
 */
module.exports = {
    BrowserPool,
    PuppeteerPlugin,
    PlaywrightPlugin,
    EVENTS,
};
