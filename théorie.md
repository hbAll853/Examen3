# Examen 3 

## Partie 1 : Théorie

### 1. Qu'est-ce que Vite et quels sont ses avantages principaux ?

Vite est un outil de développement moderne qui permet de créer des projets web rapidement.  
Contrairement aux outils classiques comme Webpack, il est beaucoup plus rapide au démarrage grâce à l’utilisation des modules ES natifs. Il offre aussi le rechargement à chaud très rapide (HMR), ce qui améliore l’expérience des développeurs.

**Avantages** :
- Démarrage très rapide
- Rafraîchissement instantané quand on modifie un fichier
- Build de production optimisé
- Configuration simple

### 2. Quelle commande permet de créer un nouveau projet Vite en JavaScript vanilla ?

npm create vite@latest mon-projet -- --template vanilla

### 3. Comment lance-t-on le serveur de développement avec Vite ?

npm run dev

### 4. Quel est le rôle du fichier vite.config.js ? 

Le fichier vite.config.js sert à changer des réglages du projet Vite.
Par exemple, on peut modifier le port du serveur, demander que le navigateur s’ouvre tout seul ou ajouter des options pour mieux personnaliser le projet.

### 5. Quelle est la différence entre npm run dev et npm run build ? 

npm run dev sert à lancer le projet en mode développement, avec un serveur local qui recharge automatiquement quand on change du code.
npm run build sert à créer une version finale du site, optimisée pour la mettre en ligne (dans le dossier dist).

## Partie 2 : Pratique

# Exercice 1

### 1. Création d'un nouveau projet Vite avec JavaScript vanilla

**Commandes**
npm create vite@latest examen3 -- --template vanilla
cd examen3
npm install

### 3. Création de la structure de base

**Commandes**
mkdir -p src/pages src/assets 

# Exercice 2

### 1. Création des deux pages HTML dans le dossier pages : 

touch src/pages/home.html
touch src/pages/about.html

# Exercice 3
### 1. Création du module JavaScript utils.js

touch src/utils.js



