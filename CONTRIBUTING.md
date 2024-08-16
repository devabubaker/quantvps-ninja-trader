# Contributing rules

- always pull & merge main before commit
- use eslint for checking and prettier for formatting (configs in .prettierrc &
  eslintrc.json)

## Codestyle

- Indentation: 2 spaces
- Only spaces, no tabs
- Single quotes
- Avoid uneccessary parens: (arg => {...}), not ((arg)=>{...})
- Same with JSX conditions/blocks
- Linebreaks is LF (unix), not windows CRLF
- No semicolons
- No dangling commas
- Max line lenght (if possible) is 80 chars

Details in eslintrc.json

# packages management

- use `pnpm` instead `npm`
