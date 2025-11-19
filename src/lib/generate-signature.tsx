export function generateSignature({
  name,
  position,
  username,
  phone,
}: {
  name: string;
  position?: string;
  username: string;
  phone: string;
}) {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  style="
    font-family:
      ui-sans-serif, system-ui, sans-serif, &quot;Apple Color Emoji&quot;,
      &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;,
      &quot;Noto Color Emoji&quot;;
  "
  dir="ltr"
  lang="en"
>
  <head></head
  ><!--$--><!--html-->
  <table
    align="center"
    width="100%"
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    style="max-width: 37.5em; padding: 0px; margin: 0px; text-align: left"
  >
    <tbody>
      <tr style="width: 100%">
        <td>
          <p
            style="
              font-size: 14px;
              line-height: 1.7;
              font-weight: 500;
              color: #18181b;
              margin-bottom: 0px;
              margin-top: 0px;
            "
          >
            ${name}
          </p>
          ${
            position &&
            `<p
            style="
              font-size: 12px;
              line-height: 1.7;
              font-weight: 400;
              color: #71717a;
              margin-bottom: 0px;
              margin-top: 0px;
            "
          >
            ${position}
          </p>`
          }
          <hr
            style="
              width: 100%;
              border: none;
              border-top: 1px solid #eaeaea;
              border-color: #e4e4e7;
              margin-bottom: 12px;
              margin-top: 12px;
              max-width: 100%;
            "
          />
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="margin-bottom: 4px; margin-top: 0px"
          >
            <tbody style="width: 100%">
              <tr style="width: 100%">
                <td data-id="__react-email-column" style="width: 96px">
                  <p
                    style="
                      font-size: 12px;
                      line-height: 1.7;
                      font-weight: 400;
                      color: #71717a;
                      margin-top: 0px;
                      margin-bottom: 0px;
                    "
                  >
                    Email
                  </p>
                </td>
                <td data-id="__react-email-column">
                  <a
                    href="mailto:${username}@move-ev.de"
                    style="
                      line-height: 1.7;
                      text-decoration: none;
                      display: inline-block;
                      max-width: 100%;
                      mso-padding-alt: 0px;
                      font-size: 12px;
                      font-weight: 400;
                      color: #008df2;
                      margin-bottom: 0px;
                      margin-top: 0px;
                    "
                    target="_blank"
                    ><span
                      ><!--[if mso
                        ]><i
                          style="mso-font-width: 0%; mso-text-raise: 0"
                          hidden
                        ></i><![endif]--></span
                    ><span
                      style="
                        max-width: 100%;
                        display: inline-block;
                        line-height: 120%;
                        mso-padding-alt: 0px;
                      "
                      >${username}@move-ev.de</span
                    ><span
                      ><!--[if mso
                        ]><i style="mso-font-width: 0%" hidden>&#8203;</i><!
                      [endif]--></span
                    ></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="margin-bottom: 4px; margin-top: 0px"
          >
            <tbody style="width: 100%">
              <tr style="width: 100%">
                <td data-id="__react-email-column" style="width: 96px">
                  <p
                    style="
                      font-size: 12px;
                      line-height: 1.7;
                      font-weight: 400;
                      color: #71717a;
                      margin-top: 0px;
                      margin-bottom: 0px;
                    "
                  >
                    Telefon
                  </p>
                </td>
                <td data-id="__react-email-column">
                  <a
                    href="tel:${phone}"
                    style="
                      line-height: 1.7;
                      text-decoration: none;
                      display: inline-block;
                      max-width: 100%;
                      mso-padding-alt: 0px;
                      font-size: 12px;
                      font-weight: 400;
                      color: #008df2;
                      margin-bottom: 0px;
                      margin-top: 0px;
                    "
                    target="_blank"
                    ><span
                      ><!--[if mso
                        ]><i
                          style="mso-font-width: 0%; mso-text-raise: 0"
                          hidden
                        ></i><![endif]--></span
                    ><span
                      style="
                        max-width: 100%;
                        display: inline-block;
                        line-height: 120%;
                        mso-padding-alt: 0px;
                      "
                      >${phone}</span
                    ><span
                      ><!--[if mso
                        ]><i style="mso-font-width: 0%" hidden>&#8203;</i><!
                      [endif]--></span
                    ></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="margin-bottom: 0px; margin-top: 0px"
          >
            <tbody style="width: 100%">
              <tr style="width: 100%">
                <td data-id="__react-email-column" style="width: 96px">
                  <p
                    style="
                      font-size: 12px;
                      line-height: 1.7;
                      font-weight: 400;
                      color: #71717a;
                      margin-top: 0px;
                      margin-bottom: 0px;
                    "
                  >
                    Web
                  </p>
                </td>
                <td data-id="__react-email-column">
                  <a
                    href="https://move-ev.de"
                    style="
                      line-height: 1.7;
                      text-decoration: none;
                      display: inline-block;
                      max-width: 100%;
                      mso-padding-alt: 0px;
                      font-size: 12px;
                      font-weight: 400;
                      color: #008df2;
                      margin-bottom: 0px;
                      margin-top: 0px;
                    "
                    target="_blank"
                    ><span
                      ><!--[if mso
                        ]><i
                          style="mso-font-width: 0%; mso-text-raise: 0"
                          hidden
                        ></i><![endif]--></span
                    ><span
                      style="
                        max-width: 100%;
                        display: inline-block;
                        line-height: 120%;
                        mso-padding-alt: 0px;
                      "
                      >https://move-ev.de</span
                    ><span
                      ><!--[if mso
                        ]><i style="mso-font-width: 0%" hidden>&#8203;</i><!
                      [endif]--></span
                    ></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <hr
            style="
              width: 100%;
              border: none;
              border-top: 1px solid #eaeaea;
              border-color: #e4e4e7;
              margin-bottom: 12px;
              margin-top: 12px;
              max-width: 100%;
            "
          />
          <p
            style="
              font-size: 12px;
              line-height: 1.5;
              font-weight: 400;
              color: #71717a;
              margin-bottom: 0px;
              margin-top: 0px;
            "
          >
            Vertretungsberechtiger Vorstand:<!-- -->
            <a
              href="mailto:jan.henke@move-ev.de"
              style="
                line-height: 100%;
                text-decoration: underline;
                display: inline-block;
                max-width: 100%;
                mso-padding-alt: 0px;
                color: #008df2;
              "
              target="_blank"
              ><span
                ><!--[if mso
                  ]><i
                    style="mso-font-width: 0%; mso-text-raise: 0"
                    hidden
                  ></i><![endif]--></span
              ><span
                style="
                  max-width: 100%;
                  display: inline-block;
                  line-height: 120%;
                  mso-padding-alt: 0px;
                "
                >Jan Henke</span
              ><span
                ><!--[if mso
                  ]><i style="mso-font-width: 0%" hidden>&#8203;</i><!
                [endif]--></span
              ></a
            >,<br /><a
              href="mailto:antonia.pfeifer@move-ev.de"
              style="
                line-height: 100%;
                text-decoration: underline;
                display: inline-block;
                max-width: 100%;
                mso-padding-alt: 0px;
                color: #008df2;
              "
              target="_blank"
              ><span
                ><!--[if mso
                  ]><i
                    style="mso-font-width: 0%; mso-text-raise: 0"
                    hidden
                  ></i><![endif]--></span
              ><span
                style="
                  max-width: 100%;
                  display: inline-block;
                  line-height: 120%;
                  mso-padding-alt: 0px;
                "
                >Antonia Pfeifer</span
              ><span
                ><!--[if mso
                  ]><i style="mso-font-width: 0%" hidden>&#8203;</i><!
                [endif]--></span
              ></a
            >,<!-- -->
            <a
              href="mailto:claudius.ruppel@move-ev.de"
              style="
                line-height: 100%;
                text-decoration: underline;
                display: inline-block;
                max-width: 100%;
                mso-padding-alt: 0px;
                color: #008df2;
              "
              target="_blank"
              ><span
                ><!--[if mso
                  ]><i
                    style="mso-font-width: 0%; mso-text-raise: 0"
                    hidden
                  ></i><![endif]--></span
              ><span
                style="
                  max-width: 100%;
                  display: inline-block;
                  line-height: 120%;
                  mso-padding-alt: 0px;
                "
                >Claudius Ruppel</span
              ><span
                ><!--[if mso
                  ]><i style="mso-font-width: 0%" hidden>&#8203;</i><!
                [endif]--></span
              ></a
            >,<!-- -->
            <a
              href="mailto:lennard.lohmann@move-ev.de"
              style="
                line-height: 100%;
                text-decoration: underline;
                display: inline-block;
                max-width: 100%;
                mso-padding-alt: 0px;
                color: #008df2;
              "
              target="_blank"
              ><span
                ><!--[if mso
                  ]><i
                    style="mso-font-width: 0%; mso-text-raise: 0"
                    hidden
                  ></i><![endif]--></span
              ><span
                style="
                  max-width: 100%;
                  display: inline-block;
                  line-height: 120%;
                  mso-padding-alt: 0px;
                "
                >Lennard Lohmann</span
              ><span
                ><!--[if mso
                  ]><i style="mso-font-width: 0%" hidden>&#8203;</i><!
                [endif]--></span
              ></a
            >
          </p>
          <p
            style="
              font-size: 12px;
              line-height: 24px;
              font-weight: 400;
              color: #71717a;
              margin-bottom: 0px;
              margin-top: 6px;
            "
          >
            Registergericht: Amtsgericht Münster
          </p>
          <p
            style="
              font-size: 12px;
              line-height: 24px;
              font-weight: 400;
              color: #71717a;
              margin-bottom: 0px;
              margin-top: 6px;
            "
          >
            Registernummer: VR 3742
          </p>
          <hr
            style="
              width: 100%;
              border: none;
              border-top: 1px solid #eaeaea;
              border-color: #e4e4e7;
              margin-bottom: 12px;
              margin-top: 12px;
              max-width: 100%;
            "
          />
          <p
            style="
              font-size: 12px;
              line-height: 1.7;
              font-weight: 400;
              color: #71717a;
              margin-bottom: 0px;
              margin-top: 6px;
            "
          >
            Mitglied im Bundesverband Deutscher Studentischer
            Unternehmensberatungen e. V. (<a
              href="https://www.bdsu.de"
              style="
                line-height: 100%;
                text-decoration: underline;
                display: inline-block;
                max-width: 100%;
                mso-padding-alt: 0px;
                color: #008df2;
              "
              target="_blank"
              ><span
                ><!--[if mso
                  ]><i
                    style="mso-font-width: 0%; mso-text-raise: 0"
                    hidden
                  ></i><![endif]--></span
              ><span
                style="
                  max-width: 100%;
                  display: inline-block;
                  line-height: 120%;
                  mso-padding-alt: 0px;
                "
                >www.bdsu.de</span
              ><span
                ><!--[if mso
                  ]><i style="mso-font-width: 0%" hidden>&#8203;</i><!
                [endif]--></span
              ></a
            >) Mitglied im ConsultingNet NRW
          </p>
          <hr
            style="
              width: 100%;
              border: none;
              border-top: 1px solid #eaeaea;
              border-color: #e4e4e7;
              margin-bottom: 12px;
              margin-top: 12px;
              max-width: 100%;
            "
          />
          <p
            style="
              font-size: 10px;
              line-height: 1.5;
              font-weight: 400;
              color: #a1a1aa;
              margin-bottom: 0px;
              margin-top: 0px;
            "
          >
            Unter Berücksichtigung der EU-DSGVO informieren wir Sie darüber,
            dass wir die von Ihnen angegebenen persönlichen Daten zum Zwecke der
            Bearbeitung und Beantwortung Ihrer Nachricht speichern. Detaillierte
            Informationen zu den Datenschutzhinweisen finden Sie auch direkt auf
            unserer Internetseite unter https://move-ev.de/datenschutz/ Hinweis:
            Diese E-Mail enthält vertrauliche und/oder rechtlich geschützte
            Informationen. Wenn Sie nicht der/die richtige Adressat*in sind oder
            diese E-Mail irrtümlich erhalten haben, informieren Sie bitte sofort
            den/die Absender*in und vernichten Sie diese E-Mail. Das unerlaubte
            Kopieren sowie die unbefugte Weitergabe dieser E-Mail sind nicht
            gestattet.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <!--/$-->
</html>
  `;
}
