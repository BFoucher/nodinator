import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryArticleDataService implements InMemoryDbService {
    createDb() {
      const articles = [
        {
          title: 'article 1',
          content: 'ceci est un contenu',
          slug: 'first',
          status: 'publish'
        },
        {
          title: 'Article Angular',
          content: 'Apprendre Angular',
          slug: 'angular',
          status: 'draft'
        },
        {
          title: 'Article NodeJS',
          content: 'Apprendre NodeJS',
          slug: 'nodejs',
          status: 'draft'
        },
        {
          title: 'KSH',
          content: 'Apprendre KSH',
          slug: 'ksh',
          status: 'draft'
        }];
    return {articles};
  }
}
