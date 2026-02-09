const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.com.br", baseUrl: "https://www.saucedemo.com",

    testIsolation: false,
    viewportWidth: 1440,
    viewportHeight: 900,

    specPattern: "cypress/e2e/features/**/*.feature",

    async setupNodeEvents(on, config) {
      // Allure
      allureWriter(on, config);

      // Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Preprocessor para .feature
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});

