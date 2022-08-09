import { devServer } from '../helpers/endpoint';
import { StatusCodes } from 'http-status-codes';

describe('Test hello lambda function with serverless-offline', () => {
  it('should trigger hello function', async () => {
    const { status } = await devServer.get('/');
    expect(status).toBe(StatusCodes.OK);
  });
});
