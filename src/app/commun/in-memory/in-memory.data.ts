import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryUserDataService implements InMemoryDbService {
    createDb() {
        const users = [
            {
                id: 1,
                lastName: 'Mr. Nice',
                firstName: "gentil",
                password:"",
                roles: "Client",
                email: "nice@gmail.com",
                articles: ["test"]
            },
            {
                id: 2,
                lastName: 'Bombasto',
                firstName: "bombadier fou",
                password:"",
                roles: "Administrateur",
                email: "bombadier@gmail.com",
                articles: ["test"]
            },
            {
                id: 3,
                lastName: 'Magneta',
                firstName: "aimant vivant",
                password:"",
                roles: "Visiteur",
                email: "aimant@gmail.com",
                articles: ["test"]
            },
        ];
        const articles = [ 
            { 
              id: 1,
              title: 'article 1', 
              content: 'ceci est un contenu', 
              slug: 'first', 
              status: 'publish' 
            }, 
            { 
              id: 2,
              title: 'Article Angular', 
              content: 'Apprendre Angular', 
              slug: 'angular', 
              status: 'draft' 
            }, 
            { 
              id: 3,
              title: 'Article NodeJS', 
              content: 'Apprendre NodeJS', 
              slug: 'nodejs', 
              status: 'draft' 
            }, 
            { 
              id: 4,
              title: 'KSH', 
              content: 'Apprendre KSH', 
              slug: 'ksh', 
              status: 'publish' 
            }]; 
        return { users, articles };
    }
}
