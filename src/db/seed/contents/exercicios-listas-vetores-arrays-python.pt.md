Escrever o código Python dos exercícios de listas/vetores/arrays. Para cada exercício, implemente e execute o código Python. Mostre que você executou o código na sua máquina (exemplo: faça um printscreen da execução).

Exercícios de listas /vetores/arrays para resolver:
https://docs.google.com/document/d/1p-z8Aqdotc8sv_y2fq1hH56EeNxzERSl/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true 

Entregar: (a) código python de cada exercício; (b) printscreen (ou foto) da execução de cada exercício.

## Resoluções

```python
leituras = []

leituras.append(820)
leituras.append(835)
leituras.append(848)
leituras.append(791)
leituras.append(812)
leituras.append(856)

print('Leituras:', leituras)
print('Máximo:', max(leituras))
print('Mínimo:', min(leituras))
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 01.py
Leituras: [820, 835, 848, 791, 812, 856]
Máximo: 856
Mínimo: 791
```

---

```python
amostras = []

amostras.append(11.9)
amostras.append(12.1)
amostras.append(12.0)
amostras.append(13.5)
amostras.append(11.7)
amostras.append(12.3)
amostras.append(10.5)
amostras.append(12.0)

print('Média:', sum(amostras)/len(amostras), 'V')

for amostra in amostras:
  if(amostra < 10.8 or amostra > 13.2):
    print('ALERTA:', amostra, 'V fora da faixa!')
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 02.py
Média: 12.0 V
ALERTA: 13.5 V fora da faixa!
ALERTA: 10.5 V fora da faixa!
```

---

```python
pacotes = []

pacotes.append(512)
pacotes.append(1024)
pacotes.append(1500)
pacotes.append(1518)
pacotes.append(256)
pacotes.append(1500)
pacotes.append(2048)
pacotes.append(64)
pacotes.append(1500)
pacotes.append(1024)

pacotes_jumbo = 0

for pacote in pacotes:
  if(pacote > 1500):
    pacotes_jumbo += 1

print('Pacotes recebidos:' , len(pacotes))
print('Total de bytes:', sum(pacotes))
print('Pacotes jumbo:', pacotes_jumbo, '(', pacotes_jumbo/len(pacotes)*100, '%)')
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 03.py
Pacotes recebidos: 10
Total de bytes: 10946
Pacotes jumbo: 2 ( 20.0 %)
```

---

```python
# Dados de entrada
# vibracao (m/s²): 0.12, 0.34, -999.0, 0.28, 0.91, -999.0, 1.42, 0.67


# Saída esperada:
# »
# Leituras válidas: [0.12, 0.34, 0.28, 0.91, 1.42, 0.67]
# Quantidade      : 6
# 💡
# Dica: remove() elimina apenas a primeira ocorrência — use while (-999.0 in lista) para eliminar todas.

vibracoes = []

vibracoes.append(0.12)
vibracoes.append(0.34)
vibracoes.append(-999.0)
vibracoes.append(0.28)
vibracoes.append(0.91)
vibracoes.append(-999.0)
vibracoes.append(1.42)
vibracoes.append(0.67)

for vibracao in vibracoes:
  if(vibracao == -999.0):
    vibracoes.remove(-999.0)

print('Leituras válidas:', vibracoes)
print('Quantidade:', len(vibracoes))
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 04.py
Leituras válidas: [0.12, 0.34, 0.28, 0.91, 1.42, 0.67]
Quantidade: 6
```

---

```python
# Dados de entrada
# cargas (kW): 15.0, 22.5, 8.0, 40.0, 12.5, 30.0


# Saída esperada:
# »
# Cargas ativas : [15.0, 22.5, 12.5, 30.0]
# Potência antes: 128.0 kW
# Potência agora: 80.0 kW
# Redução       : 48.0 kW

cargas = []

cargas.append(15.0)
cargas.append(22.5)
cargas.append(8.0)
cargas.append(40.0)
cargas.append(12.5)
cargas.append(30.0)

potencia_antes = sum(cargas)

cargas.remove(8.0)
cargas.remove(40.0)

potencia_agora = sum(cargas)

reducao = potencia_antes - potencia_agora

print('Cargas ativas:', cargas)
print('Potência antes:', potencia_antes)
print('Potência agora:', potencia_agora)
print('Redução:', reducao)
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 05.py
Cargas ativas: [15.0, 22.5, 12.5, 30.0]
Potência antes: 128.0
Potência agora: 80.0
Redução: 48.0
```

---

