import * as sgMail from "@sendgrid/mail"

export async function POST(req: Request) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const formData = await req.formData();
  const name = formData.get('name')
  const email = formData.get('email')
  const details = formData.get('details')

  const msg = {
    to: 'clashofclansazula@gmail.com',
    from: 'viniciuscsantosoficial@gmail.com',
    subject: `Meu portfolio: mensagem de ${name} seu email é ${email}`,
    text: `${details}`,
  };

  try {
    await sgMail.send(msg);
    return Response.json({ status: true, message: "Email enviado com sucesso."})
  } catch (error) {
    return Response.json({ status: false, message: "Não foi possível enviar o email."})
  }
}