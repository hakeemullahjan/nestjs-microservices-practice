import { Injectable } from '@nestjs/common';
import * as countdown from 'countdown';
import axios from 'axios';

@Injectable()
export class RocketService {
  getNextLaunchRemainingTime(): Promise<any> {
    return axios
      .get('https://api.spacexdata.com/v4/launches/next')
      .then((response) => response.data)
      .then((launch) =>
        countdown(new Date(), new Date(launch.date_utc)).toString(),
      );
  }
}
