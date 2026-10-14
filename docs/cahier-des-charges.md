# Portfolio d’Alexandre MAI--EMERY — Cahier des charges

Date de cadrage : 1er octobre 2026  
Dernière mise à jour : 15 octobre 2026  
Statut : développement en cours — structure HTML, mise en page de base, états du sommaire, chronologie du parcours et carte de projet réalisés, JavaScript à développer

Ce document rassemble les objectifs, le contenu, les décisions techniques
et les règles de travail du portfolio. Il doit être actualisé lorsque
le projet évolue. Le code du dépôt reste la référence pour l’état exact
du site.

## 1. Identité et objectifs

- Nom affiché : Alexandre MAI--EMERY.
- Identifiant GitHub : alexandremaiemery.
- Langue de la V1 : français.
- Public : recruteurs, enseignants, étudiants, collaborateurs potentiels
  et toute personne souhaitant découvrir mon parcours.
- Objectif prioritaire : préparer mes futures candidatures.
- Objectifs complémentaires : développer ma présence professionnelle,
  approfondir mes compétences web et présenter mes futurs projets.
- Résultat attendu : un site professionnel, propre, moderne et personnel,
  reflétant un travail sérieux.
- Aucune échéance imposée pour le moment.
- Développement progressif, selon le temps disponible.
- Budget initial : zéro euro.
- Une petite dépense pourra être envisagée plus tard si elle est justifiée,
  notamment pour un domaine personnel.

## 2. Parcours à présenter

### Licence — depuis la rentrée 2026

- Sorbonne Université.
- Portail Mathématiques-Informatique.
- Campus de Jussieu (75005), historiquement associé à l’UPMC.
- Entrée en L1 pour l’année universitaire 2026–2027.
- Formation en cours.
- Enseignements du premier semestre (intitulés officiels sur le site de
  la faculté) : éléments de programmation (en Python), mathématiques pour
  les sciences, sciences des données.
- Présentation sur le site : titre « Licence, portail
  Mathématiques-Informatique », date « 2026 – Aujourd’hui ». Aucune date
  de fin n’est présentée comme certaine.

### Baccalauréat général — session 2026

- Année scolaire 2025–2026.
- Lycée Gaston Bachelard, Chelles (77).
- Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques,
  majuscules choisies pour faire ressortir les initiales).
- Mention très bien.
- Moyenne : 16,0/20.
- Spécialité Physique-chimie suivie en première puis abandonnée : non
  mentionnée sur le site pour le moment.

La mention et la moyenne apparaissent dans la section Parcours, sur une
ligne séparée sous le lycée. Elles ne sont pas mises au centre de la
présentation principale.

### Format des dates

- Une année : « 2026 ». Une période : « 2002 – 2005 » (de la plus ancienne
  à la plus récente), avec un tiret demi-cadratin entouré d’espaces.
  Étape en cours : « 2026 – Aujourd’hui ».
- Étapes présentées de la plus récente à la plus ancienne.

Aucun domaine de spécialisation informatique ne sera annoncé pour
le moment : il est encore trop tôt pour arrêter ce choix.

## 3. Compétences actuelles

### Python

Langage pratiqué depuis le lycée.

Notions déjà étudiées et utilisées :

- fonctions ;
- listes et dictionnaires ;
- lecture et écriture de fichiers ;
- classes ;
- modules.

Le niveau sera présenté honnêtement, sans revendiquer une expertise.

### Autres compétences

- HTML et CSS : bases acquises au lycée, à approfondir avec ce portfolio.
- PHP et SQLite : initiation.
- Git et GitHub : bases du versionnement et utilisation du terminal.
- JavaScript : apprentissage progressif pendant le développement du site.

Les compétences seront décrites par des notions ou des usages concrets.
Pas de pourcentages, d’étoiles ou de niveaux artificiellement précis.

## 4. Contenu de la V1

La V1 sera composée d’une seule page.

### Présentation principale