```python
# Dados de entrada
# canais (MHz)      : 850, 900, 950, 1800, 2100, 2600
# interferência (dBm): 850→-65, 900→-80, 950→-72, 1800→-55, 2100→-90, 2600→-68
# limiar de corte   : -70 dBm  (acima desse valor → desativar)


# Saída esperada:
# »
# Canal 850 MHz desativado (interferência: -65 dBm)
# Canal 950 MHz desativado (interferência: -72 dBm)
# Canal 1800 MHz desativado (interferência: -55 dBm)
# Canal 2600 MHz desativado (interferência: -68 dBm)
# Canais ativos: [900, 2100]
# 💡
# Dica: Nunca remova elementos de uma lista enquanto itera sobre ela com for — monte uma lista auxiliar dos itens a remover e depois chame remove() fora do laço.

dados = []
limiar_de_corte = -70

dados.append((850, -65))
dados.append((900, -80))
dados.append((950, -72))
dados.append((1800, -55))
dados.append((2100, -90))
dados.append((2600, -68))

canais_ativos = []

for canal, interferencia in dados:
  if interferencia > limiar_de_corte:
    print(f"Canal {canal} MHz desativado (interferência: {interferencia} dBm)")
  else:
    canais_ativos.append(canal)

print("Canais ativos:", canais_ativos)
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 06.py
Canal 850 MHz desativado (interferência: -65 dBm)
Canal 1800 MHz desativado (interferência: -55 dBm)
Canal 2600 MHz desativado (interferência: -68 dBm)
Canais ativos: [900, 950, 2100]
```

---

```python
# Dados de entrada
# params_originais (m/min): 120.0, 150.0, 95.0, 200.0, 110.0
# novo valor para índice 0 : 130.0


# Saída esperada:
# »
# Original (modificada): [130.0, 150.0, 95.0, 200.0, 110.0]
# Backup   (preservado): [120.0, 150.0, 95.0, 200.0, 110.0]
# 💡
# Dica: lista_b = lista_a não cria uma cópia — cria um segundo nome para o mesmo objeto em memória. Qualquer alteração aparece nos dois nomes.

parametros_originais = []
novo_valor = 130

parametros_originais.append(120.0)
parametros_originais.append(150.0)
parametros_originais.append(95.0)
parametros_originais.append(200.0)
parametros_originais.append(110.0)

backup_parametros = parametros_originais.copy()

parametros_originais[0] = novo_valor

print('Original (modificada):', parametros_originais)
print('Backup (preservado):', backup_parametros)
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 07.py
Original (modificada): [130, 150.0, 95.0, 200.0, 110.0]
Backup (preservado): [120.0, 150.0, 95.0, 200.0, 110.0]
```

---

```python
# Dados de entrada
# nominal (Ω): 47.0, 100.0, 220.0, 33.0, 68.0
# resistor em curto: 100.0 Ω → 0.0 Ω


# Saída esperada:
# »
# Nominal     : [47.0, 100.0, 220.0, 33.0, 68.0]
# Simulação   : [47.0, 0.0, 220.0, 33.0, 68.0]
# Req nominal : 468.0 Ω
# Req falha   : 368.0 Ω
# Variação    : 100.0 Ω
# 💡
# Dica: Use lista.index(valor) para localizar a posição do resistor de 100.0 Ω e então use indexação para substituí-lo.

nominal = []

nominal.append(47.0)
nominal.append(100.0)
nominal.append(220.0)
nominal.append(33.0)
nominal.append(68.0)







simulacao = nominal.copy()


simulacao[1] = 0
simulacao[nominal.index(100)] = 0

req_nominal = sum(nominal)
req_falha = sum(simulacao)
variacao = req_nominal - req_falha

print('Nominal:' , nominal)
print('Simulação:' , simulacao)
print('Req nominal:' , req_nominal)
print('Req falha:' , req_falha)
print('Variação:' , variacao)
# Nominal     : [47.0, 100.0, 220.0, 33.0, 68.0]
# Simulação   : [47.0, 0.0, 220.0, 33.0, 68.0]
# Req nominal : 468.0 Ω
# Req falha   : 368.0 Ω
# Variação    : 100.0 Ω
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 08.py
Nominal: [47.0, 100.0, 220.0, 33.0, 68.0]
Simulação: [47.0, 0, 220.0, 33.0, 68.0]
Req nominal: 468.0
Req falha: 368.0
Variação: 100.0
```

---

