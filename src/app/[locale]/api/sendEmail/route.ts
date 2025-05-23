import { getTranslations } from "next-intl/server";
import Mailjet  from "node-mailjet"

export async function POST(req: Request) {
  const t = await getTranslations("api");
  const formData = await req.formData();
  const name = formData.get('name')
  const email = formData.get('email')
  const details = formData.get('details')

  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE
  })
  
  const request = await mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'clashofclansazula@gmail.com',
          Name: 'Vinicius C. Santos',
        },
        To: [
          {
            Email: 'viniciuscsantosoficial@gmail.com',
            Name: 'Vinicius C. Santos',
          },
        ],
        Subject: `Meu Portfolio: mensagem de ${name} seu email é ${email}`,
        TextPart: details,
      },
    ],
  })

  if(request.response.status === 200) {
    return Response.json({ status: true, message: t('emailSuccess')})
  }

  return Response.json({ status: false, message: t('emailError')})
}