- Nom et prénom.
- Intitulé envisagé : « Étudiant en mathématiques et informatique ».
- Introduction courte.
- Sommaire.
- Liens rapides.
- Commande de changement de thème.

### À propos

- Présentation personnelle concise.
- Formation actuelle et motivation.
- Photo réelle, de taille modérée.
- Aucun texte générique ni spécialisation inventée.

### Parcours

- Étapes de la plus récente à la plus ancienne.
- Pour chaque étape : date à gauche (au-dessus du titre sur petit écran),
  puis titre, lieu et détail.
- Licence en cours.
- Baccalauréat : lycée, puis mention et moyenne sur une ligne séparée,
  puis spécialités.
- Dates clairement visibles (format décrit en section 2).

### Projets

- Section placée juste après le Parcours, avec une entrée dans le sommaire.
- Chaque projet est présenté par une carte : nom, mention « (en cours de
  réalisation) » tant que le travail n’est pas terminé, et une description
  limitée à l’idée de départ (une ou deux phrases), sans page dédiée.
- Une carte n’est cliquable que si elle mène à une destination réelle
  (voir section 7). Aucune carte « À venir » pour remplir artificiellement
  le site.
- Premier projet présenté : Serrure à frappes (voir section 11).
- Une page dédiée et un récit complet ne viennent que lorsque le projet
  est suffisamment avancé ou terminé (voir section 11).

### Compétences

- Python.
- HTML et CSS.
- Initiation à PHP et SQLite.
- Git et GitHub.
- Mise à jour progressive selon les acquis réels.

### Contact et CV

- Adresse e-mail visible et lien de contact.
- GitHub.
- LinkedIn.
- Téléchargement direct du CV public au format PDF.

## 5. Direction visuelle

Style recherché :

- sobre ;
- professionnel ;
- moderne ;
- épuré ;
- fluide ;
- lisible.

### Références

Classement des références étudiées :

1. Brittany Chiang.
2. Tania Rascia.
3. Lee Robinson.
4. Adham Dannaway.
5. Rauno Freiberg.

Brittany Chiang est la référence principale :

- composition en deux colonnes ;
- présentation et sommaire à gauche ;
- contenu détaillé à droite ;
- qualité de la typographie ;
- hiérarchie des informations ;
- présentation du parcours et des projets ;
- animations et interactions discrètes.

Tania Rascia est une référence complémentaire :

- présentation chronologique du parcours ;
- navigation latérale ;
- bouton de changement de thème ;
- organisation des projets pour une future version.

Le site aura sa propre identité visuelle et son propre code.
Il ne sera pas une copie conforme de ces références.

### État actuel (provisoire)

- Thème sombre de base : fond bleu très foncé (`#111827`), texte principal
  presque blanc (`#f1f5f9`), texte secondaire gris clair (`#a8b4c7`),
  accent bleu clair (`#7dd3fc`), définis par des variables CSS.
- Police système (`system-ui`), taille de base `1rem`, interligne `1.7`.
- Les couleurs définitives, la police et les espacements restent à choisir.

## 6. Organisation selon la taille de l’écran

### Écrans suffisamment larges

Colonne gauche restant visible pendant le défilement :

- identité ;
- courte présentation ;
- navigation ;
- liens rapides ;
- commande de thème.

Colonne droite :

- À propos ;
- Parcours ;
- Compétences ;
- Contact et CV.

Mise en œuvre actuelle :

- deux colonnes avec CSS Grid à partir de `64rem` de largeur ;
- présentation fixe au défilement (`position: sticky`) uniquement si
  l’écran est à la fois assez large (`64rem`) et assez haut (`45rem`),
  afin qu’une présentation trop haute ne reste pas bloquée dans une
  fenêtre basse ;
- ce seuil de hauteur est à retester lorsque la présentation s’agrandira
  (liens rapides, commande de thème).

### Téléphones et petits écrans

- Une seule colonne.
- Présentation en haut.
- Navigation compacte.
- Sections successives.
- Contact et CV en bas.
- Aucun défilement horizontal imposé.

### Prénom et nom

