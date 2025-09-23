import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalOriginDependencies: true,
    scrollBehavior: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