```python
# Dados de entrada
# tabela atual   : '10.0.0.0/8', '172.16.0.0/12', '192.168.1.0/24',
#                  '203.0.113.0/24', '198.51.100.0/24'
# rota removida  : '203.0.113.0/24'
# rotas inseridas: '10.10.0.0/16'  e  '192.168.100.0/24'
#
# Saída esperada:
# »
# Rotas adicionadas: ['10.10.0.0/16', '192.168.100.0/24']
# Rotas removidas  : ['203.0.113.0/24']
# 💡
# Dica: Para encontrar diferenças entre duas listas, use list comprehension com in: [r for r in nova if r not in antiga].

tabela_atual = []

tabela_atual.append('10.0.0.0/8')
tabela_atual.append('172.16.0.0/12')
tabela_atual.append('192.168.1.0/24')
tabela_atual.append('203.0.113.0/24')
tabela_atual.append('198.51.100.0/24')

rotas_adicionadas = []
rotas_removidas = []

nova_tabela = tabela_atual.copy()

nova_tabela.append('10.10.0.0/16')
rotas_adicionadas.append('10.10.0.0/16')

nova_tabela.append('192.168.100.0/24')
rotas_adicionadas.append('192.168.100.0/24')

nova_tabela.remove('203.0.113.0/24')
rotas_removidas.append('203.0.113.0/24')

print('Tabela:', nova_tabela)
print('Rotas Adicionadas:', rotas_adicionadas)
print('Rotas Removidas:', rotas_removidas)
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 09.py
Tabela: ['10.0.0.0/8', '172.16.0.0/12', '192.168.1.0/24', '198.51.100.0/24', '10.10.0.0/16', '192.168.100.0/24']
Rotas Adicionadas: ['10.10.0.0/16', '192.168.100.0/24']
Rotas Removidas: ['203.0.113.0/24']
```

---

```python
# Dados de entrada
# sensor_A (bar): 3.2, 3.4, 3.1, 3.5
# sensor_B (bar): 4.1, 4.0, 4.3, 3.9
# sensor_C (bar): 2.8, 2.9, 3.0, 2.7

# Saída esperada:
# »
# Total de leituras: 12
# Pressão média    : 3.41 bar
# Pressão máxima   : 4.3 bar
# Pressão mínima   : 2.7 bar
# 💡
# Dica: extend() é diferente de append(): append(lista) insere a lista como um único elemento, criando lista aninhada. extend(lista) insere cada elemento individualmente.

sensor_a = []
sensor_b = []
sensor_c = []

sensor_a.append(3.2)
sensor_a.append(3.4)
sensor_a.append(3.1)
sensor_a.append(3.5)

sensor_b.append(4.1)
sensor_b.append(4.0)
sensor_b.append(4.3)
sensor_b.append(3.9)

sensor_c.append(2.8)
sensor_c.append(2.9)
sensor_c.append(3.0)
sensor_c.append(2.7)

sensores = []
sensores.extend(sensor_a)
sensores.extend(sensor_b)
sensores.extend(sensor_c)

total_de_leituras = len(sensores)
pressao_maxima = max(sensores)
pressao_minima = min(sensores)

soma_dos_elementos = sum(sensores)
media = soma_dos_elementos/total_de_leituras

print('Total de leituras', total_de_leituras, 'bar')
print('Pressão máxima', pressao_maxima, 'bar')
print('Pressão mínima', pressao_minima, 'bar')
print('Pressão média', media, 'bar')
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 10.py
Total de leituras 12 bar
Pressão máxima 4.3 bar
Pressão mínima 2.7 bar
Pressão média 3.408333333333333 bar
```

---

```python
# medidor_1 (Ω): 48.2, 51.0, 49.7, 47.5, 52.3
# medidor_2 (Ω): 50.1, 46.8, 53.0, 49.0, 55.2

medidor_1 = []
medidor_2 = []

medidor_1.append(48.2)
medidor_1.append(51.0)
medidor_1.append(49.7)
medidor_1.append(47.5)
medidor_1.append(52.3)

medidor_2.append(50.1)
medidor_2.append(46.8)
medidor_2.append(53.0)
medidor_2.append(49.0)
medidor_2.append(55.2)

lista = []
lista.extend(medidor_1)
lista.extend(medidor_2)
lista.sort()


total_de_leituras = len(lista)

soma_dos_elementos = sum(lista)
media = soma_dos_elementos/total_de_leituras

print('Lista:', lista)
print('Média:', media)
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 11.py
Lista: [46.8, 47.5, 48.2, 49.0, 49.7, 50.1, 51.0, 52.3, 53.0, 55.2]
Média: 50.28
```

---

