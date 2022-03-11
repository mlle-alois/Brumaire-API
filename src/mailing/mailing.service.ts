import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MailingService {


  constructor(private httpService: HttpService) {
  }

  async sendReceivedOrderMail(email: string, userFirstName: string, redirectionUrl: string): Promise<HttpStatus> {

    const  inject = "    <a href=\"" +
      redirectionUrl +
      "\" " +
      "target=\"_blank\" style=\"box-sizing: border-box;display:" +
      " inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF;" +
      " background-color: #cec4c4; border-radius: 23px;-webkit-border-radius: 23px; -moz-border-radius: 23px; width:auto; max-width:100%; " +
      "overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;\">\n";

    const mailBody = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional //EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
      "<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n" +
      "<head>\n" +
      "<!--[if gte mso 9]>\n" +
      "<xml>\n" +
      "  <o:OfficeDocumentSettings>\n" +
      "    <o:AllowPNG/>\n" +
      "    <o:PixelsPerInch>96</o:PixelsPerInch>\n" +
      "  </o:OfficeDocumentSettings>\n" +
      "</xml>\n" +
      "<![endif]-->\n" +
      "  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n" +
      "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
      "  <meta name=\"x-apple-disable-message-reformatting\">\n" +
      "  <!--[if !mso]><!--><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><!--<![endif]-->\n" +
      "  <title></title>\n" +
      "  \n" +
      "    <style type=\"text/css\">\n" +
      "      table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }\n" +
      "@media only screen and (min-width: 520px) {\n" +
      "  .u-row {\n" +
      "    width: 500px !important;\n" +
      "  }\n" +
      "  .u-row .u-col {\n" +
      "    vertical-align: top;\n" +
      "  }\n" +
      "\n" +
      "  .u-row .u-col-100 {\n" +
      "    width: 500px !important;\n" +
      "  }\n" +
      "\n" +
      "}\n" +
      "\n" +
      "@media (max-width: 520px) {\n" +
      "  .u-row-container {\n" +
      "    max-width: 100% !important;\n" +
      "    padding-left: 0px !important;\n" +
      "    padding-right: 0px !important;\n" +
      "  }\n" +
      "  .u-row .u-col {\n" +
      "    min-width: 320px !important;\n" +
      "    max-width: 100% !important;\n" +
      "    display: block !important;\n" +
      "  }\n" +
      "  .u-row {\n" +
      "    width: calc(100% - 40px) !important;\n" +
      "  }\n" +
      "  .u-col {\n" +
      "    width: 100% !important;\n" +
      "  }\n" +
      "  .u-col > div {\n" +
      "    margin: 0 auto;\n" +
      "  }\n" +
      "}\n" +
      "body {\n" +
      "  margin: 0;\n" +
      "  padding: 0;\n" +
      "}\n" +
      "\n" +
      "table,\n" +
      "tr,\n" +
      "td {\n" +
      "  vertical-align: top;\n" +
      "  border-collapse: collapse;\n" +
      "}\n" +
      "\n" +
      ".ie-container table,\n" +
      ".mso-container table {\n" +
      "  table-layout: fixed;\n" +
      "}\n" +
      "\n" +
      "* {\n" +
      "  line-height: inherit;\n" +
      "}\n" +
      "\n" +
      "a[x-apple-data-detectors='true'] {\n" +
      "  color: inherit !important;\n" +
      "  text-decoration: none !important;\n" +
      "}\n" +
      "\n" +
      "</style>\n" +
      "  \n" +
      "  \n" +
      "\n" +
      "</head>\n" +
      "\n" +
      "<body class=\"clean-body u_body\" style=\"margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000\">\n" +
      "  <!--[if IE]><div class=\"ie-container\"><![endif]-->\n" +
      "  <!--[if mso]><div class=\"mso-container\"><![endif]-->\n" +
      "  <table style=\"border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%\" cellpadding=\"0\" cellspacing=\"0\">\n" +
      "  <tbody>\n" +
      "  <tr style=\"vertical-align: top\">\n" +
      "    <td style=\"word-break: break-word;border-collapse: collapse !important;vertical-align: top\">\n" +
      "    <!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td align=\"center\" style=\"background-color: #e7e7e7;\"><![endif]-->\n" +
      "    \n" +
      "\n" +
      "<div class=\"u-row-container\" style=\"padding: 0px;background-color: transparent\">\n" +
      "  <div class=\"u-row\" style=\"Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;\">\n" +
      "    <div style=\"border-collapse: collapse;display: table;width: 100%;background-color: transparent;\">\n" +
      "      <!--[if (mso)|(IE)]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding: 0px;background-color: transparent;\" align=\"center\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:500px;\"><tr style=\"background-color: transparent;\"><![endif]-->\n" +
      "      \n" +
      "<!--[if (mso)|(IE)]><td align=\"center\" width=\"500\" style=\"width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;\" valign=\"top\"><![endif]-->\n" +
      "<div class=\"u-col u-col-100\" style=\"max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;\">\n" +
      "  <div style=\"width: 100% !important;\">\n" +
      "  <!--[if (!mso)&(!IE)]><!--><div style=\"padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;\"><!--<![endif]-->\n" +
      "  \n" +
      "<table style=\"font-family:arial,helvetica,sans-serif;\" role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" border=\"0\">\n" +
      "  <tbody>\n" +
      "    <tr>\n" +
      "      <td style=\"overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;\" align=\"left\">\n" +
      "        \n" +
      "<table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
      "  <tr>\n" +
      "    <td style=\"padding-right: 0px;padding-left: 0px;\" align=\"center\">\n" +
      "      \n" +
      "      <img align=\"center\" border=\"0\" src=\"https://i.ibb.co/8gmnbDC/Frame-2-2.png\" alt=\"\" title=\"\" style=\"outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 480px;\" width=\"480\"/>\n" +
      "      \n" +
      "    </td>\n" +
      "  </tr>\n" +
      "</table>\n" +
      "\n" +
      "      </td>\n" +
      "    </tr>\n" +
      "  </tbody>\n" +
      "</table>\n" +
      "\n" +
      "<table style=\"font-family:arial,helvetica,sans-serif;\" role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" border=\"0\">\n" +
      "  <tbody>\n" +
      "    <tr>\n" +
      "      <td style=\"overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;\" align=\"left\">\n" +
      "        \n" +
      "<div align=\"center\">\n" +
      "  <!--[if mso]><table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;\"><tr><td style=\"font-family:arial,helvetica,sans-serif;\" align=\"center\"><v:roundrect xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" href=\"https://www.google.com\" style=\"height:34px; v-text-anchor:middle; width:130px;\" arcsize=\"67.5%\" stroke=\"f\" fillcolor=\"#af57d3\"><w:anchorlock/><center style=\"color:#FFFFFF;font-family:arial,helvetica,sans-serif;\"><![endif]-->\n" +
      `${inject}`+
      "      <span style=\"display:block;padding:10px;line-height:100%;\">Donnez votre avis</span>\n" +
      "    </a>\n" +
      "  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->\n" +
      "</div>\n" +
      "\n" +
      "      </td>\n" +
      "    </tr>\n" +
      "  </tbody>\n" +
      "</table>\n" +
      "\n" +
      "  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->\n" +
      "  </div>\n" +
      "</div>\n" +
      "<!--[if (mso)|(IE)]></td><![endif]-->\n" +
      "      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->\n" +
      "    </div>\n" +
      "  </div>\n" +
      "</div>\n" +
      "\n" +
      "\n" +
      "    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n" +
      "    </td>\n" +
      "  </tr>\n" +
      "  </tbody>\n" +
      "  </table>\n" +
      "  <!--[if mso]></div><![endif]-->\n" +
      "  <!--[if IE]></div><![endif]-->\n" +
      "</body>\n" +
      "\n" +
      "</html>\n"


    const jsonData = {
      email: email,
      user: userFirstName,
      body: mailBody,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = this.httpService.post(process.env.LOGIC_APP_URL, jsonData, config);
      console.log(await response.toPromise().then((res) => {
        res.status;
      }));
      return HttpStatus.OK;
    } catch (error) {
      console.log(error);
      return  HttpStatus.INTERNAL_SERVER_ERROR;
    }

  }
}
