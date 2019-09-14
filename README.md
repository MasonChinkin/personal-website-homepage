[![Codeship Status for MasonChinkin/personal-website](https://app.codeship.com/projects/57fe8120-b952-0137-1cc4-5285da35f3f1/status?branch=master)](https://app.codeship.com/projects/364697)

Link: [masonchinkin.com](masonchinkin.com)

# A Portfolio Website Using CI/CD and Monorepos

My [original website](https://masonchinkin.github.io/) simply uses static github pages. I wanted to incorporate everything I've learned as a software engineer to build a professional codebase that is automatically tested and deployed.

## Codebase is split up using lerna

This uses `create-react-app` as a base and imports individual d3 projects using `lerna.js`.

## Tested and Deployed with Codeship

Codeship automatically tests all PRs. All PRs to `master` are deployed to Google App Engine. 

## Hosted on Google App Engine

Hosting `create-react-app` on App Engine took a little extra work in the `app.yaml`. Details [HERE](https://stackoverflow.com/a/54825554).