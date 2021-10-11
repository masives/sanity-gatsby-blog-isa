export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616433c6c3dcde2e5407ec95",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-isa-studio",
                  apiId: "8e22d80b-38e9-493a-962f-c3066ae89783",
                },
                {
                  buildHookId: "616433c696e10c938b3a8444",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-isa",
                  apiId: "62df4a7e-628e-4ee4-be90-263bf8b7bd74",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/masives/sanity-gatsby-blog-isa",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-isa.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
