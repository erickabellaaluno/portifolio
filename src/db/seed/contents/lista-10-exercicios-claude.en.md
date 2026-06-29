Each student must choose and solve at least 10 exercises from the booklet "INTRODUCTION TO ALGORITHMS with Python, by Claude.ai", which was created during class. The exercises must be solved in Python.

INTRODUCTION TO ALGORITHMS with Python, by Claude.ai

https://docs.google.com/document/d/1IsiVnfH7Tz2_i7a8ll3HkS4iiUKPUnIA/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true

As I mentioned in class, note that Claude.ai removed diacritics, which is common when working with programming, to avoid other problems. We can ask it to restore accents in the textual parts without changing the code examples.

Deliverables:
(a) List of at least 10 exercises
(b) Complete solution for each exercise

The material may be submitted in PY (Python), TXT, PDF or PNG format. If the exercises are solved by hand, clear photos are sufficient.

## Executions

1. Unit 1 — First Steps: Variables and Data Types | Exercise 1

Declare variables to store: the resistance of a resistor (47 Ohms), the number of wires in a cable (12), the project name ("North Substation"), and whether the system is energized (`True`). Display each variable using `print()`.

```python
resistencia_do_resistor = 47
fios_no_cabo = 12
nome_do_projeto = "Subestação Norte"
sistema_energizado = True

print(f"Resistência do Resistor: {resistencia_do_resistor}")
print(f"Fios no Cabo: {fios_no_cabo}")
print(f'Nome do Projeto: "{nome_do_projeto}"')
print(f"Sistema Energizado: {sistema_energizado}")
```

```bash
Coding on  master via Python v3.14.6 
❯ python 1.py
Resistência do Resistor: 47
Fios no Cabo: 12
Nome do Projeto: "Subestação Norte"
Sistema Energizado: True
```

---

2. Unit 1 — First Steps: Variables and Data Types | Exercise 2

An electric motor consumes 3500 W of active power. Calculate and display: the current drawn (`I = P / V`, with `V = 220 V`) and the motor's equivalent resistance (`R = V / I`).

```python
tensao = 220
potencia_ativa = 3500

corrente = potencia_ativa / tensao
resistencia_equivalente = tensao / potencia_ativa

print(f"Potência Ativa do Motor: {potencia_ativa} W")
print(f"Tensão do Motor: {tensao} V")
print("-" * 40)
print(f"Corrente do Motor: {corrente} A")
print(f"Resistência Equivalente: {resistencia_equivalente} Ω")
```

```bash
Coding on  master via Python v3.14.6 
❯ python 2.py
Potência Ativa do Motor: 3500 W
Tensão do Motor: 220 V
----------------------------------------
Corrente do Motor: 15.909090909090908 A
Resistência Equivalente: 0.06285714285714286 Ω
```

---

3. Unit 1 — First Steps: Variables and Data Types | Exercise 12

The voltage across a voltage divider is given by `Vout = Vin * R2 / (R1 + R2)`. With `Vin = 12.0 V`, `R1 = 10000`, and `R2 = 4700`, calculate `Vout`.

```python
vin = 12.0
r1 = 10000
r2 = 4700

Vout = Vin * r2 / (r1 + r2)

print(f"Tensão de Entrada (Vin): {Vin} V")
print(f"Resistor R1: {r1} Ω")
print(f"Resistor R2: {r2} Ω")
print("-" * 40)
print(f"Tensão de Saída (Vout): {Vout} V")
```

```bash
Coding on  master via Python v3.14.6 
❯ python code.py
Tensão de Entrada (Vin): 12.0 V
Resistor R1: 10000 Ω
Resistor R2: 4700 Ω
----------------------------------------
Tensão de Saída (Vout): 3.836734693877551 V
```

---

4. Unit 2 — Input and Output | Exercise 1

Write a program that reads the name of an engineer, the company where they work, and their graduation year, then displays a formatted introduction.

```python
nome = input("Nome do Engenheiro: ")
empresa = input("Empresa onde Trabalha: ")
ano_de_formatura = int(input("Ano de Formatura: "))

print("=== Resultados ===")
print(f"O engenheiro {nome}, formado em {ano_de_formatura}, trabalha na empresa {empresa}")
```

```bash
Coding on  master via Python v3.14.6 
❯ python code.py
Nome do Engenheiro: Erick
Empresa onde Trabalha: Abella Bilhalba Engenharia
Ano de Formatura: 2031
=== Resultados ===
O engenheiro Erick, formado em 2031, trabalha na empresa Abella Bilhalba Engenharia
```

---

5. Unit 2 — Input and Output | Exercise 9

A transformer has 500 turns on the primary winding and 50 turns on the secondary winding. Read the primary voltage and calculate the secondary voltage using the transformer turns ratio.

```python
espirasNoPrimario = 500
espirasNoSecundario = 50

print(f"Espiras no Primário: {espirasNoPrimario}")
print(f"Espiras no Secundário: {espirasNoSecundario}")

tensaoNoPrimario = int(input("Tensão no Primário: "))

tensaoNoSecundario = tensaoNoPrimario / 10

print(f"Tensão no Secundário: {tensaoNoSecundario}")
```

```bash
Coding on  master via Python v3.14.6 took 6s 
❯ python code.py
Espiras no Primário: 500
Espiras no Secundário: 50
Tensão no Primário: 110
Tensão no Secundário: 11.0
```

---

6. Unit 2 — Input and Output | Exercise 12

