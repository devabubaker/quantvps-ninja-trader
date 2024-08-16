# .env

Use .env.local with development params:

```bash
vercel pull && cp .vercel/.env.development.local .env.local
```

# Deploy to preview:

```bash
vercel
```

# Check&format before commit:

```bash
pnpm run fix
```

or

```bash
npx eslint --fix .
```

## Always pull and merge main changes before commits

### **Do not pull request or push if preview build fails!**

Do not forget to refresh node_modules if package.json had changed

```bash
pnpm i
```

(also in any incomprehensible case)

See also [CONTRIBUTING.md](CONTRIBUTING.md) to discover formatting rules
