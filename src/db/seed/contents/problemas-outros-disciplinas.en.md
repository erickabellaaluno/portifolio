As discussed in the previous class, each student must select a problem from another course in the current semester and develop its algorithmic resolution using at least three distinct approaches.

Deliverables:

(a) clear description of the chosen problem;

(b) algorithmic resolution of the problem in the student's own wording, i.e., a detailed description written by the student explaining step-by-step the logic of the proposed solution (on paper or in a text document);

(c) three distinct implementations of the solution using Python with support from LLMs.

### Industrial Electrical Panel Inspection: Is It Compliant with NR-12?

> Course: `Introduction to Electrical Engineering`

The program performs inspections on an industrial electrical panel to determine whether it complies with **NR-12**, based on the following requirements:

* Grounding (NR-12: 12.3.3)
* Emergency stop button (NR-12: 12.6.3.4)
* Mandatory safety signage (NR-12: 12.6.3.4)
* Extra-low-voltage control circuit (NR-12: 12.4.13.b)

If the panel complies with all the requirements, the program will report that the person who built the panel is an **industrial electrician**.

If the panel **does not** comply with the requirements, the program will report that the person who built the panel is a **pica-fio**, a colloquial Brazilian term used to describe someone who performs poor-quality or unsafe electrical work.

The program must display **all** points of non-compliance with the standard.

## Version 01

```python
# Disciplina: Introdução à Engenharia Elétrica
# Problema: Verificar se a um painel elétrico industrial está de acordo com as normas, em específico, a NR-12, com os requisitos: Aterramento, Parada de Emergência, Comando em Extra-Baixa Tensão.
# Resolução: 1
import click

nomeQuadro = click.prompt('Nome do Quadro Elétrico')

possuiAterramento = click.confirm('Possui Aterramento?')
botaoDeEmergencia = click.confirm('Possui Botão de Emergência?')
sinalizacaoObrigatoria = click.confirm('Possui Sinalização Obrigatória?')
comandoVCA = click.prompt('Tensão do Comando (VCA)', type=int, default=0)
comandoVCC = click.prompt('Tensão do Comando (VCC)', type=int, default=0)

aprovado = True

click.echo(click.style("RESULTADOS:", bold=True))

if not possuiAterramento:
    aprovado = False
    click.echo(f"O quadro {nomeQuadro} NÃO possui aterramento. NR12: 12.3.3.")
if not botaoDeEmergencia:
    aprovado = False
    click.echo(f"O quadro {nomeQuadro} NÃO possui botão de emergência. NR12: 1.2.6.3.4.")
if not sinalizacaoObrigatoria:
    aprovado = False
    click.echo(f"O quadro {nomeQuadro} NÃO possui botão de emergência. NR12: 1.2.6.3.4.")
if comandoVCA >= 25 or comandoVCC >= 60:
    aprovado = False
    click.echo(f"O quadro {nomeQuadro} NÃO possui comando em extra-baixa tensão. NR12: 12.4.13.b")


if aprovado:
    click.echo('O cara q fez esse quadro é um Industrialista 😎')
else:
    click.echo('O cara q fez esse quadro é um pica fio 🤮')
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python v1.py 
Nome do Quadro Elétrico: Sistema de Controle Automático do Triturador Granulador Polimérico
Possui Aterramento? [y/N]: y
Possui Botão de Emergência? [y/N]: N
Possui Sinalização Obrigatória? [y/N]: N
Tensão do Comando (VCA) [0]: 220
Tensão do Comando (VCC) [0]: 
RESULTADOS:
O quadro Sistema de Controle Automático do Triturador Granulador Polimérico NÃO possui botão de emergência. NR12: 1.2.6.3.4.
O quadro Sistema de Controle Automático do Triturador Granulador Polimérico NÃO possui botão de emergência. NR12: 1.2.6.3.4.
O quadro Sistema de Controle Automático do Triturador Granulador Polimérico NÃO possui comando em extra-baixa tensão. NR12: 12.4.13.b
O cara q fez esse quadro é um pica fio 🤮
```

## Version 02

