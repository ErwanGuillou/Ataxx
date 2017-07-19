# Ataxx
Bacteria Ataxx ; Game with AI Negamax / Alphabeta pruning implementation

v1.0
L'objectif est de sortir un code fonctionnel et une IA contre laquelle on peut se battre.
La fonction d'évaluation est volontairement minimale pour se concentrer sur :

- l'interface utilisateur
- les performances

v1.1
Creuser la fonction d'évaluation. L'IA doit être parfaite dans ses choix.
On devra tenir compte :

- de la dernière position jouée par l'humain (l'IA doit aller à l'offensive)
- du score (pas suffisant puisque la balance peut basculer d'un coup à l'autre / sauf si l'un ou l'autre joueur a gagné)
- de l'effet d'horizon (déterminer le niveau de danger d'une feuille finale)
- du nombre de coups possibles restants à chaque joueur (moins un joueur a de coups possibles, plus il est coincé)
