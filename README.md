# Demo Web Shop - Tests automatisés
## 1. Présentation
Ce projet contient les tests automatisés de l'application [Demo Web Shop](https://demowebshop.tricentis.com/), développés avec Playwright.
L'objectif est de mettre en place une architecture de tests automatisés maintenable, réutilisable et traçable avec les cas de test fonctionnels définis dans Squash.
Le projet est actuellement en cours de migration de **Python / Playwright / Pytest vers TypeScript / Playwright Test**.
Les nouveaux tests sont développés en TypeScript. Les anciens fichiers Python sont conservés temporairement pendant la migration.
## 2. Technologies utilisées
- Node.js (version 20 minimum)
- npm
- TypeScript
- Playwright Test (version 1.65.1)
- Git / GitHub
- Visual Studio Code
## 3. Structure du projet
```text
demo-web-shop-playwright/
│
├── e2e/
│   └── ct-ins-001.spec.ts
│
├── pages/
│ 
├── tests/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
 
```
### Organisation des fichiers
- `e2e/` : contient les scénarios de tests automatisés développés en TypeScript.
- `playwright.config.ts` : centralise la configuration de Playwright Test, notamment les navigateurs et le rapport HTML.
- `package.json` : définit les dépendances et les informations du projet.
- `package-lock.json` : verrouille les versions des dépendances pour garantir une installation reproductible.
- `tests/` et `pages/` : contiennent encore les anciens fichiers Python, conservés pendant la migration.
## 4. Prérequis
Avant de commencer, installer :
- Node.js version 20 minimum.
- npm (installé avec Node.js).
- Git.
- Visual Studio Code (recommandé).
Vérifier les installations :
```bash
node --version
npm --version
git --version
```
## 5. Installation et configuration
### 5.1. Récupérer le projet
Cloner le dépôt Git :
```bash
git clone https://github.com/Joaospj-Hub/demo-web-shop-playwright.git
```
Se placer dans le dossier du projet :
```bash
cd demo-web-shop-playwright
```
### 5.2. Installer les dépendances
Installer les dépendances à partir du fichier `package-lock.json` :
```bash
npm ci
```
Cette commande installe les versions verrouillées dans le fichier de dépendances.
### 5.3. Installer les navigateurs Playwright
Installer les navigateurs nécessaires à l'exécution des tests :
```bash
npx playwright install
```
La configuration actuelle prévoit trois navigateurs :
- Chromium
- Firefox
- WebKit
## 6. Exécution des tests
### 6.1. Exécuter l'ensemble des tests
```bash
npx playwright test
```
Cette commande lance les tests détectés dans le dossier `e2e/`, selon les projets définis dans `playwright.config.ts`.
### 6.2. Exécuter les tests sur Chromium uniquement
```bash
npx playwright test --project=chromium
```
### 6.3. Exécuter un cas de test précis
**CT-INS-001 : Inscription refusée avec un mot de passe de 5 caractères**
```bash
npx playwright test e2e/ct-ins-001.spec.ts --project=chromium
```
### 6.4. Exécuter les tests avec le navigateur visible
```bash
npx playwright test --headed
```
## 7. Génération et consultation du rapport HTML
Le projet utilise le reporter HTML intégré à Playwright.
Après une exécution des tests, ouvrir le dernier rapport avec :
```bash
npx playwright show-report
```
Le rapport permet notamment de consulter :
- Le nombre de tests réussis et échoués.
- Le résultat de chaque test.
- Les éventuelles erreurs.
- Les détails des exécutions.
Le rapport est généré dans le dossier `playwright-report/`.

## 8. Traçabilité avec Squash
Les tests automatisés associés aux cas de test Squash reprennent leur identifiant fonctionnel dans leur nom.
| Identifiant Squash | Scénario automatisé |
|---|---|
| CT-INS-001 | Refus d'inscription avec un mot de passe trop court |
Cette organisation permet d'identifier les tests correspondant aux cas de test fonctionnels et de suivre leur automatisation.

## 9. Résultats des tests
Playwright affiche directement dans le terminal le résultat de chaque test exécuté.
- `passed` : le test a réussi.
- `failed` : le test a échoué.
- `skipped` : le test a été ignoré.
Les résultats permettent de suivre l'exécution des scénarios automatisés et d'identifier rapidement les éventuelles régressions.

## 10. État de la migration
La migration de Python / Playwright / Pytest vers TypeScript / Playwright Test est en cours.
Les nouveaux scénarios sont développés en TypeScript dans le dossier `e2e/`.
Les anciens fichiers Python restent présents temporairement afin de permettre une transition progressive.
La documentation et la structure du projet seront mises à jour au fur et à mesure de l'avancement de cette migration.