interface InvitationEmailProps {
  email: string;
  role: string;
  inviteUrl: string;
  expiresAt: Date;
}

export function invitationEmailHtml({
  email,
  role,
  inviteUrl,
  expiresAt,
}: InvitationEmailProps): string {
  const expiresFormatted = expiresAt.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const roleLabel =
    role === "PARTENAIRE" ? "Partenaire" : role === "ADMIN" ? "Administrateur" : "Membre";

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Invitation — Nous Sommes la Solution</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f0;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <div style="width:56px;height:56px;border-radius:50%;background:#2d6a4f;display:inline-flex;align-items:center;justify-content:center;">
                <span style="color:#ffffff;font-weight:bold;font-size:16px;">NSS</span>
              </div>
              <p style="margin:8px 0 0;color:#2d6a4f;font-weight:bold;font-size:15px;">
                Nous Sommes la Solution
              </p>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#ffffff;border-radius:16px;padding:40px 36px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
              <h1 style="margin:0 0 8px;font-size:22px;color:#1a1a1a;font-weight:bold;">
                Vous êtes invité(e) à rejoindre NSS
              </h1>
              <p style="margin:0 0 24px;font-size:14px;color:#6b7280;line-height:1.6;">
                Bonjour,<br /><br />
                L'équipe <strong>Nous Sommes la Solution</strong> vous invite à rejoindre l'espace membre
                en tant que <strong>${roleLabel}</strong>.<br /><br />
                Votre adresse email : <strong>${email}</strong>
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
                <tr>
                  <td align="center" style="background:#2d6a4f;border-radius:12px;">
                    <a href="${inviteUrl}"
                      style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:15px;font-weight:bold;text-decoration:none;">
                      Activer mon compte →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;font-size:12px;color:#9ca3af;text-align:center;">
                Ce lien expire le <strong>${expiresFormatted}</strong> et ne peut être utilisé qu'une seule fois.
              </p>
              <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">
                Si vous ne pouvez pas cliquer sur le bouton, copiez ce lien dans votre navigateur :<br />
                <span style="color:#2d6a4f;word-break:break-all;">${inviteUrl}</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:24px;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                © ${new Date().getFullYear()} Nous Sommes la Solution — wasafrica.org<br />
                Par nous-mêmes. Pour nous-mêmes. En nous-mêmes.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
