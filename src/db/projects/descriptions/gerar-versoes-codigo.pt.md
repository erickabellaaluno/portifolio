Repetir o que fizemos em conjunto no Exercício 2 para o Exercício 3. Entregar as diferentes versões do código python gerado. 
*Exercício 3 — Otimização de Rota de Caminhão de Entrega (Engenharia de Produção)*

Uma transportadora possui uma lista de coordenadas `[(x, y), ...]` representando pontos de entrega em um mapa cartesiano (em km), todos partindo da origem (0, 0). O caminhão consome 0,35 L/km de diesel e tem capacidade máxima de 80 L no tanque.

Implemente: (a) uma função que calcule a distância total percorrida seguindo a ordem original da lista (ida em sequência e volta à origem); (b) uma função que aplique o algoritmo do "vizinho mais próximo" — a partir da origem, sempre vai ao ponto não visitado mais próximo — e retorne a nova ordem e a distância total; (c) compare o consumo de combustível das duas rotas; (d) verifique se o caminhão precisa reabastecer durante a rota otimizada, considerando que ele sai com tanque cheio.