Repeat what we did together in Exercise 2 for Exercise 3. Submit the different versions of the generated python code.
*Exercise 3 — Delivery Truck Route Optimization (Production Engineering)*

A shipping company has a list of coordinates `[(x, y), ...]` representing delivery points on a Cartesian map (in km), all starting from the origin (0, 0). The truck consumes 0.35 L/km of diesel and has a maximum tank capacity of 80 L.

Implement: (a) a function that calculates the total distance traveled following the original order of the list (going through the sequence and returning to the origin); (b) a function that applies the "nearest neighbor" algorithm — starting from the origin, always going to the closest unvisited point — and returns the new order and the total distance; (c) compare the fuel consumption of the two routes; (d) check whether the truck needs to refuel during the optimized route, considering that it starts with a full tank.

## Solutions

### Version 01

```python
## Versão 1: Apenas escrevia no terminal

"""
Exercício 3 — Otimização de Rota de Caminhão de Entrega (Engenharia de Produção)
"""

import math


# ─── Constantes ──────────────────────────────────────────────────────────────

CONSUMO_L_POR_KM = 0.35   # litros de diesel por km
CAPACIDADE_TANQUE = 80.0   # litros


# ─── Funções auxiliares ───────────────────────────────────────────────────────

def distancia(p1: tuple, p2: tuple) -> float:
    """Distância euclidiana entre dois pontos."""
    return math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2)


def distancia_total(rota: list) -> float:
    """
    Calcula a distância total de uma rota que começa e termina na origem.

    Args:
        rota: lista de pontos (x, y); NÃO inclui a origem no início/fim.

    Returns:
        Distância total percorrida em km.
    """
    origem = (0, 0)
    pontos = [origem] + list(rota) + [origem]
    total = 0.0
    for i in range(len(pontos) - 1):
        total += distancia(pontos[i], pontos[i + 1])
    return total


# ─── (a) Rota original ────────────────────────────────────────────────────────

def rota_original(pontos: list) -> tuple[list, float]:
    """
    Percorre os pontos de entrega na ordem original e retorna à origem.

    Returns:
        (ordem_visitada, distancia_total_km)
    """
    dist = distancia_total(pontos)
    return list(pontos), dist


# ─── (b) Algoritmo do vizinho mais próximo ────────────────────────────────────

def vizinho_mais_proximo(pontos: list) -> tuple[list, float]:
    """
    Constrói uma rota pelo algoritmo Nearest Neighbour:
    a partir da origem, sempre vai ao ponto não visitado mais próximo.

    Returns:
        (nova_ordem, distancia_total_km)
    """
    nao_visitados = list(pontos)
    atual = (0, 0)
    rota_otimizada = []

    while nao_visitados:
        mais_proximo = min(nao_visitados, key=lambda p: distancia(atual, p))
        rota_otimizada.append(mais_proximo)
        nao_visitados.remove(mais_proximo)
        atual = mais_proximo

    dist = distancia_total(rota_otimizada)
    return rota_otimizada, dist


# ─── (c) Comparação de consumo ────────────────────────────────────────────────

def comparar_consumo(dist_original: float, dist_otimizada: float) -> dict:
    """
    Compara o consumo de combustível das duas rotas.

    Returns:
        Dicionário com consumos e economia.
    """
    consumo_original  = dist_original  * CONSUMO_L_POR_KM
    consumo_otimizado = dist_otimizada * CONSUMO_L_POR_KM
    economia_litros   = consumo_original - consumo_otimizado
    economia_pct      = (economia_litros / consumo_original * 100) if consumo_original else 0

    return {
        "consumo_original_L":  round(consumo_original,  2),
        "consumo_otimizado_L": round(consumo_otimizado, 2),
        "economia_L":          round(economia_litros,   2),
        "economia_pct":        round(economia_pct,      2),
    }


# ─── (d) Necessidade de reabastecimento ──────────────────────────────────────

def verificar_reabastecimento(rota_otimizada: list) -> dict:
    """
    Simula o trajeto com tanque cheio e identifica onde (se) o combustível
    se esgota antes do término da rota.

    Returns:
        Dicionário com 'precisa_reabastecer' (bool), litros restantes ao final,
        e, se necessário, o trecho crítico onde o tanque fica vazio.
    """
    pontos = [(0, 0)] + list(rota_otimizada) + [(0, 0)]
    combustivel = CAPACIDADE_TANQUE
    trecho_critico = None

    for i in range(len(pontos) - 1):
        d = distancia(pontos[i], pontos[i + 1])
        gasto = d * CONSUMO_L_POR_KM
        combustivel -= gasto

        if combustivel < 0 and trecho_critico is None:
            trecho_critico = {
                "de":    pontos[i],
                "para":  pontos[i + 1],
                "falta": round(abs(combustivel), 2),
            }

    return {
        "precisa_reabastecer": combustivel < 0,
        "combustivel_restante_L": round(max(combustivel, 0), 2),
        "trecho_critico": trecho_critico,
    }


# ─── Execução / demonstração ─────────────────────────────────────────────────

if __name__ == "__main__":

    # Pontos de entrega (em km a partir da origem)
    pontos_de_entrega = [
        (2, 4), (5, 1), (8, 7), (1, 9),
        (6, 3), (3, 7), (9, 2), (4, 5),
        (7, 8), (2, 6),
    ]

    SEP = "=" * 55

    print(SEP)
    print("  OTIMIZAÇÃO DE ROTA — CAMINHÃO DE ENTREGA")
    print(SEP)

    # ── (a) Rota original ────────────────────────────────────
    ordem_orig, dist_orig = rota_original(pontos_de_entrega)
    print("\n(a) ROTA ORIGINAL")
    print(f"    Sequência : Origem → " +
          " → ".join(str(p) for p in ordem_orig) + " → Origem")
    print(f"    Distância total : {dist_orig:.2f} km")

    # ── (b) Rota otimizada ───────────────────────────────────
    ordem_otim, dist_otim = vizinho_mais_proximo(pontos_de_entrega)
    print("\n(b) ROTA OTIMIZADA (Vizinho Mais Próximo)")
    print(f"    Sequência : Origem → " +
          " → ".join(str(p) for p in ordem_otim) + " → Origem")
    print(f"    Distância total : {dist_otim:.2f} km")

    # ── (c) Comparação de consumo ────────────────────────────
    consumo = comparar_consumo(dist_orig, dist_otim)
    print("\n(c) COMPARAÇÃO DE CONSUMO (0,35 L/km)")
    print(f"    Consumo original   : {consumo['consumo_original_L']} L")
    print(f"    Consumo otimizado  : {consumo['consumo_otimizado_L']} L")
    print(f"    Economia           : {consumo['economia_L']} L  "
          f"({consumo['economia_pct']}%)")

    # ── (d) Reabastecimento ──────────────────────────────────
    reab = verificar_reabastecimento(ordem_otim)
    print(f"\n(d) REABASTECIMENTO (tanque cheio = {CAPACIDADE_TANQUE} L)")
    if reab["precisa_reabastecer"]:
        tc = reab["trecho_critico"]
        print(f"    ⚠️  O caminhão PRECISA reabastecer!")
        print(f"    Trecho crítico : {tc['de']} → {tc['para']}")
        print(f"    Combustível em falta : {tc['falta']} L")
    else:
        print(f"    ✅ Sem necessidade de reabastecimento.")
        print(f"    Combustível restante ao final : "
              f"{reab['combustivel_restante_L']} L")

    print(f"\n{SEP}\n")
```