Generate an electricity consumption report: read the installation number, the energy consumption in kWh, and the rate per kWh. Display the installation number, consumption, rate, and amount due, aligned.

```python
# Trocado o "Número do Cliente" por "Código de Instalação", para uma apreensão mais correta no contexto de contas de luz.
codigoDaInstalação = int(input("Código da Instalação: "))
consumoEmKwh = float(input("Consumo em kWh: "))
tarifaPorKwh = float(input("Tarifa por kWh: "))

print("=== Resultados ===")

valorAPagar = round(consumoEmKwh*tarifaPorKwh, 2)

print(f"Código da Instalação: {codigoDaInstalação}")
print(f"Consumo: {consumoEmKwh} kWh")
print(f"Tarifa: R$ {tarifaPorKwh} / kWh")
print(f"Valor a Pagar: R$ {valorAPagar}")
```

```bash
Coding on  master via Python v3.14.6 took 10s 
❯ python code.py
Código da Instalação: 1234
Consumo em kWh: 100
Tarifa por kWh: 1.1
=== Resultados ===
Código da Instalação: 1234
Consumo: 100.0 kWh
Tarifa: R$ 1.1 / kWh
Valor a Pagar: R$ 110.0
```

---

7. Unit 3 — Conditional Structures | Exercise 1

Read the current of a circuit and the fuse rating (both in amperes). If the current is greater than 90% of the fuse rating, display `"Warning"`. If it exceeds the fuse rating, display `"Fuse Blown"`. Otherwise, display `"Normal"`.

```python
correnteDoCircuito = int(input("Corrente do Circuito em Amperes: "))
valorDoFusivel = int(input("Valor do Fusível: "))

if (correnteDoCircuito > (valorDoFusivel * 0.9) and correnteDoCircuito < valorDoFusivel):
  print("Alerta")
elif (correnteDoCircuito > valorDoFusivel):
  print("Fusível Queimado")
else:
  print("Normal")
```

```bash
Coding on  master via Python v3.14.6 took 7s 
❯ python code.py
Corrente do Circuito em Amperes: 63
Valor do Fusível: 50
Fusível Queimado
```

---

8. Unit 3 — Conditional Structures | Exercise 11

Given two resistors, `R1` and `R2`, read the configuration (`"series"` or `"parallel"`) and calculate the equivalent resistance. For series: `Req = R1 + R2`. For parallel: `Req = R1*R2/(R1+R2)`.

```python
resistor1 = int(input("Resistor 1: "))
resistor2 = int(input("Resistor 2: "))
emSerie = True if input("Configuração do Circuito: ") == "Série" else False

if(emSerie):
  print(f"Resistência em Série: {resistor1 + resistor2}")
else:
  print(f"Resistência em Paralelo: {(resistor1*resistor2)/(resistor1+resistor2)}")
```

```bash
Coding on  master via Python v3.14.6 took 11s 
❯ python code.py
Resistor 1: 10
Resistor 2: 20
Configuração do Circuito: Série
Resistência em Série: 30
```

---

9. Unit 4 — Loops | Exercise 4

Read `N` resistance values and calculate: the sum (series equivalent), the parallel equivalent (`1/Req = Σ(1/Ri)`), and the average. Display all three results.

```python
numeroDeResistencias = int(input("Número de Resistências: "))

soma = 0
soma_inversos = 0

for i in range(1, numeroDeResistencias + 1):
  r = int(input(f"Resistência {i}: "))

  soma += r
  soma_inversos += 1 / r

print(f"Resistência Equivalente em Série: {soma}")
print(f"Resistência Equivalente em Paralelo: {1 / soma_inversos}")
print(f"Média: {soma / numeroDeResistencias}")
```

```bash

Coding on  master via Python v3.14.6 
❯ python code.py
Número de Resistências: 3
Resistência 1: 13
Resistência 2: 15
Resistência 3: 14
Resistência Equivalente em Série: 42
Resistência Equivalente em Paralelo: 4.65076660988075
Média: 14.0
```

---

10. Unit 4 — Loops | Exercise 11

Generate an electricity consumption report: read the daily energy consumption (kWh) for 7 days using a `for` loop. At the end, display the total consumption, daily average, day with the highest consumption, and total cost (R$0.90/kWh).

```python
maiorConsumo = 0
consumoTotal = 0
diaDeMaiorConsumo = 0
tarifa = 0.9

for i in range(1, 7 + 1):
  consumoAtual = float(input(f"Consumo do dia {i} em kWh: "))
  consumoTotal +=consumoAtual

  if(consumoAtual > maiorConsumo):
    maiorConsumo = consumoAtual
    diaDeMaiorConsumo = i

print(f"Consumo Total: {consumoTotal} kWh")
print(f"Média Diária: {consumoTotal / 7}")
print(f"Dia de Maior Consumo: {diaDeMaiorConsumo} ({maiorConsumo} kWh)")
print(f"Custo Total: R$ {consumoTotal*tarifa}")
```

```bash
Coding on  master via Python v3.14.6 took 6s 
❯ python code.py
Consumo do dia 1 em kWh: 5
Consumo do dia 2 em kWh: 6
Consumo do dia 3 em kWh: 3
Consumo do dia 4 em kWh: 4
Consumo do dia 5 em kWh: 8
Consumo do dia 6 em kWh: 6
Consumo do dia 7 em kWh: 4
Consumo Total: 36.0 kWh
Média Diária: 5.142857142857143
Dia de Maior Consumo: 5 (8.0 kWh)
Custo Total: R$ 32.4
```