Le prénom et le nom sont volontairement sur deux lignes (saut de ligne
dans le titre principal). Ne pas imposer `white-space: nowrap`, qui
provoquerait un débordement horizontal ; tester sur les très petits écrans.

## 7. Thèmes et interactions

Deux thèmes sont prévus :

- clair ;
- sombre.

Comportement souhaité :

- préférence système utilisée au premier accès ;
- bouton permettant de changer le thème ;
- mémorisation du choix lorsque le navigateur le permet.

Interactions prévues pour la V1 :

- animation d’entrée légère ;
- transitions sur les liens et boutons ;
- survol discret des éléments du parcours ;
- indication de la section active dans le sommaire ;
- changement de thème soigné.

À éviter :

- écran d’attente obligatoire ;
- curseur personnalisé ;
- défilement détourné ou inhabituel ;
- animations gênant la lecture ;
- effets décoratifs sans intérêt ;
- changements de taille ou de graisse provoquant des déplacements au survol.

Les préférences de réduction des animations seront respectées.
Le contenu et la navigation devront rester utilisables sans JavaScript.

### Survol des étapes du parcours

Les étapes du parcours ne sont pas des liens (pas de page dédiée prévue
pour la V1). Mise en œuvre actuelle, en CSS seul :

- titre et date de chaque étape dans la couleur du texte principal ;
- au survol d’une étape (zone élargie autour du texte) : fond légèrement
  teinté (variable `--color-hover`), date et titre en couleur d’accent,
  autres étapes atténuées à `0.7` d’opacité (limite fixée pour conserver
  un contraste lisible) ;
- curseur inchangé, puisque l’étape n’est pas cliquable ;
- effet limité aux appareils disposant d’un vrai survol (`hover: hover`) ;
- transition de 150 ms, supprimée pour les utilisateurs ayant demandé la
  réduction des animations ;
- aucun déplacement ni changement de taille ou de graisse.

### Cartes de projets

Mise en œuvre actuelle, en HTML et CSS seuls :

- carte entièrement cliquable (lien étiré : le lien du titre couvre toute
  la carte), avec une flèche décorative en haut à droite, masquée aux
  lecteurs d’écran ;
- une carte n’est cliquable que si elle mène à une destination réelle
  (dépôt, démonstration ou page dédiée) ; sans destination, ce n’est pas
  un lien ;
- au survol : même comportement que les étapes du parcours (fond teinté,
  autres cartes atténuées à `0.7`), titre et flèche en couleur d’accent ;
  la flèche se décale de 4 px vers le haut et la droite et grossit de
  15 % (`transform`, aucun déplacement dans la page) ;
- au clavier : contour visible sur toute la carte et mêmes effets qu’au
  survol (sélecteur `:has()`, pris en charge à partir de Safari 15.4 ;
  sans lui, le contour reste visible mais les autres effets au clavier
  sont absents) ;
- réduction des animations : la flèche ne bouge pas, la couleur change
  sans transition ;
- les liens vers un dépôt s’ouvrent dans le même onglet, comme les autres
  liens du site.

## 8. Technologies et hébergement

Choix validés :

- HTML pour la structure et le contenu.
- CSS pour la présentation et les mises en page.
- JavaScript pour les interactions utiles.
- Git pour le versionnement.
- GitHub pour le dépôt.
- GitHub Pages pour l’hébergement.

Pour la V1 :

- aucun framework ;
- aucun backend ;
- aucune base de données ;
- aucun outil de compilation imposé ;
- aucune dépendance ajoutée sans besoin expliqué.

Dépôt public : `alexandremaiemery/alexandremaiemery.github.io`
(branche `main`).

Adresse du site : <https://alexandremaiemery.github.io/>

Un domaine personnel pourra être ajouté plus tard.
Le projet ne dépendra pas d’une offre étudiante temporaire.

Les futures applications nécessitant un serveur seront hébergées
séparément et présentées depuis le portfolio.

## 9. Environnement de développement