```bash
Trabalho on  master via Python v3.14.6 
❯ python v1.py 
=======================================================
  OTIMIZAÇÃO DE ROTA — CAMINHÃO DE ENTREGA
=======================================================

(a) ROTA ORIGINAL
    Sequência : Origem → (2, 4) → (5, 1) → (8, 7) → (1, 9) → (6, 3) → (3, 7) → (9, 2) → (4, 5) → (7, 8) → (2, 6) → Origem
    Distância total : 65.11 km

(b) ROTA OTIMIZADA (Vizinho Mais Próximo)
    Sequência : Origem → (2, 4) → (2, 6) → (3, 7) → (4, 5) → (6, 3) → (5, 1) → (9, 2) → (8, 7) → (7, 8) → (1, 9) → Origem
    Distância total : 40.96 km

(c) COMPARAÇÃO DE CONSUMO (0,35 L/km)
    Consumo original   : 22.79 L
    Consumo otimizado  : 14.34 L
    Economia           : 8.45 L  (37.09%)

(d) REABASTECIMENTO (tanque cheio = 80.0 L)
    ✅ Sem necessidade de reabastecimento.
    Combustível restante ao final : 65.66 L

=======================================================
```

### Version 02

```python
## Versão 2: Escrever em Arquivos CSV e gerar gráficos em imagens
## Pacotes necessários: matplotlib pillow numpy
## (pip install matplotlib pillow numpy)

"""
Exercício 3 — Otimização de Rota de Caminhão de Entrega
CSV + Visualização com emojis via Matplotlib + PIL
"""

import math
import csv
import io
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib.patheffects as pe
from matplotlib.colors import LinearSegmentedColormap
from PIL import Image, ImageFont, ImageDraw

# ─── Constantes ───────────────────────────────────────────────────────────────

CONSUMO_L_POR_KM   = 0.35
CAPACIDADE_TANQUE  = 80.0
EMOJI_FONT         = "/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf"

PONTOS_DE_ENTREGA = [
    (2, 4), (5, 1), (8, 7), (1, 9),
    (6, 3), (3, 7), (9, 2), (4, 5),
    (7, 8), (2, 6),
]

# ─── Lógica de rota ───────────────────────────────────────────────────────────

def distancia(p1, p2):
    return math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)

def distancia_total(rota):
    pontos = [(0, 0)] + list(rota) + [(0, 0)]
    return sum(distancia(pontos[i], pontos[i+1]) for i in range(len(pontos)-1))

def rota_original(pontos):
    return list(pontos), distancia_total(pontos)

def vizinho_mais_proximo(pontos):
    nao_visitados = list(pontos)
    atual = (0, 0)
    rota = []
    while nao_visitados:
        prox = min(nao_visitados, key=lambda p: distancia(atual, p))
        rota.append(prox)
        nao_visitados.remove(prox)
        atual = prox
    return rota, distancia_total(rota)

def comparar_consumo(dist_orig, dist_otim):
    co = round(dist_orig  * CONSUMO_L_POR_KM, 2)
    oo = round(dist_otim  * CONSUMO_L_POR_KM, 2)
    ec = round(co - oo, 2)
    return {"consumo_original_L": co, "consumo_otimizado_L": oo,
            "economia_L": ec, "economia_pct": round(ec/co*100, 2)}

def verificar_reabastecimento(rota_otim):
    pontos = [(0, 0)] + list(rota_otim) + [(0, 0)]
    combustivel = CAPACIDADE_TANQUE
    trecho_critico = None
    for i in range(len(pontos)-1):
        combustivel -= distancia(pontos[i], pontos[i+1]) * CONSUMO_L_POR_KM
        if combustivel < 0 and trecho_critico is None:
            trecho_critico = {"de": pontos[i], "para": pontos[i+1],
                              "falta": round(abs(combustivel), 2)}
    return {"precisa_reabastecer": combustivel < 0,
            "combustivel_restante_L": round(max(combustivel, 0), 2),
            "trecho_critico": trecho_critico}

# ─── (1) Exportação CSV ───────────────────────────────────────────────────────

def exportar_csv(ordem_orig, dist_orig,
                 ordem_otim, dist_otim,
                 consumo, reab,
                 path_rotas="rotas.csv",
                 path_resumo="resumo_consumo.csv"):

    # — rotas.csv —
    with open(path_rotas, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)

        origem = (0, 0)
        for tipo, rota in [("original", ordem_orig), ("otimizada", ordem_otim)]:
            pontos = [origem] + list(rota) + [origem]
            acum = 0.0
            for i, p in enumerate(pontos):
                if i > 0:
                    acum += distancia(pontos[i-1], p)
                w.writerow([tipo, i, p[0], p[1], round(acum, 3)])

    # — resumo_consumo.csv —
    with open(path_resumo, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["metrica", "valor", "unidade"])
        w.writerow(["distancia_original",         round(dist_orig, 2),              "km"])
        w.writerow(["distancia_otimizada",         round(dist_otim, 2),              "km"])
        w.writerow(["consumo_original",            consumo["consumo_original_L"],    "L"])
        w.writerow(["consumo_otimizado",           consumo["consumo_otimizado_L"],   "L"])
        w.writerow(["economia_combustivel",        consumo["economia_L"],            "L"])
        w.writerow(["economia_percentual",         consumo["economia_pct"],          "%"])
        w.writerow(["capacidade_tanque",           CAPACIDADE_TANQUE,               "L"])
        w.writerow(["combustivel_restante_otimiz", reab["combustivel_restante_L"],   "L"])
        w.writerow(["precisa_reabastecer",         reab["precisa_reabastecer"],      "bool"])

    print(f"  ✅ CSVs salvos: '{path_rotas}' e '{path_resumo}'")

# ─── (2) Visualização ─────────────────────────────────────────────────────────

def _arrow_route(ax, pontos_full, color, lw=2.2, alpha=0.85):
    """Desenha a rota com setas ao longo de cada segmento."""
    for i in range(len(pontos_full)-1):
        x0, y0 = pontos_full[i]
        x1, y1 = pontos_full[i+1]
        ax.annotate(
            "", xy=(x1, y1), xytext=(x0, y0),
            arrowprops=dict(
                arrowstyle="-|>",
                color=color,
                lw=lw,
                alpha=alpha,
                mutation_scale=14,
                connectionstyle="arc3,rad=0.05",
            )
        )


def _paste_emoji(fig, ax, emoji_char, xy_data, size_pt=28):
    """
    Renderiza um emoji colorido (NotoColorEmoji) e cola na figura via
    AnnotationBbox, centralizado nas coordenadas de dados xy_data.
    """
    from matplotlib.offsetbox import AnnotationBbox, OffsetImage

    font_size_px = int(size_pt * 137 / 72)   # aprox. 109 px para 72 pt
    font_size_px = max(font_size_px, 109)     # mínimo exigido pelo NotoColorEmoji

    font = ImageFont.truetype(EMOJI_FONT, font_size_px)
    # bounding box real do glyph
    bbox = font.getbbox(emoji_char)
    w = bbox[2] - bbox[0] + 4
    h = bbox[3] - bbox[1] + 4

    img_pil = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw    = ImageDraw.Draw(img_pil)
    draw.text((-bbox[0] + 2, -bbox[1] + 2), emoji_char,
              font=font, embedded_color=True)

    # reduz para o tamanho desejado em pontos → pixels de tela
    target_px = int(size_pt * fig.dpi / 72)
    img_pil = img_pil.resize((target_px, target_px), Image.LANCZOS)

    oi = OffsetImage(np.array(img_pil), zoom=1.0)
    ab = AnnotationBbox(oi, xy_data, frameon=False, zorder=10)
    ax.add_artist(ab)


def gerar_imagem(ordem_orig, dist_orig,
                 ordem_otim, dist_otim,
                 consumo, reab,
                 path_out="rotas_caminhao.png"):

    ORIGIN = (0, 0)

    # paleta
    BG       = "#0f1117"
    ORIG_CLR = "#ff6b6b"
    OTIM_CLR = "#51cf66"
    NODE_CLR = "#ffd43b"
    ORIG_DOT = "#74c0fc"
    GRID_CLR = "#1e2030"
    TEXT_CLR = "#e9ecef"

    fig, axes = plt.subplots(1, 2, figsize=(18, 9),
                             facecolor=BG,
                             gridspec_kw={"wspace": 0.06})

    titles     = ["Rota Original",  "Rota Otimizada  (Vizinho Mais Proximo)"]
    rotas      = [ordem_orig,           ordem_otim]
    cores      = [ORIG_CLR,             OTIM_CLR]
    distancias = [dist_orig,            dist_otim]

    for ax, title, rota, cor, dist in zip(axes, titles, rotas, cores, distancias):
        ax.set_facecolor(BG)

        # grid sutil
        ax.set_xlim(-1, 11); ax.set_ylim(-1.5, 11)
        for v in range(0, 11):
            ax.axvline(v, color=GRID_CLR, lw=0.6, zorder=0)
            ax.axhline(v, color=GRID_CLR, lw=0.6, zorder=0)

        pontos_full = [ORIGIN] + list(rota) + [ORIGIN]
        _arrow_route(ax, pontos_full, cor, lw=2.0)

        # nós de entrega
        for idx, (px, py) in enumerate(rota):
            ax.scatter(px, py, s=160, color=NODE_CLR,
                       edgecolors="#333", linewidths=0.8, zorder=6)
            ax.text(px + 0.18, py + 0.22, str(idx+1),
                    fontsize=7.5, color="#111", fontweight="bold", zorder=7)

        # origem
        ax.scatter(*ORIGIN, s=220, color=ORIG_DOT,
                   edgecolors="white", linewidths=1.2, zorder=7, marker="*")

        # números de ordem sobre os segmentos
        for i in range(len(pontos_full)-1):
            mx = (pontos_full[i][0] + pontos_full[i+1][0]) / 2
            my = (pontos_full[i][1] + pontos_full[i+1][1]) / 2
            d  = distancia(pontos_full[i], pontos_full[i+1])
            ax.text(mx, my, f"{d:.1f}km",
                    fontsize=6.2, color=cor, alpha=0.80,
                    ha="center", va="center", zorder=8,
                    bbox=dict(boxstyle="round,pad=0.15", fc=BG, alpha=0.6, ec="none"))

        # título do painel
        ax.set_title(title, fontsize=13, color=TEXT_CLR,
                     fontweight="bold", pad=10)

        # info box inferior
        consumo_rota = dist * CONSUMO_L_POR_KM
        info = f"Distância: {dist:.2f} km    |    Consumo: {consumo_rota:.2f} L"
        ax.text(0.5, -0.07, info,
                transform=ax.transAxes, fontsize=9.5,
                color=cor, ha="center", va="top",
                bbox=dict(boxstyle="round,pad=0.4", fc="#1a1d2e", ec=cor, lw=0.8))

        ax.tick_params(colors=TEXT_CLR, labelsize=8)
        for spine in ax.spines.values():
            spine.set_edgecolor("#2c2f3a")

    # ── emojis via PIL / NotoColorEmoji ───────────────────────────────────────
    # Caminhão no início de cada rota (após a origem)
    for ax, rota in zip(axes, [ordem_orig, ordem_otim]):
        if rota:
            # posiciona o caminhão a 40% do 1º segmento
            x0, y0 = ORIGIN
            x1, y1 = rota[0]
            mx, my = x0 + 0.4*(x1-x0), y0 + 0.4*(y1-y0)
            _paste_emoji(fig, ax, "🚛", (mx, my), size_pt=22)

    # Gasolina no painel otimizado junto à origem
    _paste_emoji(fig, axes[1], "⛽", (-0.7, -0.7), size_pt=20)

    # Bandeira de chegada no último ponto antes de voltar (otimizado)
    if ordem_otim:
        _paste_emoji(fig, axes[1], "🏁", (ordem_otim[-1][0]+0.3, ordem_otim[-1][1]+0.4), size_pt=18)

    # ── Barra de resumo inferior (fora dos eixos) ─────────────────────────────
    economia_pct = consumo["economia_pct"]
    restante     = reab["combustivel_restante_L"]
    reab_txt     = "Sem reabastecimento" if not reab["precisa_reabastecer"] else "Reabastecimento necessario!"

    reab_icon = "OK" if not reab["precisa_reabastecer"] else "ATENCAO"
    summary = (
        f"Economia: {consumo['economia_L']} L  ({economia_pct}%)   |   "
        f"Combustivel restante: {restante} L   |   {reab_txt}"
    )
    fig.text(0.5, 0.015, summary,
             ha="center", va="bottom", fontsize=10.5,
             color="#adb5bd",
             bbox=dict(boxstyle="round,pad=0.5", fc="#1a1d2e", ec="#2c3e50", lw=0.8))

    # ── Legenda ───────────────────────────────────────────────────────────────
    patches = [
        mpatches.Patch(color=ORIG_CLR,  label=f"Original  ({dist_orig:.1f} km)"),
        mpatches.Patch(color=OTIM_CLR,  label=f"Otimizada ({dist_otim:.1f} km)"),
        mpatches.Patch(color=NODE_CLR,  label="Ponto de entrega"),
        mpatches.Patch(color=ORIG_DOT,  label="Origem (0,0)"),
    ]
    fig.legend(handles=patches, loc="upper center",
               ncol=4, fontsize=9, framealpha=0.15,
               facecolor="#1a1d2e", edgecolor="#2c3e50",
               labelcolor=TEXT_CLR,
               bbox_to_anchor=(0.5, 0.99))

    plt.savefig(path_out, dpi=160, bbox_inches="tight",
                facecolor=BG, edgecolor="none")
    plt.close()
    print(f"  ✅ Imagem salva: '{path_out}'")


# ─── Main ─────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    SEP = "=" * 58

    ordem_orig, dist_orig = rota_original(PONTOS_DE_ENTREGA)
    ordem_otim, dist_otim = vizinho_mais_proximo(PONTOS_DE_ENTREGA)
    consumo = comparar_consumo(dist_orig, dist_otim)
    reab    = verificar_reabastecimento(ordem_otim)

    print(SEP)
    print("  OTIMIZAÇÃO DE ROTA — CAMINHÃO DE ENTREGA")
    print(SEP)

    print(f"\n(a) Rota original   : {dist_orig:.2f} km")
    print(f"(b) Rota otimizada  : {dist_otim:.2f} km")
    print(f"(c) Economia        : {consumo['economia_L']} L ({consumo['economia_pct']}%)")
    status = "NÃO precisa" if not reab["precisa_reabastecer"] else "PRECISA"
    print(f"(d) Reabastecimento : {status}  |  Restante: {reab['combustivel_restante_L']} L")

    print(f"\n📂 Exportando CSVs...")
    exportar_csv(ordem_orig, dist_orig,
                 ordem_otim, dist_otim,
                 consumo, reab,
                 path_rotas  ="/mnt/user-data/outputs/rotas.csv",
                 path_resumo ="/mnt/user-data/outputs/resumo_consumo.csv")

    print(f"\n🖼️  Gerando imagem...")
    gerar_imagem(ordem_orig, dist_orig,
                 ordem_otim, dist_otim,
                 consumo, reab,
                 path_out="/mnt/user-data/outputs/rotas_caminhao.png")

    print(f"\n{SEP}")
```

