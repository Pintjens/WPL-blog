/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone'
}


const dateNow = new Date();

const timeOfDeploy = 0;


module.exports = {
  env: {
    lastDeployment: dateNow.toDateString() + " - " + dateNow.getUTCHours() + "h" + (dateNow.getUTCMinutes() < 10 ? `0${dateNow.getUTCMinutes()}` : dateNow.getUTCMinutes()) + " GTM",
  }
}