import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MailingService {


  constructor(private httpService: HttpService) {
  }

  async sendReceivedOrderMail(email: string, userFirstName: string, deeplink: string): Promise<HttpStatus> {
    const jsonData = {
      email: email,
      user: userFirstName,
      deeplink: deeplink,
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
