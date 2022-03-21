import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RequestContract } from '@ioc:Adonis/Core/Request'
import { getSchedule, setSchedule } from 'App/Services/Schedule'

enum STATUS_CODE {
  EMPTY = 'EMPTY',
  HOLIDAY = 'HOLIDAY',
  SUCCESS = 'SUCCESS',
}

export default class SchedulesController {
  private extractQueryParams(request: RequestContract) {
    const queryParams = request.qs()

    return {
      even: queryParams.even,
      weekday: +queryParams.weekday,
      userID: queryParams.userID,
    }
  }

  public async index({ request }: HttpContextContract) {
    const params = this.extractQueryParams(request)

    const response = await getSchedule(params)

    return response === 'empty'
      ? { status: STATUS_CODE.EMPTY }
      : response === 'holiday'
      ? { status: STATUS_CODE.HOLIDAY }
      : response
  }

  public async post({ request }: HttpContextContract) {
    const schedule = request.body()
    const params = this.extractQueryParams(request)

    await setSchedule(schedule, params)

    return { status: STATUS_CODE.SUCCESS }
  }
}
