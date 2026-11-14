# Demo Web Shop - Tests automatisés
## Présentation
Ce projet contient des tests automatisés de l’application Demo Web Shop avec Python, Playwright et Pytest.
Le premier périmètre concerne la fonctionnalité d’inscription d’un nouvel utilisateur.
## Technologies utilisées
- Python 3.13
- Playwright
- Pytest
## Structure du projet
```text
Projets_Playwright/
├── pages/
│   ├── base_page.py
│   └── register_page.py
├── tests/
│   └── test_registration.py
├── conftest.py
├── test_data.py
├── requirements.txt
├── README.md
└── .gitignore
```
## Prérequis
- Python 3.13
- Git
- Visual Studio Code (recommandé)
## Installation
### Windows
Créer l’environnement virtuel :
```powershell
py -3.13 -m venv .venv
```
Activer l’environnement virtuel :
```powershell
.venv\Scripts\Activate.ps1
```
Si PowerShell bloque l’activation, utiliser l’invite de commandes :
```cmd
.venv\Scripts\activate.bat
```
### macOS / Linux
Créer l’environnement virtuel :
```bash
python3.13 -m venv .venv
```
Activer l’environnement virtuel :
```bash
source .venv/bin/activate
```
### Installer les dépendances
Sur Windows, macOS et Linux :
```bash
python -m pip install -r requirements.txt
```
Installer le navigateur Chromium utilisé par Playwright :
```bash
python -m playwright install chromium
```
## Exécution des tests
Lancer l’ensemble des tests :
```bash
python -m pytest tests -v
```
## Résultats
Pytest affiche le résultat de chaque test exécuté directement dans le terminal.
- `PASSED` : test réussi
- `FAILED` : test en échec