# Demo Web Shop - Tests automatisés
## 1. Présentation
Ce projet contient des tests automatisés de l'application Demo Web Shop développés avec Python, Playwright et Pytest.
Le premier périmètre fonctionnel concerne l'inscription d'un nouvel utilisateur.
L'objectif est de mettre en place une architecture de tests maintenable, réutilisable et traçable avec les cas de test définis dans Squash.
## 2. Technologies utilisées
- Python 3.13
- Playwright
- Pytest
- Git / GitHub
- Visual Studio Code
## 3. Structure du projet
```text
Projets_Playwright/
├── pages/
│   ├── base_page.py
│   └── register_page.py
├── tests/
│   └── test_registration.py
├── conftest.py
├── test_data.py
├── pytest.ini
├── requirements.txt
├── README.md
└── .gitignore
```
### Organisation des fichiers
- `pages/` : contient les objets pages et les interactions avec l'application.
- `tests/` : contient les scénarios de tests automatisés.
- `conftest.py` : centralise les fixtures Pytest, notamment l'initialisation du navigateur.
- `test_data.py` : centralise les données utilisées par les tests.
- `pytest.ini` : configure Pytest et les marqueurs de traçabilité Squash.
- `requirements.txt` : liste les dépendances Python du projet.
## 4. Prérequis
Avant de commencer, les outils suivants doivent être installés :
- Python 3.13
- Git
- Visual Studio Code (recommandé)
## 5. Installation et configuration
### 5.1. Récupérer le projet
Cloner le dépôt Git :
```bash
git clone https://github.com/StephaneD94/demo-web-shop-playwright.git
```
Se placer dans le dossier du projet :
```bash
cd demo-web-shop-playwright
```
### 5.2. Créer l'environnement virtuel
**Windows :**
```powershell
py -3.13 -m venv .venv
```
**macOS / Linux :**
```bash
python3.13 -m venv .venv
```
### 5.3. Activer l'environnement virtuel
**Windows PowerShell :**
```powershell
.venv\Scripts\Activate.ps1
```
Si PowerShell bloque l'activation, utiliser l'invite de commandes :
```cmd
.venv\Scripts\activate.bat
```
**macOS / Linux :**
```bash
source .venv/bin/activate
```
### 5.4. Installer les dépendances
Sur Windows, macOS et Linux :
```bash
python -m pip install -r requirements.txt
```
### 5.5. Installer le navigateur Chromium
```bash
python -m playwright install chromium
```
## 6. Exécution des tests
### 6.1. Exécuter l'ensemble des tests
```bash
python -m pytest tests -v
```
Cette commande lance tous les tests présents dans le dossier `tests/`.
### 6.2. Exécuter uniquement les tests associés à Squash
```bash
python -m pytest -m squash -v
```
Cette commande sélectionne les tests portant le marqueur `squash`.
### 6.3. Exécuter un cas de test précis
**CT-INS-001 : Mot de passe trop court**
```bash
python -m pytest tests/test_registration.py::test_ct_ins_001_short_password -v
```
**CT-INS-005 : Confirmation de mot de passe différente**
```bash
python -m pytest tests/test_registration.py::test_ct_ins_005_different_password_confirmation -v
```
## 7. Génération des rapports HTML
Le projet utilise le plugin `pytest-html` pour générer des rapports d'exécution au format HTML.
### Générer un rapport HTML
Créer le dossier `reports/` à la racine du projet, puis exécuter :
   python -m pytest tests -v --html=reports/rapport_tests.html --self-contained-html
Le rapport est généré dans le dossier `reports/`.
### Consulter le rapport
Ouvrir le fichier `reports/rapport_tests.html` dans un navigateur pour consulter :
- Le nombre de tests réussis et échoués.
- Le résultat de chaque test.
- La durée d'exécution.
- Les éventuelles erreurs.
Le rapport permet de visualiser rapidement les résultats d'une campagne de tests automatisés.

## 8. Traçabilité avec Squash
Les tests automatisés associés aux cas de test Squash utilisent des marqueurs Pytest.
| Identifiant Squash | Scénario automatisé |
|---|---|
| CT-INS-001 | Refus d'inscription avec un mot de passe trop court |
| CT-INS-004 | Inscription d'un nouvel utilisateur avec des données valides |
| CT-INS-005 | Refus d'inscription avec une confirmation de mot de passe différente |
Cette organisation permet d'identifier les tests correspondant aux cas de test fonctionnels et de les exécuter individuellement ou par groupe.

## 9. Résultats des tests
Pytest affiche directement dans le terminal le résultat de chaque test exécuté.
- `PASSED` : le test a réussi.
- `FAILED` : le test a échoué.
- `SKIPPED` : le test a été ignoré.
Les résultats permettent de suivre l'exécution des scénarios automatisés et d'identifier rapidement les éventuelles régressions.