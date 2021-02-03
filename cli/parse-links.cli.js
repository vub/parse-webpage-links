#!/usr/bin/env node

const HCCrawler = require('headless-chrome-crawler');

(async () => {
  const crawler = await HCCrawler.launch({
    // Function to be evaluated in browsers
    evaluatePage: (() => ({
      // eslint-disable-next-line no-undef
      title: $('title').text(),
    })),

    // Function to be called with evaluated results from browsers
    onSuccess: (result => {
      console.log(result.links);
    }),
  });
  await crawler.queue(process.argv[2]);
  await crawler.onIdle();
  await crawler.close();
})();
