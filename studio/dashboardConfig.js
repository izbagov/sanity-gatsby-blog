export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1295b3666f1acda0206c48',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sydb4t6e',
                  apiId: 'a9de9da5-d1d9-4278-ae98-e7e3c5a1f602'
                },
                {
                  buildHookId: '5d1295b3f14a910974ee993f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-t236esjs',
                  apiId: '39e2aa8e-f681-4c03-acab-84b149928e72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/izbagov/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-t236esjs.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
