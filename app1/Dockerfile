# node 18-alpine
FROM node@sha256:fda98168118e5a8f4269efca4101ee51dd5c75c0fe56d8eb6fad80455c2f5827

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY index.js ./

# App runs on port PORT

CMD ["yarn", "start"]