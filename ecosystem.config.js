module.exports = {
  apps: [
    {
      name: "strapiAdmin",
      script: "npm",
      args: "run develop",
      cwd: "/var/www/strapi",
      env: {
        NODE_ENV: "development",
        PORT: 1337
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 1337
      }
    }
  ]
};
