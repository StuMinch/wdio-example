FROM ianwalter/puppeteer:latest
COPY . .
ADD . .

RUN npm install