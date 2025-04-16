# Next.js + Skaffold + Helm Example

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started (Local Development)

Start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Run Tests

```bash
npm test
```

## Development with Skaffold & Helm

You can use [Skaffold](https://skaffold.dev/) and [Helm](https://helm.sh/) for local Kubernetes development.

### Start in Development Mode

```bash
skaffold dev -p dev
```

### Start in Production Mode

```bash
skaffold dev -p prod
```

## Project Structure

- `app/` - Next.js App Router pages and API routes
- `charts/app/` - Helm chart for Kubernetes deployment
- `skaffold.yaml` - Skaffold configuration

## Notes

- You can edit `app/page.tsx` to update the main page.
- API routes are under `app/api/`.
- Skaffold/Helm will build and deploy the app to your local Kubernetes cluster.

---