```python
# antena_norte (dBm): -85, -90, -105, -78, -92, -110, -88
# antena_sul   (dBm): -95, -88, -102, -79, -85,  -91, -97
# antena_leste (dBm): -80, -75, -108, -93, -86, -103, -82
# limiar de cobertura: -100 dBm

limiar_de_cobertura = -100

antena_norte = []
antena_norte.append(-85)
antena_norte.append(-90)
antena_norte.append(-105)
antena_norte.append(-78)
antena_norte.append(-92)
antena_norte.append(-110)
antena_norte.append(-88)

antena_sul   = []
antena_sul.append(-95)
antena_sul.append(-88)
antena_sul.append(-102)
antena_sul.append(-79)
antena_sul.append(-85)
antena_sul.append(-91)
antena_sul.append(-97)

antena_leste = []
antena_leste.append(-80)
antena_leste.append(-75)
antena_leste.append(-108)
antena_leste.append(-93)
antena_leste.append(-86)
antena_leste.append(-103)
antena_leste.append(-82)

lista = []
lista.extend(antena_norte)
lista.extend(antena_sul)
lista.extend(antena_leste)

em_cobertura = 0


















for amostra in lista:
  if(amostra >= limiar_de_cobertura):
    em_cobertura += 1

print('Total de Amostras:', len(lista))
print('Em cobertura:', em_cobertura)
print('Taxa de Cobertura:', em_cobertura/len(lista)*100, '%')
print('Pior sinal:', min(lista))
print('Média:', sum(lista)/len(lista))
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 12.py
Total de Amostras: 21
Em cobertura: 16
Taxa de Cobertura: 76.19047619047619 %
Pior sinal: -110
Média: -91.04761904761905
```

---

```python
# medições (mm): 50.02, 49.97, 50.06, 49.94, 50.00,
#                50.08, 49.99, 50.01, 49.92, 50.04

medicoes = []
nominal = 50.00
tolerancia = 0.05

medicoes.append(50.02)
medicoes.append(49.97)
medicoes.append(50.06)
medicoes.append(49.94)
medicoes.append(50.00)
medicoes.append(50.08)
medicoes.append(49.99)
medicoes.append(50.01)
medicoes.append(49.92)
medicoes.append(50.04)

aprovadas = []
reprovadas = []

for medicao in medicoes:
  if(abs(medicao - nominal) <= tolerancia):
    aprovadas.append(medicao)
  else:
    reprovadas.append(medicao)

print('Aprovadas:', aprovadas)
print('Reprovadas:', reprovadas)
print('Índice de Aprovação:', len(reprovadas)/len(aprovadas)*100, '%')
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 13.py
Aprovadas: [50.02, 49.97, 50.0, 49.99, 50.01, 50.04]
Reprovadas: [50.06, 49.94, 50.08, 49.92]
Índice de Aprovação: 66.66666666666666 %
```

---

```python
# cenário atual (kW): 15.0, 22.5, 8.0, 40.0, 12.5, 30.0
# novas cargas  (kW): 55.0, 18.0, 75.0

cenario_atual = []
cenario_atual.append(15.0)
cenario_atual.append(22.5)
cenario_atual.append(8.0)
cenario_atual.append(40.0)
cenario_atual.append(12.5)
cenario_atual.append(30.0)

novas_cargas = []
novas_cargas.append(55.0)
novas_cargas.append(18.0)
novas_cargas.append(75.0)

cenario_futuro = []
cenario_futuro.extend(cenario_atual)
cenario_futuro.extend(novas_cargas)

print('Cenário Atual:', cenario_atual)
print('Cenário Futuro:', cenario_futuro)
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 14.py
Cenário Atual: [15.0, 22.5, 8.0, 40.0, 12.5, 30.0]
Cenário Futuro: [15.0, 22.5, 8.0, 40.0, 12.5, 30.0, 55.0, 18.0, 75.0]
```

---

```python
import math

canal_I = []
canal_I.append(0.82)
canal_I.append(0.79)
canal_I.append(0.85)
canal_I.append(5.20)
canal_I.append(0.81)
canal_I.append(0.78)
canal_I.append(0.83)

canal_Q = []
canal_Q.append(0.41)
canal_Q.append(0.39)
canal_Q.append(0.43)
canal_Q.append(0.40)
canal_Q.append(-4.80)
canal_Q.append(0.42)
canal_Q.append(0.38)

sinal = canal_I.copy()
sinal.extend(canal_Q)

sinal_backup = sinal.copy()

media = sum(sinal) / len(sinal)

soma_quadrados = sum((x - media) ** 2 for x in sinal)
desvio_padrao = math.sqrt(soma_quadrados / len(sinal))

limite_inferior = media - 3 * desvio_padrao
limite_superior = media + 3 * desvio_padrao

ruidos = []
for x in sinal:
    if x < limite_inferior or x > limite_superior:
        ruidos.append(x)

for r in ruidos:
    sinal.remove(r)

print('Sinal bruto  (', len(sinal_backup), 'amostras ):', sinal_backup)
print('Ruídos removidos: ', ruidos)
print('Sinal limpo', len(sinal), 'amostras):', sinal)
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python 15.py
Sinal bruto  ( 14 amostras ): [0.82, 0.79, 0.85, 5.2, 0.81, 0.78, 0.83, 0.41, 0.39, 0.43, 0.4, -4.8, 0.42, 0.38]
Ruídos removidos:  []
Sinal limpo 14 amostras): [0.82, 0.79, 0.85, 5.2, 0.81, 0.78, 0.83, 0.41, 0.39, 0.43, 0.4, -4.8, 0.42, 0.38]
```
