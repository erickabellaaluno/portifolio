# Future

## What was I doing?

I was inserting the project's contents resolutions into the seed script (actually, the markdown files under [contents](/src/db/seed/contents/)).

## Where I stopped

I stopped at the activity "Resolver os 5 exercícios em papel": https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3MjMyNjQ5OTYz/details
It's already inserted into the markdowns

## What do I do now?

Now, you have to insert the remaining solutions. Here's a todo list:

- [x] [`exercicios-listas-vetores-arrays-python`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3MjM1NDcyNTQ0/details/)
- [x] [`formulacao-resolucao-problemas-vetores-listas-llms`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3NDczMzk3Mzgy/details/)
- [x] [`gerar-versoes-codigo`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODYzMDE2ODMyNDUy/details/)
- [x] [`problemas-outros-disciplinas`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODYzNjU2NzEyMTk1/details/)
- [x] [`escolher-entregar-problemas-engenharia`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODY0MTM1NzI0NTcx/details/)
- [x] [`entregar-outro-problema-engenharia`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3ODMwODA3ODA5/details)
- [x] [`escolher-resolver-problema-engenharia`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3ODY4MDAzNTI3/details/)
- [x] [`evolucao-tecnica-solucao-atividade-anterior`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODY1NzkxMDYxODM4/details/)
- [ ] [`modularizacao-codigo-avaliacao-llms`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk4MTQzMjAxNjY2/details/)
- [ ] [`desenvolvimento-assistido-ia-portal-alegrete`](https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk4MjE2NjI2NzM2/details/)

## Tips?

### PDF

The PDF's need to be inserted into /assets/projects/{{uuid}}.pdf.
Idk why I'm using uuid. Dumb younger me I guess.

Then, use copy and paste this iframe (replace the UUID with the pdf UUID):

```md

## Resolução

<iframe src="/assets/projects/UUID.pdf" width="100%" height="800"> </iframe>
```

### Python Execution

You need to use the folder `/mnt/hdd/Coding`. Save the file however you want and copy. The copied content will look like this:

```bash
Trabalho on  master [✘?] via  v3.14.6 
❯ python 15.py
Sinal bruto  ( 14 amostras ): [0.82, 0.79, 0.85, 5.2, 0.81, 0.78, 0.83, 0.41, 0.39, 0.43, 0.4, -4.8, 0.42, 0.38]
Ruídos removidos:  []
Sinal limpo ( 14 amostras ): [0.82, 0.79, 0.85, 5.2, 0.81, 0.78, 0.83, 0.41, 0.39, 0.43, 0.4, -4.8, 0.42, 0.38]
```

You need to remove the "[✘?] ", and change the python emoji to the word "Python". Like this:

```bash
Trabalho on  master via Python v3.14.6 
❯ python 15.py
Sinal bruto  ( 14 amostras ): [0.82, 0.79, 0.85, 5.2, 0.81, 0.78, 0.83, 0.41, 0.39, 0.43, 0.4, -4.8, 0.42, 0.38]
Ruídos removidos:  []
Sinal limpo ( 14 amostras ): [0.82, 0.79, 0.85, 5.2, 0.81, 0.78, 0.83, 0.41, 0.39, 0.43, 0.4, -4.8, 0.42, 0.38]
```

## More Future?

Add the future to insert PDF into the forms. The way I would it it was to put the PDF content into an `attachments` table, and serve them in a URL like /assets/{{uuid}}.pdf (Or in API, idk)
The table would have:

- UUID
- Content (Binary or idk)

Firstly, it would upload in the same route as add/update project.
The correct would be a new API endpoint to upload files. But I'm not sure about how I would integrate it into the react-hook-forms
And of course, the correct would use a bucket system. I think Vercel has one? But I'm not sure if it's paid, and it would be probably a pain to integrate. I never worked with those systems. Remeber that I have to finish the portfolio until [[TERÇA FEIRA]].