```bash
Trabalho on  master via Python v3.14.6 took 2s 
❯ python v2.py 
==========================================================
  OTIMIZAÇÃO DE ROTA — CAMINHÃO DE ENTREGA
==========================================================

(a) Rota original   : 65.11 km
(b) Rota otimizada  : 40.96 km
(c) Economia        : 8.45 L (37.08%)
(d) Reabastecimento : NÃO precisa  |  Restante: 65.66 L

📂 Exportando CSVs...
  ✅ CSVs salvos: './rotas.csv' e './resumo_consumo.csv'

🖼️  Gerando imagem...
  ✅ Imagem salva: './rotas_caminhao.png'

==========================================================
```

### Version 03

```python
## Versão 3: Adaptar o código para rodar em Windows (Estava preparado para rodar em Linux)
## Pacotes necessários: matplotlib pillow numpy
## (pip install matplotlib pillow numpy)

"""
Exercício 3 — Otimização de Rota de Caminhão de Entrega
CSV + Visualização com emojis via Matplotlib + PIL
"""

import math
import csv
import io
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib.patheffects as pe
from matplotlib.colors import LinearSegmentedColormap
from PIL import Image, ImageFont, ImageDraw

# ─── Constantes ───────────────────────────────────────────────────────────────

CONSUMO_L_POR_KM   = 0.35
CAPACIDADE_TANQUE  = 80.0
# EMOJI_FONT         = "/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf" # Linux
EMOJI_FONT = "C:/Windows/Fonts/seguiemj.ttf"  # Segoe UI Emoji — já instalada no Windows 10/11

PONTOS_DE_ENTREGA = [
    (2, 4), (5, 1), (8, 7), (1, 9),
    (6, 3), (3, 7), (9, 2), (4, 5),
    (7, 8), (2, 6),
]

# ─── Lógica de rota ───────────────────────────────────────────────────────────

def distancia(p1, p2):
    return math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)

def distancia_total(rota):
    pontos = [(0, 0)] + list(rota) + [(0, 0)]
    return sum(distancia(pontos[i], pontos[i+1]) for i in range(len(pontos)-1))

def rota_original(pontos):
    return list(pontos), distancia_total(pontos)

def vizinho_mais_proximo(pontos):
    nao_visitados = list(pontos)
    atual = (0, 0)
    rota = []
    while nao_visitados:
        prox = min(nao_visitados, key=lambda p: distancia(atual, p))
        rota.append(prox)
        nao_visitados.remove(prox)
        atual = prox
    return rota, distancia_total(rota)

def comparar_consumo(dist_orig, dist_otim):
    co = round(dist_orig  * CONSUMO_L_POR_KM, 2)
    oo = round(dist_otim  * CONSUMO_L_POR_KM, 2)
    ec = round(co - oo, 2)
    return {"consumo_original_L": co, "consumo_otimizado_L": oo,
            "economia_L": ec, "economia_pct": round(ec/co*100, 2)}

def verificar_reabastecimento(rota_otim):
    pontos = [(0, 0)] + list(rota_otim) + [(0, 0)]
    combustivel = CAPACIDADE_TANQUE
    trecho_critico = None
    for i in range(len(pontos)-1):
        combustivel -= distancia(pontos[i], pontos[i+1]) * CONSUMO_L_POR_KM
        if combustivel < 0 and trecho_critico is None:
            trecho_critico = {"de": pontos[i], "para": pontos[i+1],
                              "falta": round(abs(combustivel), 2)}
    return {"precisa_reabastecer": combustivel < 0,
            "combustivel_restante_L": round(max(combustivel, 0), 2),
            "trecho_critico": trecho_critico}

# ─── (1) Exportação CSV ───────────────────────────────────────────────────────

def exportar_csv(ordem_orig, dist_orig,
                 ordem_otim, dist_otim,
                 consumo, reab,
                 path_rotas="rotas.csv",
                 path_resumo="resumo_consumo.csv"):

    # — rotas.csv —
    with open(path_rotas, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)

        origem = (0, 0)
        for tipo, rota in [("original", ordem_orig), ("otimizada", ordem_otim)]:
            pontos = [origem] + list(rota) + [origem]
            acum = 0.0
            for i, p in enumerate(pontos):
                if i > 0:
                    acum += distancia(pontos[i-1], p)
                w.writerow([tipo, i, p[0], p[1], round(acum, 3)])

    # — resumo_consumo.csv —
    with open(path_resumo, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["metrica", "valor", "unidade"])
        w.writerow(["distancia_original",         round(dist_orig, 2),              "km"])
        w.writerow(["distancia_otimizada",         round(dist_otim, 2),              "km"])
        w.writerow(["consumo_original",            consumo["consumo_original_L"],    "L"])
        w.writerow(["consumo_otimizado",           consumo["consumo_otimizado_L"],   "L"])
        w.writerow(["economia_combustivel",        consumo["economia_L"],            "L"])
        w.writerow(["economia_percentual",         consumo["economia_pct"],          "%"])
        w.writerow(["capacidade_tanque",           CAPACIDADE_TANQUE,               "L"])
        w.writerow(["combustivel_restante_otimiz", reab["combustivel_restante_L"],   "L"])
        w.writerow(["precisa_reabastecer",         reab["precisa_reabastecer"],      "bool"])

    print(f"  ✅ CSVs salvos: '{path_rotas}' e '{path_resumo}'")

# ─── (2) Visualização ─────────────────────────────────────────────────────────

def _arrow_route(ax, pontos_full, color, lw=2.2, alpha=0.85):
    """Desenha a rota com setas ao longo de cada segmento."""
    for i in range(len(pontos_full)-1):
        x0, y0 = pontos_full[i]
        x1, y1 = pontos_full[i+1]
        ax.annotate(
            "", xy=(x1, y1), xytext=(x0, y0),
            arrowprops=dict(
                arrowstyle="-|>",
                color=color,
                lw=lw,
                alpha=alpha,
                mutation_scale=14,
                connectionstyle="arc3,rad=0.05",
            )
        )


def _paste_emoji(fig, ax, emoji_char, xy_data, size_pt=28):
    """
    Renderiza um emoji colorido (NotoColorEmoji) e cola na figura via
    AnnotationBbox, centralizado nas coordenadas de dados xy_data.
    """
    from matplotlib.offsetbox import AnnotationBbox, OffsetImage

    font_size_px = int(size_pt * 137 / 72)   # aprox. 109 px para 72 pt
    font_size_px = max(font_size_px, 109)     # mínimo exigido pelo NotoColorEmoji

    font = ImageFont.truetype(EMOJI_FONT, font_size_px)
    # bounding box real do glyph
    bbox = font.getbbox(emoji_char)
    w = bbox[2] - bbox[0] + 4
    h = bbox[3] - bbox[1] + 4

    img_pil = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw    = ImageDraw.Draw(img_pil)
    draw.text((-bbox[0] + 2, -bbox[1] + 2), emoji_char,
              font=font, embedded_color=True)

    # reduz para o tamanho desejado em pontos → pixels de tela
    target_px = int(size_pt * fig.dpi / 72)
    img_pil = img_pil.resize((target_px, target_px), Image.LANCZOS)

    oi = OffsetImage(np.array(img_pil), zoom=1.0)
    ab = AnnotationBbox(oi, xy_data, frameon=False, zorder=10)
    ax.add_artist(ab)


def gerar_imagem(ordem_orig, dist_orig,
                 ordem_otim, dist_otim,
                 consumo, reab,
                 path_out="rotas_caminhao.png"):

    ORIGIN = (0, 0)

    # paleta
    BG       = "#0f1117"
    ORIG_CLR = "#ff6b6b"
    OTIM_CLR = "#51cf66"
    NODE_CLR = "#ffd43b"
    ORIG_DOT = "#74c0fc"
    GRID_CLR = "#1e2030"
    TEXT_CLR = "#e9ecef"

    fig, axes = plt.subplots(1, 2, figsize=(18, 9),
                             facecolor=BG,
                             gridspec_kw={"wspace": 0.06})

    titles     = ["Rota Original",  "Rota Otimizada  (Vizinho Mais Proximo)"]
    rotas      = [ordem_orig,           ordem_otim]
    cores      = [ORIG_CLR,             OTIM_CLR]
    distancias = [dist_orig,            dist_otim]

    for ax, title, rota, cor, dist in zip(axes, titles, rotas, cores, distancias):
        ax.set_facecolor(BG)

        # grid sutil
        ax.set_xlim(-1, 11); ax.set_ylim(-1.5, 11)
        for v in range(0, 11):
            ax.axvline(v, color=GRID_CLR, lw=0.6, zorder=0)
            ax.axhline(v, color=GRID_CLR, lw=0.6, zorder=0)

        pontos_full = [ORIGIN] + list(rota) + [ORIGIN]
        _arrow_route(ax, pontos_full, cor, lw=2.0)

        # nós de entrega
        for idx, (px, py) in enumerate(rota):
            ax.scatter(px, py, s=160, color=NODE_CLR,
                       edgecolors="#333", linewidths=0.8, zorder=6)
            ax.text(px + 0.18, py + 0.22, str(idx+1),
                    fontsize=7.5, color="#111", fontweight="bold", zorder=7)

        # origem
        ax.scatter(*ORIGIN, s=220, color=ORIG_DOT,
                   edgecolors="white", linewidths=1.2, zorder=7, marker="*")

        # números de ordem sobre os segmentos
        for i in range(len(pontos_full)-1):
            mx = (pontos_full[i][0] + pontos_full[i+1][0]) / 2
            my = (pontos_full[i][1] + pontos_full[i+1][1]) / 2
            d  = distancia(pontos_full[i], pontos_full[i+1])
            ax.text(mx, my, f"{d:.1f}km",
                    fontsize=6.2, color=cor, alpha=0.80,
                    ha="center", va="center", zorder=8,
                    bbox=dict(boxstyle="round,pad=0.15", fc=BG, alpha=0.6, ec="none"))

        # título do painel
        ax.set_title(title, fontsize=13, color=TEXT_CLR,
                     fontweight="bold", pad=10)

        # info box inferior
        consumo_rota = dist * CONSUMO_L_POR_KM
        info = f"Distância: {dist:.2f} km    |    Consumo: {consumo_rota:.2f} L"
        ax.text(0.5, -0.07, info,
                transform=ax.transAxes, fontsize=9.5,
                color=cor, ha="center", va="top",
                bbox=dict(boxstyle="round,pad=0.4", fc="#1a1d2e", ec=cor, lw=0.8))

        ax.tick_params(colors=TEXT_CLR, labelsize=8)
        for spine in ax.spines.values():
            spine.set_edgecolor("#2c2f3a")

    # ── emojis via PIL / NotoColorEmoji ───────────────────────────────────────
    # Caminhão no início de cada rota (após a origem)
    for ax, rota in zip(axes, [ordem_orig, ordem_otim]):
        if rota:
            # posiciona o caminhão a 40% do 1º segmento
            x0, y0 = ORIGIN
            x1, y1 = rota[0]
            mx, my = x0 + 0.4*(x1-x0), y0 + 0.4*(y1-y0)
            _paste_emoji(fig, ax, "🚛", (mx, my), size_pt=22)

    # Gasolina no painel otimizado junto à origem
    _paste_emoji(fig, axes[1], "⛽", (-0.7, -0.7), size_pt=20)

    # Bandeira de chegada no último ponto antes de voltar (otimizado)
    if ordem_otim:
        _paste_emoji(fig, axes[1], "🏁", (ordem_otim[-1][0]+0.3, ordem_otim[-1][1]+0.4), size_pt=18)

    # ── Barra de resumo inferior (fora dos eixos) ─────────────────────────────
    economia_pct = consumo["economia_pct"]
    restante     = reab["combustivel_restante_L"]
    reab_txt     = "Sem reabastecimento" if not reab["precisa_reabastecer"] else "Reabastecimento necessario!"

    reab_icon = "OK" if not reab["precisa_reabastecer"] else "ATENCAO"
    summary = (
        f"Economia: {consumo['economia_L']} L  ({economia_pct}%)   |   "
        f"Combustivel restante: {restante} L   |   {reab_txt}"
    )
    fig.text(0.5, 0.015, summary,
             ha="center", va="bottom", fontsize=10.5,
             color="#adb5bd",
             bbox=dict(boxstyle="round,pad=0.5", fc="#1a1d2e", ec="#2c3e50", lw=0.8))

    # ── Legenda ───────────────────────────────────────────────────────────────
    patches = [
        mpatches.Patch(color=ORIG_CLR,  label=f"Original  ({dist_orig:.1f} km)"),
        mpatches.Patch(color=OTIM_CLR,  label=f"Otimizada ({dist_otim:.1f} km)"),
        mpatches.Patch(color=NODE_CLR,  label="Ponto de entrega"),
        mpatches.Patch(color=ORIG_DOT,  label="Origem (0,0)"),
    ]
    fig.legend(handles=patches, loc="upper center",
               ncol=4, fontsize=9, framealpha=0.15,
               facecolor="#1a1d2e", edgecolor="#2c3e50",
               labelcolor=TEXT_CLR,
               bbox_to_anchor=(0.5, 0.99))

    plt.savefig(path_out, dpi=160, bbox_inches="tight",
                facecolor=BG, edgecolor="none")
    plt.close()
    print(f"  ✅ Imagem salva: '{path_out}'")


# ─── Main ─────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    SEP = "=" * 58

    ordem_orig, dist_orig = rota_original(PONTOS_DE_ENTREGA)
    ordem_otim, dist_otim = vizinho_mais_proximo(PONTOS_DE_ENTREGA)
    consumo = comparar_consumo(dist_orig, dist_otim)
    reab    = verificar_reabastecimento(ordem_otim)

    print(SEP)
    print("  OTIMIZAÇÃO DE ROTA — CAMINHÃO DE ENTREGA")
    print(SEP)

    print(f"\n(a) Rota original   : {dist_orig:.2f} km")
    print(f"(b) Rota otimizada  : {dist_otim:.2f} km")
    print(f"(c) Economia        : {consumo['economia_L']} L ({consumo['economia_pct']}%)")
    status = "NÃO precisa" if not reab["precisa_reabastecer"] else "PRECISA"
    print(f"(d) Reabastecimento : {status}  |  Restante: {reab['combustivel_restante_L']} L")

    print(f"\n📂 Exportando CSVs...")
    exportar_csv(ordem_orig, dist_orig,
                 ordem_otim, dist_otim,
                 consumo, reab,
                 path_rotas  ="C:\\Users\\2610100835\App\\rotas.csv",
                 path_resumo ="C:\\Users\\2610100835\App\\resumo_consumo.csv")

    print(f"\n🖼️  Gerando imagem...")
    gerar_imagem(ordem_orig, dist_orig,
                 ordem_otim, dist_otim,
                 consumo, reab,
                 path_out="C:\\Users\\2610100835\App\\rotas_caminhao.png")

    print(f"\n{SEP}")
```

