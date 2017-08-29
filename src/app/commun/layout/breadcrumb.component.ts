import { Component } from '@angular/core';

@Component({
    selector: 'nod-breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
    private listTAG = new Array<String>();
    private Nav = [
        { id: '0',
          name: 'Accueil',
          children: [
              { id: '1-0',
                name: 'Liste des contenus',
                children: [
                    {
                        id: '1-0-0',
                        name: 'Contenu'
                    }
                ] },
              { id: '1-1',
                name: 'Liste des tutoriels',
                children: [
                    {
                        id: '1-1-0',
                        name: 'Tutoriel'
                    }
                ] },
              { id: '1-2',
                name: 'Liste des formations',
                children: [
                    {
                        id: '1-2-0',
                        name: 'Détail formation',
                        children: [
                            {
                                id: '1-2-0-0',
                                name: 'Achat formation',
                                children: [
                                    {
                                        id: '1-2-0-0-0',
                                        name: 'Remerciements d\'achat'
                                    }
                                ]
                            }
                        ]
                    }
                ] },
              { id: '1-3',
                name: 'Authentification',
                children: [
                    {
                        id: '1-3-0',
                        name: 'Accès liste produits achetés',
                        children:[{
                            id: '1-3-0-0',
                            name: 'Accès produit acheté'
                        }]
                    },
                    {
                        id: '1-3-1',
                        name: 'Accès Profil'
                    },
                    {
                        id: '1-3-2',
                        name: 'Accès liste produits créés',
                        children: [{
                            id: '1-3-2-0',
                            name: 'Créer un produit'
                        },
                          {
                              id:'1-3-2-1',
                              name: 'Modifier un produit'
                          }]
                    },
                    {
                        id: '1-3-3',
                        name: 'Accès liste contenus créés',
                        children: [
                          {
                              id:'1-3-3-0',
                              name: 'Créer un contenu'
                          },
                          {
                              id:'1-3-3-1',
                              name: 'Modifier un contenu'
                          }
                        ]
                    }
                ] }
          ] },
      ];

    setLevels(list: Array<String>){
        this.listTAG = list;
    }
}
