import { devServer } from '../helpers/endpoint';
import { StatusCodes } from 'http-status-codes';

describe('Test hello lambda function with serverless-offline', () => {
  it('should trigger hello function', async () => {
    const { status } = await devServer.get('/');
    expect(status).toBe(StatusCodes.OK);
  });

  it('test endpoint should be available', async () => {
    const { status, data } = await devServer.get('/test');
    expect(status).toBe(StatusCodes.OK);
    expect(data.message).toBe('The endpoint is up and running!');
  });
});