Unfortunately, I can't run this code because I use Linux, and version 03 needs fonts that my Linux doesn't have =/

---

### Consumption Summary

|metrica                    |valor|unidade|
|---------------------------|-----|-------|
|distancia_original         |65.11|km     |
|distancia_otimizada        |40.96|km     |
|consumo_original           |22.79|L      |
|consumo_otimizado          |14.34|L      |
|economia_combustivel       |8.45 |L      |
|economia_percentual        |37.08|%      |
|capacidade_tanque          |80.0 |L      |
|combustivel_restante_otimiz|65.66|L      |
|precisa_reabastecer        |False|bool   |

### Routes

| -       | - | - | - | -    |
|---------|---|---|---|------|
|original |0  |0  |0  |0.0   |
|original |1  |2  |4  |4.472 |
|original |2  |5  |1  |8.715 |
|original |3  |8  |7  |15.423|
|original |4  |1  |9  |22.703|
|original |5  |6  |3  |30.513|
|original |6  |3  |7  |35.513|
|original |7  |9  |2  |43.324|
|original |8  |4  |5  |49.155|
|original |9  |7  |8  |53.397|
|original |10 |2  |6  |58.782|
|original |11 |0  |0  |65.107|
|otimizada|0  |0  |0  |0.0   |
|otimizada|1  |2  |4  |4.472 |
|otimizada|2  |2  |6  |6.472 |
|otimizada|3  |3  |7  |7.886 |
|otimizada|4  |4  |5  |10.122|
|otimizada|5  |6  |3  |12.951|
|otimizada|6  |5  |1  |15.187|
|otimizada|7  |9  |2  |19.31 |
|otimizada|8  |8  |7  |24.409|
|otimizada|9  |7  |8  |25.823|
|otimizada|10 |1  |9  |31.906|
|otimizada|11 |0  |0  |40.961|

### Truck Routes

![rotas](/assets/projects/78729747-6198-4c9b-99de-504b04cbbd38.png)
