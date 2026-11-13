\# Demo Web Shop - Tests automatisés



\## Présentation



Ce projet contient des tests automatisés de l'application Demo Web Shop avec Python, Playwright et Pytest.



Le premier périmètre concerne la fonctionnalité d'inscription d'un nouvel utilisateur.



\## Technologies utilisées



\- Python 3.13



\- Playwright



\- Pytest



\## Installation



Cloner le dépôt Git, puis créer et activer un environnement virtuel :



```bash



py -3.13 -m venv .venv



.venv\\Scripts\\activate



```



Installer les dépendances :



```bash



python -m pip install -r requirements.txt



python -m playwright install chromium



```



\## Exécution des tests



Depuis la racine du projet :



```bash



python -m pytest tests -v



```



\## Structure du projet



```text



Projets\_Playwright/



├── pages/



│   ├── base\_page.py



│   └── register\_page.py



├── tests/



│   └── test\_registration.py



├── conftest.py



├── test\_data.py



├── requirements.txt



├── README.md



└── .gitignore



```



\## Tests disponibles



\- Vérification de l'ouverture de la page d'inscription.



\- Inscription d'un nouvel utilisateur avec des données valides.

&#x20;

