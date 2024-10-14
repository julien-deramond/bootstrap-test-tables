# bootstrap-test-tables

This repository is a personal tool to test non-regressions of Bootstrap tables.

It contains:
- a Storybook to display all Bootstrap tables with options; the objective being to check all possible configurations
- a test suite to check non-regressions of Bootstrap tables between versions
- (soon) a document gathering the issues that have been found and may be reported to the Bootstrap project

## How to use

| Command | Description |
| --- | --- |
| npm install | Install dependencies |
| npm run storybook | Start Storybook |
| npm run test:visual | Run visual tests against snapshots in `tests/Table.test.js-snapshots` |
| npm run test:visual:update | Update visual tests snapshots in `tests/Table.test.js-snapshots` |

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/julien-deramond/" aria-label="Go to Julien's GitHub Sponsors page">
    <img src='https://cdn.jsdelivr.net/gh/julien-deramond/static/sponsors.svg'/>
  </a>
</p>

## License

Licensed under the MIT License.

See [LICENSE](https://github.com/julien-deramond/bootstrap-test-tables/blob/main/LICENSE) for more information.
