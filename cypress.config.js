const { defineConfig
} = require('cypress');

module.exports = defineConfig({
  projectId: "spdb6n",
  e2e: {
    baseUrl: 'http: //localhost:4000', // Port numarasını güncelledik
    supportFile: false,
    },
});