- macOS.
- MacBook Air M5.
- Visual Studio Code.
- Git utilisé dans le terminal.
- Accès GitHub par SSH configuré (HTTPS reste utilisable).
- GitHub Student Developer Pack activé.
- Claude accède au dépôt par un connecteur GitHub en lecture seule.

Copilot et la complétion peuvent être utilisés.
Le code conservé doit être compris et testé.

### Structure actuelle du dépôt

- `index.html`
- `assets/css/styles.css` (au pluriel ; l’ancien `style.css` est supprimé
  et ne doit pas être recréé)
- `assets/js/main.js` (vide pour l’instant)
- `assets/documents/cv-alexandre-mai-emery.pdf` (CV public)
- `docs/cahier-des-charges.md` (ce document)
- `docs/instructions-ia.md` (instructions de projet à fournir aux
  assistants IA)
- `docs/prompt-type.md` (prompt type pour reprendre le travail)
- `README.md`, `.gitignore`, `.nojekyll`

## 10. Informations publiques, photo et CV

### Informations prévues sur le site

- Prénom et nom.
- Formation.
- Compétences.
- Photo réelle.
- GitHub et LinkedIn.
- Adresse e-mail de contact.

### Informations à ne pas publier par défaut

- Numéro personnel.
- Adresse postale complète.
- Date de naissance.
- Identifiants étudiants.
- Documents administratifs.
- Secrets, clés privées ou jetons d’accès.

### Deux versions du CV

CV public :

- téléchargement direct depuis le site (lien avec l’attribut `download`) ;
- informations adaptées à une publication sur Internet ;
- numéro personnel retiré ;
- fichier : `assets/documents/cv-alexandre-mai-emery.pdf`.

CV de candidature :

- coordonnées supplémentaires utiles, notamment le téléphone ;
- envoyé directement lorsque c’est pertinent ;
- conservé hors du dépôt du portfolio.

La version complète ne doit pas être ajoutée au dépôt, même temporairement.

### Contact

Pour la V1 :

- adresse e-mail ;
- lien ouvrant la messagerie ;
- liens professionnels ;
- téléchargement direct du CV public.

Pas de formulaire ni d’envoi automatique de CV dans la V1.

### Photo

Photo réelle pour le portfolio et le CV.

Une version retouchée ou stylisée par IA pourra être préparée séparément
pour d’autres profils, à partir d’une vraie photo et en conservant
fidèlement les traits du visage.

## 11. Situation des projets

### Projet NSI du lycée

Robot de type voiture télécommandée :

- interface web ;
- serveur sur Raspberry Pi ;
- commandes GPIO du robot ;
- données GPS pour le suivi d’un itinéraire.

Le suivi du trajet n’était pas satisfaisant.
La cause exacte n’a pas été identifiée avec certitude.

Le projet est terminé et ne sera pas repris. L’ancien dépôt a été supprimé
après sauvegarde hors GitHub.

Décision :

- ne pas le présenter dans la V1 ;
- éventuellement préparer plus tard une rétrospective honnête
  sur l’architecture, ma contribution, les résultats et les limites.

### Projet personnel actuel

Projet à un stade très précoce, dont la poursuite n’est pas garantie.

Décision :

- ne pas le mentionner pour le moment.

### Serrure à frappes (projet de l’UE UL1IN021)

- Projet de l’UE Éléments de programmation (UL1IN021), au premier
  semestre de la première année de licence.
- Dépôt GitHub : `alexandremaiemery/projet-ul1in021-serrure`.
- Présenté sur le site par une carte cliquable vers ce dépôt, avec la
  mention « (en cours de réalisation) », à retirer à la fin du projet.
- Description actuelle volontairement minimale ; la description réelle
  sera rédigée plus tard.

### Futurs projets

Ils seront ajoutés lorsqu’il y aura quelque chose de concret à présenter.

Règle d’ajout (décidée le 14 octobre 2026) :

- un projet est ajouté dès qu’il a réellement commencé, avec la mention
  « (en cours de réalisation) » ;
