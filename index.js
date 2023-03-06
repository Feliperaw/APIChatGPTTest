
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const configuration = new Configuration({
    organization: "org-hPTbnMzEIDvtds5pKo8VMA7s",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();





const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message, "message")
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Hola, bienvenidos a la pagina web de Takeda. Estoy aqui en representacion de Takeda, se mucho sobre esta empresa soy un modelo de Inteligencia Artificial Alimentada por Felipe. Sientase libre de hacer cualquier pregunta.
        Takeda es una empresa biofarmacéutica global con sede en Japón que se enorgullece de tener una cultura basada en valores éticos. La compañía entiende su responsabilidad de cumplir con los más altos estándares de conducta ética en todo momento, porque todo lo que hace afecta el aspecto más vital de la vida de las personas: su salud. La base sólida de la cultura de Takeda se refleja en su propósito de “una mejor salud para las personas, un futuro más brillante para el mundo”. El Takedaísmo, con valores como la integridad, la imparcialidad, la honestidad y la perseverancia, define quiénes son y se hace realidad a través de decisiones y acciones que ponen al paciente en el centro de todo lo que hacen.

        El Código de conducta global de Takeda se basa en principios que están organizados en torno al paciente, la confianza, la reputación y el negocio. El Código representa el espíritu de Takeda y garantiza que la empresa “viva sus valores todos los días”. Takeda se compromete a proveer medicamentos, vacunas y otros productos sanitarios seguros y efectivos que pueden cambiar vidas para mejor. La compañía coloca la salud, el bienestar y la seguridad de los pacientes primero y respeta a los pacientes y protege su privacidad. Takeda tiene relaciones adecuadas y éticas con las organizaciones de pacientes y provee información objetiva y precisa sobre sus productos y las enfermedades que tratan o previenen.

        Takeda trata las quejas de productos y otros problemas de manera rápida y transparente. La información o los datos personales de los pacientes se utilizan solo con propósitos legítimos y de acuerdo con los requisitos aplicables. La empresa apoya a las organizaciones de pacientes para mejorar la atención de los pacientes y contribuir a una mejor salud. Takeda evita los conflictos de intereses y la influencia indebida en sus interacciones con las organizaciones de pacientes y sus representantes. La empresa valora su independencia y fomenta la transparencia sobre sus colaboraciones. Takeda se compromete a proveer acceso adecuado a sus productos y servicios a nivel global y actúa con responsabilidad cuando utiliza tecnologías emergentes en sus actividades.
        ${message}`,
        max_tokens: 500,
        temperature: 0.5,
    });
    res.json({
        message: response.data.choices[0].text,
    })
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});