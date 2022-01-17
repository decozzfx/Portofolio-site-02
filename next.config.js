/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env:{
    CONTACT_API_URL: process.env.CONTACT_API_URL,
    CONTACT_API_USERNAME: process.env.CONTACT_API_USERNAME,
    CONTACT_API_HOST: process.env.CONTACT_API_HOST,
    CONTACT_API_KEY: process.env.CONTACT_API_KEY,
    CONTACT_API_EMAIL: process.env.CONTACT_API_EMAIL
  }
}
