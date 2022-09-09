module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "api-para-crud-angular.vercel.app/api/clients/",
          },
        ],
      },
    ];
  },
};
