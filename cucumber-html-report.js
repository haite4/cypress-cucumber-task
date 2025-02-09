const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport",
  metadata: {
    browser: {
      name: "chrome",
      version: "126",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});