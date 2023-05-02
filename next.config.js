/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
};

module.exports = {
  nextConfig,
  env: {
    MYSQL_HOST: "sql12.freesqldatabase.com",
    // MYSQL_HOST: "127.0.0.1",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "sql12615394",
    MYSQL_USER: "sql12615394",
    MYSQL_PASSWORD: "ZdfkA3EDAN",
  },
};