```python
# Disciplina: Introdução à Engenharia Elétrica
# Problema: Verificar se a um painel elétrico industrial está de acordo com as normas, em específico, a NR-12, com os requisitos: Aterramento, Parada de Emergência, Comando em Extra-Baixa Tensão.
# Resolução: 2

def perguntar_sim_nao(pergunta):
    resposta = input(pergunta + " (s/n): ").strip().lower()

    while resposta not in ["s", "n"]:
        print("Resposta inválida. Digite apenas 's' para sim ou 'n' para não.")
        resposta = input(pergunta + " (s/n): ").strip().lower()

    return resposta == "s"


nome_quadro = input("Nome do Quadro Elétrico: ")

possui_aterramento = perguntar_sim_nao("Possui Aterramento?")
botao_emergencia = perguntar_sim_nao("Possui Botão de Emergência?")
sinalizacao_obrigatoria = perguntar_sim_nao("Possui Sinalização Obrigatória?")

comando_vca = int(input("Tensão do Comando (VCA): "))
comando_vcc = int(input("Tensão do Comando (VCC): "))

aprovado = True

print("\nRESULTADOS:\n")

if not possui_aterramento:
    aprovado = False
    print(f"O quadro {nome_quadro} NÃO possui aterramento. NR12: 12.3.3.")

if not botao_emergencia:
    aprovado = False
    print(f"O quadro {nome_quadro} NÃO possui botão de emergência. NR12: 1.2.6.3.4.")

if not sinalizacao_obrigatoria:
    aprovado = False
    print(f"O quadro {nome_quadro} NÃO possui sinalização obrigatória. NR12: 1.2.6.3.4.")

if comando_vca >= 25 or comando_vcc >= 60:
    aprovado = False
    print(f"O quadro {nome_quadro} NÃO possui comando em extra-baixa tensão. NR12: 12.4.13.b")

if aprovado:
    print("O cara q fez esse quadro é um Industrialista 😎")
else:
    print("O cara q fez esse quadro é um pica fio 🤮")
```

```bash
Trabalho on  master via Python v3.14.6 took 42s 
❯ python v2.py 
Nome do Quadro Elétrico: Sistema de Acionamento de Sistemas de Pressurização
Possui Aterramento? (s/n): s
Possui Botão de Emergência? (s/n): s
Possui Sinalização Obrigatória? (s/n): n
Tensão do Comando (VCA): 0
Tensão do Comando (VCC): 24

RESULTADOS:

O quadro Sistema de Acionamento de Sistemas de Pressurização NÃO possui sinalização obrigatória. NR12: 1.2.6.3.4.
O cara q fez esse quadro é um pica fio 🤮
```

## Version 03

```python
# Disciplina: Introdução à Engenharia Elétrica
# Problema: Verificar se a um painel elétrico industrial está de acordo com as normas, em específico, a NR-12, com os requisitos: Aterramento, Parada de Emergência, Comando em Extra-Baixa Tensão.
# Resolução: 3

def verificar_extra_baixa_tensao(vca, vcc):
    return vca < 25 and vcc < 60


def mostrar_resultados(nome, erros):
    print("\nRESULTADOS:\n")

    if len(erros) == 0:
        print("O cara q fez esse quadro é um Industrialista 😎")
    else:
        for erro in erros:
            print(erro)

        print("O cara q fez esse quadro é um pica fio 🤮")


nome_quadro = input("Nome do Quadro Elétrico: ")

aterramento = input("Possui Aterramento? (s/n): ").lower()
emergencia = input("Possui Botão de Emergência? (s/n): ").lower()
sinalizacao = input("Possui Sinalização Obrigatória? (s/n): ").lower()

comando_vca = int(input("Tensão do Comando (VCA): "))
comando_vcc = int(input("Tensão do Comando (VCC): "))

erros = []

if aterramento == "n":
    erros.append(
        f"O quadro {nome_quadro} NÃO possui aterramento. NR12: 12.3.3."
    )

if emergencia == "n":
    erros.append(
        f"O quadro {nome_quadro} NÃO possui botão de emergência. NR12: 1.2.6.3.4."
    )

if sinalizacao == "n":
    erros.append(
        f"O quadro {nome_quadro} NÃO possui sinalização obrigatória. NR12: 1.2.6.3.4."
    )

if not verificar_extra_baixa_tensao(comando_vca, comando_vcc):
    erros.append(
        f"O quadro {nome_quadro} NÃO possui comando em extra-baixa tensão. NR12: 12.4.13.b"
    )

mostrar_resultados(nome_quadro, erros)
```

```bash
Trabalho on  master via Python v3.14.6 took 15s 
❯ python v3.py 
Nome do Quadro Elétrico: Sistema Elétrico Embarcado de Caminhão Plataforma Suporte de Drones Agrícola
Possui Aterramento? (s/n): s
Possui Botão de Emergência? (s/n): s
Possui Sinalização Obrigatória? (s/n): s
Tensão do Comando (VCA): 0
Tensão do Comando (VCC): 12

RESULTADOS:

O cara q fez esse quadro é um Industrialista 😎
```
