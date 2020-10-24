# TP Angular n°1 :

Auteur: Steven Tanguy
Formation: Master 2 CCN

---

Objectif:
Le but de ce Tp est de comprendre le principe de component et de service avec angular. A traver une les instruction du sujet il fallait créer un pokedex en allant chercher les infomations des pokemons dans http://pokeapi.co/ .

Lancement de l'application:  
Il faut en ligne de commande lancer le serveur "ng serve" et ensuite allez sur http://localhost:4200/.

Réalisation:
On retouve un composant qui est my-component : qui a une methode ngOnInit qui va à l'initialisation remplir un tableau de pekemon.
Et la methode go() qui permet de rechercher un pokemon.

Ensuite il y a le service qui est le fichier poke-apiservice.service.ts.
Et le Pipe quiest le fichier filter-pokemon--pipe.pipe.ts qui permet de filtrer des pokemons

---

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
