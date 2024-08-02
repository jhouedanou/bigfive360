# BigFive360

BigFive360 est une application qui accélère vos ventes et locations immobilières grâce aux contenus 360°.

## Présentation

BigFive360 utilise la technologie Matterport pour créer des visites virtuelles réalistes et immersives de biens immobiliers. Ces visites sont facilement partageables sur n'importe quel appareil iOS ou Android, offrant un avantage concurrentiel unique dans le secteur immobilier.

## Mise en route

Pour lancer l'application, suivez ces étapes :

1. Clonez le dépôt :
2. Installez les dépendances : yarn install
3. Lancez le serveur de développement avec Browsersync : yarn run dev

4. Browsersync ouvrira automatiquement votre navigateur par défaut. Si ce n'est pas le cas, accédez à l'URL indiquée dans la console.

## Construction pour la production

Pour construire l'application pour la production : yarn generate

Copiez ensuite le contenu du dossier .output/public à la racine d'un hebergement apache .

Vous pouvez ensuite prévisualiser la version de production localement https://localhost:3001

## Technologies utilisées

- Nuxt 3
- Vue.js
- Bulma CSS
- SCSS
- Browsersync
- Chokidar

Pour plus d'informations sur la configuration et le déploiement, consultez la [documentation de Nuxt 3](https://nuxt.com/docs/getting-started/introduction).

Jean Luc Houédanou
