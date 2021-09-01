# COOBO_SPENDFY

## Objetivo
    -Esse projeto foi desenvolvido para o desafio de seleção da COOBO.
    
## Considerações Gerais
	
	1. Foi utilizado no projeto o MongoDb.
	2. As validaações forem feitas com o Yup.
	3.Foi utilizado o Mongoose.
	2. Todas as dependencias e extensões já estão instaladas no projeto.
	3. Para rodar o servidor, basta rodar o comando "npm run dev".

### Rotas '/documents'

Todos os documentos seguem o seguinte schema:
```
_id: Unico e gerado automaticamente.
name: Tipo String e obrigatório na criação do documento.
content: Qualquer conteudo a ser convertido em base64.Item obrigatório.
kbSize: Representa o tamanho em Kilobytes do arquivo. Gerado Automaticamente.
createdAt: data de ciração. Gerado Automaticamente.
deletedAt: Data da simulação da deleção, assim que o endpoint for chamado.
```

* **GET** `/documents/`

Retorna um array dos documentos.


* **GET** `/documents/id`

Retorna apenas um documento identificado pelo ID.


* **DELETE** `/documents/id`

Retorna apenas um documento identificado pelo ID após a simulação da deleção.


* **POST**

```json
{
    "name" : "string",
    "content" : "string"
}
```

Retorna um documento individual uma vez que foi codificado e salvo no MongoDb.


### Route 'GET /weekday-after'

* **GET** `/weekday-after?startDay={startDay}&amountOfDays={amountOfDays}`

 **{startDay}** é o nome do dia da semana em portugês, **{amountOfDays}** um numero inteiro e positivo que informa a quantidade de dias passados, retornando o dia da semana correspondente.