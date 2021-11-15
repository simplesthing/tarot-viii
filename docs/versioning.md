# Versioning

## Tools

[Standard Version](https://github.com/conventional-changelog/standard-version)

[Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#specification)

[commitlint](https://commitlint.js.org/#/guides-local-setup)- default [rules](https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/index.js)

[husky git hooks](https://typicode.github.io/husky/#/?id=manual)

## Commit Format

```
type(scope?) : subject

body?

footer_token?: footer
```

`type` and `subject` are required, `scope`, `body` and `footer` are optional.

Conventional commit types :

```
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```

Always push tags to origin after bumping

`git push origin/main --tags`
