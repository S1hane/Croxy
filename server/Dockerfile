FROM node
LABEL name="proxy"
LABEL version="1.0"
LABEL description="proxy for fec project"
ENV NODE_ENV=production
ENV ENABLE_RESPONSE_LOG=false
WORKDIR /usr/src/app
COPY ["modules", "modules"]
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "healthcheck.js", "index.js", "./"]
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