- sa description se limite à l’idée de départ, sans détailler le projet ;
- un projet seulement prévu n’est pas présenté ;
- une carte de projet n’est cliquable que si elle mène à une destination
  réelle (voir section 7) ;
- la mention est retirée à la fin du projet et la description est alors
  complétée ;
- la fiche détaillée et la page dédiée viennent plus tard.

Une fiche complète pourra contenir :

- objectif ;
- technologies ;
- contribution personnelle ;
- captures ou démonstration ;
- difficultés et apprentissages ;
- limites ;
- lien vers le dépôt ;
- lien vers l’application, si elle est hébergée.

Des pages détaillées pourront être ajoutées pour alléger la page principale.

## 12. Règles de collaboration

Ces règles s’appliquent à tout assistant IA qui m’accompagne sur ce projet.
Elles reprennent mes règles générales de travail.

### Méthode

- Avancer par petites étapes.
- Définir le résultat attendu avant de coder.
- Expliquer les choix techniques et leur intérêt.
- Vérifier chaque étape avant de poursuivre.
- Distinguer les besoins de la V1 des idées pour plus tard.
- Ne pas lancer plusieurs fonctionnalités en même temps.
- Ne pas limiter artificiellement les propositions à ce que je connais déjà.
- Accompagner les notions nouvelles avec des exemples adaptés.
- Ne jamais affirmer qu’un fichier, un comportement ou un déploiement a été
  vérifié sans l’avoir réellement lu ou testé.

### Aide et exercices

- En cas de blocage ou d’exercice : donner d’abord un indice.
- Fournir directement du code lorsque je le demande, puis l’expliquer pour
  éviter une copie sans compréhension.

### Format du code

- Aucun commentaire inline dans le code fourni.
- Explications après le bloc de code, jamais dedans.
- Pour une correction : fournir le bloc complet à remplacer (la règle CSS
  entière, la section HTML entière, la fonction entière), copiable tel quel,
  et non seulement la ligne fautive.
- Signaler la ligne modifiée après le bloc : numéro, ancienne version →
  nouvelle version, raison. Jamais dans le code.
- Messages de commit et textes du site en français. Les noms de classes et
  de variables suivent la convention déjà en place dans le code.

### GitHub

- Connecteur GitHub en lecture seule uniquement.
- Ne jamais modifier de fichier ni faire de commit, sauf demande explicite.
- Lire l’état du dépôt au début d’une session de travail, puis seulement
  après un commit ou un push annoncé, pas à chaque message.
- Si je signale des modifications locales non poussées, ne pas relire le
  dépôt (il ne les contient pas) : me demander les fichiers concernés.

## 13. Règles de développement

- Séparer HTML, CSS et JavaScript.
- Utiliser une structure de fichiers simple.
- Employer des noms cohérents et explicites.
- Éviter les dépendances et les abstractions inutiles.
- Conserver les explications hors des blocs de code fournis.
- Ne pas ajouter de commentaires inline dans ces blocs.
- Faire des commits petits et compréhensibles.
- Avant chaque commit : examiner les modifications, vérifier les fichiers
  inclus, tester le comportement concerné, ajouter explicitement les
  fichiers utiles (pas d’ajout machinal de tout), puis pousser et vérifier
  l’état du dépôt.
- Maintenir un README présentant le projet et son utilisation.
- Mettre à jour ce cahier des charges lorsque les décisions changent.
- Tester les liens, les thèmes, les interactions et la version mobile.
- Prévoir la navigation au clavier et des contrastes lisibles.
- Ne pas ajouter de suivi des visiteurs par défaut.
- Ne jamais versionner de secret ou de document privé.

## 14. Critères de validation de la V1

