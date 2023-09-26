# FROM node as builder
# RUN mkdir -p /tmp/deploy
# WORKDIR /tmp/deploy
# COPY . .
# RUN yarn install
# RUN yarn generate

# FROM nginx:alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# # COPY .deploy/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /tmp/deploy/dist /usr/share/nginx/html
# COPY ./sitemap.xml /usr/share/nginx/html/sitemap.xml

FROM node
RUN mkdir -p /app
WORKDIR /app
COPY . .
# RUN npm install -g pnpm
# RUN pnpm install
# RUN pnpm run build
RUN yarn install --ignore-engines
RUN yarn build
COPY ./sitemap.xml /app/sitemap.xml
