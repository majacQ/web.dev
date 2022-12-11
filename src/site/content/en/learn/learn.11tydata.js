  <<<<<<< dependabot/npm_and_yarn/minimist-and-sass-lint-1.2.7
const livePaths = require('../../../_filters/live-paths');
const allPaths = require('../../../_data/paths');
  =======
const livePaths = require("../../../_filters/live-paths");

const fast = require("../fast/fast.11tydata.js").path;
const accessible = require("../accessible/accessible.11tydata.js").path;
const reliable = require("../reliable/reliable.11tydata.js").path;
const discoverable = require("../discoverable/discoverable.11tydata.js").path;
const secure = require("../secure/secure.11tydata.js").path;
const pwa = require("../progressive-web-apps/progressive-web-apps.11tydata.js")
  .path;
const installable = require("../installable/installable.11tydata.js").path;
const metrics = require("../metrics/metrics.11tydata.js").path;

const react = require("../react/react.11tydata.js").path;
const angular = require("../angular/angular.11tydata.js").path;

const lighthousePerformance = require("../lighthouse-performance/lighthouse-performance.11tydata.js")
  .path;
const lighthousePwa = require("../lighthouse-pwa/lighthouse-pwa.11tydata.js")
  .path;
const lighthouseBestPractices = require("../lighthouse-best-practices/lighthouse-best-practices.11tydata.js")
  .path;
const lighthouseAccessibility = require("../lighthouse-accessibility/lighthouse-accessibility.11tydata.js")
  .path;
const lighthouseSeo = require("../lighthouse-seo/lighthouse-seo.11tydata.js")
  .path;
  >>>>>>> metrics-overview

// =============================================================================
// LEARN OVERVIEW
//
// This is the context object for the learn page.
// It helps layout cards featured on the learn page, and their ordering.
//
// =============================================================================

module.exports = function () {
  const paths = [
  <<<<<<< dependabot/npm_and_yarn/minimist-and-sass-lint-1.2.7
    allPaths['progressive-web-apps'],
    allPaths['accessible'],
    allPaths['reliable'],
    allPaths['secure'],
    allPaths['discoverable'],
    allPaths['payments'],
    allPaths['media'],
    allPaths['devices'],
  =======
    fast,
    accessible,
    reliable,
    secure,
    discoverable,
    pwa,
    installable,
    metrics,
  >>>>>>> metrics-overview
  ].filter(livePaths);

  const performance = [
    allPaths['learn-web-vitals'],
    allPaths['metrics'],
    allPaths['fast'],
  ];

  const frameworks = [allPaths['react'], allPaths['angular']].filter(livePaths);

  const audits = [
    allPaths['lighthouse-performance'],
    allPaths['lighthouse-pwa'],
    allPaths['lighthouse-best-practices'],
    allPaths['lighthouse-accessibility'],
    allPaths['lighthouse-seo'],
  ].filter(livePaths);

  return {
    learn: {
      paths,
      performance,
      frameworks,
      audits,
    },
  };
};
