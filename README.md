# Demo Web Shop - Tests automatisés


## 1. Tests Playwright TypeScript 

Le projet est en cours de migration vers Playwright TypeScript. Les nouveaux tests se trouvent dans le dossier `e2e/`.

### 1.1. Prérequis

Installer **Node.js v26.13.1 (LTS)** avec l'installateur macOS ou Windows : https://nodejs.org

Vérifier la version de Node.js :

```bash
node --version
```

Vérifier la version de npm (installé avec Node.js) :

```bash
npm --version
```

### 1.2. Installer les dépendances

Depuis la racine du projet, installer les bibliothèques aux versions exactes du fichier `package-lock.json` :

```bash
npm ci
```

### 1.3. Installer le navigateur Chromium

```bash
npx playwright install chromium
```

### 1.4. Exécuter les tests

Cette commande lance tous les tests du dossier `e2e/` :

```bash
npx playwright test
```

### 1.5. Consulter le rapport HTML

Cette commande ouvre le rapport des derniers tests dans le navigateur :

```bash
npx playwright show-report
```
