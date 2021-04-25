import { generate } from "cucumber-html-reporter";

var options = {
  theme: "bootstrap",
  jsonFile: "reports/cucumber_report.json",
  output: "reports/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "0.0.1",
    "Test Environment": "Dev",
    Browsers: "Chrome, Firefox and Edge",
    Platform: "Windows 10",
  },
};

generate(options);