- [ ] Présentation et parcours exacts.
- [ ] Textes relus et sans contenu artificiel.
- [ ] Photo réelle adaptée.
- [ ] Compétences décrites honnêtement.
- [ ] Affichage propre sur téléphone et ordinateur.
- [ ] Aucun débordement horizontal gênant.
- [ ] Thèmes clair et sombre lisibles.
- [ ] Navigation au clavier utilisable, focus visible.
- [ ] Animations discrètes et adaptées aux préférences utilisateur.
- [ ] Contenu accessible même sans JavaScript.
- [ ] Liens GitHub, LinkedIn et e-mail fonctionnels.
- [ ] CV public téléchargeable et vérifié.
- [ ] Aucun document privé ni secret dans le dépôt.
- [ ] README utile et à jour.
- [ ] Publication GitHub Pages fonctionnelle.
- [ ] Aucun lien ou fichier manquant.

## 15. État et prochaines étapes

État au 15 octobre 2026.

### Réalisé

- Choix de GitHub Pages, périmètre de la V1 et direction visuelle validés.
- Changement du pseudo GitHub et actualisation des réglages Git.
- Décision de créer deux versions du CV.
- Dépôt public créé et cloné.
- `index.html` : structure sémantique (en-tête, navigation, contenu
  principal, cinq sections, pied de page), lien d’évitement, textes
  principaux, liens e-mail, GitHub et LinkedIn, lien de téléchargement du
  CV public. Section Parcours en liste ordonnée (`ol.timeline`) : Licence
  (2026 – Aujourd’hui) puis Baccalauréat (2026), avec lieu, mention et
  moyenne sur une ligne séparée, spécialités. Section Projets (`ul.projects`)
  avec la carte du projet Serrure à frappes, entrée correspondante dans le
  sommaire. Validation HTML sans erreur le 14 octobre 2026 (avant l’ajout
  de la section Projets).
- `styles.css` : thème sombre de base, typographie système, mise en page
  responsive (une colonne, deux colonnes à partir de `64rem`, présentation
  fixe au défilement sous conditions de largeur et de hauteur), contour de
  focus visible, chronologie du parcours (date à gauche sur une colonne de
  `9rem` à partir de `40rem`, au-dessus du titre en dessous ; titre et date
  dans la couleur du texte principal), survol des étapes et carte de projet
  cliquable avec flèche (comportements décrits en section 7).
- Liens du sommaire : couleur secondaire au repos, accent au survol et au
  focus clavier, transition de couleur de 150 ms réservée aux utilisateurs
  n’ayant pas demandé de réduction des animations.
- CV public présent dans `assets/documents/`.
- README minimal.
- `main.js` créé mais vide.

### Pas encore fait

- Description réelle du projet Serrure à frappes (à rédiger).
- Thème clair, bouton de changement, mémorisation du choix, suivi de la
  préférence système.
- Indication de la section active.
- Animations d’entrée légères.
- Photo.
- Liens rapides et commande de thème dans la présentation.
- Couleurs, police et espacements définitifs.
- README complet.
- Vérification de la publication GitHub Pages.
- Validation complète de la V1 (section 14), dont une nouvelle validation
  HTML.

### Décisions et limites connues

- Les listes sans puces (sommaire, chronologie, projets) n’ont pas
  d’attribut `role="list"`. Les lecteurs d’écran peuvent ne pas les
  annoncer comme des listes. Non testé avec VoiceOver. Choix actuel : ne
  pas traiter, à reconsidérer éventuellement à la validation finale.
- Spécialité écrite « Numérique et Sciences Informatiques » (majuscules
  choisies pour faire ressortir les initiales de NSI ; le texte officiel
  est en minuscules).

### Points à vérifier

- La consigne de l’UE UL1IN021 autorise-t-elle la publication du projet
  dans un dépôt public ? Non vérifié.

### Prochaine étape

Thèmes clair et sombre, avec bouton de changement et mémorisation du choix
(premier usage de JavaScript). Le résultat attendu est à définir au début
de l’étape, avant d’écrire du code.

### Ordre de travail proposé ensuite

1. Thèmes clair et sombre.
2. Indication de la section active.
3. Animations d’entrée légères.

Cet ordre peut être ajusté pour une raison technique, mais les étapes ne
sont pas lancées simultanément.
