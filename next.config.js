module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://crud-angular-node.vercel.app/projeto",
          },
        ],
      },
    ];
  },
};
