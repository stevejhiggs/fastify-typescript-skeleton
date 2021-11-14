
FROM node:16-alpine AS build-env

WORKDIR /opt/api
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
# Bundle app source
COPY . .
RUN yarn build
# just use production packages
RUN rm -rf ./node_modules && yarn --frozen-lockfile --production

# re-start from a blank alpine image
FROM node:16-alpine
WORKDIR /opt/api
# copy the build artifacts
COPY --from=build-env /opt/api .

# create a user to run as
RUN addgroup --gid 1001 -S api && adduser --uid 1001 -S -G api api
USER 1001

EXPOSE 3000
ENTRYPOINT ["yarn", "run", "startProduction"]
