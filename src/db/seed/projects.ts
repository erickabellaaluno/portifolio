import { projectsRepository } from '@/core/projects.repository'

export async function seedProjects() {
  await projectsRepository.saveMany([
    {
      description: {
        en: 'Select and solve 15 algorithm or logic exercises from provided materials or generated with AI; submit the list and complete solutions.',
        pt: 'Escolher e resolver 15 exercícios de lógica ou algoritmos a partir de materiais fornecidos ou gerados por IA; entregar a lista e as soluções completas.',
      },
      content: {
        en: "Each student must choose and solve at least 15 exercises from the lecture notes, books, and websites whose links are available in the Classroom.\n\nAlternatively, it is allowed to use AI tools (such as ChatGPT, Gemini, Claude, etc.) to generate 15 logic and/or basic algorithm exercises, provided they involve only simple conditional structures and are related to the student's engineering area of interest.\n\nDeliverables:\n(a) List of the 15 exercises\n(b) Complete solution for each exercise\n\nThe material may be submitted in TXT, PDF, or PNG format. If the exercises are solved by hand, clear photos are sufficient.",
        pt: 'Cada aluno deverá escolher e resolver no mínimo 15 exercícios a partir das apostilas, livros e sites cujos links estão disponíveis no Classroom.\n\nAlternativamente, é permitido utilizar ferramentas de IA (como ChatGPT, Gemini, Claude, etc.) para gerar 15 exercícios de lógica e/ou algoritmos básicos, desde que envolvam apenas estruturas condicionais simples e estejam relacionados à área de engenharia de interesse do aluno.\n\nEntrega:\n(a) Lista com os 15 exercícios\n(b) Resolução completa de cada exercício\n\nO material pode ser entregue nos formatos TXT, PDF ou PNG.\nCaso os exercícios sejam resolvidos à mão, é suficiente tirar fotos nítidas e enviá-las.\n',
      },
      slug: 'lista-15-exercicios',
      title: {
        en: '15 Exercises — Choose and Solve',
        pt: 'Lista de 15 exercícios: Escolher e resolver',
      },
      date: '2026-03-31',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODU3OTMyNTMyNjI1/details/',
    },
    {
      description: {
        en: 'Work through 10 exercises from the in-class Claude.ai booklet, implementing solutions in Python and documenting results.',
        pt: 'Resolver 10 exercícios da apostila gerada em aula (Claude.ai), implementando as soluções em Python e documentando os resultados.',
      },
      content: {
        en: 'Each student must choose and solve at least 10 exercises from the booklet "INTRODUCTION TO ALGORITHMS with Python, by Claude.ai", which was created during class. The exercises must be solved in Python.\n\nINTRODUCTION TO ALGORITHMS with Python, by Claude.ai\n\nhttps://docs.google.com/document/d/1IsiVnfH7Tz2_i7a8ll3HkS4iiUKPUnIA/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true\n\nAs I mentioned in class, note that Claude.ai removed diacritics, which is common when working with programming, to avoid other problems. We can ask it to restore accents in the textual parts without changing the code examples.\n\nDeliverables:\n(a) List of at least 10 exercises\n(b) Complete solution for each exercise\n\nThe material may be submitted in PY (Python), TXT, PDF or PNG format. If the exercises are solved by hand, clear photos are sufficient.',
        pt: 'Cada aluno deverá escolher e resolver no mínimo 10 exercícios da apostila INTRODUCAO A ALGORITMOS com Python, by Claude.ai, que foi criada em aula. Os exercícios devem ser resolvidos na linguagem Python. \n\nINTRODUCAO A ALGORITMOS com Python, by Claude.ai\n\nhttps://docs.google.com/document/d/1IsiVnfH7Tz2_i7a8ll3HkS4iiUKPUnIA/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true\n\nConforme comentei em aula, reparem que o Claude.ai removeu a acentuação, o que é comum quando se fala em programação, para evitar outros problemas. Podemos pedir para ele resolver a acentuação da parte textual, sem alterar os exemplos de código.\n\nEntrega:\n(a) Lista com no mínimo 10 exercícios\n(b) Resolução completa de cada exercício\n\nO material pode ser entregue nos formatos PY (Python), TXT, PDF ou PNG.\nCaso os exercícios sejam resolvidos à mão, é suficiente tirar fotos nítidas e enviá-las.\n',
      },
      slug: 'lista-10-exercicios-claude',
      title: {
        en: '10 Exercises from "Introduction to Algorithms with Python" (by Claude.ai)',
        pt: 'Lista de 10 Exercícios da Introdução a Algoritmos com Python by Claude.ai',
      },
      date: '2026-04-10',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk2OTk2MzY4ODI0/details/',
    },
    {
      description: {
        en: 'Use multiple LLMs to generate algorithm exercises for engineering domains, compare outputs and deliver a qualitative evaluation.',
        pt: 'Usar várias LLMs para gerar exercícios de algoritmos aplicados a áreas de engenharia, comparar os resultados e entregar uma avaliação qualitativa.',
      },
      content: {
        en: 'In this activity, each student must use three different Large Language Models (LLMs) to generate and compare algorithm exercises applied to the fields of Electrical Engineering, Mechanical Engineering, and Telecommunications Engineering.\n\nThe student must ask each model to generate a list of 10 algorithm exercises, distributed among the three engineering areas mentioned. For each exercise, the LLM must provide:\n- the problem statement, contextualized in a real or plausible application of the respective engineering field;\n- pseudocode in algorithmic language in Portuguese, with a clear and logical structure;\n- the corresponding Python code, functional and consistent with the proposed solution.\n\nAfter generating the material, the student must perform a qualitative comparative analysis of the results produced by the three models, considering aspects such as clarity of the statement, suitability to the engineering context, quality of the pseudocode, readability, creativity, and coherence between problem and solution.\n\nAt the end, the student must present a critical evaluation of the models used, highlighting strengths, observed limitations, possible logical or syntactic errors, and indicating which model performed best for the proposed activity.\n\nThe submission must include the prompts used, the outputs produced by each model, and the final comparative analysis.\n\nAfter completing the submission, answer the Experience Evaluation Quiz for this activity (the second activity scheduled for the same day/time).',
        pt: 'Nesta atividade, cada aluno deverá utilizar três Modelos de Linguagem de Grande Escala (LLMs) diferentes para gerar e comparar exercícios de algoritmos aplicados às áreas de Engenharia Elétrica, Engenharia Mecânica e Engenharia de Telecomunicações.\n\nO aluno deverá solicitar a cada modelo a geração de uma lista com 10 exercícios de algoritmos, distribuídos entre as três áreas de engenharia mencionadas. Para cada exercício, a LLM deverá fornecer obrigatoriamente:\n- o enunciado do problema, contextualizado em uma aplicação real ou plausível da respectiva engenharia;\n- o pseudocódigo em linguagem algorítmica em português, com estrutura clara e lógica;\n- o código correspondente em Python, funcional e coerente com a solução proposta.\n\nApós a geração do material, o aluno deverá realizar uma análise comparativa qualitativa dos resultados produzidos pelos três modelos, considerando aspectos como clareza do enunciado, adequação ao contexto de engenharia, qualidade do pseudocódigo, legibilidade, criatividade e coerência entre problema e solução.\n\nAo final, o aluno deverá apresentar uma avaliação crítica dos modelos utilizados, destacando pontos fortes, limitações observadas, possíveis erros lógicos ou sintáticos e indicando qual modelo apresentou o melhor desempenho para a proposta da atividade.\n\nA entrega deverá conter os prompts utilizados, os resultados gerados por cada modelo e a análise comparativa final.\n\nApós completar a entrega, responda o Quiz de Avaliação da Experiência desta atividade (a segunda atividade para este mesmo dia/horário).\n',
      },
      slug: 'geracao-avaliacao-exercicios-algoritmos-llms',
      title: {
        en: 'Generation and Evaluation of Algorithm Exercises with LLMs',
        pt: 'Geração e Avaliação de Exercícios de Algoritmos com LLMs',
      },
      date: '2026-04-10',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODU4NTI5NjQyNzU0/details/',
    },
    {
      description: {
        en: 'Manually solve five exercises on paper, digitize the solutions, request evaluations from LLMs and compare the generated code.',
        pt: 'Resolver cinco exercícios manualmente em papel, digitalizar as soluções, solicitar avaliações a LLMs e comparar o código gerado.',
      },
      content: {
        en: "Each student must solve the 5 exercises in the document below on paper. Use pen and paper. Solutions may be written in the student's own algorithmic language or based on existing literature. After solving each exercise, scan or photograph the solution and ask at least two LLMs (AIs) to interpret and evaluate the solution. Also ask them to generate the corresponding Python code. Compare the codes produced by the two LLMs.\n\nList of the 5 exercises:\nhttps://docs.google.com/document/d/16Z__i5JKMOxyDi5lU5SnD3JdFEicf_jj/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true",
        pt: 'Cada aluno deverá resolver os 5 exercícios do documento a seguir em papel. Procure usar papel e caneta. A resolução poderá ser realizada em lógica algoritmica própria ou baseada em literatura existente. Depois de resolver cada exercício, tire uma foto (digitalize) a resolução e peça para no mínimo 2 LLMs (IAs) interpretarem e avaliarem a resolução. Peça para elas gerarem também o código Python correspondente. Compare os códigos das duas LLMs.\n\nLista dos 5 exercícios:\nhttps://docs.google.com/document/d/16Z__i5JKMOxyDi5lU5SnD3JdFEicf_jj/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true',
      },
      slug: 'resolver-5-exercicios-papel',
      title: {
        en: 'Solve the 5 Exercises on Paper',
        pt: 'Resolver os 5 exercícios em papel',
      },
      date: '2026-04-21',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3MjMyNjQ5OTYz/details',
    },
    {
      description: {
        en: 'Implement and run Python solutions for list/vector/array exercises and provide evidence of execution (screenshots or photos).',
        pt: 'Implementar e executar soluções em Python para exercícios de listas/vetores/arrays e fornecer evidências da execução (prints ou fotos).',
      },
      content: {
        en: 'Write the Python code for the lists/vectors/arrays exercises. For each exercise, implement and run the Python code. Show that you executed the code on your machine (for example: take a screenshot of the execution).\n\nLists/vectors/arrays exercises to solve:\nhttps://docs.google.com/document/d/1p-z8Aqdotc8sv_y2fq1hH56EeNxzERSl/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true\n\nDeliverables: (a) Python code for each exercise; (b) screenshot (or photo) of the execution of each exercise.',
        pt: 'Escrever o código Python dos exercícios de listas/vetores/arrays. Para cada exercício, implemente e execute o código Python. Mostre que você executou o código na sua máquina (exemplo: faça um printscreen da execução).\n\nExercícios de listas /vetores/arrays para resolver:\nhttps://docs.google.com/document/d/1p-z8Aqdotc8sv_y2fq1hH56EeNxzERSl/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true \n\nEntregar: (a) código python de cada exercício; (b) printscreen (ou foto) da execução de cada exercício.',
      },
      slug: 'exercicios-listas-vetores-arrays-python',
      title: {
        en: 'Lists / Vectors / Arrays Exercises in Python',
        pt: 'Resolver os exercícios de listas/vetores/arrays em Python',
      },
      date: '2026-04-24',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3MjM1NDcyNTQ0/details/',
    },
    {
      description: {
        en: 'Use LLMs to help formulate two vector/list problems contextualized to your engineering area, then solve them manually and submit handwritten solutions.',
        pt: 'Usar LLMs para formular dois problemas com vetores/listas contextualizados na sua área de engenharia, resolver manualmente e entregar as soluções manuscritas.',
      },
      content: {
        en: "Objective\n==============\nExplore the use of LLMs to support the formulation of computational problems while developing independent logical reasoning and algorithmic problem-solving skills.\n\nActivity Description\n==============\nEach student must propose two problems involving vectors/lists with the help of an LLM (for example, ChatGPT). The problems should be clearly related to the student's degree area, such as:\nMechanical Engineering\nElectrical Engineering\nTelecommunications Engineering\nThe problems should reflect realistic or plausible situations within these areas.\n\nRequirements\n==============\n\nProblem formulation\nUse an LLM to help define the two problems.\nThe problems must involve operations with vectors/lists (e.g., search, sum, average, filtering, comparison, etc.).\nThey must be contextualized in the student's course area.\n\nProblem solving\nSolve the two problems manually, using:\npen and paper\nyour own language (algorithmic description, step-by-step)\nIt is not allowed to use LLM-generated code or programming tools in this stage.\n\nDeliverable\n==============\nAn image (photo or scan) containing:\nthe two defined problems\nthe respective handwritten solutions\n\nEvaluation Criteria\n============================\nClarity and relevance of the proposed problems\nSuitability to the use of vectors/lists\nCorrectness and coherence of the solutions\nQuality of the algorithmic explanation (organization, logic, clarity)\n\nImportant notes\n============================\nUse of LLMs is allowed only in the problem-creation stage.\nThe solutions must reflect the student's own understanding, without dependence on automated tools.\nGeneric or disconnected problems relative to the student's area may receive reduced scores.",
        pt: 'Objetivo\n==============\nExplorar o uso de LLMs para apoiar a formulação de problemas computacionais, ao mesmo tempo em que se desenvolve o raciocínio lógico e a capacidade de resolução algorítmica de forma independente.\n\nDescrição da Atividade\n==============\nCada aluno deverá propor dois problemas envolvendo vetores/listas, com o apoio de uma LLM (por exemplo, ChatGPT). Os problemas devem estar claramente relacionados à área do seu curso de graduação, como:\nEngenharia Mecânica\nEngenharia Elétrica\nEngenharia de Telecomunicações\nOs problemas devem refletir situações realistas ou plausíveis dentro dessas áreas.\n\nRequisitos\n==============\n\nFormulação dos Problemas\nUtilizar uma LLM para ajudar a definir os dois problemas.\nOs problemas devem envolver operações com vetores/listas (ex: busca, soma, média, filtragem, comparação, etc.).\nDevem estar contextualizados na área do curso do aluno.\nResolução dos Problemas\nResolver os dois problemas manualmente, utilizando:\npapel e caneta\nlinguagem própria (descrição algorítmica, passo a passo)\nNão é permitido usar código gerado por LLMs ou ferramentas de programação nesta etapa.\n\n\nEntrega\n==============\nUma imagem (foto ou scan) contendo:\nos dois problemas definidos\nas respectivas resoluções manuscritas\n\n\n\nCritérios de Avaliação\n============================\nClareza e relevância dos problemas propostos\nAdequação ao uso de vetores/listas\nCorreção e coerência das soluções\nQualidade da explicação algorítmica (organização, lógica, clareza)\n\n\nObservações Importantes\n============================\nO uso de LLMs é permitido apenas na etapa de criação dos problemas.\nA resolução deve refletir entendimento próprio, sem dependência de ferramentas automáticas.\nProblemas genéricos ou desconectados da área do curso poderão ter pontuação reduzida.',
      },
      slug: 'formulacao-resolucao-problemas-vetores-listas-llms',
      title: {
        en: 'Formulation and Resolution of Vector/List Problems using LLMs',
        pt: 'Formulação e Resolução de Problemas com Vetores/Listas usando LLMs Objetivo',
      },
      date: '2026-04-24',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3NDczMzk3Mzgy/details/',
    },
    {
      description: {
        en: 'Iterate on Python code versions to achieve visually meaningful results; document and submit the different versions produced during development.',
        pt: 'Iterar sobre versões de código Python até obter resultados visuais significativos; documentar e entregar as diferentes versões produzidas.',
      },
      content: {
        en: 'Repeat what we did together in Exercise 2 for Exercise 3. Submit the different versions of the generated Python code.\n\n*Exercise 3 — Delivery Truck Route Optimization (Production Engineering)*\n\nA carrier has a list of coordinates `[(x, y), ...]` representing delivery points on a Cartesian map (in km), all starting from the origin (0, 0). The truck consumes 0.35 L/km of diesel and has a maximum tank capacity of 80 L.\n\nImplement: (a) a function that computes the total distance traveled following the original order of the list (go through the points in sequence and return to the origin); (b) a function that applies the "nearest neighbor" algorithm — starting from the origin, always go to the nearest unvisited point — and return the new order and the total distance; (c) compare the fuel consumption of the two routes; (d) check whether the truck needs to refuel during the optimized route, considering it departs with a full tank.',
        pt: 'Repetir o que fizemos em conjunto no Exercício 2 para o Exercício 3. Entregar as diferentes versões do código python gerado. \n*Exercício 3 — Otimização de Rota de Caminhão de Entrega (Engenharia de Produção)*\n\nUma transportadora possui uma lista de coordenadas `[(x, y), ...]` representando pontos de entrega em um mapa cartesiano (em km), todos partindo da origem (0, 0). O caminhão consome 0,35 L/km de diesel e tem capacidade máxima de 80 L no tanque.\n\nImplemente: (a) uma função que calcule a distância total percorrida seguindo a ordem original da lista (ida em sequência e volta à origem); (b) uma função que aplique o algoritmo do "vizinho mais próximo" — a partir da origem, sempre vai ao ponto não visitado mais próximo — e retorne a nova ordem e a distância total; (c) compare o consumo de combustível das duas rotas; (d) verifique se o caminhão precisa reabastecer durante a rota otimizada, considerando que ele sai com tanque cheio.',
      },
      slug: 'gerar-versoes-codigo',
      title: {
        en: 'Generate Code Versions for Visual Results',
        pt: 'Gerar as diferentes versões do código até ter resultados visuais interessantes e consistentes',
      },
      date: '2026-05-05',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODYzMDE2ODMyNDUy/details/',
    },
    {
      description: {
        en: 'Select a problem from another course and produce algorithmic solutions using at least three distinct approaches, with Python implementations.',
        pt: 'Selecionar um problema de outra disciplina e produzir soluções algorítmicas por meio de pelo menos três abordagens distintas, com implementações em Python.',
      },
      content: {
        en: "As discussed in the previous class, each student must select a problem from another course in the current semester and develop its algorithmic resolution using at least three distinct approaches.\n\nDeliverables:\n\n(a) clear description of the chosen problem;\n\n(b) algorithmic resolution of the problem in the student's own wording, i.e., a detailed description written by the student explaining step-by-step the logic of the proposed solution (on paper or in a text document);\n\n(c) three distinct implementations of the solution using Python with support from LLMs.",
        pt: 'Conforme discutido na aula anterior, cada aluno deverá selecionar um problema de outra disciplina do semestre corrente e desenvolver sua resolução de forma algorítmica utilizando, no mínimo, três abordagens distintas.\n\nEntregáveis:\n\n(a) descrição clara do problema escolhido;\n\n(b) resolução algorítmica do problema em linguagem própria, ou seja, uma descrição elaborada pelo aluno explicando passo a passo a lógica da solução proposta (em papel ou documento de texto);\n\n(c) três implementações distintas da solução utilizando Python e apoio de LLMs.',
      },
      slug: 'problemas-outros-disciplinas',
      title: {
        en: 'Problems from Other Courses — Multi-approach Solutions',
        pt: 'Problemas de outras disciplinas – resolução em múltiplas abordagens',
      },
      date: '2026-05-08',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODYzNjU2NzEyMTk1/details/',
    },
    {
      description: {
        en: 'Choose one of two proposed engineering problems, implement a solution in Python and compare results produced by different LLMs.',
        pt: 'Escolher um dos dois problemas propostos, implementar a solução em Python e comparar os resultados gerados por diferentes LLMs.',
      },
      content: {
        en: 'Each student must choose, solve and submit in class one of the two problems below:\n\nProblem 01: Truss Stress Analysis\nhttps://docs.google.com/document/d/1ZzcQWYkWz8CinTijmyT3aSI_mhQEC1rkV7eaXoxg9Aw/edit?usp=sharing\n\nProblem 02: Stability and Cost Analysis in Water Supply Systems\nhttps://docs.google.com/document/d/1o63xlRkI2A10GSfN0XG_OgASFRehFWQcxsr8oPV4ABg/edit?usp=sharing\n\nThe solution must be implemented in Python using vectors/lists of variable size, defined at each run. Results should be presented in table form and also through visual graphs.\n\nIn addition to the implementation, each student must compare the solution of the same problem using the same prompt across at least three different LLMs, such as ChatGPT, Claude, Gemini, Copilot or DeepSeek. The comparison should consider whether the code runs correctly, whether the calculations are appropriate, whether the graphs are coherent, whether lists/vectors are used correctly, and whether the solution is clear and well organized.',
        pt: 'Cada aluno deverá escolher, resolver e entregar em aula um dos dois problemas abaixo:\n\nProblema 01: Análise de Tensões em Treliças Planas\nhttps://docs.google.com/document/d/1ZzcQWYkWz8CinTijmyT3aSI_mhQEC1rkV7eaXoxg9Aw/edit?usp=sharing\n\nProblema 02: Análise de Estabilidade e Custo em Sistemas de Abastecimento de Água\nhttps://docs.google.com/document/d/1o63xlRkI2A10GSfN0XG_OgASFRehFWQcxsr8oPV4ABg/edit?usp=sharing\n\nA solução deve ser implementada em Python, utilizando vetores/listas de tamanho variável, definidos a cada execução. Os resultados devem ser apresentados em forma de tabela e também por meio de gráficos visuais.\n\nAlém da implementação, cada aluno deverá comparar a resolução do mesmo problema utilizando o mesmo prompt em pelo menos três LLMs distintas, como ChatGPT, Claude, Gemini, Copilot ou DeepSeek. A comparação deve considerar se o código executa corretamente, se os cálculos estão adequados, se os gráficos são coerentes, se há uso correto de listas/vetores e se a solução é clara e bem organizada.',
      },
      slug: 'escolher-entregar-problemas-engenharia',
      title: {
        en: 'Choose and Submit One of Two Proposed Engineering Problems',
        pt: 'escolher e entregar 1 dos dois problemas de engenharia propostos',
      },
      date: '2026-05-12',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODY0MTM1NzI0NTcx/details/',
    },
    {
      description: {
        en: 'Solve and submit the engineering problem not chosen previously; implement the solution and evaluate alternative approaches using LLMs.',
        pt: 'Resolver e entregar o problema de engenharia que não foi escolhido anteriormente; implementar a solução e avaliar abordagens alternativas com LLMs.',
      },
      content: {
        en: 'Each student must solve and submit in class the problem that was not chosen in the previous class. In other words, if you chose and solved Problem 01, now you must solve Problem 02, and vice versa.\n\nProblem 01: Truss Stress Analysis\nhttps://docs.google.com/document/d/1ZzcQWYkWz8CinTijmyT3aSI_mhQEC1rkV7eaXoxg9Aw/edit?usp=sharing\n\nProblem 02: Stability and Cost Analysis in Water Supply Systems\nhttps://docs.google.com/document/d/1o63xlRkI2A10GSfN0XG_OgASFRehFWQcxsr8oPV4ABg/edit?usp=sharing\n\nThe solution must be implemented in Python using vectors/lists of variable size, defined at each run. Results must be presented in table form and also through visual graphs.\n\nIn addition to the implementation, each student must compare the solution of the same problem using the same prompt across at least three different LLMs, such as ChatGPT, Claude, Gemini, Copilot or DeepSeek. The comparison should consider whether the code runs correctly, whether the calculations are appropriate, whether the graphs are coherent, whether lists/vectors are used correctly, and whether the solution is clear and well organized.',
        pt: 'Cada aluno deverá resolver e entregar em aula o problema que não foi escolhido na aula passada. Ou seja, se você escolheu e resolveu o Problema 01, agora você deverá resolver o Problema 02. E vice-versa. \n\nProblema 01: Análise de Tensões em Treliças Planas\nhttps://docs.google.com/document/d/1ZzcQWYkWz8CinTijmyT3aSI_mhQEC1rkV7eaXoxg9Aw/edit?usp=sharing\n\nProblema 02: Análise de Estabilidade e Custo em Sistemas de Abastecimento de Água\nhttps://docs.google.com/document/d/1o63xlRkI2A10GSfN0XG_OgASFRehFWQcxsr8oPV4ABg/edit?usp=sharing\n\nA solução deve ser implementada em Python, utilizando vetores/listas de  tamanho variável, definidos a cada execução. Os resultados devem ser  apresentados em forma de tabela e também por meio de gráficos visuais.\n\nAlém da implementação, cada aluno deverá comparar a resolução do mesmo  problema utilizando o mesmo prompt em pelo menos três LLMs distintas,  como ChatGPT, Claude, Gemini, Copilot ou DeepSeek. A comparação deve  considerar se o código executa corretamente, se os cálculos estão  adequados, se os gráficos são coerentes, se há uso correto de  listas/vetores e se a solução é clara e bem organizada.',
      },
      slug: 'entregar-outro-problema-engenharia',
      title: {
        en: 'Submit the Other Engineering Problem from the Previous Class',
        pt: 'entregar o outro dos dois problemas de engenharia propostos da aula passada',
      },
      date: '2026-05-15',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3ODMwODA3ODA5/details',
    },
    {
      description: {
        en: 'Select and solve an engineering problem with LLM support; deliver code, documentation and visualizations demonstrating the solution.',
        pt: 'Selecionar e resolver um problema de engenharia com apoio de LLMs; entregar código, documentação e visualizações que demonstrem a solução.',
      },
      content: {
        en: 'Each student must choose and solve an engineering problem using LLMs. Each student has full freedom to choose the problem they want to solve.\n\nDeliverables:\n(a) description/details of the problem;\n(b) source code in Python (or another language) of the solution;\n(c) visual representations of the solution (e.g., graphs, tables, interactive maps, visual simulation).',
        pt: 'Cada aluno deverá escolher e resolver um problema de engenharia utilizando LLMs. Cada aluno tem liberdade total para escolher o problema que quiser resolver.\nEntregar:\n(a) descrição/detalhamento do problema;\n(b) código fonte python (ou outra linguagem) da solução do problema;\n(c) representações visuais da solução (e.g., gráficos, tabelas, mapas dinâmico, simulação visual).',
      },
      slug: 'escolher-resolver-problema-engenharia',
      title: {
        en: 'Choose and Solve an Engineering Problem',
        pt: 'Escolher e resolver um problema de engenharia',
      },
      date: '2026-05-19',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3ODY4MDAzNTI3/details/',
    },
    {
      description: {
        en: 'Refine and improve the previous activity solution: provide updated code, visualizations, a summary of improvements and next steps.',
        pt: 'Aprimorar e evoluir a solução da atividade anterior: fornecer código atualizado, visualizações, resumo das melhorias e próximos passos.',
      },
      content: {
        en: "In today's class, the main objective is to deepen the technical resolution and/or improve the quality of the final solution, always considering the end user who will use it.\n\nThe solution should evolve compared to the previous class, moving beyond an initial proof of concept toward something more complete, robust, useful, and well presented.\n\nDeliverables:\n(a) updated version of the problem description/details;\n(b) updated source code of the solution;\n(c) visual representations of the solution;\n(d) objective description of the improvements made;\n(e) current limitations and next steps.\n\nSpecial attention to:\n=> technical quality of the solution;\n=> clarity, usefulness and usability for the end user;\n=> improvement of the interface or mode of interaction;\n=> quality of visualizations;\n=> robustness, reliability and organization of the code;\n=> more effective use of LLMs to solve the problem.",
        pt: 'Na aula de hoje, o principal objetivo é aprofundar a resolução técnica e/ou melhorar a qualidade da solução final, sempre pensando no usuário que irá utilizá-la.\n\nA solução deve evoluir em relação à aula passada, deixando de ser apenas uma prova de conceito inicial e caminhando para algo mais completo, robusto, útil e bem apresentado.\n\nEntregar:\n(a) versão atualizada da descrição/detalhamento do problema;\n(b) código-fonte atualizado da solução;\n(c) representações visuais da solução;\n(d) descrição objetiva das melhorias realizadas;\n(e) limitações atuais e próximos passos.\n\nAtenção especial para:\n=> qualidade técnica da solução;\n=> clareza, utilidade e usabilidade para o usuário final;\n=> melhoria da interface ou da forma de interação;\n=> qualidade das visualizações;\n=> robustez, confiabilidade e organização do código;\n=> uso mais efetivo de LLMs para resolver o problema.',
      },
      slug: 'evolucao-tecnica-solucao-atividade-anterior',
      title: {
        en: 'Technical Evolution of the Previous Activity Solution',
        pt: 'Evolução técnica da solução desenvolvida na atividade anterior',
      },
      date: '2026-05-22',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODY1NzkxMDYxODM4/details/',
    },
    {
      description: {
        en: 'Develop a modular monitoring solution, generate implementations using multiple LLMs and compare code modularity and quality.',
        pt: 'Desenvolver uma solução modular de monitoramento, gerar implementações com várias LLMs e comparar modularidade e qualidade do código.',
      },
      content: {
        en: 'Activity: Code Modularization and LLM Evaluation\n==========================================================\n\nIn this activity you will develop a solution for a problem of monitoring engineering quantities using code modularization concepts, and compare the quality of solutions generated by different Language Models (LLMs).\n\nThe activity has three stages:\n\n1) Describe the solution to the problem in your own words (natural language or pseudocode).\n2) Use at least two different LLMs to generate Python implementations.\n3) Compare the generated solutions, evaluating aspects such as use of functions, clarity of names, code reuse, flow organization, and readability.\n\nThe main focus of the activity is not only to obtain working code, but to critically analyze the level of modularization in the solutions produced by the AIs.\n\nDeliverables:\n\n1) PDF report containing:\n  - description/pseudocode of the solution;\n  - codes generated by the LLMs;\n  - comparative table;\n  - final critical analysis.\n2) .py files of the generated implementations.\n\nFull activity details:\n\nNote: use your institutional login to access the online document linked below.\n\nhttps://docs.google.com/document/d/1vvgs1dB4EZEOJnQHdL_-fAGr_izVgRA3/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true\n\nIf in doubt, ask the instructor during class.',
        pt: 'Atividade: Modularização de Código e Avaliação de LLMs\n==========================================================\n\nNesta atividade, vocês irão desenvolver uma solução para um problema de monitoramento de grandezas de engenharia utilizando conceitos de **modularização de código**, além de comparar a qualidade das soluções geradas por diferentes **Modelos de Linguagem (LLMs)**.\n\nA atividade possui três etapas:\n==================================\n\n1) **Descrever a solução** do problema com suas próprias palavras (linguagem natural ou pseudocódigo).\n2) **Utilizar pelo menos dois LLMs diferentes** para gerar implementações em Python.\n3) **Comparar as soluções geradas**, avaliando aspectos como uso de funções, clareza dos nomes, reutilização de código, organização do fluxo e legibilidade.\n\nO foco principal da atividade **não é apenas obter um código que funcione**, mas analisar criticamente o nível de modularização das soluções produzidas pelas IAs.\n\nEntrega:\n================\n\n1) Relatório em PDF contendo:\n  - descrição/pseudocódigo da solução;\n  - códigos gerados pelos LLMs;\n  - tabela comparativa;\n  - análise crítica final.\n2) Arquivos .py das implementações geradas.\n\nDetalhamento completo da atividade:\n=========================================\n\nNota: use o seu login institucional para acessar o documento online a seguir.\n\nhttps://docs.google.com/document/d/1vvgs1dB4EZEOJnQHdL_-fAGr_izVgRA3/edit?usp=sharing&ouid=115631862484439918947&rtpof=true&sd=true\n\nEm caso de dúvidas, chame o professor em sala de aula.',
      },
      slug: 'modularizacao-codigo-avaliacao-llms',
      title: {
        en: 'Code Modularization and LLM Evaluation (in class)',
        pt: 'Modularização de Código e Avaliação de LLMs (em aula)',
      },
      date: '2026-06-09',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk4MTQzMjAxNjY2/details/',
    },
    {
      description: {
        en: 'Create AI-assisted Python tools or content (scripts, galleries, image/video processors) to enrich the Alegrete.org portal; include code and a short report.',
        pt: 'Criar ferramentas ou conteúdos em Python assistidos por IA (scripts, galerias, processadores de imagem/vídeo) para enriquecer o portal Alegrete.org; incluir código e um breve relatório.',
      },
      content: {
        en: "Objective\n=========\nThe objective of this activity is to use Artificial Intelligence and Python programming to create useful artifacts for the portal, contributing to the expansion, update, and enrichment of the content available about the city of Alegrete-RS.\n\nEach student must use one or more LLMs (ChatGPT, Claude, Gemini, Copilot, Grok, DeepSeek, among others) to assist in developing a Python solution capable of performing one of the tasks described below.\n\nTasks\n==============\nEach student must choose one of the options below.\n\n(a) Event schedule update\n-----------------------------------------------\nDevelop a Python script that fetches the schedule available at:\nhttps://eventos-alegrete.glide.page/dl/programacao\nand identifies events, activities, or information that are not yet registered in the events/programming section of the portal alegrete.org.\nThe result should present a report (or a simple TXT file) containing the items found and suggested updates for the portal.\n\n(b) Automated image search\n-----------------------------------------------\nDevelop a Python script capable of finding high-quality images related to Alegrete-RS for use in:\nHome page cards;\nThemed pages;\nNews;\nEvents;\nTourism;\nCulture;\nSports;\nEducation.\nThe result should include an organized gallery containing links, sources, and metadata for the images found.\n\n(c) Photographic gallery of Alegrete\n-----------------------------------------------\nDevelop a solution that automatically creates a photo gallery of the city of Alegrete-RS.\nThe gallery may be built from:\nPublic sources;\nInstitutional collections;\nFree image banks;\nSocial networks (respecting licenses and copyrights).\nThe result should include captions, location (when available) and links to the original sources.\n\n(d) Automatic promotional video generation\n-----------------------------------------------\nUsing Python and AI tools, develop a solution capable of processing the video currently used on the portal's home page and automatically generating a short promotional video of 10 to 30 seconds.\nThe video should highlight positive aspects of the city and the portal, and may include:\nTransitions;\nSoundtrack;\nCaptions;\nVisual effects;\nAI-generated narration.\n\n(e) Sports events catalog\n-----------------------------------------------\nDevelop a catalog of sports events held in Alegrete-RS.\nThe catalog should contain:\nEvent name;\nSport modality;\nDate;\nLocation;\nPhotos or images;\nLink to the official event page;\nAssociated social networks (Instagram, Facebook, etc.);\nHistory of previous editions (when available).\nThe result should be organized in a structured format (JSON, CSV, database or web page).\n\n(f) Free theme\n-----------------------------------------------\nPropose and develop any other solution that can contribute to the portal alegrete.org.\nThe proposal must be previously described and approved by the instructor.\n\nMandatory use of AI\n\nDevelopment must be carried out with the support of one or more LLMs.\n\nThe student must:\nDefine the problem;\nPrepare prompts;\nIterate over the AI responses;\nCorrect errors;\nTest the solution;\nRefine the code produced.\n\nSolutions produced in a single AI interaction without validation or human intervention will not be accepted.\n\nDeliverables\n-----------------------------------------------\n(i) Source code\nGitHub repository containing:\nPython code;\nDependencies;\nREADME.md;\nExecution instructions;\nUsage examples.\n\n(ii) Short document (TXT, PDF or Markdown) of up to 1 page containing:\nObjective of the solution;\nLLM(s) used;\nMain difficulties encountered;\nResults obtained;\nPossible future improvements.\n\nFinal Objective of the Task\n======================\nProduce catalogs, databases, images, videos, galleries, content and tools that can be effectively used to enrich the portal alegrete.org and make it an increasingly complete source of information about the city of Alegrete-RS.",
        pt: 'Objetivo\n=========\nO objetivo desta atividade é utilizar Inteligência Artificial e programação Python para criar artefatos úteis ao portal , contribuindo para a ampliação, atualização e enriquecimento do conteúdo disponível sobre a cidade de Alegrete-RS.\n\nCada aluno deverá utilizar uma ou mais LLMs (ChatGPT, Claude, Gemini, Copilot, Grok, DeepSeek, entre outras) para auxiliar no desenvolvimento de uma solução em Python capaz de realizar uma das tarefas descritas a seguir.\n\nTarefas\n==============\nCada aluno deverá escolher das opções abaixo.\n\n(a) Atualização da programação de eventos\n-----------------------------------------------\nDesenvolver um script Python que consulte a programação disponível em:\nhttps://eventos-alegrete.glide.page/dl/programacao\ne identifique eventos, atividades ou informações que ainda não estejam cadastrados na seção de eventos/programação do portal alegrete.org.\nO resultado deve apresentar um relatório (ou arquivo TXT simples) contendo os itens encontrados e possíveis atualizações sugeridas para o portal.\n\n(b) Busca automatizada de imagens\n-----------------------------------------------\nDesenvolver um script Python capaz de localizar imagens de alta qualidade relacionadas a Alegrete-RS para utilização em:\nCards da página inicial;\nPáginas temáticas;\nNotícias;\nEventos;\nTurismo;\nCultura;\nEsporte;\nEducação.\nO resultado deve incluir uma galeria organizada contendo links, fontes e metadados das imagens encontradas.\n\n(c) Galeria fotográfica de Alegrete\n-----------------------------------------------\nDesenvolver uma solução que crie automaticamente uma galeria de fotos da cidade de Alegrete-RS.\nA galeria pode ser construída a partir de:\nFontes públicas;\nAcervos institucionais;\nBancos de imagens livres;\nRedes sociais (respeitando licenças e direitos autorais).\nO resultado deve incluir legendas, localização (quando disponível) e links para as fontes originais.\n\n(d) Geração automática de vídeo promocional\n-----------------------------------------------\nUtilizando Python e ferramentas de IA, desenvolver uma solução capaz de processar o vídeo atualmente utilizado na página inicial do portal e gerar automaticamente um vídeo promocional curto, com duração entre 10 e 30 segundos.\nO vídeo deve destacar aspectos positivos da cidade e do portal, podendo incluir:\nTransições;\nTrilha sonora;\nLegendas;\nEfeitos visuais;\nNarração gerada por IA.\n(e) Catálogo de eventos esportivos\n-----------------------------------------------\nDesenvolver um catálogo de eventos esportivos realizados em Alegrete-RS.\nO catálogo deve conter:\nNome do evento;\nModalidade esportiva;\nData;\nLocal;\nFotos ou imagens;\nLink para a página oficial do evento;\nRedes sociais associadas (Instagram, Facebook, etc.);\nHistórico de edições anteriores (quando disponível).\nO resultado deve ser organizado em formato estruturado (JSON, CSV, banco de dados ou página web).\n\n(f) Tema livre\n-----------------------------------------------\nPropor e desenvolver qualquer outra solução que possa contribuir para o portal alegrete.org.\nA proposta deve ser previamente descrita e aprovada pelo professor.Uso obrigatório de IA\n\nO desenvolvimento deverá ser realizado com apoio de uma ou mais LLMs.\n\nO aluno deverá:\nDefinir o problema;\nElaborar prompts;\nIterar sobre as respostas da IA;\nCorrigir erros;\nTestar a solução;\nRefinar o código produzido.\nNão serão aceitas soluções geradas em uma única interação sem validação ou intervenção humana.Entregáveisa) Código-fonte\nRepositório GitHub contendo:\nCódigo Python;\nDependências;\nREADME.md;\nInstruções de execução;\nExemplos de uso.\nENTREGAR\n-----------------------------------------------\n(i) Documento curto (TXT, PDF ou Markdown), de no máximo 1 página, contendo:\nObjetivo da solução;\nLLM(s) utilizada(s);\nPrincipais dificuldades encontradas;\nResultados obtidos;\nPossíveis evoluções futuras.\n(ii) Código Python utilizado para desenvolver a tarefa.\n\nObjetivo Final da Tarefa\n======================\nProduzir catálogos, bases de dados, imagens, vídeos, galerias, conteúdos e ferramentas que possam ser efetivamente aproveitados para enriquecer o portal alegrete.org e torná-lo uma fonte cada vez mais completa de informações sobre a cidade de Alegrete-RS.',
      },
      slug: 'desenvolvimento-assistido-ia-portal-alegrete',
      title: {
        en: 'AI-Assisted Development for the Alegrete.org Portal',
        pt: 'Desenvolvimento Assistido por IA para o Portal Alegrete.org',
      },
      date: '2026-06-16',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk4MjE2NjI2NzM2/details/',
    },
  ])
}
