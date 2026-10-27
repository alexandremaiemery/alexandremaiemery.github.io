# Alexandre MAI--EMERY — Portfolio

Portfolio d’Alexandre MAI--EMERY, étudiant en licence de mathématiques
et informatique à Sorbonne Université.

Site : <https://alexandremaiemery.github.io/>

Statut : V1 terminée (octobre 2026).

## Contenu du site

Une seule page, en français, organisée en cinq sections :

- À propos : photo et courte présentation.
- Parcours : licence en cours et baccalauréat général obtenu en 2026.
- Projets : chaque projet renvoie vers son dépôt GitHub.
- Compétences : langages et outils pratiqués, sans niveau chiffré.
- Contact et CV : e-mail, GitHub, LinkedIn et CV à télécharger en PDF.

La page comporte aussi un sommaire, des liens rapides (GitHub,
LinkedIn, e-mail) et un bouton de changement de thème.

## Choix techniques

- HTML, CSS et JavaScript sans framework, sans dépendance et sans
  étape de compilation.
- Hébergement gratuit sur GitHub Pages, sans serveur ni base de
  données.
- Une colonne sur téléphone, deux colonnes sur grand écran.
- Thèmes clair et sombre : le site suit la préférence du système, et
  le choix fait avec le bouton de thème est mémorisé.
- Utilisable sans JavaScript : le site reste alors en thème sombre,
  sans bouton de thème ni indication de la section active.
- Accessibilité : navigation au clavier, lien d’évitement, focus
  visible et respect du réglage de réduction des animations.
- Contrastes conformes au niveau AA des WCAG dans les deux thèmes.
- Police Geist hébergée dans le dépôt, sans service externe.
- Aperçu de partage (Open Graph) : titre, description et image
  affichés quand le lien du site est partagé.
- Aucun outil de suivi ni de mesure d’audience.

## Lancer le site en local

Prérequis : Git et Python 3.

```sh
git clone https://github.com/alexandremaiemery/alexandremaiemery.github.io.git
cd alexandremaiemery.github.io
python3 -m http.server 8000 --bind 127.0.0.1
```

Ouvrir ensuite <http://localhost:8000> dans un navigateur. Pour
arrêter le serveur, appuyer sur `Ctrl + C` dans le terminal.

Ouvrir directement `index.html` depuis le disque fonctionne aussi,
mais le serveur local reproduit plus fidèlement le site en ligne :
sans lui, Safari n’affiche pas le favicon.

## Publication

Le site est publié par GitHub Pages à partir de la racine de la
branche `main`. Chaque push sur `main` déclenche un nouveau
déploiement, dont le déroulement se suit dans l’onglet Actions du
dépôt. Le fichier `.nojekyll` désactive le traitement par Jekyll :
les fichiers sont publiés tels quels.

## Réalisation

Le code du site (HTML, CSS et JavaScript) a été écrit avec l’aide
d’assistants d’intelligence artificielle, principalement Claude
(Anthropic). L’auteur a fourni le contenu, pris les décisions, testé
et vérifié chaque modification ; il se sert de ce projet pour
s’initier au développement web.

Le favicon a été généré par Claude. La photo a été prise par
l’auteur, puis recadrée et élargie par génération d’image, et son
fond modifié, avec ChatGPT.

## Documentation

Le cahier des charges décrit les objectifs, le contenu, les choix
techniques, la structure des fichiers, les conventions de code et
l’état d’avancement :
[docs/cahier-des-charges.md](docs/cahier-des-charges.md).

## Crédits

### Police

Geist, par The Geist Project Authors (Vercel), sous licence SIL Open
Font License 1.1. Le texte complet de la licence se trouve dans
[assets/fonts/OFL.txt](assets/fonts/OFL.txt).

### Icônes

Les icônes des liens rapides (GitHub, LinkedIn, e-mail), la flèche
des cartes de projet, le soleil et la lune du bouton de thème
proviennent de Feather Icons, par Cole Bemis, sous licence MIT. Leur
notice de licence est reproduite ci-dessous :

```text
The MIT License (MIT)

Copyright (c) 2013-2023 Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Droits

Ce dépôt n’est pas sous licence libre. À l’exception de la police et
des icônes, qui restent sous leurs propres licences, le code, les
textes, les images et le CV sont © 2026 Alexandre MAI--EMERY, tous
droits réservés. Toute réutilisation nécessite l’autorisation de
l’auteur.

## Contact

Les coordonnées figurent dans la section Contact et CV du site :
<https://alexandremaiemery.github.io/#contact>.
