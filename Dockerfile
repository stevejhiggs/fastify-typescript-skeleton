FROM node:24-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY ./package.json /app/package.json
COPY ./pnpm-lock.yaml /app/pnpm-lock.yaml
WORKDIR /app

# Strip out dev dependencies
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Build the app
FROM base AS build
COPY . /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# Final image
FROM base

COPY --from=base /app /app
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/.dist /app/dist
WORKDIR /app

# Run as non-root user
USER node
EXPOSE 3000
CMD [ "node", "dist/listener.js" ]
